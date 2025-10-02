const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../../dist');

if (!fs.existsSync(distDir)) {
  // If dist doesn't exist, nothing to clean
  process.exit(0);
}

fs.readdirSync(distDir).forEach(file => {
  if (file !== 'README.md') {
    const filePath = path.join(distDir, file);
    fs.rmSync(filePath, { recursive: true, force: true });
  }
});