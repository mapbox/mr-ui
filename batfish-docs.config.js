'use strict';

const path = require('path');

module.exports = () => {
  return {
    siteBasePath: 'mr-ui',
    stylesheets: [path.join(__dirname, './src/docs/prism-theme.css')],
    spa: true,
    staticHtmlInlineDeferCss: false,
    pagesDirectory: path.join(__dirname, './src/docs/pages')
  };
};
