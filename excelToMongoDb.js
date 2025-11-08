const xlsx = require('xlsx');
const fs = require('fs');

// Path to your Excel file
const excelFilePath = './courses.xlsx';

// Load workbook
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0]; // first sheet
const sheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const rows = xlsx.utils.sheet_to_json(sheet);

// Map rows to MongoDB documents
const mongoDocs = rows.map(row => ({
    title: [{ value: row['COURSE_NAME'] }],
    subscriber: { $oid: "66975e0e7835373dbcebf1e8" }, // static subscriber
    UID: row['COURSE_ID'].toString(),
    createdAt: { $date: new Date().toISOString() },
    updatedAt: { $date: new Date().toISOString() },
    isCertificate: true,
    isFromMigration: true
}));

// Write JSON to file
fs.writeFileSync('courses_mongo.json', JSON.stringify(mongoDocs, null, 2));

console.log('JSON file created: courses_mongo.json');
