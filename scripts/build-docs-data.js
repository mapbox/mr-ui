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
const pascalCase = require('pascal-case');
const reactDocgen = require('react-docgen');
const mapboxHighlighter = require('@mapbox/mapbox-highlighter');
const jsxtremeMarkdown = require('@mapbox/jsxtreme-markdown');

const PACKAGES_DIRECTORY_URL = `https://github.com/mapbox/mr-ui/blob/master/packages`;
const dataDir = path.resolve(__dirname, '../src/docs/data');
const srcDir = path.resolve(__dirname, '../src/components');
const dataFilename = path.resolve(dataDir, 'components.js');
const excludeSourceDirs = new Set(['page-loading-indicator', 'utils']);

function processExampleFile(filename) {
  return pify(fs.readFile)(filename, 'utf8').then(code => {
    const descriptionMatch = /\/\*([\s\S]+?)\*\//.exec(code);
    if (!descriptionMatch) {
      throw new Error(`No description found for example ${filename}`);
    }
    code = code
      .replace(`from '../src/`, `from '@mapbox/mr-ui/`)
      .replace(/\/\*[\s\S]*?\*\/[\s]*/, '')
      .trim();
    return `{
      exampleModule: require('${filename}'),
      code: \`${mapboxHighlighter.highlight(code, 'js')}\`,
      description: ${jsxtremeMarkdown.toJsx(descriptionMatch[1].trim())}
    }`;
  });
}

function getExamples(componentDirectory) {
  const examplesDirectory = path.join(componentDirectory, 'examples');
  return globby(path.join(examplesDirectory, '*.js')).then(filenames => {
    return Promise.all(filenames.map(processExampleFile));
  });
}

function processProps(props) {
  let objectBody = '';
  Object.keys(props).forEach(prop => {
    const propData = props[prop];
    objectBody += `${prop}: {
      type: ${JSON.stringify(propData.type)},
      required: ${propData.required},
      defaultValue: ${propData.defaultValue &&
        JSON.stringify(propData.defaultValue.value)},
      description: ${jsxtremeMarkdown
        .toJsx(propData.description || ' ')
        .trim() || '<div />'}
    },`;
  });
  return `{${objectBody}}`;
}

function processComponent(hyphenName) {
  const componentDir = path.join(srcDir, hyphenName);
  const srcFilename = path.join(componentDir, `${hyphenName}.js`);
  const componentName = pascalCase(hyphenName);

  return Promise.all([
    pify(fs.readFile)(srcFilename, 'utf8'),
    getExamples(componentDir)
  ]).then(([code, examples]) => {
    const parsedData = reactDocgen.parse(code);
    return `{
      name: '${componentName}',
      sourceCode: '${PACKAGES_DIRECTORY_URL}/${hyphenName}/',
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
