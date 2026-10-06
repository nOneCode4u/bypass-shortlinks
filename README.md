# Bypass Shortlinks

> Automatically bypass link shorteners, skip countdown timers, ad walls, and multi-page redirects. Supports 400+ domains with specialized rules for Indian shortlink networks & premium file hosters.

[![Install Variant 1 (Debloated)](https://img.shields.io/badge/%E2%9A%A1%20Install%20Variant%201-Debloated%20Edition-7040D4?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js)
[![Install Variant 2 (Original AIO)](https://img.shields.io/badge/%E2%9A%A1%20Install%20Variant%202-Original%20AIO%20Base-3DDC84?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks_Original.user.js)
[![Daily Build](https://img.shields.io/github/actions/workflow/status/nOneCode4u/bypass-shortlinks/build.yml?style=for-the-badge&label=Daily%20Build&logo=githubactions&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/actions)
[![Supported Sites](https://img.shields.io/badge/Supported%20Domains-400%2B-0969da?style=for-the-badge&logo=internetexplorer&logoColor=white)](supported_sites.txt)
[![License](https://img.shields.io/badge/License-Unlicense-blue?style=for-the-badge)](LICENSE)

---

## ⚡ Quick Install — Two Separate Variants

This repository publishes **two independent userscripts**. Install either one, or both side by side.

| | 🌟 **Variant 1 — Debloated** | 🚀 **Variant 2 — Original AIO** |
|---|---|---|
| **Install** | [**⬇ Install Variant 1**](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js) | [**⬇ Install Variant 2**](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks_Original.user.js) |
| **File** | `Bypass_Shortlinks.user.js` | `Bypass_Shortlinks_Original.user.js` |
| **Upstream base** | [gongchandang49 debloated](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated) | [BloggerPemula #431691](https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks) |
| **Page activation** | Granular `@match` / `@include` per domain | Global wildcard `*://*/*` |
| **Anti-detection hardening** | ✅ 7-pass obfuscation | ❌ Plain source |
| **Domain coverage** | 400+ explicitly listed | Every site (broadest) |
| **Browser overhead** | Lower — runs only on known shorteners | Higher — evaluates every page |
| **Settings menu** | ✅ Additional AIO Bypass Settings | ✅ Additional AIO Bypass Settings |
| **Tracking removed** | ✅ | ✅ |
| **Best for** | Everyday browsing, speed, privacy | Catching obscure or brand-new shorteners |

---

### 🌟 Variant 1 — Debloated & Hardened  *(Recommended)*

Lightweight and stealthy. Activates only on the 400+ domains it knows, and its source is put through seven obfuscation passes so shortener operators cannot grep for the selectors that defeat them.

[![Install Variant 1](https://img.shields.io/badge/%E2%9A%A1%20Install%20Variant%201-Debloated%20Edition-7040D4?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js)

### 🚀 Variant 2 — Original AIO Full Base

Maximum reach. Keeps BloggerPemula's complete original architecture and multilingual headers, and runs on every page so it can catch shorteners that are not yet on any domain list. All tracking redirects and donation nags have been stripped and replaced with direct navigation.

[![Install Variant 2](https://img.shields.io/badge/%E2%9A%A1%20Install%20Variant%202-Original%20AIO%20Base-3DDC84?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks_Original.user.js)

> 💡 **Running both at once is safe.** They use separate `@version` lines and separate update URLs, so Violentmonkey and Tampermonkey treat them as two distinct scripts and update each independently.

*Updates are checked and fetched automatically by your userscript manager when new builds are published.*

---

## 🌐 Compatible Browsers & Recommendations

| Browser | Userscript Manager | Recommended Adblocker |
|---|---|---|
| **Firefox** (Desktop/Android) | **[Violentmonkey](https://violentmonkey.github.io/)** (Best performance) | **[uBlock Origin](https://ublockorigin.com/)** |
| **Brave** | **[Violentmonkey](https://violentmonkey.github.io/)** | Built-in Shields + uBlock Origin |
| **Chrome / Edge** | **[Tampermonkey](https://tampermonkey.net/)** | uBlock Origin Lite or AdGuard |
| **Kiwi Browser** (Android) | **[Violentmonkey](https://violentmonkey.github.io/)** | uBlock Origin |

---

## 🚀 Key Features

* ⏩ **Zero Countdown Delays**: Skips 10s to 60s artificial timers on link shorteners automatically.
* 🛡️ **Anti-Adblock Stealth**: Neutralises adblock walls, fake bait element checks, and detection scripts across 25+ global variable names.
* 🤖 **Smart Math & Turnstile Automation**: Solves mathematical expression challenges (`5 + 3`, `sqrt(16)`), digit-order captchas, and polls Cloudflare Turnstile token inputs.
* 🔒 **100% Privacy Focused**: Zero tracking telemetry, zero analytics redirects, and zero third-party logging servers.
* 🎯 **Specialized Indian Networks Coverage**: Custom multi-step routing for `softurl.in`, `gplinks`, `shrinkme`, `droplink`, `lksfy`, `rocklinks`, `vplink`, `jrlinks`, `4hi.in`, `techmint.in`, and 80+ generic Indian news/blog networks.
* 📁 **File Hosters Fast-Track**: Skips queues and direct-links downloads on `mega4upload`, `uploady.io`, `modsfire`, `dailyuploads`, `jioupload`, `cloudfam`, `frdl`, `rapidgator`, and more.
* 🛡️ **Anti-Clickjacking Protection**: Converts button clicks into sanitized form submissions to avoid deceptive transparent ad overlays.

---

## ⚙️ Settings & Configuration ("Additional AIO Bypass Settings")

Open your userscript manager menu (Violentmonkey/Tampermonkey extension popup) while visiting any web page to access the **Additional AIO Bypass Settings** dialog:

| Setting Option | Default | Purpose & Behavior |
|---|---|---|
| **Auto Mode vs. Manual Mode** | Auto (on) | When enabled, navigates immediately. In manual mode, an unobtrusive **Proceed →** button appears when the link is unlocked. |
| **Fast Timer (`TimerFC`)** | Disabled | Accelerates timers by dividing `setTimeout` / `setInterval` delays to 50ms intervals. |
| **Timer Delay (`TDelay`)** | 1000ms | Threshold delay above which timers are accelerated. |
| **Open Links Same Tabs (`SameTab`)** | Disabled | Forces popup and `target="_blank"` link targets to stay within the active tab. |
| **Enable Context Menu (`RightFC`)** | Disabled | Prevents sites from hijacking right-clicks, copy-paste, or text selection. |
| **Enable Always Ready (`BlockFC`)** | Disabled | Overrides visibility state so timers continue counting down in background tabs. |
| **Enable Popup Blocker (`BlockPop`)** | Disabled | Shows an interactive dialog asking for confirmation before opening popups. |
| **Enable Anti Debug (`AntiDebug`)** | Disabled | Neutralises console wiping, debugger statements, and timing-based developer tools detection. |
| **Disable Adblock Detections (`Adblock`)** | Disabled | Installs aggressive adblocker detection neutralizing hooks and DOM bait element fakers. |
| **Disable Prompts (`Prompt`)** | Disabled | Suppresses `alert()`, `confirm()`, and cookie consent modal popups. |
| **Auto Solve Turnstile / Cloudflare (`AutoTurnstile`)** | **Enabled** | Automatically watches for Turnstile challenge completion and submits the proceed form. |
| **Fast-Track Filehost Queues (`SkipQueue`)** | **Enabled** | Automatically zeroes cooldown timers and dismisses adblock queue modals on file hosts (Cloudfam, FRDL, etc.). |
| **Anti-Clickjacking Form Protection (`SafeForm`)** | **Enabled** | Intercepts hijacked click events on download links and converts them into direct sanitized form submissions. |

---

## 🏗️ 3-Layer Architecture

```
Layer 1: Daily Build Pipeline (06:00 UTC)
   ├── 1_download_and_patch.py (Fetches Codeberg upstream + patches new domains)
   ├── 2_generate_includes.py (Regex domain extractor -> match/include rules)
   ├── 3_patch.py (Debloater, rebrander, version stamper, injects AIO menu)
   ├── 4_add_extra_bypasses.py (Merges extra_bypasses/*.js modules)
   ├── scripts/obfuscate.py (7-pass anti-grep hardening for Variant 1)
   └── build_variant2.py (Builds Variant 2 from BloggerPemula base)
           │
           ▼
Layer 2: Runtime Userscripts (Runs in browser at document-start)
   ├── Variant 1: Bypass_Shortlinks.user.js (Debloated, granular @match rules)
   └── Variant 2: Bypass_Shortlinks_Original.user.js (Full AIO base, wildcard matching)
           │
           ▼
Layer 3: Reference Monitoring (Daily at 07:00 UTC)
   └── check_references.py (Tracks 55 upstream repos, logs changes, writes update prompts)
```

---

## 🔍 How to Act on "Layer 3 — Reference Monitoring"

The repository monitors 55 external open-source projects every day at 07:00 UTC to stay ahead of shortlink changes:

1. **Daily Automatic Check**: GitHub Actions runs `check_references.py`.
2. **Reviewing the Activity Log**:
   ```bash
   cat reference_activity.log
   ```
   * Lines marked `★ CHANGED` reveal reference repositories that received new commits or releases.
   * Lines marked `✓` are unchanged.
3. **Reading the Action Guide**: When upstream bypass scripts update, the workflow generates:
   ```bash
   cat upstream/update-prompt.md
   ```
   This document extracts changed code sections alongside your current `extra_bypasses/` modules with recommended review points.
4. **Applying Improvements**:
   * **New bypass patterns discovered**: Adapt the selector or regex logic into the appropriate `extra_bypasses/*.js` module.
   * **New shortlink domains found**: Add them into `1_download_and_patch.py` under the corresponding alternation group.
   * **Anti-adblock updates in `reek/aak` or `bogachenkove/fff`**: Update the stealth function in `extra_bypasses/indian.user.js`.
5. **Rebuilding**: Push your edits to `main` — GitHub Actions rebuilds both variants and regenerates all metadata immediately.

---

## 🛠️ Resolved Issues

| Issue | Target Link | Root Cause | Solution Implemented |
|---|---|---|---|
| **#1** | `vplink.in/6jhx` | Routes through multi-step `techmint.in` blog network with delayed landing triggers. | Added `techmint.in` rules, auto-progression clickers, and landing page extraction in `extra_bypasses/indian.user.js` and `1_download_and_patch.py`. |
| **#2** | `cloudfam.io/74299ec25ce3` | Enforced 60s verification queue and moved target link to `/redirection0.php`. | Added `redirection0.php` selector, queue overlay dismissal, countdown zeroing, and direct redirect execution. |
| **#3** | `psa.wf` | Aggressive adblocker detection on Firefox + uBlock Origin stalled `/goto/` redirects. | Injected stealth adblock flag spoofing (`window.adblock = false`) and automatic form submission for `document.forms.redirect`. |
| **#4** | `tpi.li/DgcV7` | Rotates requests to `srnky.com` with Cloudflare Turnstile verification. | Added `srnky.com` to match patterns, base64 URL decoding (`aHR0c...`), and automated Turnstile response polling. |

---

## 📋 Supported Networks Overview

See **[supported_sites.txt](supported_sites.txt)** for the complete list of 400+ supported domains.

| Category | Top Supported Sites |
|---|---|
| **Indian Shortlink Networks** | softurl.in, gplinks.co/.in, shrinkme.io (all TLDs), droplink.co, lksfy.in, linkshortify.in, shrinkforearn.in, rocklinks.in, vplink.in, jrlinks.in, indianshortner.com, 4hi.in, go.tnshort.net, dekhe.click, clk.wiki/kim/sh, techmint.in, srnky.com, and 80+ Indian blog/news networks. |
| **File Hosters & Storage** | mega4upload.net, uploady.io, upfilesgo.com / upfiles.app, modsfire.com, dailyuploads.net, jioupload.link/.com/.icu, totoly.monster, cloudfam.io, frdl.io/freedl.ink/fredl.ru/frdl.is, rapidgator.net |
| **Global Shorteners** | linkvertise, admaven, exe.io, stfly, indobo, ouo.io, and hundreds more |

---

## 🏷️ Repository Metadata (For GitHub About Page)

* **About Description:**
  > Automatically bypass link shorteners, skip countdown timers, ad walls, and multi-page redirects across 400+ domains. Dual-variant userscript for Violentmonkey & Tampermonkey with specialized Indian networks and file hoster support.
* **Website URL:**
  > https://github.com/nOneCode4u/bypass-shortlinks
* **Topics:**
  `userscript`, `tampermonkey`, `violentmonkey`, `bypass-shortlinks`, `shortlink-bypass`, `adblock`, `anti-adblock`, `turnstile`, `cloudflare-turnstile`, `filehoster`, `gplinks`, `droplink`, `vplink`, `rapidgator`, `cloudfam`

---

## 📜 Credits & Acknowledgments

This project builds upon the foundational work of open-source developers:

* **Core Upstream Base**:
  * [gongchandang49/bypass-all-shortlinks-debloated](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated) — Base for Variant 1 (synced daily)
  * [BloggerPemula #431691](https://greasyfork.org/scripts/431691) — Base for Variant 2 (Original AIO)
  * [Amm0ni4](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated) — Original debloated fork
* **Reference Implementations & Techniques**:
  * [rushiranpise/dl-site-scrubber](https://github.com/rushiranpise/dl-site-scrubber) — File hoster form sanitization & anti-clickjacking
  * [rushiranpise/userscripts](https://github.com/rushiranpise/userscripts) — Offerwall helpers & domain catalog
  * [DandelionSprout/adfilt](https://github.com/DandelionSprout/adfilt) — Curated URL shortener filter lists
  * [skipped.lol/evade](https://skipped.lol/evade/evade.user.js) & [trw.lat](https://trw.lat/install/userscript/u.user.js) — Content locker bypass & API relays
  * [dessant/buster](https://github.com/dessant/buster) — reCAPTCHA audio assistance technique
  * [reek/anti-adblock-killer](https://github.com/reek/anti-adblock-killer) — Anti-adblock stealth patterns
  * [FastForwardTeam/FastForward](https://github.com/FastForwardTeam/FastForward) — Redirect bypass rules

Full 55-repository credit reference catalog: **[REFERENCES.md](REFERENCES.md)**

---

## ⚖️ License

This project is dedicated to the public domain under the **Unlicense**. See [LICENSE](LICENSE) for details.
