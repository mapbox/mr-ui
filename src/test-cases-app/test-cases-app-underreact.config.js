const html = require('./html.js');
const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/', // react-test-kitchen does not currently support configurable basepaths
    jsEntry: path.resolve(__dirname, './index.js'),
    htmlSource: html,
    devServerHistoryFallback: true
  };
};
