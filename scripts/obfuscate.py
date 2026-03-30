#!/usr/bin/env python3
"""
obfuscate.py  —  Post-build hardening pass on Bypass_Shortlinks.user.js

The ==UserScript== header is never modified (required by userscript managers).
All passes apply to the body only.

Techniques applied (in order):
  1. Comment strip        remove all // and /* */ comments
  2. Log strip            remove _log() / console.* calls
  3. Symbol mangle        rename internal names to short opaque aliases
  4. String fragmentation split identifiable strings into joined char chunks
                          (seed-based: each build produces different split points)
  5. Char-code encode     encode remaining CSS selectors as charCode arrays
                          decoded via String.fromCharCode — no eval() used
  6. Dead code injection  insert inert code blocks at random positions
  7. Whitespace collapse  remove excess blank lines and trailing spaces

None of these techniques prevent the script from working. They prevent
site owners from grepping for their own selector names, IDs, class names,
or hostnames to find and patch bypass logic.
"""

import re, random, hashlib
from pathlib import Path

ROOT   = Path(__file__).resolve().parent.parent
TARGET = ROOT / 'Bypass_Shortlinks.user.js'


def _seed(code):
    h = hashlib.sha256(code.encode()).hexdigest()
    random.seed(int(h[:12], 16))


# ── 1. Strip comments ─────────────────────────────────────────────────────────
def strip_comments(body):
    # Strip block comments
    body = re.sub(r'/\*[\s\S]*?\*/', '', body)
    # Strip line comments — but not lines starting with // (handled below)
    # Remove trailing // comments on code lines
    result = []
    for line in body.splitlines():
        # Don't touch @match / @include / header lines (they're in header, not body)
        stripped = re.sub(r'\s*//[^/].*$', '', line)
        result.append(stripped)
    return '\n'.join(result)


# ── 2. Strip log calls ────────────────────────────────────────────────────────
def strip_logs(body):
    body = re.sub(r'[\t ]*_log\s*\([^;]*\)\s*;?[ \t]*\n', '\n', body)
    body = re.sub(r'[\t ]*console\.(log|warn|error|info)\s*\([^;]*\)\s*;?[ \t]*\n', '\n', body)
    return body


# ── 3. Symbol mangling ────────────────────────────────────────────────────────
SYMBOLS = {
    '_SETTINGS':         '_p0',
    '_BTN':              '_p1',
    '_NET':              '_p2',
    '_AAB':              '_p3',
    '_CNTDN':            '_p4',
    '_CAPTCHA':          '_p5',
    '_BAPI':             '_p6',
    '_cfg':              '_p7',
    '_HOST':             '_p8',
    '_URL':              '_p9',
    '_PATH':             '_pa',
    '_uw':               '_pb',
    'PROCEED_WORDS':     '_pc',
    '_captchaSolved':    '_pd',
    '_isReady':          '_pe',
    '_wasDisabled':      '_pf',
    'varZero':           '_pg',
    'domZero':           '_ph',
    'hookTimers':        '_pi',
    'hookDate':          '_pj',
    'seedDisabled':      '_pk',
    'waitForSolution':   '_pl',
    '_extractUrl':       '_pm',
    '_isExternal':       '_pn',
    '_solveMath':        '_po',
    '_solveDigitOrder':  '_pp',
    '_solveVisibleMath': '_pq',
    '_spoofGlobals':     '_pr',
    '_spoofFAB':         '_ps',
    '_spoofBaitGeometry':'_pt',
    '_blockAABScripts':  '_pu',
    '_blockAABRequests': '_pv',
    '_blockPopunders':   '_pw',
    '_scanDOM':          '_px',
    '_watchDOM':         '_py',
    '_dismiss':          '_pz',
    '_isWall':           '_p10',
    '_timerHooked':      '_p11',
    '_dateHooked':       '_p12',
    '_hooked':           '_p13',
    '_watching':         '_p14',
    '_destUrl':          '_p15',
    '_collapse':         '_p16',
    '_proceed':          '_p17',
    '_execute':          '_p18',
    '_toast':            '_p19',
    '_badge':            '_p1a',
    '_done':             '_p1b',
    '_obs':              '_p1c',
    '_poll':             '_p1d',
    '_elapsed':          '_p1e',
    '_fade':             '_p1f',
    '_go':               '_p1g',
}

def mangle_symbols(body):
    for orig, repl in SYMBOLS.items():
        # Word-boundary replacement, skip strings already replaced
        body = re.sub(r'(?<![_a-zA-Z0-9])' + re.escape(orig) + r'(?![_a-zA-Z0-9])', repl, body)
    return body


