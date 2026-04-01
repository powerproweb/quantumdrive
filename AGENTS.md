# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

QuantumDrive.io is the product hub / umbrella site for the QuantumDrive suite of tools. It links to and presents the ecosystem products: qdls.io (URL shortener), novavault.io (loyalty OS), and rarefolio.io (tokenized silver CNFTs).

## Architecture

### Frontend (Single-Page Static HTML)

One self-contained `index.html` file with embedded CSS and JS. Dark/light theme toggle. No external stylesheets, no framework, no build step.

**Key features:**
- Product hub dashboard layout with hero section and product cards
- Dark/light theme toggle (stored preference, `data-theme` attribute on `<html>`)
- Purple/cyan gradient colour palette with glassmorphism cards
- Responsive grid (hero, product cards, status pills)
- CSS custom properties for all theme tokens
- System fonts (no external font loading)

## Tech Stack
- Single HTML file with embedded `<style>` and `<script>`
- No dependencies, no npm, no build tools
- Vanilla JS for theme toggle

## Hosting & Deployment
- Static file hosting
- No build step — deploy by uploading `index.html`

## Conventions
- Theme tokens via CSS custom properties (`--bg`, `--txt`, `--glow`, etc.)
- Light mode via `[data-theme="light"]` selector overrides
- Pill-style nav links and status indicators
- Glassmorphism: `backdrop-filter: blur()` on cards and nav

## Important Notes
- This is a single-file site — all CSS and JS are embedded in `index.html`
- No backend, no forms, no dynamic content
