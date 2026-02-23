import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const imagesDir = path.resolve('client/public/images');

const images = [
  { input: 'B.png',              output: 'B.png',              width: 600, quality: 85 },
  { input: 'about me image.png', output: 'about me image.png', width: 800, quality: 82 },
  { input: 'time.png',           output: 'time.png',           width: 800, quality: 82 },
  { input: 'bharath.jpg',        output: 'bharath.jpg',        width: 800, quality: 80, format: 'jpeg' },
  { input: 'NIIT.png',           output: 'NIIT.png',           width: 300, quality: 85 },
  { input: 'simpliearn.png',     output: 'simpliearn.png',     width: 300, quality: 85 },
  { input: 'Netcom.png',         output: 'Netcom.png',         width: 300, quality: 85 },
];

for (const img of images) {
  const inputPath  = path.join(imagesDir, img.input);
  const backupPath = path.join(imagesDir, img.input + '.backup');

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping (not found): ${img.input}`);
    continue;
  }

  const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(1);

  // Back up original if not already backed up
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
  }

  const tempPath = inputPath + '.tmp';

  const pipeline = sharp(inputPath).resize({ width: img.width, withoutEnlargement: true });

  if (img.format === 'jpeg') {
    await pipeline.jpeg({ quality: img.quality, progressive: true }).toFile(tempPath);
  } else {
    await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true, quality: img.quality }).toFile(tempPath);
  }

  fs.renameSync(tempPath, inputPath);
  const newSize = (fs.statSync(inputPath).size / 1024).toFixed(1);

  console.log(`✅ ${img.input}: ${originalSize} KB → ${newSize} KB (saved ${((1 - newSize/originalSize)*100).toFixed(0)}%)`);
}

console.log('\n🎉 All images compressed!');
