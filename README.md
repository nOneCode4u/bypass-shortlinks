# Bypass Shortlinks

> Automatically bypass link shorteners, skip countdown timers, ad walls, and multi-page redirects. Supports 400+ domains with extra coverage for Indian shortlinks & file hosters.

[![Install Script](https://img.shields.io/badge/Install-Userscript-3DDC84?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js) [![Daily Build](https://img.shields.io/github/actions/workflow/status/nOneCode4u/bypass-shortlinks/build.yml?style=for-the-badge&label=Daily%20Build&logo=githubactions&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/actions) [![Supported Sites](https://img.shields.io/badge/Supported%20Domains-400%2B-0969da?style=for-the-badge&logo=internetexplorer&logoColor=white)](supported_sites.txt) [![License](https://img.shields.io/badge/License-Unlicense-blue?style=for-the-badge)](LICENSE)

---

## ⚡ Quick Install

1. Install a userscript manager in your browser:
   * **[Violentmonkey](https://violentmonkey.github.io/)** (Recommended) or **[Tampermonkey](https://tampermonkey.net/)**
2. Click the install button below:

[![Install Userscript](https://img.shields.io/badge/%E2%9A%A1%20Click%20To%20Install-Bypass%20Shortlinks-7040D4?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js)

*Updates are fetched automatically by your extension manager when new site rules are published.*

---

## 🌐 Compatible Browsers & Tools

[![Firefox](https://img.shields.io/badge/Browser-Firefox-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white)](https://www.mozilla.org/firefox/) [![Brave](https://img.shields.io/badge/Browser-Brave-FB542B?style=flat-square&logo=brave&logoColor=white)](https://brave.com/) [![Kiwi Browser](https://img.shields.io/badge/Android-Kiwi%20Browser-058448?style=flat-square&logo=android&logoColor=white)](https://kiwibrowser.com/) [![uBlock Origin](https://img.shields.io/badge/Adblocker-uBlock%20Origin-800000?style=flat-square&logo=ublockorigin&logoColor=white)](https://ublockorigin.com/)

> 💡 **Tip:** Firefox or Brave with **Violentmonkey** + **uBlock Origin** provides the cleanest, fastest experience. On Android devices, **Kiwi Browser + Violentmonkey** works great.

---

## 🚀 Key Features

* ⏩ **Zero Countdown Delays**: Skips 10s to 60s timers on link shorteners automatically.
* 🛡️ **Anti-Adblock Stealth**: Neutralises adblock walls and anti-adblock detection scripts.
* 🤖 **Smart Math & Captcha Solver**: Auto-solves math challenges (`5 + 3`, `sqrt(16)`) and digit-order captchas.
* 🔒 **100% Privacy Focused**: Zero tracking telemetry, zero analytics redirects, and zero external dependency calls.
* 🎯 **Indian Networks Coverage**: Specialized rules for `softurl.in`, `gplinks`, `shrinkme`, `droplink`, `lksfy`, `rocklinks`, `vplink`, `jrlinks`, `4hi.in`, and 80+ generic Indian blog & news shorteners.
* 📁 **File Hosters Support**: Fast-track downloads for `mega4upload`, `uploady.io`, `modsfire`, `dailyuploads`, `jioupload`, `cloudfam`, `frdl`, `rapidgator`, and more.

---

## 📋 Supported Networks

See **[supported_sites.txt](supported_sites.txt)** for the complete list of 400+ supported domains.

| Category | Top Supported Sites |
|---|---|
| **Indian Shortlink Networks** | softurl.in, gplinks.co/.in, shrinkme.io (all TLDs), droplink.co, lksfy.in, linkshortify.in, shrinkforearn.in, rocklinks.in, vplink.in, jrlinks.in, indianshortner.com, 4hi.in, go.tnshort.net, dekhe.click, clk.wiki/kim/sh, and 80+ Indian blog/news sites. |
| **File Hosters & Storage** | mega4upload.net, uploady.io, upfilesgo.com / upfiles.app, modsfire.com, dailyuploads.net, jioupload.link/.com/.icu, totoly.monster, cloudfam.io, frdl.io/freedl.ink/fredl.ru/frdl.is, rapidgator.net |
| **Global Shorteners** | linkvertise, admaven, exe.io, stfly, indobo, and hundreds more |

---

## ⚙️ Settings & Configuration

Open your userscript manager menu (Violentmonkey/Tampermonkey extension popup) while on any webpage to access script settings.

* **Auto Mode vs. Manual Mode**: Toggle automatic navigation on or off. In manual mode, an unobtrusive **Proceed →** button appears when ready.

---

## ❓ Frequently Asked Questions (FAQ)

**A site isn't working or broke recently.**
> Shortlink networks update their page layouts frequently. Please [open an issue](https://github.com/nOneCode4u/bypass-shortlinks/issues) with the full URL and a description of what happens.

**Stuck on a Cloudflare "Verify you are human" page.**
> Cloudflare interactive turnstile verification requires a manual human click. The script takes over and proceeds immediately after Cloudflare clears.

**"You have reached the wait limit" message.**
> That is a server-side IP rate limit imposed by the hoster. Client-side userscripts cannot bypass server IP limits.

---

## 🛠️ Contributing

1. **[Open an Issue](https://github.com/nOneCode4u/bypass-shortlinks/issues)** to report broken shortlink pages or request new domains.
2. Please include:
   * Full shortlink URL
   * Browser & userscript manager used
   * Description or screenshot of what page shows

---

## 📜 Credits & Acknowledgments

This project is built upon the foundational work of open-source developers:

* **Core Upstream Base**:
  * [gongchandang49/bypass-all-shortlinks-debloated](https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated) — Primary upstream base script (synced daily)
  * [Amm0ni4](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated) — Original debloated fork
  * [BloggerPemula](https://greasyfork.org/scripts/431691) — Original base script
* **APIs Used**:
  * [bypass.city](https://bypass.city/) / [adbypass.org](https://adbypass.org/) — Linkvertise & AdMaven resolution API
* **Technique References**:
  * [dessant/buster](https://github.com/dessant/buster) — reCAPTCHA audio assistance technique
  * [reek/anti-adblock-killer](https://github.com/reek/anti-adblock-killer) — Anti-adblock stealth patterns
  * [FastForwardTeam/FastForward](https://github.com/FastForwardTeam/FastForward) — Redirect bypass rules

Full 50-repository credit reference list: **[REFERENCES.md](REFERENCES.md)**

---

## ☕ Support This Project

This project is free and open-source. If it saves you time by automatically skipping shortlinks, timers, and ad walls, a small contribution helps support maintenance, daily upstream syncs, and server infrastructure.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/none123)

All contributions are voluntary and deeply appreciated. ❤️

---

## ⚖️ License

This project is dedicated to the public domain under the **Unlicense**. See [LICENSE](LICENSE) for details.
