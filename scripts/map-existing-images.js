const fs = require('fs');
const path = require('path');

// Function to recursively find all image files
function findImageFiles(dir, imageMap = {}) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findImageFiles(fullPath, imageMap);
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
      // Clean the filename for matching
      const cleanName = file.toLowerCase()
        .replace(/\.(png|jpg|jpeg|webp)$/i, '')
        .replace(/[-_\s]+/g, '')
        .replace(/300x300/, '');
      
      imageMap[cleanName] = fullPath.replace(/\\/g, '/').replace('C:/Users/Admin/Desktop/usharef-1/public', '');
    }
  });
  
  return imageMap;
}

// Find all existing images
const existingImages = {};
const prdPath = 'C:/Users/Admin/Desktop/usharef-1/public/PRD';
const prdNewPath = 'C:/Users/Admin/Desktop/usharef-1/public/PRD-NEW';

if (fs.existsSync(prdPath)) {
  findImageFiles(prdPath, existingImages);
}
if (fs.existsSync(prdNewPath)) {
  findImageFiles(prdNewPath, existingImages);
}

console.log('Found images:', Object.keys(existingImages).length);
console.log('Sample mappings:');
Object.entries(existingImages).slice(0, 10).forEach(([key, value]) => {
  console.log(`${key} -> ${value}`);
});

// Save the mapping
fs.writeFileSync(
  'C:/Users/Admin/Desktop/usharef-1/public/image-mapping.json',
  JSON.stringify(existingImages, null, 2)
);

console.log('Image mapping saved to public/image-mapping.json');