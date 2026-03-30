"""
check_references.py — Track all reference repositories for updates.

Checks all 49 repos in REFERENCES.md for new commits, releases, or script changes.
Writes reference_activity.log for manual review.
If any direct upstream bypass scripts changed, extracts useful code sections
and writes upstream/update-prompt.md with guidance on what to review.

Run: python check_references.py
Set GITHUB_TOKEN env var for higher API rate limits (optional, recommended).

Based on waypoint v1.1.2 scripts/sync-refs.py architecture.
"""

import sys, os, re, json, time, hashlib
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

UPSTREAM_DIR  = Path('upstream')
UPSTREAM_DIR.mkdir(exist_ok=True)

TRACKER_FILE  = UPSTREAM_DIR / 'ref-tracker.json'
REPORT_FILE   = UPSTREAM_DIR / 'change-report.md'
PROMPT_FILE   = UPSTREAM_DIR / 'update-prompt.md'
LOG_FILE      = Path('reference_activity.log')

GITHUB_TOKEN  = os.environ.get('GITHUB_TOKEN', '')
DRY_RUN       = os.environ.get('DRY_RUN', 'false').lower() == 'true'

# ─── All reference repos to track ────────────────────────────────────────────
# Each entry: id, type (github_repo/github_release/greasyfork/gitflic/raw_script),
# group, label, url (API), raw (direct file URL for content extraction).

