const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Correct paths to demo and minified CSS
const DEMO_PATH = path.join(__dirname, '../../demo/index.html');
const MIN_CSS_PATH = path.join(__dirname, '../../dist/css/never-icons.min.css');

function getIconClassNames() {
  const html = fs.readFileSync(DEMO_PATH, 'utf8');
  const regex = /nv-never-([a-zA-Z0-9_-]+)/g;
  const found = new Set();
  let match;
  while ((match = regex.exec(html))) {
    found.add(match[1]);
  }
  return Array.from(found);
}

const iconNames = getIconClassNames();

test.describe('Never Icon Font Demo (Minified CSS & Accessibility)', () => {
  test('all icons render with minified CSS', async ({ page }) => {
    await page.goto('file://' + path.resolve(DEMO_PATH));
    // Replace CSS link to use minified CSS
    await page.evaluate(() => {
      const link = document.querySelector('link[href*="never-icons.css"]');
      if (link) link.href = link.href.replace('never-icons.css', 'never-icons.min.css');
    });
    for (const icon of iconNames) {
      const selector = `.nv-never.nv-never-${icon}`;
      const el = await page.$(selector);
      expect(el, `Icon ${icon} should be present`).not.toBeNull();
      expect(await el.isVisible(), `Icon ${icon} should be visible`).toBeTruthy();
    }
  });

  test('icons have correct accessibility attributes', async ({ page }) => {
    await page.goto('file://' + path.resolve(DEMO_PATH));
    const icons = await page.$$('.nv-never');
    for (const icon of icons) {
      const ariaHidden = await icon.getAttribute('aria-hidden');
      const role = await icon.getAttribute('role');
      const ariaLabel = await icon.getAttribute('aria-label');
      // Decorative: aria-hidden="true"
      if (ariaHidden === 'true') {
        expect(role).toBeNull();
        expect(ariaLabel).toBeNull();
      }
      // Informative: role="img" and aria-label or adjacent .sr-only
      if (role === 'img') {
        expect(ariaHidden).toBeNull();
        expect(ariaLabel || await icon.evaluate(el => !!el.nextElementSibling && el.nextElementSibling.classList.contains('sr-only'))).toBeTruthy();
      }
    }
  });
});