# Changelog — QuantumDrive.io

All notable changes to QuantumDrive.io will be documented in this file.
Follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) conventions.
Newest entries go at the **TOP** within each section.

---

## [Unreleased]

### Added
- Nothing pending

---

## [2.0.0] — 2026-04-14

### Added
- Full Sovereign Systems template scaffold (`01_md_plan_files/` with all 12 docs)
- `assets/data/projects.json` — data-driven project registry (single source of truth for all 10 projects)
- `assets/css/styles.css` — extracted and expanded design system
- `assets/js/main.js` — theme toggle + data-driven card renderer
- `404.html` — custom error page
- `.htaccess` — full Apache config (HTTPS, security headers, caching, gzip, clean URLs)
- `robots.txt`, `LICENSE`
- Sovereign philosophy section on the homepage
- Category-grouped project cards: Tech & Infrastructure, Publishing & Creative, Professional Services, Ecosystem
- Dynamic stat counters (total projects, live domains) computed from JSON
- Nav pill with auto-updating project count

### Changed
- Redesigned homepage from 3-product hub to 10-project Sovereign portfolio showcase
- Extracted CSS from embedded `<style>` to external `assets/css/styles.css`
- Extracted JS from embedded `<script>` to external `assets/js/main.js`
- Replaced hardcoded product cards with data-driven rendering from `projects.json`
- Hero section reframed for portfolio scope
- Footer updated with Sovereign branding

### Removed
- Hardcoded QDLS, NovaVault, RareFolio product cards (replaced by JSON-driven rendering)
- "Room to expand" accordion section (replaced by Sovereign philosophy section)
- Root-level `AGENTS.md` (migrated to `01_md_plan_files/AGENTS.md`)
- Root-level `CHANGELOG.md` (migrated to `01_md_plan_files/CHANGELOG.md`)
- Stale `01_quantumdrive.io - Shortcut.lnk`

### Sovereign
- Applied full Sovereign Systems template with filled-in doctrine
- All project status badges show real status (Live / Building / Placeholder)
- No analytics, no cookies, no tracking — data minimalism by default
- Project registry enables honest, transparent portfolio presentation

---

## [1.0.0] — 2025-12-01

### Added
- Initial product hub page (`index.html`) with dark/light theme toggle
- Project scaffolding: `.gitignore`, `.gitattributes`, `AGENTS.md`, `README.md`
- Three hardcoded product cards: QDLS, NovaVault, RareFolio
- Purple/cyan glassmorphism design system (embedded CSS)
- Theme toggle with localStorage persistence (embedded JS)
