# DEPLOY.md — QuantumDrive.io

Step-by-step deployment guide. Follow this every time you ship.
Last updated: 2026-04-14

---

## Environments

| Environment | URL | Host | Branch |
|-------------|-----|------|--------|
| Production | https://quantumdrive.io | BlueHost/cPanel | `main` |
| Local | Open `index.html` in browser | Local filesystem | any |

---

## First Deploy (New Setup)

### 1. Server Setup
- [ ] Domain acquired and DNS pointed to host
- [ ] SSL certificate issued (Let's Encrypt via cPanel)
- [ ] FTP/SSH credentials secured

### 2. File Upload
- [ ] Upload all project files via FTP (FileZilla) or SSH
- [ ] Verify `.htaccess` uploaded correctly (FTP sometimes skips dotfiles)
- [ ] Confirm `assets/data/projects.json` is accessible at `https://quantumdrive.io/assets/data/projects.json`

### 3. Verify Live Site
- [ ] https://quantumdrive.io loads
- [ ] http:// redirects to https://
- [ ] www. redirects to non-www
- [ ] 404 page works
- [ ] All project cards render from JSON
- [ ] Theme toggle works (dark/light/auto)
- [ ] All external links open correctly

---

## Ongoing Deployment (Updates)

### Updating the Project Portfolio
- [ ] Edit `assets/data/projects.json` (add/update/remove project entries)
- [ ] Upload only `assets/data/projects.json` via FTP
- [ ] Hard refresh the live site and verify new cards appear

### Updating the Site
- [ ] Upload only changed files
- [ ] Always upload `.htaccess` explicitly (FTP clients may skip dotfiles)
- [ ] Hard refresh (Ctrl+Shift+R) and check for visual regressions

### Sovereign Post-Deploy Check
- [ ] No dark patterns shipped: no fake urgency, no misleading status badges
- [ ] All project statuses are accurate (Live / Building / Placeholder)
- [ ] External links go directly to the real project — no tracking interstitials
- [ ] No new data collection introduced

---

## Common Issues & Fixes

### .htaccess 500 Internal Server Error (BOM issue)
**Most common cause on Windows:** PowerShell 5.1's `-Encoding UTF8` adds a UTF-8 BOM (3 invisible bytes `EF BB BF`) at the start of the file. Apache cannot parse a `.htaccess` that starts with a BOM.

**Fix:** Rewrite the file with BOM-free UTF-8:
```powershell
$content = [System.IO.File]::ReadAllText($htaccessPath)
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($htaccessPath, $content, $utf8NoBom)
```

**Prevention:** Never use `Set-Content -Encoding UTF8` for `.htaccess` or any Apache-parsed file. Always use `[System.IO.File]::WriteAllText()` with `UTF8Encoding($false)`.

---

## Rollback Plan

1. **Quick fix:** Re-upload the previous version of the broken file via FTP
2. **Full rollback:** `git checkout {LAST_GOOD_COMMIT}` → re-upload all changed files

---

## FTP Settings (BlueHost)

| Setting | Value |
|---------|-------|
| Host | ftp.quantumdrive.io |
| Port | 21 |
| Protocol | FTP with explicit TLS |
| Username | _(stored in password manager)_ |
| Password | _(stored in password manager — never in this file)_ |
| Remote path | `/public_html/` |
