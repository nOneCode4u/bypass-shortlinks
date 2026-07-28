# Bypass Shortlinks — Maintenance & Operating Guide (ELI5)

Welcome! This guide explains how this repository works, how all the code fits together, and how to maintain, update, and add new features using **Antigravity AI**.

---

## 1. What Is This Project? (ELI5 Explanation)

When you download files or click links online, websites often redirect you through **Link Shorteners** (like `softurl.in`, `gplinks`, `shrinkme`). These sites force you to:
1. Wait on 10 to 30 second timers.
2. Click through multiple fake "Continue" buttons surrounded by ads.
3. Solve captchas or close popup ads.

**This project creates a Userscript** (installed in Violentmonkey or Tampermonkey). When you visit any of these shortener sites, the script automatically:
- Accelerates or skips the countdown timer.
- Solves simple math captchas automatically.
- Finds and clicks the real proceed button for you.
- Redirects you straight to your final download link instantly!

---

## 2. Where Everything Lives (Repository Map)

Here is a map of the repository files and what each one does:

```
bypass-shortlinks/
├── extra_bypasses/
│   └── indian.user.js          ← OUR MAIN SCRIPT (1,350+ lines): softurl, Indian shortlink & file host rules
├── 1_download_and_patch.py     ← STEP 1: Downloads latest upstream base code from GitHub/Codeberg
├── 2_generate_includes.py      ← STEP 2: Scans code for domain names & generates 400+ website match rules
├── 3_patch.py                  ← STEP 3: Strips tracking/ads, updates branding to nOneCode4u & stamps version
├── 4_add_extra_bypasses.py     ← STEP 4: Merges indian.user.js and extra bypasses into the output script
├── scripts/
│   └── obfuscate.py            ← STEP 5: Hardening pass that scrambles the code so site owners can't block it
├── check_references.py         ← Watchdog that monitors 49 reference GitHub repos daily for new bypass tricks
├── Bypass_Shortlinks.user.js   ← THE FINISHED PRODUCT! (The userscript you install in your browser)
├── Bypass_Shortlinks.meta.js   ← Metadata file that browser extensions check for automatic script updates
├── README.md                   ← Public homepage (Clean, zero technical secrets)
├── REFERENCES.md               ← Full list of 49 credit sources & reference projects
└── Bypass Shortlinks.md        ← Comprehensive technical summary document
```

---

## 3. How to Update & Maintain (ELI5 Step-by-Step)

Because you are using **Antigravity AI**, you don't need to zip or re-upload files. Antigravity works directly inside this project folder on your computer.

### 🔹 Task A: How to Add a New Website to Bypass

When you find a new shortlink site or a broken link:

1. **Tell Antigravity in chat:**
   > *"Add support for `example.com`. It has a 10-second timer and a proceed button `#submit-btn`."*

2. **What Antigravity will do automatically:**
   * Open [`extra_bypasses/indian.user.js`](file:///d:/Amit/Backups/Antigravity/Antigravity%20Chats/Bypass%20Shortlinks/extra_bypasses/indian.user.js).
   * Add `// @include /example\.com/` to the header.
   * Add a site handler entry to `SITES`:
     ```javascript
     'example.com': {
       hosts: ['example.com'],
       selectors: ['#submit-btn', 'a.get-link'],
       hookTimers: true,
     }
     ```
   * Test the build pipeline locally to verify.

---

### 🔹 Task B: How to Check 49 Reference Repos for Upstream Tricks

Your project monitors 49 other open-source projects (like uBlock, Buster, Anti-Adblock Killer, etc.) to learn new bypass techniques.

1. **Tell Antigravity in chat:**
   > *"Check reference repos for updates and apply any new tricks."*

2. **What Antigravity will do automatically:**
   * Run `python check_references.py`.
   * If any of the 49 repos changed, check `upstream/update-prompt.md`.
   * Apply any new anti-adblock or timer-skipping code patterns to `extra_bypasses/indian.user.js`.

---

### 🔹 Task C: How to Add a New Reference Repo to Track

If you discover a great new GitHub repo with shortlink or anti-adblock rules:

1. **Tell Antigravity in chat:**
   > *"Add `owner/repo-name` to reference tracking."*

2. **What Antigravity will do automatically:**
   * Add the repository info to [`REFERENCES.md`](file:///d:/Amit/Backups/Antigravity/Antigravity%20Chats/Bypass%20Shortlinks/REFERENCES.md).
   * Add the tracking configuration to `REFS` in [`check_references.py`](file:///d:/Amit/Backups/Antigravity/Antigravity%20Chats/Bypass%20Shortlinks/check_references.py).

---

### 🔹 Task D: How to Build the Script Locally

To assemble the final `Bypass_Shortlinks.user.js` script manually:

Run this command in terminal/PowerShell:
```powershell
python 1_download_and_patch.py; python 2_generate_includes.py; python 3_patch.py; python 4_add_extra_bypasses.py; python scripts/obfuscate.py
```

*(Note: GitHub Actions automatically runs this build every day at 02:00 UTC and on every `git push`).*

---

## 4. Golden Rules for This Repository

1. **Keep Public Docs Clean**: [`README.md`](file:///d:/Amit/Backups/Antigravity/Antigravity%20Chats/Bypass%20Shortlinks/README.md) must NEVER contain specific CSS selectors, timer hook details, or anti-adblock code. This prevents site owners from finding and breaking your script.
2. **Zero Tracking**: Never re-introduce external tracking servers, analytics, or donation banners.
3. **No `eval()`**: All obfuscation uses character code maps so browser security filters don't flag the script.

---

*This instruction guide is stored in `INSTRUCTIONS.md` and referenced in AI session responses.*
