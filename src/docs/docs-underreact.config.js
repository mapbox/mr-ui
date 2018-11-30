const html = require('./html.js');
const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/mr-ui',
    browserslist: ['defaults'],
    jsEntry: path.resolve(__dirname, './index.js'),
    htmlSource: html
  };
};
