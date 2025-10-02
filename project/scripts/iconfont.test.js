const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Correct path to demo/index.html
const DEMO_PATH = path.join(__dirname, '../../demo/index.html');

function getIconClassNames() {
  const html = fs.readFileSync(DEMO_PATH, 'utf8');
  // Example: <i class="nv-never nv-never-ICONNAME"></i>
  const regex = /nv-never-([a-zA-Z0-9_-]+)/g;
  const found = new Set();
  let match;
  while ((match = regex.exec(html))) {
    found.add(match[1]);
  }
  return Array.from(found);
}

const iconNames = getIconClassNames();

test.describe('Never Icon Font Demo', () => {
  test('all icons render', async ({ page }) => {
    await page.goto('file://' + path.resolve(DEMO_PATH));
    for (const icon of iconNames) {
      const selector = `.nv-never.nv-never-${icon}`;
      const el = await page.$(selector);
      expect(el, `Icon ${icon} should be present`).not.toBeNull();
      // Optionally, check if the icon is visible
      expect(await el.isVisible(), `Icon ${icon} should be visible`).toBeTruthy();
    }
  });
});