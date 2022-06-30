'use strict';

module.exports = {
  coverageReporters: ['text', 'html'],
  clearMocks: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testRegex: '.*\\.test\\.(ts|tsx|js)$',
  setupFiles: ['./src/test-utils/jest-setup.js'],
  setupFilesAfterEnv: ['./src/test-utils/jest-framework-setup.js'],
  testEnvironment: 'jest-environment-jsdom'
};
