const fs = require('fs');
const path = require('path');

// Read the products file
const filePath = path.join(__dirname, '..', 'data', 'products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find the water-dispensers section and fix brands
const lines = content.split('\n');
let inWaterDispensers = false;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if we're entering the water-dispensers category
  if (line.includes("id: 'water-dispensers'")) {
    inWaterDispensers = true;
    console.log('Found water-dispensers section at line', i + 1);
  }
  
  // Track braces to know when we exit the section
  if (inWaterDispensers) {
    if (line.includes('{')) braceCount++;
    if (line.includes('}')) braceCount--;
    
    // Fix the brand in this section
    if (line.includes("brand: 'Western',")) {
      lines[i] = line.replace("brand: 'Western',", "brand: 'Blue Star',");
      console.log('Fixed brand at line', i + 1);
    }
    
    // Exit when we've closed all braces for this section
    if (braceCount === 0 && i > 0) {
      inWaterDispensers = false;
      console.log('Exited water-dispensers section at line', i + 1);
    }
  }
}

// Write the fixed content back
fs.writeFileSync(filePath, lines.join('\n'));
console.log('Successfully updated water dispenser brands from Western to Blue Star');