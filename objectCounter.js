const fs = require('fs');

function getNumberOfObjects(jsonFilePath) {
    // Read JSON file
    const data = fs.readFileSync(jsonFilePath, 'utf-8');

    // Parse JSON
    const jsonArray = JSON.parse(data);

    // Return number of objects
    return jsonArray.length;
}

// Example usage:
const count = getNumberOfObjects('courses_mongo.json');
console.log(`Number of objects in JSON: ${count}`);
