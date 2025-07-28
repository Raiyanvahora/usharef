const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Clearing all caches...');

// Directories to clean
const dirsToClean = [
  '.next',
  'node_modules/.cache',
  '.cache',
  'out'
];

dirsToClean.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(fullPath)) {
    console.log(`Removing ${dir}...`);
    try {
      execSync(`rimraf ${fullPath}`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`Failed to remove ${dir}:`, e.message);
    }
  }
});

console.log('All caches cleared!');