import fs from 'fs';
import path from 'path';

console.log('🔍 Build Verification Script');
console.log('============================');

const checkPath = (pathToCheck, description) => {
  const exists = fs.existsSync(pathToCheck);
  console.log(`${exists ? '✅' : '❌'} ${description}: ${pathToCheck}`);
  
  if (exists && fs.statSync(pathToCheck).isDirectory()) {
    try {
      const contents = fs.readdirSync(pathToCheck);
      console.log(`   📁 Contents: ${contents.join(', ')}`);
    } catch (e) {
      console.log(`   ⚠️  Could not read directory contents`);
    }
  } else if (exists) {
    const stats = fs.statSync(pathToCheck);
    console.log(`   📄 File size: ${stats.size} bytes`);
  }
  
  return exists;
};

console.log('\n📂 Checking Build Structure:');
const distExists = checkPath(path.resolve('dist'), 'Dist directory');
const distPublicExists = checkPath(path.resolve('dist', 'public'), 'Dist/public directory');
const distIndexExists = checkPath(path.resolve('dist', 'index.js'), 'Server bundle');
const distHtmlExists = checkPath(path.resolve('dist', 'public', 'index.html'), 'Public index HTML');

console.log('\n📄 Checking Static Files:');
const documentsExists = checkPath(path.resolve('dist', 'public', 'documents'), 'Documents directory');
const resumeExists = checkPath(path.resolve('dist', 'public', 'documents', 'Bharath_Resume.pdf'), 'Resume PDF');
const imagesExists = checkPath(path.resolve('dist', 'public', 'images'), 'Images directory');

console.log('\n📋 Summary:');
const allCriticalExists = distExists && distPublicExists && distIndexExists && documentsExists && resumeExists;
console.log(`${allCriticalExists ? '✅' : '❌'} Build is ${allCriticalExists ? 'READY' : 'INCOMPLETE'} for deployment`);

if (!allCriticalExists) {
  console.log('\n🚨 Issues found:');
  if (!distExists) console.log('   - Run "npm run build" to create dist directory');
  if (!resumeExists) console.log('   - Resume PDF is missing from build output');
  
  process.exit(1);
} else {
  console.log('\n🎉 Build verification successful!');
  process.exit(0);
}
