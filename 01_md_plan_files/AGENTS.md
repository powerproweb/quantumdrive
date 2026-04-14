# AGENTS.md — QuantumDrive.io

This file provides guidance to **WARP** (warp.dev) when working with code in this repository.
Keep this file accurate and up-to-date — it is the AI's primary source of truth for this project.

---

## Sovereign Directive

**This is a Sovereign System.** Before implementing any feature, architecture decision, UX pattern, API design, copy choice, or data practice, apply the Sovereign Check:

1. **User** — Does this respect and serve the user's actual goal?
2. **Patron** — Does this serve the patron's mission honestly?
3. **Vendor** — Does this produce sustainable, quality work?
4. **Community** — Does this leave the broader ecosystem better, not worse?

If the answer to any question is "no" or "I don't know," flag it and resolve it before proceeding.

**Never implement:**
- Dark patterns or manipulative UX
- Lock-in architecture (systems a user cannot escape without extreme cost)
- Opaque data collection or retention beyond stated purpose
- Extractive monetization patterns
- Blame-shifting error design

The full doctrine is in `01_md_plan_files/SOVEREIGN.md`. Read it before making significant changes to this project.

---

## Workspace Layout

All Sovereign Systems projects live inside a shared workspace on drive `M:\`. Here is the full structure:

```
M:\01_Warp_Projects\
├── 01_projects\                            # All active projects (numbered sequentially)
│   ├── 01_rarefolio.io\
│   ├── 02_novavault.io\
│   ├── 03_drjessie.life\
│   ├── 04_authorjuanjose.io\
│   ├── 05_qdls.io\
│   ├── 06_quantumdrive.io\                # ← THIS PROJECT
│   ├── 07_quantumdigitalpublishing.io\
│   ├── 08_quantumstoryforge.io\
│   ├── 09_powerproweb.com\
│   └── 10_recallos\
├── 02_site_design_shortcuts\               # Windows shortcuts (.lnk) to each project's design folder
│   ├── 01_RareFolio.io_design_folder.lnk
│   ├── 02_NovaVault.io_design_folder.lnk
│   └── ... (one .lnk per project)
└── z.warp.sovereign.projects.template\     # The Sovereign Systems project template
    ├── 01_md_plan_files\                   # Template documentation files
    └── z.warp.projects.template.archived\  # Previous template version (reference only)
```

### Key Paths

- **This project:** `M:\01_Warp_Projects\01_projects\06_quantumdrive.io\`
- **All projects:** `M:\01_Warp_Projects\01_projects\`
- **Design shortcuts:** `M:\01_Warp_Projects\02_site_design_shortcuts\`
- **Project template:** `M:\01_Warp_Projects\z.warp.sovereign.projects.template\`

---

## Project Overview

QuantumDrive.io is the **Sovereign Systems portfolio hub** — a single-page showcase of all projects in the ecosystem.

- **Live URL:** https://quantumdrive.io
- **Hosting:** Apache on shared hosting (BlueHost/cPanel)
- **Stack:** Static HTML + external CSS + vanilla JS, data-driven from JSON
- **Status:** Active — redesigned 2026-04-14

---

## Architecture

### Frontend (Single-Page Static HTML + External CSS/JS)

One `index.html` with linked `assets/css/styles.css` and `assets/js/main.js`. No build step, no bundler, no framework.

**Key pages:**
- `index.html` — Homepage / portfolio hub (all project cards rendered by JS)
- `404.html` — Custom error page

**Key JS / CSS files:**
- `assets/css/styles.css` — Full design system: purple/cyan glassmorphism, dark/light toggle, system fonts
- `assets/js/main.js` — Theme toggle + data-driven card renderer (fetches `projects.json`)

### Data-Driven Project Registry

**This is the most important architectural concept in this project.**

All project cards are powered by `assets/data/projects.json`. The HTML contains zero hardcoded project content — `main.js` fetches the JSON and renders everything dynamically.

**Registry file:** `assets/data/projects.json`

**Schema for each entry:**

```json
{
  "id": 11,
  "name": "NewProject.io",
  "domain": "https://newproject.io",
  "tagline": "One-line description of the project.",
  "status": "live",
  "category": "tech",
  "icon": "link",
  "bullets": [
    "Feature one",
    "Feature two",
    "Feature three"
  ],
  "ctas": [
    { "label": "Open newproject.io", "url": "https://newproject.io/" }
  ]
}
```

**Field reference:**

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| `id` | number | — | Project number (matches folder prefix) |
| `name` | string | — | Display name |
| `domain` | string | — | Live URL |
| `tagline` | string | — | One-line description |
| `status` | string | `live`, `building`, `placeholder` | Current state |
| `category` | string | `tech`, `publishing`, `services`, `ecosystem` | Card grouping |
| `icon` | string | `link`, `brain`, `ledger`, `book`, `newspaper`, `quill`, `globe`, `leaf`, `diamond`, `hub` | Icon key (mapped to emoji in main.js) |
| `bullets` | string[] | — | 2-3 short feature lines |
| `ctas` | object[] | `{ label, url }` | Card buttons |

### How to Add a New Project to the Live Site

1. Create the project folder: `M:\01_Warp_Projects\01_projects\{NN}_{name}\`
2. Open `assets/data/projects.json` in this project
3. Add a new entry using the schema above
4. Deploy the updated `projects.json` to the server
5. The site renders the new card automatically — no HTML or CSS changes needed
6. Optionally add a `.lnk` design shortcut in `02_site_design_shortcuts\`

### Category Sections (rendered by main.js)

| Category key | Label | Description |
|---|---|---|
| `tech` | Tech & Infrastructure | Link infrastructure, AI memory, loyalty systems |
| `publishing` | Publishing & Creative | Books, worldbuilding, media publishing |
| `services` | Professional Services | Web design, hosting, holistic health |
| `ecosystem` | Ecosystem | Portfolio hub, flagship collections |

### Dynamic Stats

`main.js` computes these from the registry on every page load:
- Total project count → `#statTotal`
- Live domain count → `#statLive`
- Nav pill count → `#projectCount`

