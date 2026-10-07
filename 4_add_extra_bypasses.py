import os

OUTPUT_FILE = "Bypass_Shortlinks.user.js"
META_FILE = "Bypass_Shortlinks.meta.js"
EXTRA_BYPASSES_DIR = "./extra_bypasses"


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
        print(f"OK: Metadata updated -> {output_file}")


def merge_extra_bypasses(folder, target_file):
    with open(target_file, 'r', encoding='utf-8') as f:
        target_lines = f.readlines()

    grant_lines = []
    match_lines = []
    include_lines = []
    require_lines = []
    resource_lines = []
    code_to_append = []

    # Process in sorted order for deterministic builds
    for filename in sorted(os.listdir(folder)):
        if not filename.endswith(".js"):
            continue

        filepath = os.path.join(folder, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()

        # Extract header directives not already in the target
        for line in lines:
            stripped = line.strip()
            if not stripped:
                continue
            if any(tag in line for tag in ['@match', '@include', '@resource', '@require', '@grant']):
                if line not in target_lines:
                    if line.startswith("// @grant"):
                        grant_lines.append(line)
                    elif line.startswith("// @match"):
                        match_lines.append(line)
                    elif line.startswith("// @include"):
                        include_lines.append(line)
                    elif line.startswith("// @require"):
                        require_lines.append(line)
                    elif line.startswith("// @resource"):
                        resource_lines.append(line)

        # Extract code after ==/UserScript==
        after_header = False
        for line in lines:
            if after_header:
                code_to_append.append(line)
            elif "// ==/UserScript==" in line:
                after_header = True

    # Inject header directives before first @exclude
    with open(target_file, 'r+', encoding='utf-8') as f:
        content = f.readlines()

        exclude_idx = next((i for i, l in enumerate(content) if '@exclude' in l), None)
        if exclude_idx is not None:
            new_content = (
                content[:exclude_idx]
                + grant_lines
                + match_lines
                + include_lines
                + require_lines
                + resource_lines
                + content[exclude_idx:]
            )
        else:
            new_content = content + grant_lines + match_lines + include_lines + require_lines + resource_lines

        # Append extra bypass code blocks
        new_content.extend(code_to_append)

        f.seek(0)
        f.writelines(new_content)
        f.truncate()

    # Also update supported_sites.txt with new domains from merged match/include lines
    new_sites = []
    for line in match_lines:
        site = line.strip().replace("// @match", "").strip()
        new_sites.append(site)
    for line in include_lines:
        site = line.strip().replace("// @include", "").strip()
        new_sites.append(site)

    if new_sites:
        with open("supported_sites.txt", 'a', encoding='utf-8') as f:
            for site in new_sites:
                f.write(site + '\n')

    grants = len(grant_lines)
    domains = len(match_lines) + len(include_lines)
    code_lines = len(code_to_append)
    print(f"OK: Merged extra bypasses -> +{domains} domains, +{code_lines} code lines, +{grants} grants")


def inject_domain_filter(target_file, sites_file="supported_sites.txt"):
    """Inject the DomainMode runtime filter into a built userscript body.

    When the 'DomainMode' setting is active the script aborts early on any page
    whose hostname is not in the known-shorteners list read from supported_sites.txt.
    This is injected AFTER all extra_bypasses/ domains have been appended to
    supported_sites.txt so the list is complete.
    """
    try:
        with open(sites_file, "r", encoding="utf-8") as sf:
            sites = [s.strip() for s in sf.readlines() if s.strip()]
    except FileNotFoundError:
        print(f"Warning: {sites_file} not found, DomainMode filter skipped")
        return

    sites_list_js = str(sites)
    domain_filter_js = f"""
  // DomainMode Filter: Abort if strict mode is on and domain is not a known shortener
  if (typeof cfg !== 'undefined' && cfg && cfg.get && cfg.get('DomainMode')) {{
      var __knownDomains = {sites_list_js};
      var __host = location.hostname.replace(/^www\\./, '');
      var __isKnown = __knownDomains.some(function(p) {{
          if (p.indexOf('|') !== -1 || p.indexOf('(') !== -1 || p.indexOf('[') !== -1) {{
              try {{ return new RegExp(p).test(__host); }} catch(e) {{ return false; }}
          }}
          return __host === p || __host.slice(-(p.length + 1)) === '.' + p;
      }});
      if (!__isKnown) return;
  }}

"""
    try:
        with open(target_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Inject right before "const bp = function" — reliable anchor after MonkeyConfig init
        if "  const bp = function(" in content:
            content = content.replace(
                "  const bp = function(",
                domain_filter_js + "  const bp = function("
            )
            with open(target_file, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"OK: DomainMode filter injected -> {target_file}")
        else:
            print(f"Warning: injection anchor not found in {target_file}, skipped")
    except FileNotFoundError:
        print(f"Warning: {target_file} not found, skipped")


def main():
    merge_extra_bypasses(EXTRA_BYPASSES_DIR, OUTPUT_FILE)
    extract_metadata(OUTPUT_FILE, META_FILE)
    # Inject DomainMode filter AFTER supported_sites.txt is fully populated by merging extras
    inject_domain_filter(OUTPUT_FILE)
    print("Build complete.")


if __name__ == "__main__":
    main()
