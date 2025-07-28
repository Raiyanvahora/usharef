const fs = require('fs');
const path = require('path');

// Get version from package.json or use timestamp
const packageJson = require('../package.json');
const version = process.env.BUILD_VERSION || packageJson.version || Date.now().toString();

const versionData = {
  version: version,
  timestamp: Date.now(),
  buildDate: new Date().toISOString()
};

// Write to public directory
const versionPath = path.join(__dirname, '..', 'public', 'version.json');
fs.writeFileSync(versionPath, JSON.stringify(versionData, null, 2));

console.log(`Version file updated: ${version}`);