const fs = require('fs');
const path = require('path');

// Read the products.ts file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Track changes
let changeCount = 0;

// Replace all external URLs with local image paths
const externalUrlPatterns = [
  /https:\/\/westernequipments\.com\/wp-content\/uploads\/\d+\/\d+\/([\w\-]+\.(jpg|png|jpeg))/gi,
  /https:\/\/www\.frigoglass\.com\/wp-content\/uploads\/([\w\-]+\.(jpg|png|jpeg))/gi,
  /http:\/\/westernequipments\.com\/wp-content\/uploads\/\d+\/\d+\/([\w\-]+\.(jpg|png|jpeg))/gi,
];

externalUrlPatterns.forEach(pattern => {
  content = content.replace(pattern, (match, filename) => {
    changeCount++;
    // Extract just the filename
    const parts = match.split('/');
    const file = parts[parts.length - 1];
    
    // Check if file exists locally
    const imagesDir = path.join(__dirname, '..', 'public', 'images', 'products');
    const availableImages = fs.readdirSync(imagesDir).map(f => f.toLowerCase());
    
    if (availableImages.includes(file.toLowerCase())) {
      return `/images/products/${file}`;
    } else {
      // Use placeholder for missing images
      return '/images/placeholder.jpg';
    }
  });
});

// Write the updated content back
fs.writeFileSync(filePath, content, 'utf8');

console.log(`Fixed ${changeCount} external image URLs`);

// Verify the changes
const updatedContent = fs.readFileSync(filePath, 'utf8');
const externalMatches = updatedContent.match(/https?:\/\/(westernequipments\.com|www\.frigoglass\.com)/g);

console.log('\nVerification:');
console.log(`Remaining external URLs: ${externalMatches ? externalMatches.length : 0}`);