'use strict';

const path = require('path');

module.exports = () => {
  return {
    siteBasePath: 'mr-ui',
    stylesheets: [
      require.resolve('@mapbox/mapbox-highlighter/dist/mapbox.css')
    ],
    spa: true,
    staticHtmlInlineDeferCss: false,
    pagesDirectory: path.join(__dirname, './src/docs/pages')
  };
};
