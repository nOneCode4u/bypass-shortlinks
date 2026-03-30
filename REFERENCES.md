# Reference Repository List

This file tracks every external resource this project learns from, syncs against,
or uses as a technique reference. Edit this file to add more — the daily check
workflow reads it automatically.

---

## Full Reference Repo Link List (sorted A–Z within each group)

### AD-BLOCK

```
https://github.com/gorhill/uBlock
https://github.com/Turtlecute33/toolz
```

**What we use from these:**
uBlock Origin filter list syntax and adblock-detection patterns inform how we
remove adblock walls in the main script (`AIORemover` logic).

#### AD-BLOCK Testing (websites — not tracked, for manual testing only)
```
https://adblock-tester.com/
https://adblock.turtlecute.org/
https://adblockbench.com/
https://adblocktester.pages.dev/
https://adguard.com/en/test.html
https://blockads.fivefilters.org/
https://canyoublockit.com/
https://obfusgated.com/tools/ad-block-test
https://paileactivist.github.io/toolz/adblock.html
https://superadblocktest.com/
```

---

### ANTI-ADBLOCK

```
https://github.com/bogachenkove/fuckfuckadblock
https://github.com/reek/anti-adblock-killer
https://github.com/SilverTke/go-away-fuckadblock
```

**What we use from these:**
Anti-adblock killer scripts show which JS variable names, class names, and DOM
patterns shortlink sites use to detect adblock. We reference these to keep our
`AIORemover` and adblock-bypass patterns current.

#### ANTI-ADBLOCK Testing (websites — not tracked, for manual testing only)
```
https://deblocker.merkulov.design/
https://www.detectadblock.com/
```

---

### CAPTCHA (free / open-source — technique reference)

```
https://github.com/altcha-org/altcha
https://github.com/altcha-org/altcha-lib
https://github.com/altcha-org/altcha-lib-ex
https://github.com/altcha-org/altcha-lib-go
https://github.com/altcha-org/altcha-lib-java
https://github.com/altcha-org/altcha-lib-php
https://github.com/altcha-org/altcha-lib-py
https://github.com/altcha-org/altcha-lib-rb
https://github.com/aydinnyunus/ai-captcha-bypass
https://github.com/browser-use/browser-use
https://github.com/dessant/buster
https://github.com/NopeCHALLC/nopecha-extension
https://github.com/QIN2DIM/hcaptcha-challenger
https://github.com/sarperavci/GoogleRecaptchaBypass
https://github.com/Skyvern-AI/skyvern
https://github.com/Vinyzu/recognizer
```

**What we use from these:**
- `dessant/buster` — teaches us how reCAPTCHA audio mode is triggered; we use
  this to keep our `CaptchaDone()` listener reliable
- `NopeCHALLC/nopecha-extension` — shows which CAPTCHA widget selectors
  (.cf-turnstile, .h-captcha, .g-recaptcha) are stable across site updates
- `sarperavci/GoogleRecaptchaBypass` — documents which reCAPTCHA v2/v3 token
  injection patterns shortlink sites rely on
- Others: technique reference only, no code copied

**Note:** No paid captcha API calls are made anywhere in this script.

#### CAPTCHA Demo pages (for testing — not tracked)
```
https://2captcha.com/demo
https://accounts.hcaptcha.com/demo
https://azcaptcha.com/demo
https://capjs.js.org/guide/demo.html
https://capmonster.cloud/en/demo/recaptcha-v2
https://captcha.com/demos/features/captcha-demo.aspx
https://democaptcha.com/demo-form-eng/hcaptcha.html
https://friendlycaptcha.com/#demo
https://gt4.geetest.com/demov4/index-en.html
https://nopecha.com/captcha
https://patrickhlauke.github.io/recaptcha/
https://recaptcha-demo.appspot.com/
https://solvecaptcha.com/demo
https://www.engagelab.com/captcha/demo/index
https://www.google.com/recaptcha/api2/demo
https://www.mtcaptcha.com/test-multiple-captcha
```

---

### CAPTCHA (paid — technique reference only, no paid API calls in script)

```
https://github.com/2captcha/2captcha-cpp
https://github.com/2captcha/2captcha-csharp
https://github.com/2captcha/2captcha-go
https://github.com/2captcha/2captcha-java
https://github.com/2captcha/2captcha-javascript
https://github.com/2captcha/2captcha-php
https://github.com/2captcha/2captcha-python
https://github.com/2captcha/2captcha-ruby
https://github.com/2captcha/captcha-solver-selenium-python-examples
https://github.com/capsolver/capsolver-skills
https://github.com/capsolver/n8n-nodes-capsolver
https://github.com/solvercaptcha/solvecaptcha-cpp
https://github.com/solvercaptcha/solvecaptcha-csharp
https://github.com/solvercaptcha/solvecaptcha-go
https://github.com/solvercaptcha/solvecaptcha-java
https://github.com/solvercaptcha/solvecaptcha-javascript
https://github.com/solvercaptcha/solvecaptcha-php
https://github.com/solvercaptcha/solvecaptcha-python
https://github.com/solvercaptcha/solvecaptcha-ruby
```

