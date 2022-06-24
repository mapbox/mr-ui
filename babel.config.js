module.exports = {
  presets: ['@mapbox/babel-preset-mapbox'],
  overrides: [
    {
      test: /\.tsx$/,
      presets: [
        '@mapbox/babel-preset-mapbox',
        [
          '@babel/typescript',
          {
            allExtensions: true,
            isTSX: true
          }
        ]
      ]
    }
  ]
};
