#!/usr/bin/env node

require('hard-rejection/register');
const fs = require('fs');
const path = require('path');
const del = require('del');
const execa = require('execa');
const makeDir = require('make-dir');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.resolve(rootDir, 'pkg');
const srcDir = path.resolve(rootDir, 'src/components');

// Build a single directory that is ready to be published as an npm package.
// From that package components should be importable without any
// additional nesting.
//
// The root package.json of this repo has `"private": true` so we don't
// accidentally publish that way. Instead, we need to publish from the
// directory that is built by this script.

// Compile all src files that we want in the package ... so that excludes
// tests and examples.
function compileComponents() {
  return execa.shell(
    `babel "${rootDir}/src/components" --out-dir ${outputDir} --ignore "**/examples","**/*.test.tsx" --config-file ${rootDir}/scripts/babel.config.js --extensions ".ts,.tsx,.js"`,
    {
      cwd: srcDir,
      stdio: 'inherit'
    }
  );
}

function copyFiles() {
  const filesToCopy = ['LICENSE', 'CHANGELOG.md', 'README.md'];

  const copyPromises = filesToCopy.map((file) => {
    const srcPath = path.join(rootDir, file);
    const destPath = path.join(outputDir, path.basename(file));
    return fs.promises.copyFile(srcPath, destPath);
  });

  return copyPromises;
}

// Create a package.json that is ready to be published.
// Should definitely not be "private" and does not need to include
// development-only features.
function createPackageJson() {
  const original = require('../package.json');
  const publishable = Object.assign({}, original);
  delete publishable.private;
  delete publishable.scripts;
  delete publishable.devDependencies;
  delete publishable['lint-staged'];
  fs.writeFileSync(
    path.resolve(outputDir, 'package.json'),
    JSON.stringify(publishable, null, 2)
  );
}

del(outputDir)
  .then(() => makeDir(outputDir))
  .then(() =>
    Promise.all([compileComponents(), copyFiles(), createPackageJson()])
  );
