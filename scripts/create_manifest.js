const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const package = require('../package.json');
const manifest = require('../src/manifest.json');

manifest.name = package.name;
manifest.version = package.version;
manifest.description = package.description;

mkdirp(path.resolve(__dirname, '../build'), (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  fs.writeFileSync(path.resolve(__dirname, '../build/manifest.json'), JSON.stringify(manifest, null, 2));
});