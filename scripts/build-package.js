#!/usr/bin/env node
'use strict';

require('hard-rejection/register');
const fs = require('fs');
const path = require('path');
const del = require('del');
const execa = require('execa');
const cpy = require('cpy');
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
    `babel "${rootDir}/src/components" --out-dir ${outputDir} --ignore "**/examples","**/__tests__" --config-file ${rootDir}/babel.config.js`,
    {
      cwd: srcDir,
      stdio: 'inherit'
    }
  );
}

// Copy non-src files that we want in the package.
function copyFiles() {
  return cpy(['LICENSE_Mapbox', 'CHANGELOG.md', 'README.md'], outputDir, {
    cwd: rootDir
  });
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
