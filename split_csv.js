const fs = require("fs");
const path = require("path");
const readline = require("readline");

const INPUT_FILE = path.join(__dirname, "enrollment_report.csv");
const OUTPUT_DIR = path.join(__dirname, "output_parts_1");
const ROWS_PER_FILE = 100000; // 1 lakh rows

async function splitCSV() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  const fileStream = fs.createReadStream(INPUT_FILE);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let header = null;
  let fileIndex = 1;
  let rowCount = 0;
  let output = null;

  for await (const line of rl) {
    // Capture header from the first line
    if (!header) {
      header = line;
      continue;
    }

    // Create a new file if needed
    if (rowCount === 0) {
      const outPath = path.join(OUTPUT_DIR, `part_${fileIndex}.csv`);
      output = fs.createWriteStream(outPath);
      output.write(header + "\n");
      console.log(`📝 Created ${outPath}`);
    }

    output.write(line + "\n");
    rowCount++;

    // Close and move to next file after 1 lakh rows
    if (rowCount >= ROWS_PER_FILE) {
      output.end();
      console.log(`✅ Finished part_${fileIndex}.csv (${rowCount} rows)`);
      fileIndex++;
      rowCount = 0;
    }
  }

  // Handle last file
  if (output) {
    output.end();
    console.log(`✅ Finished part_${fileIndex}.csv (last file, ${rowCount} rows)`);
  }

  console.log("🎉 Splitting complete!");
}

splitCSV().catch((err) => {
  console.error("❌ Error:", err);
});
