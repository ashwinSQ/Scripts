// copy-images-structure.js
import fs from "fs";
import path from "path";

const srcDir = path.resolve("./src"); // Source directory
const destDir = path.resolve("./collected_images_with_structure"); // Destination directory

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function copyImagesWithStructure(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const fullPath = path.join(currentDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      copyImagesWithStructure(fullPath); // Recurse into subfolders
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        // Calculate the relative path from srcDir
        const relativePath = path.relative(srcDir, fullPath);

        // Destination path mirrors src folder structure
        const destPath = path.join(destDir, relativePath);

        // Ensure the folder structure exists
        fs.mkdirSync(path.dirname(destPath), { recursive: true });

        // Copy the file
        fs.copyFileSync(fullPath, destPath);
        console.log(`Copied: ${relativePath}`);
      }
    }
  }
}

copyImagesWithStructure(srcDir);
console.log("✅ All PNG and JPG files copied with folder structure preserved.");
