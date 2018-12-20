'use strict';
module.exports = {
  presets: [
    [
      '@mapbox/babel-preset-mapbox',
      {
        override({ name, options }) {
          if (name === '@babel/preset-env') {
            // Override a particular option
            return Object.assign({}, options, { modules: 'commonjs' });
          }

          // Do not override options for other plugins/presets
          return options;
        }
      }
    ]
  ]
};
