'use strict';

const path = require('path');

module.exports = () => {
  return {
    siteBasePath: 'mr-ui',
    stylesheets: [require.resolve('prismjs/themes/prism.css')],
    spa: true,
    staticHtmlInlineDeferCss: false,
    pagesDirectory: path.join(__dirname, './src/docs/pages')
  };
};