# ── 4. String fragmentation ───────────────────────────────────────────────────
# Patterns that identify "greppable" strings worth fragmenting.
# Matches CSS selectors starting with # or ., and multi-word strings.
_FRAG_RE = re.compile(
    r"(?<!\+)'("
    r"(?:#|\.)[a-zA-Z][a-zA-Z0-9_\-:.()]{3,}"  # #id or .class selectors
    r"|[a-z][a-z0-9]{2,}\.(io|com|net|in|org|xyz|click|app|site|online)"  # hostnames
    r"|(?:free|get|start|create|slow|normal|generate|visit|access|click) [a-z ]{3,}"  # multi-word
    r")'(?!\s*\+)"
)

def _chunk(s):
    parts, i = [], 0
    while i < len(s):
        size = random.randint(2, 4)
        parts.append(s[i:i + size])
        i += size
    inner = ','.join(f"'{p}'" for p in parts)
    return f"[{inner}].join('')"

def fragment_strings(body):
    def _repl(m):
        s = m.group(1)
        if len(s) < 4 or any(c in s for c in ['$', '{', '\\', '\n']):
            return m.group(0)
        return _chunk(s)
    return _FRAG_RE.sub(_repl, body)


# ── 5. Char-code encoding ─────────────────────────────────────────────────────
# Any remaining identifiable selector strings get encoded as charCode arrays.
# [65,66].map(function(c){return String.fromCharCode(c)}).join('') == 'AB'
# No eval() — pure map+fromCharCode.
_CHARCODE_RE = re.compile(
    r"(?<!\+)'("
    r"(?:#|\.)[a-zA-Z][a-zA-Z0-9_\-:.()]{5,}"   # #id or .class still in plaintext
    r"|input\[[^\]']{5,}\]"                        # attribute selectors
    r"|button[a-z .#\[\]\"=:]{5,}"                # button selectors
    r"|a\.[a-z][a-z\-]{5,}"                        # link selectors
    r")'(?!\s*[+,])"
)

def charcode_encode(body):
    def _enc(m):
        s = m.group(1)
        if len(s) < 5 or any(c in s for c in ['\\', '\n']):
            return m.group(0)
        codes = ','.join(str(ord(c)) for c in s)
        return f"[{codes}].map(function(_c){{return String.fromCharCode(_c)}}).join('')"
    return _CHARCODE_RE.sub(_enc, body)


# ── 6. Dead code injection ────────────────────────────────────────────────────
# Inert code blocks that look like normal shortlink page utility code.
# These obscure the real logic by adding visual noise.

_DEAD = [
    'var _bspT=Date.now();void(_bspT>0);',
    '!function(){var _n=navigator.userAgent.length;void(_n);}();',
    'try{void(window.performance&&window.performance.now());}catch(_x){}',
    'var _bspR=!!document.querySelector;void(_bspR);',
    '!function(){var _m=Math.round;void(_m);}();',
    'try{void(Object.keys&&Object.keys({}).length===0);}catch(_x){}',
    'var _bspF=typeof window.fetch==="function";void(_bspF);',
    '!function(){var _d=document.readyState;void(_d);}();',
    'try{void(window.location&&window.location.protocol);}catch(_x){}',
    'var _bspH=window.history&&window.history.length;void(_bspH);',
]

def inject_dead_code(body):
    lines = body.splitlines()
    n = len(lines)
    if n < 40:
        return body
    # Insert 4 dead blocks at random non-edge positions
    positions = sorted(random.sample(range(15, n - 15), min(4, n // 25)))
    for i, pos in enumerate(positions):
        block = random.choice(_DEAD)
        lines.insert(pos + i, block)
    return '\n'.join(lines)


# ── 7. Whitespace collapse ────────────────────────────────────────────────────
def collapse_whitespace(body):
    body = re.sub(r'\n{3,}', '\n\n', body)
    body = re.sub(r'[ \t]+\n', '\n', body)
    return body.strip()


# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    if not TARGET.exists():
        print(f'  Target not found: {TARGET}')
        return

    code = TARGET.read_text(encoding='utf-8')

    # Split: header (untouched) | body (obfuscated)
    tag = '// ==/UserScript=='
    idx = code.find(tag)
    if idx == -1:
        print('  UserScript header not found — aborting')
        return
    idx = code.index('\n', idx) + 1
    header = code[:idx]
    body   = code[idx:]

    orig_len = len(code)
    _seed(body)

    body = strip_comments(body)
    body = strip_logs(body)
    body = mangle_symbols(body)
    body = fragment_strings(body)
    body = charcode_encode(body)
    body = inject_dead_code(body)
    body = collapse_whitespace(body)

    result = header + '\n' + body + '\n'
    TARGET.write_text(result, encoding='utf-8')

    print(f'  Hardening done: {orig_len:,} → {len(result):,} chars ({TARGET.name})')


if __name__ == '__main__':
    main()
