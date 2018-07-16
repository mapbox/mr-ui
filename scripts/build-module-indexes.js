#!/usr/bin/env node
'use strict';

require('hard-rejection/register');
const fs = require('fs');
const path = require('path');
const pify = require('pify');

const excludeDirs = new Set(['utils']);
const srcRoot = path.resolve(__dirname, '../src/components');

function generateIndex(moduleName) {
  const content = `import main from './${moduleName}';

export default main;
`;

  const filename = path.resolve(srcRoot, moduleName, 'index.js');
  return pify(fs.writeFile)(filename, content);
}

pify(fs.readdir)(srcRoot).then(dirs => {
  const filteredDirs = dirs.filter(dir => !excludeDirs.has(dir));
  return Promise.all(filteredDirs.map(generateIndex));
});
