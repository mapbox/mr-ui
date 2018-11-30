const html = require('./html.js');
const path = require('path');

module.exports = () => {
  return {
    siteBasePath: '/mr-ui/docs',
    browserslist: ['defaults'],
    jsEntry: path.resolve(__dirname, './index.js'),
    htmlSource: html
  };
};
