const fs = require('fs');
const path = require('path');
const os = require('os');

const TEMP_DIR = os.tmpdir(); // Typically /tmp or /var/folders/...
const KNOWN_PREFIX = 'tmp-'; // default tmp package prefix

function isTmpFile(fileName) {
    return fileName.startsWith(KNOWN_PREFIX);
}

function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
    } catch (err) {
        console.warn(`Failed to delete ${filePath}:`, err.message);
    }
}

function cleanupTmpFiles() {
    console.log(`Scanning temp directory: ${TEMP_DIR}`);

    fs.readdir(TEMP_DIR, (err, files) => {
        if (err) {
            console.error(`Error reading temp directory:`, err);
            return;
        }

        files.forEach(file => {
            if (isTmpFile(file)) {
                const fullPath = path.join(TEMP_DIR, file);
                deleteFile(fullPath);
            }
        });

        console.log('Temp file cleanup complete.');
    });
}

cleanupTmpFiles();
