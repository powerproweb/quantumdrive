# STYLE_GUIDE.md — QuantumDrive.io

The design system for QuantumDrive.io.
Last updated: 2026-04-14

---

## Brand Identity

**Theme:** Dark glassmorphism with purple/cyan gradient accents
**Mood:** Premium, precise, confident, modular
**Core visual idea:** Museum-grade portfolio showcase with startup velocity

---

## Color Palette

All colors defined as CSS custom properties in `assets/css/styles.css`.

### Dark Mode (Default)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#0b0f17` | Page background |
| `--bg2` | `#0f172a` | Gradient end |
| `--card` | `#0b1220cc` | Card background |
| `--txt` | `#e5e7eb` | Body text |
| `--muted` | `#a7b0c0` | Secondary text |
| `--glow` | `#7c3aed` | Purple accent |
| `--glow2` | `#22d3ee` | Cyan accent |
| `--good` | `#34d399` | Live status |
| `--warn` | `#fbbf24` | Building status |
| `--bad` | `#fb7185` | Error states |

### Light Mode

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#f7f8fb` | Page background |
| `--bg2` | `#ffffff` | Card backgrounds |
| `--txt` | `#0b1220` | Body text |
| `--muted` | `#465067` | Secondary text |
| `--glow` | `#6d28d9` | Purple accent |
| `--glow2` | `#0891b2` | Cyan accent |

---

## Typography

**Font stack:** System fonts — no external font loading.

```
--sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
```

| Level | Size | Weight | Usage |
|-------|------|--------|-------|
| H1 | 40px (34px mobile) | 700 | Hero headline |
| H2 | 22px | 700 | Section headings |
| H3 | 18px | 700 | Card titles |
| Body | 16px | 400 | Paragraph text |
| Small | 14px | 400 | Card body, nav |
| Mono | 12px | 400 | Badges, chips, stats |

---

## Components

### Cards
- `border-radius: 18px`
- Glassmorphism: gradient background with subtle transparency
- Hover: `translateY(-2px)` lift with purple border glow

### Buttons
- `.btn` — default ghost button
- `.btn.primary` — purple/cyan gradient fill
- `.btn.small` — compact for card CTAs
- `.btn.linkish` — transparent, muted text

### Badges
- `.badge.live` — green text
- `.badge.building` — yellow text
- `.badge.placeholder` — muted text

### Pills (Nav)
- Full-width rounded, glassmorphism background
- `.pill-count` — mono font counter inside pill

---

## Sovereign UX Principles

See `01_md_plan_files/SOVEREIGN.md` for the full doctrine.

- Design for the user's goal, not platform metrics
- No dark patterns — ever
- Status badges must reflect real project state
- Error states are helpful, never punishing
- No manufactured urgency or fake scarcity
