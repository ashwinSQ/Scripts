#!/bin/bash

INPUT_DIR="./csvs"
OUTPUT_DIR="./fixed_csvs"
MAX_COLS=17

mkdir -p "$OUTPUT_DIR"

echo "🔍 Processing CSV files in $INPUT_DIR ..."

for file in "$INPUT_DIR"/*.csv; do
  [ -e "$file" ] || continue
  filename=$(basename "$file")
  output="$OUTPUT_DIR/$filename"

  echo -e "\n📄 Processing $filename ..."
  lineno=0
  change_count=0
  > "$output"

  while IFS= read -r line || [ -n "$line" ]; do
    ((lineno++))

    # Split line into array
    IFS=',' read -r -a cols <<< "$line"
    col_count=${#cols[@]}
    last_col="${cols[$((MAX_COLS-1))]}"

    fixed_line="$line"

    # CASE 1: Too many commas → likely merged lines
    if (( col_count > MAX_COLS )); then
      ((change_count++))
      echo "⚠️  $filename → line $lineno: $col_count columns found (split)"
      first_part=$(IFS=','; echo "${cols[*]:0:MAX_COLS}")
      rest_part=$(IFS=','; echo "${cols[*]:MAX_COLS}")
      echo "$first_part" >> "$output"
      echo "$rest_part" >> "$output"
      continue
    fi

    # CASE 2: Has 17 columns but last column has pattern like 00:00:00Name or 00:00:00name
    if [[ "$last_col" =~ (00:[0-5][0-9]:[0-5][0-9])[A-Za-z] ]]; then
      ((change_count++))
      echo "⚠️  $filename → line $lineno: merged row detected (timestamp+name)"
      fixed_line=$(echo "$line" | sed -E 's/(00:[0-5][0-9]:[0-5][0-9])([A-Za-z])/\1\n\2/')
    fi

    echo "$fixed_line" >> "$output"
  done < "$file"

  if (( change_count > 0 )); then
    echo "✅ Fixed $change_count lines → saved to $output"
  else
    echo "✔️ No changes needed in $filename"
  fi
done

echo -e "\n🎯 All CSVs processed!"
