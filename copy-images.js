// copy-images.js
import fs from "fs";
import path from "path";

const srcDir = path.resolve("./src"); // starting directory
const destDir = path.resolve("./collected_images"); // destination directory

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Recursive function to find images
function copyImages(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      copyImages(fullPath); // recurse into subfolder
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        const destPath = path.join(destDir, file);

        // If duplicate file names exist, append a number
        let finalPath = destPath;
        let counter = 1;
        while (fs.existsSync(finalPath)) {
          const name = path.basename(file, ext);
          finalPath = path.join(destDir, `${name}_${counter}${ext}`);
          counter++;
        }

        fs.copyFileSync(fullPath, finalPath);
        console.log(`Copied: ${file}`);
      }
    }
  }
}

copyImages(srcDir);
console.log("✅ All PNG and JPG files copied successfully.");
