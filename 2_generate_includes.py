import re


def extract_domains_from_js(js_code):
    """Extract all domain patterns from BypassedByBloggerPemula, BloggerPemula, case statements, etc."""

    pattern1 = r"(?<!//)(?<!/\*)BypassedByBloggerPemula\('([^']+)',"
    matches1 = re.findall(pattern1, js_code)
    matches1 = [m.strip('/') for m in matches1]

    pattern1b = r'(?<!//)BypassedByBloggerPemula\(/\s*([a-zA-Z0-9.-]+)\s*/,'
    matches1b = re.findall(pattern1b, js_code)

    pattern1c = r'(?<!//)BypassedByBloggerPemula\((/[^/]*?/,)'
    matches1c = re.findall(pattern1c, js_code)
    matches1c = [m.strip("/',") for m in matches1c]

    pattern2 = r"(?<!//)BloggerPemula\('([^']+)',"
    matches2 = re.findall(pattern2, js_code)

    pattern3 = r"(?<!//)RemoveBp\('([^']+)',"
    matches3 = re.findall(pattern3, js_code)

    pattern4 = r"(?<!//)case '(.*?)':"
    matches4 = re.findall(pattern4, js_code)

    pattern5 = r"h\.href\.includes\('(.*?)'\)"
    matches5 = re.findall(pattern5, js_code)

    all_matches = matches1 + matches1b + matches1c + matches2 + matches3 + matches4 + matches5
    all_matches = list(dict.fromkeys(all_matches))  # deduplicate preserving order
    return all_matches


def write_lines(filename, lines):
    with open(filename, 'w', encoding='utf-8') as f:
        for line in lines:
            f.write(line + '\n')
    if lines:
        print(f"OK: Generated {filename} ({len(lines)} entries)")


def generate_rules(domains):
    include_rules = []
    match_rules = []
    combined = []

    for domain in domains:
        # Use @include for complex regex patterns
        if any(c in domain for c in ['|', '(', ')', '*']):
            domain_group = '(' + domain + ')'
            rule = r"/^(https?:\/\/)(.+)?" + domain_group + r"(\/.*)/".replace(r"\.*)(\/.*/", r"\.*)/")
            include_rules.append(rule)
            combined.append("// @include " + rule)
        else:
            # Use simpler @match for plain domains
            rule = '*://*.' + domain + '/*'
            match_rules.append(rule)
            combined.append("// @match " + rule)

    write_lines('supported_sites.txt', domains)
    write_lines('match_rules.txt', match_rules)
    write_lines('include_rules.txt', include_rules)
    write_lines('includes.txt', combined)


def main():
    # Clear outputs
    for f in ['supported_sites.txt', 'match_rules.txt', 'include_rules.txt', 'includes.txt']:
        write_lines(f, [])

    input_file = 'upstream_patched.user.js'

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            js_code = f.read()

        domains = extract_domains_from_js(js_code)
        domains = list(dict.fromkeys(domains))

        # Keep only valid-looking domains
        domains = [d for d in domains if '.' in d and len(d) >= 5]

        # Remove domains we don't want in @match/@include (handled separately or too broad)
        blocked = [
            "google",
            "youtube",
            "twitter.com",
            "facebook.com",
            "tiktok.com",
            "vk.com"
        ]
        domains = [d for d in domains if not any(b in d for b in blocked)]

        generate_rules(domains)

    except FileNotFoundError:
        print(f"Error: {input_file} not found. Run script 1 first.")
    except Exception as e:
        print(f"Error: {e}")
        raise


if __name__ == "__main__":
    main()
