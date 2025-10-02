// zip-dist.js
// Script to zip the dist/ folder for distribution with versioned filename

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Read version from package.json
const pkg = require('../../package.json');
const version = pkg.version || '0.0.0';

const DIST = path.join(__dirname, '../../dist');
const ZIP_PATH = path.join(__dirname, `../../never-icons-v${version}.zip`);

if (!fs.existsSync(DIST)) {
  console.error('dist/ folder does not exist. Run the dist script first.');
  process.exit(1);
}

const output = fs.createWriteStream(ZIP_PATH);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`Created never-icons-v${version}.zip (${archive.pointer()} total bytes)`);
});

archive.on('error', err => { throw err; });

archive.pipe(output);
archive.directory(DIST, false);
archive.finalize();