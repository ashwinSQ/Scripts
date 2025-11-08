const xlsx = require('xlsx');
const fs = require('fs');

// Paths
const excelFilePath = './courses.xlsx';
const jsonFilePath = './courses_mongo.json';

// Load Excel
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const excelRows = xlsx.utils.sheet_to_json(sheet);

// Load JSON
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

// Create maps for fast lookup
const excelMap = new Map();
excelRows.forEach(row => excelMap.set(row['COURSE_ID'].toString(), row['COURSE_NAME']));

const jsonMap = new Map();
jsonData.forEach(doc => {
    const uid = doc.UID;
    const name = doc.title[0]?.value || '';
    jsonMap.set(uid, name);
});

// Counters for summary
let missingInJSON = 0;
let missingInExcel = 0;
let nameMismatches = 0;

console.log('Comparing Excel to JSON...\n');

// Compare Excel to JSON
excelMap.forEach((excelName, courseId) => {
    if (!jsonMap.has(courseId)) {
        console.log(`Missing in JSON: Course ID ${courseId} | Excel="${excelName}"`);
        missingInJSON++;
    } else {
        const jsonName = jsonMap.get(courseId);
        if (excelName !== jsonName) {
            console.log(`Name mismatch for Course ID ${courseId}: Excel="${excelName}" | JSON="${jsonName}"`);
            nameMismatches++;
        }
    }
});

// Check for JSON entries missing in Excel
jsonMap.forEach((jsonName, uid) => {
    if (!excelMap.has(uid)) {
        console.log(`Missing in Excel: Course ID ${uid} | JSON="${jsonName}"`);
        missingInExcel++;
    }
});

// Summary
console.log('\n--- Comparison Summary ---');
console.log(`Total Excel courses: ${excelMap.size}`);
console.log(`Total JSON courses: ${jsonMap.size}`);
console.log(`Missing in JSON: ${missingInJSON}`);
console.log(`Missing in Excel: ${missingInExcel}`);
console.log(`Name mismatches: ${nameMismatches}`);
console.log('---------------------------');
