'use strict';

const html = require('./html');

module.exports = () => {
  return {
    siteBasePath: '/mr-ui',
    browserslist: ['defaults'],
    htmlSource: html
  };
};
