'use strict';
module.exports = {
  presets: [
    /* ["@babel/preset-env", { "loose": true }],  */ '@babel/preset-react',
    '@mapbox/babel-preset-mapbox'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false
        /* "moduleName": "babel-runtime" */
      }
    ]
  ]
};
