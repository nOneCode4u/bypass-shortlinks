import re

REPO_RAW = "https://github.com/nOneCode4u/bypass-shortlinks/raw/main"
SCRIPT_NAME = "Bypass Shortlinks"
AUTHOR = "nOneCode4u"
HOMEPAGE = "https://github.com/nOneCode4u/bypass-shortlinks"
SUPPORT_URL = "https://github.com/nOneCode4u/bypass-shortlinks/issues"
OUTPUT_FILE = "Bypass_Shortlinks.user.js"
META_FILE = "Bypass_Shortlinks.meta.js"
ICON_URL = "https://cdn-icons-png.flaticon.com/512/14025/14025295.png"


def extract_version(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Version file not found, using fallback version.")
        return "96.5-patch0.0.1"

    match = re.search(r'@version\s+([\d\.]+)(?:-patch([\d\.]+))?', content)
    if not match:
        print("No version found, using fallback.")
        return "96.5-patch0.0.1"

    base = match.group(1)
    patch = match.group(2) or "0.0.0"

    parts = list(map(int, patch.split('.')))
    if parts[2] < 9:
        parts[2] += 1
    elif parts[1] < 9:
        parts[2] = 0
        parts[1] += 1
    else:
        parts[2] = 0
        parts[1] = 0
        parts[0] += 1

    new_patch = '.'.join(map(str, parts))
    new_version = f"{base}-patch{new_patch}"
    print(f"Version: {base}-patch{patch} -> {new_version}")
    return new_version


def remove_lines_containing(code, strings):
    lines = code.split('\n')
    filtered = [l for l in lines if not any(s in l for s in strings)]
    return '\n'.join(filtered)


def does_not_contain_any(text, strings):
    return all(s not in text for s in strings)


def build_script(input_path, includes_path, output_path):
    with open(input_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    with open(includes_path, 'r', encoding='utf-8') as f:
        includes_content = f.read()

    # Drop non-English name/description lines (encoding issues)
    lines = [l for l in lines if not (l.startswith("// @description:") or l.startswith("// @name:"))]

    # Remove all existing @match and @include
    lines = [l for l in lines if '@match' not in l and '@include' not in l]

    # Find where to insert our generated includes (after last @description)
    last_desc_idx = None
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].startswith('// @description'):
            last_desc_idx = i
            break

    # Insert recaptcha includes first, then generated includes
    recaptcha_includes = (
        "// @include /^(?:https?:\\/\\/)?(?:www\\.)?(?:google\\.com|recaptcha\\.net)\\/recaptcha\\/api2\\/.*$/\n"
        "// @match *://*/recaptcha/api2/*\n"
        "\n"
    )
    lines.insert(last_desc_idx + 1, includes_content)
    lines.insert(last_desc_idx + 1, recaptcha_includes)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)

    print(f"OK: Includes injected -> {output_path}")


