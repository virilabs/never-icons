const { test, expect } = require('@playwright/test');
const path = require('path');

// Path to the actual demo page
const DEMO_PATH = path.join(__dirname, '../../demo/index.html');

test.describe('Never Icon Font Visual Regression', () => {
  test('icon grid visual regression', async ({ page }) => {
    await page.goto('file://' + path.resolve(DEMO_PATH));
    // Wait for icons to render (in case of async font loading)
    await page.waitForTimeout(500); // adjust if needed
    // Locate the icon grid using Bootstrap's row class
    const grid = await page.$('.row.g-4.mt-2');
    expect(grid).not.toBeNull();
    // Take screenshot of the grid only
    const screenshot = await grid.screenshot();
    // Compare to baseline (Playwright will store baseline in __screenshots__)
    expect(screenshot).toMatchSnapshot('icon-grid.png', { threshold: 0.02 });
  });
});