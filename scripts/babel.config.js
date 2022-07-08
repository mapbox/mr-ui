module.exports = {
  presets: ['@babel/preset-react'],
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
