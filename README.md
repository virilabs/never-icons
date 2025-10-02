# Never Icons (never-icons)

[![CI/CD for Never Icons](https://github.com/virilabs/never-icons/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/virilabs/never-icons/actions/workflows/nodejs.yml)
[![UI Kit Tests](https://github.com/virilabs/never-icons/actions/workflows/ui-kit.yml/badge.svg?branch=main)](https://github.com/virilabs/never-icons/actions/workflows/ui-kit.yml)
[![Coverage Status](https://img.shields.io/badge/coverage-manual--see--ui--kit-yellow?logo=codecov)](COVERAGE.md)
[![Dependabot Status](https://img.shields.io/badge/dependabot-enabled-brightgreen?logo=dependabot)](https://github.com/virilabs/never-icons/pulls?q=is%3Apr+is%3Aopen+label%3Adependencies)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

---

## Introduction

This project contains the custom icon font for the Never Theme, developed using [icomoon](https://icomoon.io/).

---

## Summary Table

| Folder/File         | Purpose                                 |
|---------------------|-----------------------------------------|
| `src/`              | Source SCSS and icon assets             |
| `dist/`             | Built CSS, fonts, and distributables    |
| `demo/`             | Demo HTML for icon preview              |
| `project/scripts/`  | Build/test/zip scripts                  |
| `icon-manifest.json`| Metadata for icons                      |

---



## Usage Examples

### HTML

```html
<link rel="stylesheet" href="dist/css/never-icons.min.css">
<i class="nv-github"></i>
```

### SCSS

```scss
@import "never-icons";
.my-icon {
  @extend .nv-github;
  color: #333;
}
```

### CSS

```css
.nv-github {
  font-family: 'never-icons';
  font-style: normal;
  /* ... */
}
```

---

## Build & Test Workflow

- Build: `npm run build`
- Lint SCSS/CSS: `npm run lint`
- Test (Playwright): `npm test`
- Prepare (auto-build before publish): `npm run prepare`

### Contributing New Icons

1. Add SVGs to `src/icons/SVG/`.
2. Update `icon-manifest.json` with new icon metadata.
3. Run the build and test scripts.
4. Submit a pull request with your changes.

## Icon Manifest

The `icon-manifest.json` file contains metadata for all icons (name, unicode, tags, etc.) and is used to generate the font and documentation.

---

## License & Usage Terms

This icon font and all associated SVGs, CSS, and demo assets are licensed under the GNU General Public License v2.0 (GPLv2) unless otherwise noted.

- **You may:**
  - Use, modify, and distribute the icons in personal and commercial projects, provided you comply with the GPLv2 terms.
  - Include the icon font and SVGs in open source or proprietary software, as long as you follow the GPLv2 requirements.
  - Remix, adapt, or build upon the icons, provided derivative works are also licensed under GPLv2.

- **You may not:**
  - Use the icons in a way that suggests endorsement by the Never project or its maintainers without permission.
  - Redistribute the icons as a standalone product (e.g., sell or repackage the icons themselves) without including the GPLv2 license and source.

Attribution is appreciated but not required. If you use these icons in a public project, a link back to the Never Theme or this repository is welcome!

> Some icons may be based on or adapted from third-party brands or logos. These remain trademarks of their respective owners. Use such icons in accordance with the brand’s own usage guidelines.

See the LICENSE file for full terms (GPLv2).
