// zip-dist.js
// Script to zip the dist/ folder for distribution
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const DIST = path.join(__dirname, '../../dist');
const ZIP_PATH = path.join(__dirname, '../../never-icons.zip');

if (!fs.existsSync(DIST)) {
  console.error('dist/ folder does not exist. Run the dist script first.');
  process.exit(1);
}

const output = fs.createWriteStream(ZIP_PATH);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Created never-icons.zip (${archive.pointer()} total bytes)`);
});

archive.on('error', err => { throw err; });

archive.pipe(output);
archive.directory(DIST, false);
archive.finalize();
