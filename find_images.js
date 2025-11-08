import { readdirSync, statSync, writeFileSync } from "fs";
import { join, extname } from "path";

const startDir = "./src"; // Change this to your project folder if needed

function findImages(dir) {
  let results = [];

  try {
    const list = readdirSync(dir);
    for (let file of list) {
      const filePath = join(dir, file);
      let stat;
      try {
        stat = statSync(filePath);
      } catch {
        continue; // Skip files we can't access
      }

      if (stat.isDirectory()) {
        results = results.concat(findImages(filePath)); // Recursively search
      } else {
        const ext = extname(file).toLowerCase();
        if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
          results.push(filePath);
        }
      }
    }
  } catch {
    // Skip directories we can't read
  }

  return results;
}

const images = findImages(startDir);
console.log(images.join("\n"));

// Optionally save to a file
writeFileSync("image_file_list.txt", images.join("\n"), "utf8");
console.log(`\nSaved ${images.length} image paths to image_file_list.txt`);
