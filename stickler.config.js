'use strict';

module.exports = {
  jsLint: {
    react: true,
    browser: true,
    moduleType: 'esm',
    flow: true,
    eslintConfig: {
      rules: {
        'prefer-const': 'off',
        'react/no-deprecated': 'off',
        'react/no-string-refs': 'off',
        'react/no-access-state-in-setstate': 'off',
        'react/jsx-boolean-value': 'off'
      }
    },

    overrides: [
      {
        files: ['src/test-utils/**', 'src/**/__tests__/**'],
        jest: true
      },
      {
        files: ['*.js', 'scripts/**'],
        node: 6,
        flow: false,
        react: false,
        moduleType: 'cjs'
      }
    ]
  }
};