def debloat_and_rebrand(file_path, new_version):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Rebrand name, author, URLs
        content = content.replace("// @name       Bypass All Shortlinks Debloated", f"// @name       {SCRIPT_NAME}")
        content = content.replace("// @name       Bypass All Shortlinks", f"// @name       {SCRIPT_NAME}")
        content = content.replace(
            "https://i.ibb.co/qgr0H1n/BASS-Blogger-Pemula.png",
            ICON_URL
        )
        content = content.replace(
            "https://cdn-icons-png.flaticon.com/512/14025/14025295.png",
            ICON_URL
        )
        content = content.replace(
            "@author     Bloggerpemula",
            f"@author     {AUTHOR}\n// @license    Unlicense"
        )
        content = content.replace(
            "@author     Amm0ni4, gongchandang49\n// @license    Unlicense",
            f"@author     {AUTHOR}\n// @license    Unlicense"
        )

        # Update description and homepage
        content = content.replace(
            "// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners, Go Directly to Your Destination , Skip AdFly , Skip Annoying Ads, Block Adblock Detection , Block Annoying Popup And Prompts , Automatically Downloading Files , Flickr Images And Youtube Video And Much More",
            f"// @description    Automatically bypass link shorteners. Skip timers, ads, and redirects.\n// @homepageURL    {HOMEPAGE}\n// @supportURL     {SUPPORT_URL}"
        )
        content = content.replace(
            "// @description    Automatically bypass many link shorteners. Originally by BloggerPemula.\n// @homepageURL    https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated\n// @supportURL     https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/issues",
            f"// @description    Automatically bypass link shorteners. Skip timers, ads, and redirects.\n// @homepageURL    {HOMEPAGE}\n// @supportURL     {SUPPORT_URL}"
        )

        # Strip BloggerPemula donation messages
        bp_rant = '''// ================================================================================================================================================================\n//                                          PLEASE READ SCRIPT INFO BEFORE USE\n//                                      PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU\n//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR\n//                 PLEASE DON'T REMOVE OR CHANGE MY BLOG, DISABLE YOUR ADBLOCK IN MY BLOG , THANKS FOR YOUR SUPPORT\n//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...\n// Thanks so much to @JustOlaf , @Konf , @hacker09 , @juansi , @NotYou , @cunaqr And @Rust1667 for Helping me , make my script even better\n//                        Thanks so much to @varram for providing a Great Bypass Site bypass.city and adbypass.org\n//                                And also Thank you to everyone who has Contributed with Good Feedback.\n// =================================================================================================================================================================\n// NOTES\n// Change Your Delay in the settings options from 5 to 10 or 20 if you have issues like Your action marked Suspicious,Don't try to bypass ,Don't use Speedster, etc\n// What do you think if I move all the code to my own server, so people who can only duplicate my script and change the code as they wish, will not be able to do it anymore?\n// Say thank you to the donors by leaving good feedback, because of them I am more enthusiastic to improve the quality and add new features to the script.\n// My Scripts Works in All Browsers and All Userscript Extensions , But Better if You Use Firefox Browser and Violentmonkey\n'''
        content = content.replace(bp_rant, '')

        # Strip lazy-update messages
        content = content.replace("// Try to Enable Fast Timer if My Script not Working on besargaji.com\n", "")
        content = content.replace(
            "// Debloated Script from Amm0ni4 Just Make Broken My Script and Made Me Lazy to Update, His Debloated Not Working Correctly and He Don't Know how to Fix it\n",
            ""
        )
        content = content.replace(
            "Please Wait in @ Seconds , Tell Amm0ni4 to Delete His Debloated if You Want My Script to be Updated Regularly , Thanks",
            ""
        )

        # Clean up AJAX submit handler - remove BP branding
        toremove = """        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {$('form[id=go-link]').unbind().submit(function(e) {e.preventDefault();
        var form = $(this);var url = form.attr('action');const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");const blogger = $(".main-header");const pemula = $(".col-sm-6.hidden-xs");
        $.ajax({type: "POST", url: url, data: form.serialize(), beforeSend: function(xhr) {pesan.attr("disabled", "disabled");$('a.get-link').text('Bypassed by Bloggerpemula');
            notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');
            pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula</b></button>');},
          success: function(result, status, xhr) {if (xhr.responseText.match('(insfly|Insfly).pw|(freecrypto|freeltc|a-s-cracks).top|mdiskshortner.link|(oscut|exashorts).fun|bigbtc.win|slink.bid|clockads.in')) {location.href = result.url;} else {redirect(result.url);}}});});}\n"""
        content = content.replace(toremove, "        success: function(data) {redirect(data.url);}});} else if (elementExists('form[id=go-link]')) {}    ")

        # Replace remaining BP text
        content = content.replace("Bypassed by Bloggerpemula", "Link Bypassed")
        content = content.replace(
            "Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Bloggerpemula",
            SCRIPT_NAME
        )

        # Remove features that depend on external BP servers
        content = content.replace("// @connect    nocaptchaai.com\n", "")

        # Remove YouTube download feature (uses BP's server, disabled by default anyway)
        # Keep YTShort bypass (shorts redirect) — that's useful and has no external deps
        content = content.replace(
            "    YTDown: {label: 'Auto Download Youtube Video',type: 'checkbox',default: false,column: 'right'},\n",
            ""
        )
        # Strip the showDownloadDialog block and its YTDown listener
        # (these span a few long lines in the final output file)
        yt_start = "const showDownloadDialog = () => {"
        yt_end   = "if (cfg.get('YTDown')) {addDownloadButton();document.addEventListener('yt-navigate-finish', addDownloadButton);document.addEventListener('yt-page-data-updated', addDownloadButton);}"
        if yt_start in content and yt_end in content:
            idx_s = content.rfind('\n', 0, content.find(yt_start))
            idx_e = content.find(yt_end) + len(yt_end)
            content = content[:idx_s] + content[idx_e:]
        else:
            # Fallback: remove the pythonanywhere youtube URL lines directly
            content = content.replace(
                "    if (!videoId) return BpNote(\'Invalid video ID\', \'warn\');",
                "    if (!videoId) return;"
            )
        content = content.replace("let List1 = ['ay.live', 'aylink.co', 'gitlink.pro']", "let List1 = ['ay.live', 'gitlink.pro']")

        # Remove tracking redirects
        content = content.replace("https://bloggerpemula.pythonanywhere.com/?BypassResults=", "")

        # Remove the @match rule for the BP tracking domain
        content = content.replace(
            "// @match *://*.bloggerpemula.pythonanywhere.com/*\n", ""
        )

        # Remove the BypassResults incoming case handler (two-line block)
        bp_case_line1 = (
            "      case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' "
            "&& h.searchParams.has('BypassResults')) {result.link = decodeURIComponent("
            "location.href.split('BypassResults=')[1].replace('&m=1', ''));\n"
        )
        bp_case_line2 = (
            "      result.redirectDelay = cfg.get('SetDelay'); result.isNotifyNeeded = true; "
            "return result;} break;"
        )
        if bp_case_line1 in content:
            idx = content.find(bp_case_line1)
            end_of_line2 = content.find("\n", content.find(bp_case_line2, idx)) + 1
            content = content[:idx] + "      // bp tracking case removed\n" + content[end_of_line2:]

        # Remove the "Please Wait ... Redirected" notify message that goes with the case
        content = content.replace(
            "notify(`Please Wait You Will be Redirected to Your Destination in @ Seconds , Thanks`);",
            "notify(`Redirecting...`);"
        )
        content = re.sub(r"let respect = '(.*?)';", "let respect = '';", content)
        content = content.replace("blog = true", "blog = false")
        content = remove_lines_containing(content, ["https://menrealitycalc.com/"])

        # Remove the @match rule for the BP tracking domain
        content = content.replace(
            "// @match *://*.bloggerpemula.pythonanywhere.com/*\n", ""
        )

        # Remove the BypassResults return path in the bas() switch block
        bp_case_line = (
            "      case 'bloggerpemula.pythonanywhere.com': if (h.pathname === '/' "
            "&& h.searchParams.has('BypassResults')) {result.link = decodeURIComponent("
            "location.href.split('BypassResults=')[1].replace('&m=1', ''));"
        )
        if bp_case_line in content:
            idx = content.find(bp_case_line)
            # The block ends at the next line break after "return result;} break;"
            end_marker = "return result;} break;"
            end_idx = content.find(end_marker, idx)
            if end_idx != -1:
                end_idx = content.find("\n", end_idx) + 1
                content = content[:idx] + "      // bp tracking path removed\n" + content[end_idx:]

        # Fix redirect() function — strip the tracking server route
        old_redirect = (
            "  function redirect(url, blog = true) {location = blog && cfg.get('BlogDelay') ? "
            "'https://bloggerpemula.pythonanywhere.com/?BypassResults=' + url : url;}\n"
        )
        if old_redirect in content:
            content = content.replace(old_redirect, "  function redirect(url, blog = false) {location = url;}\n")

        # Point download/update URLs to this repo
        content = content.replace(
            "https://update.greasyfork.org/scripts/528923/1599357/MonkeyConfig%20Mod.js",
            f"{REPO_RAW}/MonkeyConfig-Mod.js"
        )
        content = content.replace(
            "https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/MonkeyConfig-Mod.js",
            f"{REPO_RAW}/MonkeyConfig-Mod.js"
        )
        content = content.replace(
            "https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js",
            f"{REPO_RAW}/{OUTPUT_FILE}"
        )
        content = content.replace(
            "https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.user.js",
            f"{REPO_RAW}/{OUTPUT_FILE}"
        )
        content = content.replace(
            "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.user.js",
            f"{REPO_RAW}/{OUTPUT_FILE}"
        )
        content = content.replace(
            "https://codeberg.org/Amm0ni4/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js",
            f"{REPO_RAW}/{META_FILE}"
        )
        content = content.replace(
            "https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated/raw/branch/main/Bypass_All_Shortlinks.meta.js",
            f"{REPO_RAW}/{META_FILE}"
        )
        content = content.replace(
            "https://update.greasyfork.org/scripts/431691/Bypass%20All%20Shortlinks.meta.js",
            f"{REPO_RAW}/{META_FILE}"
        )
        content = content.replace(
            "https://openuserjs.org/meta/Bloggerpemula/Bypass_All_Shortlinks_Manual_Captcha.meta.js",
            f"{REPO_RAW}/{META_FILE}"
        )

        # Replace upstream Codeberg references
        content = content.replace("codeberg.org/Amm0ni4", HOMEPAGE)
        content = content.replace("https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated", HOMEPAGE)

        # Clean up settings menu
        content = content.replace(
            "Recaptcha Audio Mode',type: 'checkbox',fontColor: \"#FF0000",
            "Recaptcha Audio Mode',type: 'checkbox',fontColor: \"#008080"
        )
        content = content.replace(
            "Announcements: {type: 'textarea',label: 'Announcements',fontColor: \"#0000ff\",default: ScInfo,column: 'top',labelAlign: 'center',rows: 5,cols: 50},",
            ''
        )
        content = content.replace(
            "const ScInfo = \"1. Support Me Via https://saweria.co/Bloggerpemula or Crypto(Check Homepage)\\n2. Teal Features=> Sometimes Causes Problems , use Your own Trial Error\\n3. Red Features=> I Turned Off the Feature until the Duplicate Script was Removed. (Read Script Info)\";",
            ''
        )

        # Bug fixes
        content = content.replace("ClickIfExists('#slu-continue')", "ClickIfExists('#btn-3')")

        # Translate Indonesian log messages to English
        content = content.replace(
            """try {element[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} catch (error) {console.error(`Aksi "${action}" Gagal pada elemen "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Aksi "${action}" berhasil dijalankan pada elemen "${query}".`);} else {BpNote(`Elemen "${query}" tidak ditemukan.`,'error');""",
            """try {element[action]();BpNote(`Action "${action}" executed on "${query}".`);} catch (error) {console.error(`Action "${action}" failed on "${query}":`, error);}}, time * 1000);} else if (timerFuncName === 'setInterval') {const intervalId = timerFunc(() => {try {if (elementExists(query)) {const currentElement = bp(query);currentElement[action]();BpNote(`Action "${action}" executed on "${query}".`);} else {BpNote(`Element "${query}" not found.`,'error');"""
        )

        # Ensure @noframes is present
        if "@noframes" not in content:
            content = content.replace("\n// @version", "\n// @noframes\n// @version")

        # Stamp the new version
        content = re.sub(r'@version\s+[\d\.]+-?(?:patch[\d\.]+)?', f'@version    {new_version}', content)

        # Sanity-check: make sure tracking is gone
        tracking_strings = [
            "BypassResults=",
            "menrealitycalc.com",
            "sl1bas.blogspot.com",
            "bloggerpemula.pythonanywhere.com",
        ]
        if does_not_contain_any(content, tracking_strings):
            content = content.replace("\n// @antifeature    tracking", "")
            print("OK: Tracking verified removed.")
        else:
            print("WARNING: Some tracking strings may still be present:")
            for s in tracking_strings:
                if s in content:
                    print(f"  - Found: {s}")

        if not content.endswith('\n'):
            content += '\n'

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"OK: Debloated and rebranded -> {file_path}")

    except Exception as e:
        print(f"Error in debloat_and_rebrand: {e}")
        raise


def extract_metadata(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    start = end = None
    for i, line in enumerate(lines):
        if line.startswith("// ==UserScript=="):
            start = i
        elif line.startswith("// ==/UserScript=="):
            end = i
            break

    if start is not None and end is not None:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.writelines(lines[start:end + 1])
        print(f"OK: Metadata extracted -> {output_file}")
    else:
        print("Warning: Could not find UserScript metadata block.")


def main():
    new_version = extract_version(OUTPUT_FILE)
    build_script(
        input_path='upstream_patched.user.js',
        includes_path='includes.txt',
        output_path=OUTPUT_FILE
    )
    debloat_and_rebrand(OUTPUT_FILE, new_version)
    extract_metadata(OUTPUT_FILE, META_FILE)


if __name__ == "__main__":
    main()
