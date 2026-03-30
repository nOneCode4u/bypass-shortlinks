# Bypass Shortlinks

Skip link shorteners without waiting for timers or clicking through ads.

Works on softurl.in, gplinks, shrinkme, droplink, and hundreds more — with
extra coverage for Indian shortlink and download sites.

**[→ Install](https://github.com/nOneCode4u/bypass-shortlinks/raw/main/Bypass_Shortlinks.user.js)**

---

## Requirements

- [Violentmonkey](https://violentmonkey.github.io/) (recommended) or [Tampermonkey](https://tampermonkey.net/)
- Firefox or Brave (Chrome/Edge lose extension support progressively)
- [uBlock Origin](https://ublockorigin.com/) — strongly recommended alongside this

> Kiwi Browser + Violentmonkey works well on Android.

---

## How it works

When you land on a supported shortlink page the script handles everything
automatically. For pages with a CAPTCHA, solve it once and the script
proceeds from there.

---

## Supported sites

See [supported_sites.txt](supported_sites.txt) for the full list (400+ domains).

---

## Settings

Open the userscript manager menu to access settings. Everything is off by
default — enable features as needed.

---

## FAQ

**A site isn't working.**
Some sites update frequently. Open an issue with the URL.

**Stuck on a Cloudflare or captcha page.**
Cloudflare human verification always requires a real click. The script handles
everything after that.

**"You have to wait X minutes" message.**
That's a server-side rate limit. No client script can bypass it.

---

## Contributing

To report a broken site or request a new one:
1. Open an issue
2. Include the full URL
3. Describe what the page shows

---

## Credits

- [gongchandang49](https://github.com/gongchandang49/bypass-all-shortlinks-debloated) — primary upstream
- [Amm0ni4](https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated) — debloat foundation
- [BloggerPemula](https://greasyfork.org/scripts/431691) — original script
- [bypass.city](https://bypass.city/) / [adbypass.org](https://adbypass.org/) — API fallback
