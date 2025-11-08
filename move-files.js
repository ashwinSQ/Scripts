import { mkdirSync, rename } from 'fs';
import { join, dirname } from 'path';


// used images 
/* const files = [
  "src/about/assets/images/charles1.jpg",
  "src/about/assets/images/charles2.jpg",
  "src/about/assets/images/charles3.jpg",
  "src/about/assets/images/charles4.jpg",
  "src/about/assets/images/charles6.jpg",
  "src/about/assets/images/charles7.jpg",
  "src/about/assets/images/image1.png",
  "src/about/assets/images/image2.png",
  "src/about/assets/images/image3.png",
  "src/about/assets/images/image4.png",
  "src/about/assets/images/image5.jpg",
  "src/about/assets/images/image6.jpg",
  "src/contact/assets/images/1.jpeg",
  "src/contact/assets/images/2.jpeg",
  "src/contact/assets/images/3.jpeg",
  "src/contact/assets/images/4.jpeg",
  "src/contact/assets/images/5.jpeg",
  "src/home/assets/images/brand7.png",
  "src/home/assets/images/graylogo.png",
  "src/home/assets/images/poster.png",
  "src/home/assets/images/whyselect1.jpg",
  "src/home/assets/images/whyselect2.png",
  "src/home/assets/images/whyselect3.jpg",
  "src/home/assets/images/whyselect4.png",
  "src/home/assets/images/whyselect5.png",
  "src/project/assets/images/commercialvfx/6.jpg",
  "src/project/assets/images/commercialvfx/7.jpg",
  "src/project/assets/images/commercialvfx/8.jpg",
  "src/project/assets/images/commercialvfx/9.jpg",
  "src/project/assets/images/commercialvfx1.jpg",
  "src/project/assets/images/commercialvfx2.jpg",
  "src/project/assets/images/commercialvfx3.jpg",
  "src/project/assets/images/commercialvfx4.jpg",
  "src/project/assets/images/commercialvfx5.jpg",
  "src/project/assets/images/episodesvfx/1.jpg",
  "src/project/assets/images/episodesvfx/2.jpg",
  "src/project/assets/images/episodesvfx/3.jpg",
  "src/project/assets/images/episodesvfx/4.jpg",
  "src/project/assets/images/episodesvfx/5.jpg",
  "src/project/assets/images/episodesvfx/6.jpg",
  "src/project/assets/images/episodesvfx/7.jpg",
  "src/project/assets/images/moviesvfx/MSMarvels.jpg",
  "src/project/assets/images/moviesvfx/hellboy.jpg",
  "src/project/assets/images/moviesvfx1.jpg",
  "src/project/assets/images/moviesvfx10.jpg",
  "src/project/assets/images/moviesvfx11.jpg",
  "src/project/assets/images/moviesvfx12.jpg",
  "src/project/assets/images/moviesvfx13.jpg",
  "src/project/assets/images/moviesvfx14.jpg",
  "src/project/assets/images/moviesvfx15.jpg",
  "src/project/assets/images/moviesvfx16.jpg",
  "src/project/assets/images/moviesvfx17.jpg",
  "src/project/assets/images/moviesvfx18.jpg",
  "src/project/assets/images/moviesvfx19.jpg",
  "src/project/assets/images/moviesvfx6.jpg",
  "src/project/assets/images/moviesvfx7.jpg",
  "src/project/assets/images/moviesvfx8.jpg",
  "src/project/assets/images/moviesvfx9.jpg"
]; */

//unused images
const files = [
  "src/about/assets/images/charles5.jpg",
  "src/about/assets/images/logo.png",
  "src/about/assets/images/logoabout.png",
  "src/about/assets/images/logobanner.png",
  "src/about/assets/images/person.png",
  "src/about/assets/images/person2.png",
  "src/core/assets/icons/brandicondark7.png",
  "src/home/assets/images/vfxlogo.png",
  "src/home/assets/images/whylogo.png",
  "src/project/assets/images/commercialvfx/Lenux TX  Battle out there-01 (1).jpg",
  "src/project/assets/images/commercialvfx/New renault KIGER-01.jpg",
  "src/project/assets/images/commercialvfx/TOYOTA CAMRY-01.jpg",
  "src/project/assets/images/commercialvfx/The Kid Laroi-01.jpg",
  "src/project/assets/images/commercialvfx/Varilux Progressive lenses by essilor-01.jpg",
  "src/project/assets/images/commercialvfx/meta quest 3-01 (1).jpg",
  "src/project/assets/images/commercialvfx6.jpg",
  "src/project/assets/images/commercialvfx7.jpg",
  "src/project/assets/images/episodevfx1.jpg",
  "src/project/assets/images/episodevfx10.jpg",
  "src/project/assets/images/episodevfx2.jpg",
  "src/project/assets/images/episodevfx3.jpg",
  "src/project/assets/images/episodevfx4.jpg",
  "src/project/assets/images/episodevfx5.jpg",
  "src/project/assets/images/episodevfx7.jpg",
  "src/project/assets/images/episodevfx8.jpg",
  "src/project/assets/images/episodevfx9.jpg",
  "src/project/assets/images/moviesvfx/13 EXORCISMS-01.jpg",
  "src/project/assets/images/moviesvfx/ALIEN ROMULUS-01.jpg",
  "src/project/assets/images/moviesvfx/BIRD BOX-01.jpg",
  "src/project/assets/images/moviesvfx/Borderless Fog-01.jpg",
  "src/project/assets/images/moviesvfx/CHRISTMAS IN PARADISE-01.jpg",
  "src/project/assets/images/moviesvfx/DAMSEL-01.jpg",
  "src/project/assets/images/moviesvfx/DUNE - 2-01.jpg",
  "src/project/assets/images/moviesvfx/Fast X-01.jpg",
  "src/project/assets/images/moviesvfx/Ghosted-01.jpg",
  "src/project/assets/images/moviesvfx/Heart of Stone-01.jpg",
  "src/project/assets/images/moviesvfx/Leave the World-01.jpg",
  "src/project/assets/images/moviesvfx/Madame web 1-01.jpg",
  "src/project/assets/images/moviesvfx/Mission+Impossible VER2-01.jpg",
  "src/project/assets/images/moviesvfx/SEE-01.jpg",
  "src/project/assets/images/moviesvfx/The Marvels-01.jpg",
  "src/project/assets/images/moviesvfx2.jpg",
  "src/project/assets/images/moviesvfx3.jpg",
  "src/project/assets/images/moviesvfx4.jpg",
  "src/project/assets/images/moviesvfx5.jpg"
];

const destinationBase = "SelectVFX-UnUsedImagesBackup"; // Destination root folder

files.forEach(file => {
  const destPath = join(destinationBase, file); // Keep same subfolder structure
  const destDir = dirname(destPath);

  // Create directories if they don't exist
  mkdirSync(destDir, { recursive: true });

  // Move file
  rename(file, destPath, (err) => {
    if (err) {
      console.error(`❌ Failed to move ${file}:`, err);
    } else {
      console.log(`✅ Moved: ${file} → ${destPath}`);
    }
  });
});
