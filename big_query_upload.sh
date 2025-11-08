#!/usr/bin/env bash
set -exuo pipefail

# ---- Config ----
PROJECT_ID="deductive-jet-477108-q9"
DATASET="sealenrollment"
TABLE="courseenroll"
LOCAL_DIR="csvs"

# If you *know* the location for first-time creation, set it here.
# Valid examples: US, EU, us-central1, asia-south1, asia-south2, etc.
DEFAULT_LOCATION="asia-east2"

# CSV parsing
DELIM=","
QUOTE='"'
SKIP_LEADING_ROWS=1
MAX_BAD_RECORDS=100
SCHEMA_MODE="./schema.json"   # or "AUTODETECT"

# ---- Non-interactive mode everywhere ----
export CLOUDSDK_CORE_DISABLE_PROMPTS=1
BQ="bq --quiet"
GCLOUD="gcloud --quiet"

# ---- Auth (service account if provided; else rely on existing gcloud login) ----
if [[ -n "${GOOGLE_APPLICATION_CREDENTIALS:-}" && -f "${GOOGLE_APPLICATION_CREDENTIALS}" ]]; then
  ${GCLOUD} auth activate-service-account --key-file="${GOOGLE_APPLICATION_CREDENTIALS}" >/dev/null
fi
${GCLOUD} config set project "${PROJECT_ID}" >/dev/null || true

# ---- Pre-flight ----
BQ_CMD="$(command -v bq)" || { echo "bq not found — install Google Cloud SDK"; exit 1; }
if [[ ! -d "${LOCAL_DIR}" ]]; then
  echo "Local directory '${LOCAL_DIR}' not found"; exit 1
fi

shopt -s nullglob
# Sort CSV files numerically (handles part-1, part-2, ..., part-10 correctly)
mapfile -t CSV_FILES < <(printf '%s\n' "${LOCAL_DIR}"/*.csv | sort -V)
if (( ${#CSV_FILES[@]} == 0 )); then
  echo "No CSV files in '${LOCAL_DIR}'"; exit 1
fi

gcloud config set project "${PROJECT_ID}" >/dev/null 2>&1 || true

DEST="${PROJECT_ID}:${DATASET}.${TABLE}"

# ---- Detect dataset existence & location (no --location to avoid false negatives) ----
DATASET_EXISTS=0
DATASET_LOCATION=""
if "${BQ_CMD}" --format=prettyjson show -d "${PROJECT_ID}:${DATASET}" >/dev/null 2>&1; then
  DATASET_EXISTS=1
  # Extract location without needing jq
  DATASET_LOCATION="$("${BQ_CMD}" --format=prettyjson show -d "${PROJECT_ID}:${DATASET}" \
    | grep -oP '"location"\s*:\s*"\K[^"]+' | head -n1 || true)"
fi

if (( DATASET_EXISTS == 1 )); then
  echo "Dataset ${PROJECT_ID}:${DATASET} already exists (location=${DATASET_LOCATION:-unknown}). Skipping creation."
else
  # Create with DEFAULT_LOCATION if missing
  echo "Creating dataset ${PROJECT_ID}:${DATASET} in ${DEFAULT_LOCATION} ..."
  "${BQ_CMD}" --location="${DEFAULT_LOCATION}" mk -d "${PROJECT_ID}:${DATASET}"
  DATASET_LOCATION="${DEFAULT_LOCATION}"
fi

# Safety: ensure we have a location value for subsequent load jobs
if [[ -z "${DATASET_LOCATION}" ]]; then
  echo "Could not detect dataset location. Falling back to ${DEFAULT_LOCATION}."
  DATASET_LOCATION="${DEFAULT_LOCATION}"
fi

# ---- Build load flags ----
LOAD_FLAGS=(
  --source_format=CSV
  --field_delimiter="${DELIM}"
  --quote="${QUOTE}"
  --skip_leading_rows="${SKIP_LEADING_ROWS}"
  --allow_quoted_newlines
  --ignore_unknown_values
  --max_bad_records="${MAX_BAD_RECORDS}"
)

if [[ "${SCHEMA_MODE}" == "AUTODETECT" ]]; then
  LOAD_FLAGS+=( --autodetect )
else
  if [[ ! -f "${SCHEMA_MODE}" ]]; then
    echo "Schema file '${SCHEMA_MODE}' not found"; exit 1
  fi
  LOAD_FLAGS+=( --schema="${SCHEMA_MODE}" )
fi

# ---- Replace table cleanly (delete if exists to avoid schema/location surprises) ----
if "${BQ_CMD}" --location="${DATASET_LOCATION}" ls "${PROJECT_ID}:${DATASET}" | grep -q "^${TABLE}\b"; then
  echo "Table ${DEST} exists — deleting before reload..."
  "${BQ_CMD}" --location="${DATASET_LOCATION}" rm -f -t "${DEST}" >/dev/null 2>&1 || true
fi

# ---- Load all CSVs from local disk ----
FIRST_DONE=0
for FILE in "${CSV_FILES[@]}"; do
  if (( FIRST_DONE == 0 )); then
    echo "Loading (REPLACE) ${FILE} → ${DEST}"
    "${BQ_CMD}" --location="${DATASET_LOCATION}" load --replace "${LOAD_FLAGS[@]}" "${DEST}" "${FILE}"
    FIRST_DONE=1
  else
    echo "Appending ${FILE} → ${DEST}"
    "${BQ_CMD}" --location="${DATASET_LOCATION}" load --noreplace "${LOAD_FLAGS[@]}" "${DEST}" "${FILE}"
  fi
done

echo "Done. Loaded ${#CSV_FILES[@]} CSV files into ${DEST} (table replaced)."
