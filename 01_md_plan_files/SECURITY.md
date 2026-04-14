# SECURITY.md — QuantumDrive.io

Security policy for QuantumDrive.io.
Last updated: 2026-04-14

---

## Sovereign Security Commitment

This is a Sovereign System. Security is a commitment to the people in the flow.

- **To the User:** This site collects no data. No analytics, no cookies, no tracking pixels. Theme preference is stored in `localStorage` only — on the user's device, never transmitted.
- **To the Patron:** The site contains no dynamic backends, no forms, no user input — the attack surface is minimal by design.
- **To the Vendor:** The codebase is transparent, static, and auditable.

---

## Reporting a Vulnerability

If you discover a security vulnerability, email: `security@quantumdrive.io`

---

## Security Practices

### Transport Security
- HTTPS enforced via `.htaccess` RewriteRule
- HSTS header: `max-age=31536000; includeSubDomains`
- SSL certificate via Let's Encrypt (auto-renewed via cPanel)

### HTTP Security Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `X-XSS-Protection: 1; mode=block`

### File System
- Directory listing disabled (`Options -Indexes`)
- All dotfiles blocked except `.well-known`
- Backup files blocked at `.htaccess` level

### Data Collection
- **None.** This site is entirely static. No forms, no databases, no server-side processing.
- Theme preference stored in `localStorage` (client-side only, never transmitted).
