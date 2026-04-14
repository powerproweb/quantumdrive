# API_DOCS.md — QuantumDrive.io

Last updated: 2026-04-14

---

## No Backend API

QuantumDrive.io is a **static site** with no server-side processing. There are no API endpoints.

The only data source is the static file `assets/data/projects.json`, fetched client-side by `main.js`.

---

## Project Registry (Client-Side Data)

**File:** `assets/data/projects.json`
**Fetched by:** `assets/js/main.js` via `fetch()`
**Content-Type:** `application/json`

See `01_md_plan_files/AGENTS.md` for the full schema and field reference.

---

## External APIs Referenced

Individual projects in the portfolio may have their own APIs:

| Project | API | URL |
|---------|-----|-----|
| QDLS.io | Developer API | https://qdls.io/developer-api |
| NovaVault.io | Demo request | https://novavault.io/#contact |

These are external to QuantumDrive.io — this project only links to them.