REFS = [
    # ── AD-BLOCK ──
    {'id':'gorhill_ublock','type':'github_release','group':'adblock',
     'label':'gorhill/uBlock',
     'url':'https://api.github.com/repos/gorhill/uBlock/releases/latest','raw':None},
    {'id':'turtlecute_toolz','type':'github_repo','group':'adblock',
     'label':'Turtlecute33/toolz',
     'url':'https://api.github.com/repos/Turtlecute33/toolz/commits/master','raw':None},

    # ── ANTI-ADBLOCK ──
    {'id':'bogachenko_fff','type':'github_repo','group':'anti_adblock',
     'label':'bogachenkove/fuckfuckadblock',
     'url':'https://api.github.com/repos/bogachenkove/fuckfuckadblock/commits/master',
     'raw':'https://raw.githubusercontent.com/bogachenkove/fuckfuckadblock/master/fuckfuckadblock.txt'},
    {'id':'reek_aak','type':'github_repo','group':'anti_adblock',
     'label':'reek/anti-adblock-killer',
     'url':'https://api.github.com/repos/reek/anti-adblock-killer/commits/master',
     'raw':'https://raw.githubusercontent.com/reek/anti-adblock-killer/master/anti-adblock-killer.user.js'},
    {'id':'silvertke_gaff','type':'github_repo','group':'anti_adblock',
     'label':'SilverTke/go-away-fuckadblock',
     'url':'https://api.github.com/repos/SilverTke/go-away-fuckadblock/commits/master','raw':None},

    # ── CAPTCHA: FREE / OPEN-SOURCE ──
    {'id':'altcha','type':'github_release','group':'captcha',
     'label':'altcha-org/altcha',
     'url':'https://api.github.com/repos/altcha-org/altcha/releases/latest','raw':None},
    {'id':'altcha_lib','type':'github_release','group':'captcha',
     'label':'altcha-org/altcha-lib',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib/releases/latest','raw':None},
    {'id':'altcha_lib_ex','type':'github_repo','group':'captcha',
     'label':'altcha-org/altcha-lib-ex',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-ex/commits/main','raw':None},
    {'id':'altcha_lib_go','type':'github_repo','group':'captcha',
     'label':'altcha-org/altcha-lib-go',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-go/commits/main','raw':None},
    {'id':'altcha_lib_java','type':'github_release','group':'captcha',
     'label':'altcha-org/altcha-lib-java',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-java/releases/latest','raw':None},
    {'id':'altcha_lib_php','type':'github_release','group':'captcha',
     'label':'altcha-org/altcha-lib-php',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-php/releases/latest','raw':None},
    {'id':'altcha_lib_py','type':'github_repo','group':'captcha',
     'label':'altcha-org/altcha-lib-py',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-py/commits/main','raw':None},
    {'id':'altcha_lib_rb','type':'github_repo','group':'captcha',
     'label':'altcha-org/altcha-lib-rb',
     'url':'https://api.github.com/repos/altcha-org/altcha-lib-rb/commits/main','raw':None},
    {'id':'aydinnyunus_captcha','type':'github_repo','group':'captcha',
     'label':'aydinnyunus/ai-captcha-bypass',
     'url':'https://api.github.com/repos/aydinnyunus/ai-captcha-bypass/commits/main','raw':None},
    {'id':'browser_use','type':'github_repo','group':'captcha',
     'label':'browser-use/browser-use',
     'url':'https://api.github.com/repos/browser-use/browser-use/commits/main','raw':None},
    {'id':'buster','type':'github_release','group':'captcha',
     'label':'dessant/buster',
     'url':'https://api.github.com/repos/dessant/buster/releases/latest','raw':None},
    {'id':'nopecha','type':'github_release','group':'captcha',
     'label':'NopeCHALLC/nopecha-extension',
     'url':'https://api.github.com/repos/NopeCHALLC/nopecha-extension/releases/latest','raw':None},
    {'id':'hcaptcha_challenger','type':'github_repo','group':'captcha',
     'label':'QIN2DIM/hcaptcha-challenger',
     'url':'https://api.github.com/repos/QIN2DIM/hcaptcha-challenger/commits/main','raw':None},
    {'id':'sarperavci_recaptcha','type':'github_repo','group':'captcha',
     'label':'sarperavci/GoogleRecaptchaBypass',
     'url':'https://api.github.com/repos/sarperavci/GoogleRecaptchaBypass/commits/main','raw':None},
    {'id':'skyvern','type':'github_repo','group':'captcha',
     'label':'Skyvern-AI/skyvern',
     'url':'https://api.github.com/repos/Skyvern-AI/skyvern/commits/main','raw':None},
    {'id':'recognizer','type':'github_repo','group':'captcha',
     'label':'Vinyzu/recognizer',
     'url':'https://api.github.com/repos/Vinyzu/recognizer/commits/main','raw':None},

    # ── CAPTCHA: PAID (technique reference only — no API calls in script) ──
    {'id':'2captcha_cpp','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-cpp',
     'url':'https://api.github.com/repos/2captcha/2captcha-cpp/commits/master','raw':None},
    {'id':'2captcha_csharp','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-csharp',
     'url':'https://api.github.com/repos/2captcha/2captcha-csharp/commits/master','raw':None},
    {'id':'2captcha_go','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-go',
     'url':'https://api.github.com/repos/2captcha/2captcha-go/commits/master','raw':None},
    {'id':'2captcha_java','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-java',
     'url':'https://api.github.com/repos/2captcha/2captcha-java/commits/master','raw':None},
    {'id':'2captcha_js','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-javascript',
     'url':'https://api.github.com/repos/2captcha/2captcha-javascript/commits/master','raw':None},
    {'id':'2captcha_php','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-php',
     'url':'https://api.github.com/repos/2captcha/2captcha-php/commits/master','raw':None},
    {'id':'2captcha_python','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/2captcha-python',
     'url':'https://api.github.com/repos/2captcha/2captcha-python/commits/master','raw':None},
    {'id':'2captcha_ruby','type':'github_release','group':'captcha_paid',
     'label':'2captcha/2captcha-ruby',
     'url':'https://api.github.com/repos/2captcha/2captcha-ruby/releases/latest','raw':None},
    {'id':'2captcha_selenium','type':'github_repo','group':'captcha_paid',
     'label':'2captcha/captcha-solver-selenium-python-examples',
     'url':'https://api.github.com/repos/2captcha/captcha-solver-selenium-python-examples/commits/main','raw':None},
    {'id':'capsolver_skills','type':'github_repo','group':'captcha_paid',
     'label':'capsolver/capsolver-skills',
     'url':'https://api.github.com/repos/capsolver/capsolver-skills/commits/main','raw':None},
    {'id':'capsolver_n8n','type':'github_repo','group':'captcha_paid',
     'label':'capsolver/n8n-nodes-capsolver',
     'url':'https://api.github.com/repos/capsolver/n8n-nodes-capsolver/commits/main','raw':None},
    {'id':'solvercaptcha_cpp','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-cpp',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-cpp/commits/main','raw':None},
    {'id':'solvercaptcha_csharp','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-csharp',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-csharp/commits/main','raw':None},
    {'id':'solvercaptcha_go','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-go',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-go/commits/main','raw':None},
    {'id':'solvercaptcha_java','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-java',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-java/commits/main','raw':None},
    {'id':'solvercaptcha_js','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-javascript',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-javascript/commits/master','raw':None},
    {'id':'solvercaptcha_php','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-php',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-php/commits/main','raw':None},
    {'id':'solvercaptcha_python','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-python',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-python/commits/master','raw':None},
    {'id':'solvercaptcha_ruby','type':'github_repo','group':'captcha_paid',
     'label':'solvercaptcha/solvecaptcha-ruby',
     'url':'https://api.github.com/repos/solvercaptcha/solvecaptcha-ruby/commits/main','raw':None},

    # ── REDIRECT BYPASS ──
    {'id':'adsbypasser','type':'github_repo','group':'redirect',
     'label':'adsbypasser/adsbypasser',
     'url':'https://api.github.com/repos/adsbypasser/adsbypasser/commits/master','raw':None},
    {'id':'amitsingh_bypass','type':'github_repo','group':'redirect',
     'label':'amitsingh-007/bypass-links',
     'url':'https://api.github.com/repos/amitsingh-007/bypass-links/commits/main','raw':None},
    {'id':'bypass_vip','type':'github_repo','group':'redirect',
     'label':'bypass-vip/userscript',
     'url':'https://api.github.com/repos/bypass-vip/userscript/commits/main',
     'raw':'https://raw.githubusercontent.com/bypass-vip/userscript/main/bypass.user.js'},
    {'id':'gongchandang_bypass','type':'github_repo','group':'redirect',
     'label':'gongchandang49/bypass-all-shortlinks-debloated (PRIMARY)',
     'url':'https://api.github.com/repos/gongchandang49/bypass-all-shortlinks-debloated/commits/main',
     'raw':'https://raw.githubusercontent.com/gongchandang49/bypass-all-shortlinks-debloated/main/Bypass_All_Shortlinks.user.js'},
    {'id':'fastforward','type':'github_repo','group':'redirect',
     'label':'FastForwardTeam/FastForward',
     'url':'https://api.github.com/repos/FastForwardTeam/FastForward/commits/main','raw':None},
    {'id':'greasyfork_bypass','type':'greasyfork','group':'redirect',
     'label':'greasyfork #431691 — Bypass All Shortlinks',
     'url':'https://greasyfork.org/scripts/431691.json',
     'raw':'https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js'},
    {'id':'greasyfork_uploadheaven','type':'greasyfork','group':'redirect',
     'label':'greasyfork #442019 — UploadHEaven',
     'url':'https://greasyfork.org/scripts/442019.json',
     'raw':'https://update.greasyfork.org/scripts/442019/UploadHEaven.user.js'},
    {'id':'greasyfork_freedlink','type':'greasyfork','group':'redirect',
     'label':'greasyfork #522735 — Bypass FREEdlink countdown',
     'url':'https://greasyfork.org/scripts/522735.json',
     'raw':'https://update.greasyfork.org/scripts/522735/Bypass%20FREEdlink%20countdown.user.js'},

    # ── PAYWALL BYPASS ──
    {'id':'ladder','type':'github_repo','group':'paywall',
     'label':'everywall/ladder',
     'url':'https://api.github.com/repos/everywall/ladder/commits/main','raw':None},
    {'id':'bypass_paywalls','type':'gitflic','group':'paywall',
     'label':'magnolia1234/bypass-paywalls-clean-filters',
     'url':None,
     'raw':'https://gitflic.ru/project/magnolia1234/bypass-paywalls-clean-filters/blob/raw?file=userscript/bpc.en.user.js'},
]

# ─── HTTP helpers ─────────────────────────────────────────────────────────────

def _headers():
    h = {'User-Agent': 'bypass-shortlinks/check-refs',
         'Accept': 'application/json,text/plain,*/*'}
    if GITHUB_TOKEN:
        h['Authorization'] = f'Bearer {GITHUB_TOKEN}'
    return h

def _get_json(url):
    try:
        with urlopen(Request(url, headers=_headers()), timeout=20) as r:
            return json.loads(r.read().decode('utf-8', errors='replace'))
    except HTTPError as e:
        if e.code != 404:
            print(f'    HTTP {e.code}: {url}')
        return None
    except Exception as e:
        print(f'    Error: {e}')
        return None

def _get_text(url, max_bytes=400_000):
    try:
        with urlopen(Request(url, headers={**_headers(), 'Accept':'text/plain,*/*'}), timeout=30) as r:
            return r.read(max_bytes).decode('utf-8', errors='replace')
    except Exception as e:
        print(f'    Raw fetch error: {e}')
        return None

# ─── Version detection per type ───────────────────────────────────────────────

def _check_ref(ref):
    """Returns (id_str, display_str) or (None, None) on failure."""
    t = ref['type']

    if t == 'github_repo':
        d = _get_json(ref['url'])
        if d is None:
            # Retry with alternate branch name
            url2 = ref['url']
            if '/commits/main' in url2:   url2 = url2.replace('/commits/main',  '/commits/master')
            elif '/commits/master' in url2: url2 = url2.replace('/commits/master','/commits/main')
            else: return None, None
            d = _get_json(url2)
            if d is None: return None, None
        sha  = d.get('sha','')[:12]
        date = (d.get('commit',{}).get('committer',{}) or {}).get('date','')[:10]
        return sha, f'commit {sha[:8]} ({date})'

    if t == 'github_release':
        d = _get_json(ref['url'])
        if not d: return None, None
        tag  = d.get('tag_name','')
        date = d.get('published_at','')[:10]
        return tag, f'release {tag} ({date})'

    if t == 'greasyfork':
        d = _get_json(ref['url'])
        if not d: return None, None
        ver     = str(d.get('version',''))
        updated = d.get('code_updated_at','')[:10]
        return ver, f'v{ver} (updated {updated})'

    if t == 'gitflic':
        if not ref.get('raw'): return None, None
        text = _get_text(ref['raw'])
        if not text: return None, None
        sha = hashlib.sha256(text.encode()).hexdigest()[:12]
        ver_m = re.search(r'@version\s+(\S+)', text)
        ver = ver_m.group(1) if ver_m else 'unknown'
        return sha, f'v{ver} (sha {sha[:8]})'

    if t == 'raw_script':
        text = _get_text(ref['url'])
        if not text: return None, None
        sha = hashlib.sha256(text.encode()).hexdigest()[:12]
        ver_m = re.search(r'@version\s+(\S+)', text)
        ver = ver_m.group(1) if ver_m else 'unknown'
        return sha, f'v{ver} (sha {sha[:8]})'

    return None, None

# ─── Code excerpt extraction for update prompt ────────────────────────────────

def _extract_key_sections(text, label):
    """Pull the most useful parts of a changed upstream script."""
    if not text:
        return '(could not fetch raw content)'
    sections = []

    # @match / @include rules
    match_lines = re.findall(r'//\s*@(?:match|include)\s+.+', text)
    if match_lines:
        sections.append('// --- @match / @include RULES ---\n' + '\n'.join(match_lines[:120]))

    # Bypass function samples
    func_chunks = re.findall(
        r'(?:BypassedByBloggerPemula|function\s+\w+)\s*\([^)]*\)\s*\{[^{}]{0,800}\}',
        text, re.DOTALL
    )
    if func_chunks:
        sections.append('// --- BYPASS FUNCTION SAMPLES ---\n' +
                        '\n\n'.join(func_chunks[:5])[:3000])

    result = f'\n\n// ====== {label} ======\n' + '\n\n'.join(sections)
    return result[:6000]

# ─── Update prompt builder ────────────────────────────────────────────────────

def _build_update_prompt(changes):
    """Build a review prompt with changed code and current extra_bypasses/ content."""
    now = datetime.now(timezone.utc).strftime('%Y-%m-%d')
    lines = [
        f'# Reference update — bypass-shortlinks — {now}',
        '',
        'The following reference repositories changed.',
        'Review the extracted code and update extra_bypasses/ files as needed.',
        '',
        '---',
        '## What changed',
        '',
    ]

    for c in changes:
        lines += [
            f'### {c["label"]}',
            f'- Before: {c["old"]}',
            f'- After:  {c["new"]}',
        ]
        if c.get('excerpt'):
            lines += ['', 'Extracted code:', '```javascript', c['excerpt'], '```', '']
        else:
            lines.append('')

    lines += [
        '---',
        '## Current extra_bypasses/ files',
        '',
    ]

    extra = Path('extra_bypasses')
    if extra.exists():
        for f in sorted(extra.glob('*.js')):
            lines += [
                f'### `extra_bypasses/{f.name}`',
                '```javascript',
                f.read_text(encoding='utf-8')[:8000],
                '```',
                '',
            ]

    lines += [
        '---',
        '## What to do',
        '',
        '1. Review the extracted code from changed references above.',
        '2. If new bypass patterns or domains were added, update extra_bypasses/softurl_and_indian.user.js.',
        '3. If new anti-adblock patterns were added in reek/aak or bogachenkove/fff,',
        '   update the _AAB.stealth() block in softurl_and_indian.user.js.',
        '4. Push the updated files. The build Action rebuilds Bypass_Shortlinks.user.js.',
        '5. If no changes are needed, just note that.',
    ]

    return '\n'.join(lines) + '\n'

# ─── Load / save tracker ──────────────────────────────────────────────────────

def _load():
    if TRACKER_FILE.exists():
        try: return json.loads(TRACKER_FILE.read_text())
        except: pass
    return {}

def _save(data):
    TRACKER_FILE.write_text(json.dumps(data, indent=2))

# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    now     = datetime.now(timezone.utc)
    tracker = _load()
    changes = []
    log_lines = [f'Daily reference check — {now.strftime("%Y-%m-%d %H:%M UTC")}', '=' * 60, '']

    if DRY_RUN:
        print('DRY RUN — checking only, will not write output files\n')

    print(f'Checking {len(REFS)} reference repos — {now.strftime("%Y-%m-%d %H:%M UTC")}\n')

    for ref in REFS:
        rid = ref['id']
        print(f'  {ref["label"]}')
        current_id, current_display = _check_ref(ref)
        time.sleep(0.3)

        if current_id is None:
            print(f'    Could not check\n')
            log_lines.append(f'  ✗ {ref["label"]}: could not check')
            continue

        prev      = tracker.get(rid, {})
        prev_id   = prev.get('id', '')
        prev_disp = prev.get('display', 'first check')

        if current_id == prev_id:
            print(f'    No change ({current_display})\n')
            log_lines.append(f'  ✓ {ref["label"]}: {current_display}')
        else:
            print(f'    CHANGED: {prev_disp} → {current_display}')
            excerpt = ''
            if ref.get('raw'):
                print(f'    Fetching raw content...')
                raw = _get_text(ref['raw'])
                if raw:
                    excerpt = _extract_key_sections(raw, ref['label'])
                    print(f'    Extracted {len(excerpt)} chars')
            changes.append({
                'id':      rid,
                'label':   ref['label'],
                'group':   ref.get('group',''),
                'old':     prev_disp,
                'new':     current_display,
                'excerpt': excerpt,
            })
            log_lines.append(f'  ★ CHANGED: {ref["label"]}: {prev_disp} → {current_display}')
            print()

        tracker[rid] = {
            'id':         current_id,
            'display':    current_display,
            'checked_at': now.isoformat(),
        }

    _save(tracker)

    # Write activity log
    log_lines += ['', '=' * 60,
                  f'Total: {len(changes)} changed, {len(REFS) - len(changes)} unchanged.']
    LOG_FILE.write_text('\n'.join(log_lines) + '\n')
    print(f'\nActivity log → {LOG_FILE}')

    if not changes:
        print('All references up to date.')
        for f in [REPORT_FILE, PROMPT_FILE]:
            if f.exists(): f.unlink()
        return 0

    # Write update prompt
    prompt = _build_update_prompt(changes)
    if not DRY_RUN:
        PROMPT_FILE.write_text(prompt)
        print(f'Update prompt → {PROMPT_FILE} ({len(prompt)} chars)')

        # Issue body
        issue_lines = [
            f'## Reference update — {now.strftime("%Y-%m-%d")}',
            '',
            f'**{len(changes)} upstream source(s) changed.**',
            '',
            '| Source | Before | After |',
            '|--------|--------|-------|',
        ]
        for c in changes:
            issue_lines.append(f'| {c["label"]} | {c["old"]} | {c["new"]} |')
        issue_lines += [
            '',
            '## Review',
            '',
            '1. Open `upstream/update-prompt.md`',
            '2. Review the changed code and update `extra_bypasses/` as needed',
            '3. Push — build Action rebuilds `Bypass_Shortlinks.user.js` automatically',
            '',
            '_Auto-generated by check_references.py_',
        ]
        REPORT_FILE.write_text('\n'.join(issue_lines) + '\n')
        print(f'Change report → {REPORT_FILE}')
    else:
        print(f'DRY RUN — would write update-prompt.md ({len(prompt)} chars)')

    return 1  # signal to GitHub Actions that changes were found


if __name__ == '__main__':
    sys.exit(main())
