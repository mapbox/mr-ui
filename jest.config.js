'use strict';

module.exports = {
  coverageReporters: ['text', 'html'],
  clearMocks: true,
  testMatch: ['**/__tests__/*.test.js'],
  setupFiles: ['./src/test-utils/jest-setup.js'],
  setupFilesAfterEnv: ['./src/test-utils/jest-setup-framework.js']
};
