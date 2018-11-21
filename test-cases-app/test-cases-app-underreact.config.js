'use strict';

const html = require('./html.js');
const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/mr-ui/test-cases-app',
    jsEntry: path.resolve(__dirname, './index.js'),
    htmlSource: html
  };
};
