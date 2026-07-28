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


def main():
    merge_extra_bypasses(EXTRA_BYPASSES_DIR, OUTPUT_FILE)
    extract_metadata(OUTPUT_FILE, META_FILE)
    print("Build complete.")


if __name__ == "__main__":
    main()
