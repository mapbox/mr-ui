#!/usr/bin/env node
'use strict';

require('hard-rejection/register');
const _ = require('lodash');
const path = require('path');
const globby = require('globby');
const makeDir = require('make-dir');
const del = require('del');
const pify = require('pify');
const prettier = require('prettier');
const fs = require('fs');
const reactDocgen = require('react-docgen');
const jsxtremeMarkdown = require('@mapbox/jsxtreme-markdown');
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');

loadLanguages(['jsx']);

const dataDir = path.resolve(__dirname, '../src/docs/data');
const srcDir = path.resolve(__dirname, '../src/components');
const dataFilename = path.resolve(dataDir, 'components.js');
const excludeSourceDirs = new Set(['page-loading-indicator', 'utils']);

function processExampleFile(filename) {
  return pify(fs.readFile)(filename, 'utf8').then(code => {
    // Assumes there is only one block comment, and it is the description.
    const descriptionMatch = /\/\*([\s\S]+?)\*\//.exec(code);
    if (!descriptionMatch) {
      throw new Error(`No description found for example ${filename}`);
    }
    code = code
      // Replace imported component paths with npm package paths.
      .replace(/from '\.\.\/(\.\.\/)?/g, `from '@mapbox/mr-ui/`)
      // Remove block comments (especially the description).
      .replace(/\/\*[\s\S]*?\*\/[\s]*/, '')
      .trim();

    const highlightedCode = Prism.highlight(code, Prism.languages.jsx, 'jsx');
    const renderedDescription = encodeJsx(
      jsxtremeMarkdown.toJsx(descriptionMatch[1].trim())
    );

    return `{
      exampleModule: require('${filename}'),
      code: \`${encodeJsx(highlightedCode)}\`,
      description: ${renderedDescription}
    }`;
  });
}

function getExamples(componentDirectory) {
  const examplesDirectory = path.join(componentDirectory, 'examples');
  return globby(path.join(examplesDirectory, '*.js')).then(filenames => {
    return Promise.all(filenames.sort().map(processExampleFile));
  });
}

function processProps(props) {
  if (!props) {
    return null;
  }

  let objectBody = '';
  Object.keys(props).forEach(prop => {
    const propData = props[prop];
    const renderedDescription = encodeJsx(
      jsxtremeMarkdown.toJsx(propData.description || ' ').trim() || '<div />'
    );
    objectBody += `${prop}: {
      type: ${JSON.stringify(propData.type)},
      required: ${propData.required},
      defaultValue: ${propData.defaultValue &&
        JSON.stringify(propData.defaultValue.value)},
      description: ${renderedDescription}
    },`;
  });
  return `{${objectBody}}`;
}

function processComponent(hyphenName) {
  const componentDir = path.join(srcDir, hyphenName);
  const srcFilename = path.join(componentDir, `${hyphenName}.js`);

  return Promise.all([
    pify(fs.readFile)(srcFilename, 'utf8'),
    getExamples(componentDir)
  ]).then(([code, examples]) => {
    const parsedData = reactDocgen.parse(code);
    return `{
      name: '${parsedData.displayName}',
      description: ${jsxtremeMarkdown.toJsx(parsedData.description).trim() ||
        'null'},
      props: ${processProps(parsedData.props)},
      examples: [${examples.join(',')}]
    }`;
  });
}

function generateDocsData() {
  return del(dataDir)
    .then(() => makeDir(dataDir))
    .then(() => pify(fs.readdir)(srcDir))
    .then(srcContents => {
      return srcContents.filter(filename => !excludeSourceDirs.has(filename));
    })
    .then(componentDirs => {
      return Promise.all(componentDirs.sort().map(processComponent));
    })
    .then(_.compact)
    .then(componentObjectStrings => `[${componentObjectStrings.join(',')}]`)
    .then(componentArrayString => {
      const code = `
        'use strict';
        const React = require('react');
        module.exports = ${componentArrayString}`;
      return pify(fs.writeFile)(
        dataFilename,
        prettier.format(code, { parser: 'babylon' })
      );
    });
}

generateDocsData();

// Prepare JSX to be written directly to the script without messing things up.
function encodeJsx(x) {
  return x.replace(/`/g, '&#96;').replace(/\$/, '&#36;');
}
