const fs = require("fs");
const path = require("path");
const readline = require("readline");

const inputPath = path.join(__dirname, "enrollment_report_part_1.csv");
const outputPath = path.join(__dirname, "output.csv");

// The exact header substring to remove (must match exactly as it appears)
const header = `Name,Email,User Id,Designation,Current Vessel,Vessel Type,Course Name,Course Status,Admin Marked As Completed,Course Enrollment Date & Time (UTC),Course Unenrollment Date & Time (UTC),Course Started Date & Time (UTC),Course Completion Date & Time (UTC),Quiz Score,User State,Time Spent`;

async function cleanCSV() {
    const rl = readline.createInterface({
        input: fs.createReadStream(inputPath),
        crlfDelay: Infinity,
    });

    const output = fs.createWriteStream(outputPath);

    for await (let line of rl) {
        // Remove the header if it appears anywhere in the line
        if (line.includes(header)) {
            line = line.replace(header, "").trim();
        }

        // Skip the line entirely if it becomes empty (i.e., it was just a header)
        if (line.trim().length > 0) {
            output.write(line + "\n");
        }
    }

    rl.on("close", () => {
        output.end();
        console.log("✅ CSV cleaned. Headers removed (even embedded ones).");
        console.log("Output saved to:", outputPath);
    });
}

cleanCSV().catch(console.error);
