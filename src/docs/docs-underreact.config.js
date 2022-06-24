const html = require('./html.js');
const path = require('path');

function excludeTsFromFileLoader(config) {
  const fileloader = config.module.rules
    .find(obj => obj.oneOf)
    .oneOf.find(rule => rule.loader && rule.loader.includes('/file-loader/'));

  // Prevent file-loader from treating`.ts` or `.tsx` files as an asset
  fileloader.exclude = [...fileloader.exclude, /\.tsx?$/];
}

module.exports = () => {
  return {
    siteBasePath: '/mr-ui',
    browserslist: ['defaults'],
    jsEntry: path.resolve(__dirname, './index.js'),
    htmlSource: html,
    webpackConfigTransform: config => {
      // Add extensions to support TypeScript. Overriding this configuration
      // means adding in the defaults as well.
      config.resolve.extensions = ['.js', '.json', '.ts', '.tsx'];

      excludeTsFromFileLoader(config);

      config.module.rules.push({
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../../tsconfig.json')
          }
        }
      });

      return config;
    }
  };
};
