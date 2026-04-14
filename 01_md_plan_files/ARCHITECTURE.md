# ARCHITECTURE.md — QuantumDrive.io

Technical architecture reference. Keep this in sync with `AGENTS.md`.
This project is a **Sovereign System** — architecture decisions are evaluated against the multi-party win standard.
See `01_md_plan_files/SOVEREIGN.md` for the governing doctrine.
Last updated: 2026-04-14

---

## Overview

QuantumDrive.io is a **static single-page site** serving as the Sovereign Systems portfolio hub.

```
[User Browser]
     |
     ↓
[Apache / .htaccess]
     |
     └── Static files (index.html, styles.css, main.js, projects.json)
```

No backend. No database. No server-side processing.

---

## Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | HTML5 | Single `index.html` |
| Styles | CSS3 | External `assets/css/styles.css`, custom properties |
| JS | Vanilla ES6+ | External `assets/js/main.js`, IIFE-wrapped |
| Data | JSON | `assets/data/projects.json` — the project registry |
| Server | Apache (BlueHost/cPanel) | Shared hosting |
| Build | None | Deploy by FTP upload |

---

## Workspace Context

```
M:\01_Warp_Projects\
├── 01_projects\
│   ├── 06_quantumdrive.io\  # ← THIS PROJECT
│   └── ...
├── 02_site_design_shortcuts\
└── z.warp.sovereign.projects.template\
```

## Folder Structure

```
06_quantumdrive.io/
├── index.html                # Homepage (portfolio hub)
├── 404.html                  # Custom error page
├── assets/
│   ├── css/
│   │   └── styles.css        # Full design system
│   ├── js/
│   │   └── main.js           # Theme toggle + card renderer
│   └── data/
│       └── projects.json     # THE PROJECT REGISTRY
├── 01_md_plan_files/         # Internal docs (not served)
├── .gitattributes
├── .gitignore
├── .htaccess
├── robots.txt
├── LICENSE
└── README.md
```

---

## Key Architectural Decisions

### Decision 1: Data-driven card rendering from JSON
**Context:** The portfolio will grow from 10 projects to many more.
**Decision:** All project cards rendered by JS from `projects.json` — zero hardcoded HTML.
**Consequences:** Adding a project requires only a JSON edit. No HTML/CSS changes.
**Sovereign impact:** Vendor win (sustainable architecture), Patron win (easy to update), User win (always current data).

### Decision 2: No backend, no analytics, no tracking
**Context:** A portfolio hub does not need server-side processing or user tracking.
**Decision:** Entirely static. No cookies, no analytics, no server-side code.
**Sovereign impact:** User win (privacy respected), Vendor win (zero maintenance), Community win (no data extraction).

### Decision 3: External CSS/JS instead of embedded
**Context:** The original site embedded all CSS and JS in `index.html` (780 lines).
**Decision:** Extract to separate files for maintainability while keeping the no-build-step approach.
**Sovereign impact:** Vendor win (clean, maintainable codebase).

---

## Performance Architecture

- **No build step** — files served as-is
- **Browser caching** via `.htaccess` (1yr images/fonts, 1mo CSS/JS, 1hr HTML)
- **Gzip compression** via `mod_deflate` on all text assets
- **Single fetch** — `projects.json` is the only runtime request beyond the page itself
- **System fonts** — no external font loading, zero render-blocking requests