**What we use from these:**
API documentation shows us what the paid services consider a "solved" captcha
token to look like — useful for understanding what shortlink sites verify
server-side vs. client-side, which informs which captcha checks we can safely skip.

#### CAPTCHA Demo pages (for testing — not tracked)
```
https://2captcha.com/demo
https://azcaptcha.com/demo
https://solvecaptcha.com/demo
```

---

### REDIRECT BYPASS

```
https://api2.adbypass.org/userscript/download/bypass.user.js
https://bypass.city/
https://bypass.tools/
https://bypassunlock.com/
https://github.com/adsbypasser/adsbypasser
https://github.com/amitsingh-007/bypass-links
https://github.com/bypass-vip/userscript
https://github.com/gongchandang49/bypass-all-shortlinks-debloated
https://greasyfork.org/en/scripts/431691-bypass-all-shortlinks
https://greasyfork.org/en/scripts/442019-uploadheaven
https://greasyfork.org/en/scripts/522735-bypass-freedlink-countdown
https://izen.lol/
https://rip.linkvertise.lol/
https://skipped.lol/evade/evade.user.js
https://trw.lat/install/userscript/u.user.js
```

**What we use from these:**

| Source | What we take |
|---|---|
| `gongchandang49/bypass-all-shortlinks-debloated` | **Primary upstream** — we build from this daily |
| `bypass-vip/userscript` | New site patterns, bypass logic for sites gongchandang49 hasn't added yet |
| `adsbypasser/adsbypasser` | Rule-based redirect bypass database — large site list, different approach but good domain reference |
| `amitsingh-007/bypass-links` | Indian/general shortlink bypass patterns and new domains |
| `bypass.city` / `adbypass.org` | Live API endpoints — already used in script for linkvertise/admaven/loot-link |
| `skipped.lol/evade` | Userscript with standalone bypasses for sites not in our list |
| `trw.lat/u.user.js` | Another standalone bypass script, check for new site coverage |
| `greasyfork/431691` | BloggerPemula original — tracked only as upstream source of gongchandang49 |
| `greasyfork/442019` | uploadheaven script — file host bypass patterns |
| `greasyfork/522735` | bypass-freedlink-countdown — specific countdown bypass technique |
| `FastForwardTeam/FastForward` | Extension rules database — good for finding domains not covered by userscripts |
| `bypass.tools`, `bypassunlock.com`, `izen.lol`, `rip.linkvertise.lol` | Web services — check for new supported sites |

---

### PAYWALL BYPASS

```
https://freedium-mirror.cfd/
https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters
https://github.com/everywall/ladder
```

**What we use from these:**
Paywall bypass techniques are a separate concern from shortlink bypassing.
Tracked here for completeness and in case any paywall sites start using
shortlink-style intermediate redirect pages.

---

## Primary Upstream (daily build sync)

| Repo | URL | Mirror |
|---|---|---|
| gongchandang49/bypass-all-shortlinks-debloated | https://github.com/gongchandang49/bypass-all-shortlinks-debloated | https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated |

Every day CI downloads `Bypass_All_Shortlinks.user.js` from this repo,
applies our extras on top, and rebuilds.

---

## Sites added by this repo (not in any upstream)

| Site | File | Bypass method |
|---|---|---|
| softurl.in | extra_bypasses/softurl_and_indian.user.js | Timer zero + button click + AJAX fallback |
| gplinks.co / .in | extra_bypasses/softurl_and_indian.user.js | API call + click fallback |
| shrinkme.io + all TLDs | extra_bypasses/softurl_and_indian.user.js | Invisible captcha button |
| droplink.co | extra_bypasses/softurl_and_indian.user.js | Token bypass + continue click |
| lksfy.in / linkshortify.in | extra_bypasses/softurl_and_indian.user.js | Timer bypass |
| shrinkforearn.in | extra_bypasses/softurl_and_indian.user.js | Timer bypass |
| rocklinks.in / vplink.in / jrlinks.in | extra_bypasses/softurl_and_indian.user.js | Timer bypass |
| indianshortner.com / 4hi.in / go.tnshort.net | extra_bypasses/softurl_and_indian.user.js | Timer bypass |
| dekhe.click / clk.wiki / clk.kim / clk.sh | extra_bypasses/softurl_and_indian.user.js | Timer bypass |
| 80+ Indian blog/news/job shorteners | extra_bypasses/softurl_and_indian.user.js | Generic go-link AJAX fallback |

---

## How to add a new reference

1. Add the URL to the relevant section above
2. Add a row to the table explaining what to take from it
3. If it's a GitHub repo, add `owner/repo` to `check_references.py` in the
   `GITHUB_REPOS` list so the daily check tracks it
4. Push — next daily build will include it in the activity log
