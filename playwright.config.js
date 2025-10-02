// playwright.config.js
// Enable cross-browser testing for Chromium, Firefox, and WebKit
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } },
  ],
  // Optionally, set testDir if tests are not in the default location
  // testDir: './',
  // Optionally, set outputDir for test artifacts
  // outputDir: 'test-results/',
};
module.exports = config;
