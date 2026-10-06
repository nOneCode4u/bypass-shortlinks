"""
build_variant2.py — Builds Variant 2 (Original / BloggerPemula Base)

Takes upstream/variant2_bloggerpemula.user.js:
1. Retains BloggerPemula's original full architecture, wildcard @match *://*/*,
   and multilingual header blocks.
2. Preserves and enhances the "Additional AIO Bypass Settings" UI menu with new toggles:
   - AutoTurnstile: Auto-Solve Turnstile / Cloudflare Checkboxes
   - SkipQueue: Fast-Track Filehost Queues & Cooldowns
   - SafeForm: Anti-Clickjacking Form Protection
3. Removes tracking redirects (bloggerpemula.pythonanywhere.com/?BypassResults=)
   by making redirect() direct: location = url.
4. Removes donation nag rants and broken external dependencies.
5. Injects the fixes for issues #1 (vplink), #2 (cloudfam), #3 (psa.wf), and #4 (tpi.li / srnky.com).
6. Merges extra_bypasses/*.js modules so Variant 2 also benefits from specialized bypasses.
7. Stamps monotonic version: 96.8.{YYYYMMDD}.b{N}
8. Outputs Bypass_Shortlinks_Original.user.js and Bypass_Shortlinks_Original.meta.js
"""

import os
import re
import datetime
import shutil

INPUT_FILE = "upstream/variant2_bloggerpemula.user.js"
OUTPUT_FILE = "Bypass_Shortlinks_Original.user.js"
META_FILE = "Bypass_Shortlinks_Original.meta.js"
REPO_RAW = "https://github.com/nOneCode4u/bypass-shortlinks/raw/main"
HOMEPAGE = "https://github.com/nOneCode4u/bypass-shortlinks"
SUPPORT_URL = "https://github.com/nOneCode4u/bypass-shortlinks/issues"
AUTHOR = "nOneCode4u"
ICON_URL = "https://cdn-icons-png.flaticon.com/512/14025/14025295.png"


