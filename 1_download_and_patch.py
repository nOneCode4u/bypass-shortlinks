"""
Syncs the base script from gongchandang49's repository, then applies any
extra fixes or additions that are specific to this fork.

Run this first, before the other build scripts.
"""

import os
import requests


UPSTREAM_URL = (
    "https://github.com/gongchandang49/bypass-all-shortlinks-debloated"
    "/raw/refs/heads/main/Bypass_All_Shortlinks.user.js"
)

# Fallback URL (Codeberg mirror of the same repo)
UPSTREAM_URL_FALLBACK = (
    "https://codeberg.org/gongchandang49/bypass-all-shortlinks-debloated"
    "/raw/branch/main/Bypass_All_Shortlinks.user.js"
)

RAW_FILE = "upstream_gongchandang49.user.js"
PATCHED_FILE = "upstream_patched.user.js"


def fetch(url, destination):
    print(f"Fetching: {url}")
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    with open(destination, "wb") as f:
        f.write(r.content)
    size = os.path.getsize(destination)
    print(f"  Saved {destination} ({size:,} bytes)")


def sync_upstream():
    """Download the latest build from gongchandang49. Try GitHub first, fall back to Codeberg."""
    try:
        fetch(UPSTREAM_URL, RAW_FILE)
    except Exception as e:
        print(f"  GitHub failed ({e}), trying Codeberg...")
        fetch(UPSTREAM_URL_FALLBACK, RAW_FILE)


def apply_our_fixes(src, dst):
    """
    Apply fixes and additions specific to this fork — things not yet
    in gongchandang49's repo, or domains/patterns we've added ourselves.
    """
    with open(src, "r", encoding="utf-8") as f:
        content = f.read()

    # gplinks additional domains
    content = content.replace(
        "mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm).com"
        "|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online",
        "mangareleasedate|sabkiyojana|teqwit|bulkpit|odiafm|qrixpe).com"
        "|(loopmyhub|thepopxp).shop|(cryptoblast|powergam).online"
    )

    # exe.io additional domains
    content = content.replace(
        "(exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo).com|4ace.online",
        "(exeo|exego).app|(falpus|exe-urls|exnion|exe-links|exeygo|exeylink).com|4ace.online"
    )

    # stfly group - trekcheck.net addition
    content = content.replace(
        "stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com"
        "|(blogbux|blogesque|exploreera|explorosity|torovalley).net",
        "stfly.(cc|xyz|biz)|(techtrendmakers|gadnest|optimizepics).com"
        "|(blogbux|blogesque|exploreera|explorosity|torovalley|trekcheck).net"
    )

    # indobo group additions
    content = content.replace(
        "(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo).com",
        "(aduzz|tutorialsaya|baristakesehatan|merekrut|indobo|educorp).com"
    )

    # lksfy group additions
    content = content.replace(
        "(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub).in",
        "(raftarsamachar|gadialert|jobinmeghalaya|raftarwords|sharclub|jankaritak).in"
    )

    # work.ink still broken - keep disabled
    if "case 'work.ink'" in content and "//case 'work.ink'" not in content:
        content = content.replace("case 'work.ink'", "//case 'work.ink'")

    # pixeldrain handled by a dedicated separate script
    if "case 'pixeldrain.com'" in content and "//case 'pixeldrain.com'" not in content:
        content = content.replace("case 'pixeldrain.com'", "//case 'pixeldrain.com'")

    if not content.endswith("\n"):
        content += "\n"

    with open(dst, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"OK: Fixes applied -> {dst}")


if __name__ == "__main__":
    sync_upstream()
    apply_our_fixes(RAW_FILE, PATCHED_FILE)
