# QuantumDrive.io

> **Sovereign Systems Portfolio**

[![Live Site](https://img.shields.io/badge/Live%20Site-quantumdrive.io-blue?style=flat-square)](https://quantumdrive.io)
[![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](#license)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)](#)

---

## What Is This?

QuantumDrive.io is the **Sovereign Systems portfolio hub** — a data-driven showcase of all projects in the ecosystem. It is a **Sovereign System**, which means every party in the flow wins: the User gets honest, transparent project information; the Patron gets a credible, unified brand presence; the Vendor builds sustainable, modular work; and the Community is left better for its presence.

> **Live at:** [https://quantumdrive.io](https://quantumdrive.io)

---

## Features

- 10 project cards rendered dynamically from `projects.json`
- Category-grouped sections: Tech, Publishing, Services, Ecosystem
- Dark/light theme toggle with localStorage persistence
- Dynamic stat counters (total projects, live domains)
- Sovereign philosophy section
- Fully responsive — 3-col desktop, 2-col tablet, 1-col mobile
- Fast by default — system fonts, single JSON fetch, gzip compression
- No analytics, no cookies, no tracking — data minimalism by default

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Static HTML5 |
| Styles | CSS3 (custom properties, glassmorphism) |
| JS | Vanilla ES6+ (IIFE-wrapped) |
| Data | `assets/data/projects.json` |
| Hosting | Apache on shared hosting (BlueHost/cPanel) |

**No build step. No bundler. No framework.** Deploy by uploading files directly.

---

## Workspace Structure

```
M:\01_Warp_Projects\
├── 01_projects\
│   ├── 06_quantumdrive.io\  # ← THIS PROJECT
│   └── ...
├── 02_site_design_shortcuts\
└── z.warp.sovereign.projects.template\
```

## Project Structure

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
│       └── projects.json     # THE PROJECT REGISTRY (single source of truth)
├── 01_md_plan_files/         # Internal build docs & plans
│   ├── SOVEREIGN.md          # Sovereign Systems doctrine (read first)
│   ├── AGENTS.md             # AI agent guidance (Warp)
│   ├── BUILD_quantumdrive_master.md  # Master build log
│   ├── CHANGELOG.md          # Change history
│   ├── DEPLOY.md             # Deployment checklist
│   ├── ARCHITECTURE.md       # Architecture reference
│   ├── STYLE_GUIDE.md        # Design system
│   ├── ROADMAP.md            # Product roadmap
│   └── ongoing_plan.md       # Current plan & status
├── .gitattributes
├── .gitignore
├── .htaccess
├── robots.txt
├── LICENSE
└── README.md                 # You are here
```

---

## Adding a New Project

1. Create the project folder in `M:\01_Warp_Projects\01_projects\{NN}_{name}\`
2. Add a new entry to `assets/data/projects.json`
3. Deploy the updated `projects.json`

That's it. The site renders the new card automatically — no HTML or CSS changes needed.

---

## Internal Documentation

| File | Purpose |
|------|---------|
| `SOVEREIGN.md` | **The doctrine. Read this first.** |
| `AGENTS.md` | Technical reference for AI-assisted development (Warp) |
| `BUILD_quantumdrive_master.md` | Full build history and go-live checklist |
| `CHANGELOG.md` | Every meaningful change, dated |
| `DEPLOY.md` | Step-by-step deployment checklist |
| `ARCHITECTURE.md` | Architecture decisions and data flow |
| `STYLE_GUIDE.md` | Design tokens, components, type scale |
| `ROADMAP.md` | Where this is going and why |
| `ongoing_plan.md` | Current sprint status |

---

## License

All rights reserved. © 2026 QuantumDrive / Juan Jose Piedra.

---

*Built with intention. Deployed with precision. A Sovereign System — built so everyone in the flow wins.*