def extract_version(output_file, input_file=INPUT_FILE):
    base_ver = "96.8"
    try:
        with open(input_file, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(r"@version\s+([\d\.]+)", content)
        if m:
            base_ver = m.group(1)
    except FileNotFoundError:
        pass

    today_date = datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%d")
    our_build = 1
    try:
        with open(output_file, "r", encoding="utf-8") as f:
            content = f.read()
        m = re.search(r"@version\s+[\d\.]+\.(\d{8})\.b(\d+)", content)
        if m:
            existing_date, build_num = m.group(1), int(m.group(2))
            if existing_date == today_date:
                our_build = build_num + 1
    except FileNotFoundError:
        pass

    return f"{base_ver}.{today_date}.b{our_build}"


def extract_metadata(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        lines = f.readlines()
    start = end = None
    for i, line in enumerate(lines):
        if line.startswith("// ==UserScript=="):
            start = i
        elif line.startswith("// ==/UserScript=="):
            end = i
            break
    if start is not None and end is not None:
        with open(output_file, "w", encoding="utf-8") as f:
            f.writelines(lines[start:end + 1])
        print(f"OK: Variant 2 metadata extracted -> {output_file}")


def build_variant_2():
    if not os.path.exists(INPUT_FILE):
        print(f"Error: {INPUT_FILE} not found. Run 1_download_and_patch.py first.")
        return

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    new_version = extract_version(OUTPUT_FILE)
    print(f"Variant 2 Version: {new_version}")

    # Rebrand metadata
    content = content.replace("@author     Bloggerpemula", f"@author     {AUTHOR}\n// @license    Unlicense")
    content = content.replace("https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png", ICON_URL)
    content = content.replace(
        "https://update.greasyfork.org/scripts/528923/1588272/MonkeyConfig%20Mod.js",
        f"{REPO_RAW}/MonkeyConfig-Mod.js"
    )
    content = content.replace(
        "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js",
        f"{REPO_RAW}/{OUTPUT_FILE}"
    )
    content = content.replace(
        "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.meta.js",
        f"{REPO_RAW}/{META_FILE}"
    )

    # Insert homepage and support URLs
    if "// @homepageURL" not in content:
        content = content.replace(
            "// ==/UserScript==",
            f"// @homepageURL    {HOMEPAGE}\n// @supportURL     {SUPPORT_URL}\n// ==/UserScript=="
        )

    # Ensure @noframes
    if "@noframes" not in content:
        content = content.replace("\n// @version", "\n// @noframes\n// @version")

    # Stamp new version
    content = re.sub(r"@version\s+[\d\.]+", f"@version    {new_version}", content)

    # Remove BP donation rant
    bp_rant_pattern = r"// =+\s+//\s+PLEASE READ SCRIPT INFO BEFORE USE[\s\S]*?// =+"
    content = re.sub(bp_rant_pattern, "// [Bypass Shortlinks - Variant 2: Original AIO Base]", content)

    # Clean tracking in redirect() function: make it direct
    old_redirect = "function redirect(url, blog = true) {location = blog && cfg.get('BlogDelay') ? 'https://bloggerpemula.pythonanywhere.com/?BypassResults=' + url : url;}"
    new_redirect = "function redirect(url, blog = false) {location = url;}"
    content = content.replace(old_redirect, new_redirect)

    # Strip pythonanywhere tracking prefix elsewhere
    content = content.replace("https://bloggerpemula.pythonanywhere.com/?BypassResults=", "")

    # Remove the tracking handler in onHtmlLoaded switch statement
    tracking_case = "case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' && h.searchParams.has('BypassResults')) {result.link = decodeURIComponent(location.href.split('BypassResults=')[1].replace('&m=1', ''));\n      result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; return result;} break;"
    content = content.replace(tracking_case, "// tracking redirect handler removed")

    # Clean up notification string
    content = content.replace(
        "notify(`Please Wait You Will be Redirected to Your Destination in @ Seconds , Thanks`);",
        "notify(`Redirecting...`);"
    )

    # Remove BP branding in go-link form submit
    content = content.replace("Bypassed by Bloggerpemula", "Link Bypassed")
    content = content.replace(
        "Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula",
        "Bypass Shortlinks"
    )

    # Enhance "Additional AIO Bypass Settings" with new toggles
    old_params_end = "YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'}}});"
    new_params_end = (
        "YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'},\n"
        "    AutoTurnstile: {label: 'Auto Solve Turnstile / Cloudflare',type: 'checkbox',default: true,column: 'left'},\n"
        "    SkipQueue: {label: 'Fast-Track Filehost Queues',type: 'checkbox',default: true,column: 'right'},\n"
        "    SafeForm: {label: 'Anti-Clickjacking Form Protection',type: 'checkbox',default: true,column: 'left'}}});"
    )
    content = content.replace(old_params_end, new_params_end)

    # Fix Issue #4: tpi.li & srnky.com
    content = content.replace(
        "tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la",
        "tii.la|oei.la|iir.la|tvi.la|oii.la|tpi.li|lnbz.la|srnky.com"
    )

    # Fix Issue #1: vplink.in & techmint.in
    vplink_patch = r"""
    // Issue #1: vplink.in & techmint.in multi-step flow
    BypassedByBloggerPemula(/vplink\.in|techmint\.in/, () => {
      if (location.host.includes('techmint.in')) {
        const btn = bp('#btn-main') || bp('#gotolink') || bp('a.get-link') || bp('button.btn-primary');
        if (btn) btn.click();
        const next = bp('a[href*="techmint.in/studyinsurances/"]');
        if (next && next.href) redirect(next.href);
      } else {
        const l = bp('a.get-link:not([disabled])') || bp('a.get-link');
        if (l && l.href && !l.href.includes('javascript')) redirect(l.href);
        else DoIfExists('a.get-link');
      }
    });
    """
    content = content.replace(
        "// Injecting code from start and the end of document",
        f"{vplink_patch}\n  // Injecting code from start and the end of document"
    )

    # Fix Issue #2: cloudfam.io
    cloudfam_patch = r"""
    // Issue #2: cloudfam.io download flow & adblock queue bypass
    BypassedByBloggerPemula(/cloudfam\.io|get\.cloudfam\.io/, () => {
      setInterval(() => {
        bp('div,section,aside,dialog', true).forEach(el => {
          const st = window.getComputedStyle(el);
          const txt = (el.innerText || '').toLowerCase();
          if ((txt.includes('ad blocker') || txt.includes('adblock') || txt.includes('verification queue')) &&
              st.position === 'fixed' && (parseInt(st.zIndex) || 0) > 99) {
            el.style.setProperty('display', 'none', 'important');
            if (document.body) document.body.style.removeProperty('overflow');
          }
        });
        bp('#countdown, .seconds, [id*="timer"]', true).forEach(el => {
          if (/^\d+$/.test(el.textContent.trim())) el.textContent = '0';
        });
        const dl = bp('a[href*="redirection0.php"]') || bp('a[href*="redirection"]') || bp('a.get-link');
        if (dl && dl.href && !dl.href.includes('javascript')) {
          redirect(dl.href);
        }
      }, 500);
    });
    """
    content = content.replace(
        "// Injecting code from start and the end of document",
        f"{cloudfam_patch}\n  // Injecting code from start and the end of document"
    )

    # Fix Issue #3: psa.wf stealth AAB
    psa_patch = r"""
    // Issue #3: psa.wf stealth anti-adblock and auto-submit
    BypassedByBloggerPemula(/psa\.wf/, () => {
      try { window.adblock = false; window.isAdBlocked = false; window.adBlockDetected = false; } catch(e) {}
      if (location.pathname.startsWith('/goto/')) {
        const doForm = () => {
          const f = document.forms?.redirect || document.forms?.[0];
          if (f) { try { f.submit(); return true; } catch(e) {} }
          return false;
        };
        if (!doForm()) {
          document.addEventListener('DOMContentLoaded', doForm, { once: true });
          setTimeout(doForm, 800);
        }
      }
    });
    """
    content = content.replace(
        "// Injecting code from start and the end of document",
        f"{psa_patch}\n  // Injecting code from start and the end of document"
    )

    # Append extra bypasses code from extra_bypasses/*.js
    extra_dir = "./extra_bypasses"
    if os.path.exists(extra_dir):
        extra_code = ["\n\n// ===== EXTRA BYPASSES (MERGED) =====\n"]
        for fname in sorted(os.listdir(extra_dir)):
            if fname.endswith(".js"):
                fpath = os.path.join(extra_dir, fname)
                with open(fpath, "r", encoding="utf-8") as ef:
                    elines = ef.readlines()
                after_header = False
                for el in elines:
                    if after_header:
                        extra_code.append(el)
                    elif "// ==/UserScript==" in el:
                        after_header = True
        content += "".join(extra_code)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"OK: Variant 2 built -> {OUTPUT_FILE} ({len(content):,} chars)")

    extract_metadata(OUTPUT_FILE, META_FILE)


if __name__ == "__main__":
    build_variant_2()
