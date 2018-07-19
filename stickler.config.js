'use strict';

module.exports = {
  ignore: ['_batfish*/**', 'pkg/**'],
  jsLint: {
    react: true,
    browser: true,
    sourceType: 'esm',
    flow: true,
    eslintConfig: {
      rules: {
        'prefer-const': 'off',
        '@mapbox/stickler/react/no-deprecated': 'off',
        '@mapbox/stickler/react/no-string-refs': 'off',
        '@mapbox/stickler/react/no-access-state-in-setstate': 'off',
        '@mapbox/stickler/react/jsx-boolean-value': 'off'
      }
    },

    overrides: [
      {
        files: ['src/test-utils/**', 'src/**/__tests__/**'],
        jest: true
      },
      {
        files: ['*.js', 'scripts/**'],
        node: true,
        flow: false,
        react: false,
        sourceType: 'cjs'
      }
    ]
  }
};
