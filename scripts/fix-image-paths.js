const fs = require('fs');

// Load the image mapping
const imageMapping = JSON.parse(fs.readFileSync('C:/Users/Admin/Desktop/usharef-1/public/image-mapping.json', 'utf8'));

// Load the current products file
const productsFile = 'C:/Users/Admin/Desktop/usharef-1/data/products.ts';
let productsContent = fs.readFileSync(productsFile, 'utf8');

let fixedCount = 0;
let totalProducts = 0;

// Function to try multiple matching strategies
function findImageMatch(productName, brand) {
  const searchTerms = [
    productName.toLowerCase().replace(/[^a-z0-9]/g, ''),
    productName.toLowerCase().replace(/[-_\s]+/g, '').replace(/[^a-z0-9]/g, ''),
    productName.toLowerCase().split(/[-_\s]+/)[0],
    // Try specific model patterns
    productName.match(/([A-Z]+\d+[A-Z]*)/i)?.[0]?.toLowerCase() || '',
  ].filter(term => term.length > 2);
  
  for (const term of searchTerms) {
    if (imageMapping[term]) {
      return imageMapping[term];
    }
    
    // Try partial matches
    for (const [key, path] of Object.entries(imageMapping)) {
      if (key.includes(term) || term.includes(key)) {
        return path;
      }
    }
  }
  
  return null;
}

// Process the products content
productsContent = productsContent.replace(
  /"name":\s*"([^"]+)"[\s\S]*?"image":\s*"([^"]+)"/g,
  (match, productName, currentPath) => {
    totalProducts++;
    
    // Extract brand from the path or context if needed
    const brand = currentPath.split('/')[3] || 'western';
    
    const newImagePath = findImageMatch(productName, brand);
    
    if (newImagePath) {
      fixedCount++;
      console.log(`Fixed: ${productName} -> ${newImagePath}`);
      return match.replace(`"image": "${currentPath}"`, `"image": "${newImagePath}"`);
    }
    
    console.log(`No match found for: ${productName}`);
    return match;
  }
);

// Write the updated file
fs.writeFileSync(productsFile, productsContent);

console.log(`\nFixed ${fixedCount} out of ${totalProducts} product images`);
console.log('Updated products.ts file');