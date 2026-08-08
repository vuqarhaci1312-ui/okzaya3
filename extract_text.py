import re, html
from pathlib import Path

content = Path(r'c:\Users\anggr\Downloads\shop.vitrumgroup.org\shop.vitrumgroup.org\index.html').read_text(encoding='utf-8')
body_m = re.search(r'<body[^>]*>(.*)</body>', content, re.S)
body = body_m.group(1) if body_m else content
body_clean = re.sub(r'<script[^>]*>.*?</script>', '', body, flags=re.S|re.I)
body_clean = re.sub(r'<style[^>]*>.*?</style>', '', body_clean, flags=re.S|re.I)

def strip_tags(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = html.unescape(s)
    return re.sub(r'\s+', ' ', s).strip()

# menu items
menu = set()
for pat in [
    r'class="menu-drawer__menu-item[^"]*"[^>]*>\s*([^<]+)',
    r'class="menu-drawer__level-title[^"]*"[^>]*>([^<]+)',
    r'<summary[^>]*>\s*<span>([^<]+)</span>',
    r'class="mega-nav__rail-item[^"]*"[^>]*>\s*<span>([^<]+)</span>',
    r'class="mega-nav__group-title[^"]*"[^>]*>([^<]+)</a>',
    r'class="mega-nav__group-title"[^>]*>([^<]+)</span>',
    r'class="mega-nav__group-item"[^>]*>([^<]+)</a>',
    r'class="mega-nav__quicklink[^"]*"[^>]*>([^<]+)</a>',
    r'class="mega-nav__tab[^"]*"[^>]*>\s*<span>([^<]+)</span>',
]:
    for m in re.finditer(pat, body_clean, re.S):
        t = strip_tags(m.group(1))
        if t and len(t) > 1: menu.add(t)

print('MENU_COUNT', len(menu))
for t in sorted(menu, key=str.lower):
    print(t)
