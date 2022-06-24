'use strict';

module.exports = {
  coverageReporters: ['text', 'html'],
  clearMocks: true,
  testRegex: ".*\\.test\\.(ts|tsx|js)$",
  setupFiles: ['./src/test-utils/jest-setup.js'],
  setupFilesAfterEnv: ['./src/test-utils/jest-setup-framework.js']
};