---

## Hosting & Deployment

- Apache on shared hosting (BlueHost/cPanel)
- `.htaccess` at root handles: HTTPS canonicalization, clean URLs, security headers, browser caching, gzip compression, error pages
- No build step — deploy by uploading files directly
- To update the portfolio: upload only the changed `projects.json`

---

## Conventions

- All JS is vanilla ES6+, wrapped in one IIFE — no modules, no bundler
- Theme tokens via CSS custom properties (`--bg`, `--txt`, `--glow`, etc.)
- Light mode via `[data-theme="light"]` selector overrides
- Theme cycle: auto → dark → light → auto (stored in `localStorage` as `qd_theme`)
- Cards rendered via DOM manipulation from JSON data
- HTML escaping on all user-facing strings via `escapeHtml()` helper
- File naming: `kebab-case` for all HTML/CSS/JS files

---

## Important Notes

- This site has **no backend** — it is entirely static HTML/CSS/JS + JSON
- `assets/data/projects.json` is the single source of truth for all project data on the site
- Adding a new project **only** requires editing `projects.json` — no HTML changes
- The `.htaccess` is configured for `quantumdrive.io` — do not use on a different domain without updating

### PowerShell File Encoding Warning

**Windows PowerShell 5.1's `-Encoding UTF8` always writes a UTF-8 BOM (byte order mark — 3 invisible bytes `EF BB BF` at the start of the file).** Apache cannot parse `.htaccess` files that start with a BOM and will throw a 500 Internal Server Error.

**When writing or modifying `.htaccess` (or any file Apache reads directly) from PowerShell, always use BOM-free UTF-8:**

```powershell
# CORRECT — BOM-free UTF-8
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)

# WRONG — adds BOM, breaks Apache
Set-Content -Path $filePath -Value $content -Encoding UTF8
```

This applies to `.htaccess` and `robots.txt`. Standard `.html`, `.css`, `.js`, and `.json` files are not affected.

---

## Quick Reference

| What | Where |
|------|-------|
| Main styles | `assets/css/styles.css` |
| Sitewide JS | `assets/js/main.js` |
| Project registry | `assets/data/projects.json` |
| Sovereign doctrine | `01_md_plan_files/SOVEREIGN.md` |
| Build log | `01_md_plan_files/BUILD_quantumdrive_master.md` |
| Deployment | `01_md_plan_files/DEPLOY.md` |
| Current plan | `01_md_plan_files/ongoing_plan.md` |
| Changelog | `01_md_plan_files/CHANGELOG.md` |
| All projects | `M:\01_Warp_Projects\01_projects\` |
| Design shortcuts | `M:\01_Warp_Projects\02_site_design_shortcuts\` |
| Project template | `M:\01_Warp_Projects\z.warp.sovereign.projects.template\` |
