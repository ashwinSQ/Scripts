// replace-to-webp.js
import fs from "fs";
import path from "path";

const fileExtensionsToSearch = [".js", ".vue", ".ts"]; // add more if needed

// Your exact list of image paths
const imagePaths = [
  'about/assets/images/charles5.jpg',
  'about/assets/images/logo.png',
  'about/assets/images/logoabout.png',
  'about/assets/images/logobanner.png',
  'about/assets/images/person.png',
  'about/assets/images/person2.png',
  'core/assets/icons/brandicondark7.png',
  'home/assets/images/vfxlogo.png',
  'home/assets/images/whylogo.png',
  'project/assets/images/commercialvfx/Lenux TX  Battle out there-01 (1).jpg',
  'project/assets/images/commercialvfx/New renault KIGER-01.jpg',
  'project/assets/images/commercialvfx/TOYOTA CAMRY-01.jpg',
  'project/assets/images/commercialvfx/The Kid Laroi-01.jpg',
  'project/assets/images/commercialvfx/Varilux Progressive lenses by essilor-01.jpg',
  'project/assets/images/commercialvfx/meta quest 3-01 (1).jpg',
  'project/assets/images/commercialvfx6.jpg',
  'project/assets/images/commercialvfx7.jpg',
  'project/assets/images/episodevfx1.jpg',
  'project/assets/images/episodevfx10.jpg',
  'project/assets/images/episodevfx2.jpg',
  'project/assets/images/episodevfx3.jpg',
  'project/assets/images/episodevfx4.jpg',
  'project/assets/images/episodevfx5.jpg',
  'project/assets/images/episodevfx7.jpg',
  'project/assets/images/episodevfx8.jpg',
  'project/assets/images/episodevfx9.jpg',
  'project/assets/images/moviesvfx/13 EXORCISMS-01.jpg',
  'project/assets/images/moviesvfx/ALIEN ROMULUS-01.jpg',
  'project/assets/images/moviesvfx/BIRD BOX-01.jpg',
  'project/assets/images/moviesvfx/Borderless Fog-01.jpg',
  'project/assets/images/moviesvfx/CHRISTMAS IN PARADISE-01.jpg',
  'project/assets/images/moviesvfx/DAMSEL-01.jpg',
  'project/assets/images/moviesvfx/DUNE - 2-01.jpg',
  'project/assets/images/moviesvfx/Fast X-01.jpg',
  'project/assets/images/moviesvfx/Ghosted-01.jpg',
  'project/assets/images/moviesvfx/Heart of Stone-01.jpg',
  'project/assets/images/moviesvfx/Leave the World-01.jpg',
  'project/assets/images/moviesvfx/Madame web 1-01.jpg',
  'project/assets/images/moviesvfx/Mission+Impossible VER2-01.jpg',
  'project/assets/images/moviesvfx/SEE-01.jpg',
  'project/assets/images/moviesvfx/The Marvels-01.jpg',
  'project/assets/images/moviesvfx2.jpg',
  'project/assets/images/moviesvfx3.jpg',
  'project/assets/images/moviesvfx4.jpg',
  'project/assets/images/moviesvfx5.jpg'
]
let successCount = 0;
let failureCount = 0;
let failedPaths = [];
let pathsUpdatedAtLeastOnce = new Set();

// Recursively get all files from directory
function getAllFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath));
    } else {
      if (fileExtensionsToSearch.includes(path.extname(file)))
        results.push(filePath);
    }
  });
  return results;
}

// Function to replace paths inside a file
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let updated = content;

  imagePaths.forEach((imgPath) => {
    const escapedPath = imgPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedPath, "g");

    if (regex.test(updated)) {
      updated = updated.replace(regex, imgPath.replace(/\.(png|jpe?g)$/i, ".webp"));
      pathsUpdatedAtLeastOnce.add(imgPath);
      successCount++;
    }
  });

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
    console.log(`✅ Updated: ${filePath}`);
  }
}

// Run the script
console.log("🔍 Scanning and replacing paths...");
const files = getAllFiles("./src");
files.forEach(replaceInFile);

// Determine failed image paths
failedPaths = imagePaths.filter((p) => !pathsUpdatedAtLeastOnce.has(p));
failureCount = failedPaths.length;

// Write failed paths to a file
if (failedPaths.length > 0) {
  fs.writeFileSync("failed_updates.txt", failedPaths.join("\n"), "utf8");
  console.log(`⚠️ Failed updates written to failed_updates.txt`);
}

// Summary
console.log("\n===== Summary =====");
console.log(`✅ Total successful replacements: ${successCount}`);
console.log(`❌ Total failed updates: ${failureCount}`);
console.log("===================\n");