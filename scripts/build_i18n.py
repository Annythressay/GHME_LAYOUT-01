"""Annotate shared HTML in place; run after any existing page generator.

Catalogs are authored in assets/i18n/catalog.json. No translated page copies.
Only direct text slots and user-facing attributes are marked, preserving icons,
links, emphasis, whitespace, input values and all existing DOM structure.
"""
import json
import re
from html import escape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
def normalize(value): return ' '.join(value.split())

class Markup(HTMLParser):
    def __init__(self, source, keys):
        super().__init__(convert_charrefs=True)
        self.source, self.keys = source, keys
        self.offsets = [0]
        self.offsets += [m.end() for m in re.finditer('\n', source)]
        self.stack, self.edits = [], []
    def handle_starttag(self, tag, attrs):
        raw = self.get_starttag_text()
        row, column = self.getpos()
        position = self.offsets[row-1] + column
        item = {'tag': tag, 'position': position + len(raw) - (2 if raw.endswith('/>') else 1), 'slots': [], 'count': 0, 'attrs': []}
        attributes = dict(attrs)
        for name in ('aria-label', 'alt', 'title', 'placeholder'):
            key = self.keys.get(normalize(attributes.get(name) or ''))
            if key: item['attrs'].append(f'{name}:{key}')
        if tag == 'meta' and attributes.get('name') == 'description':
            key = self.keys.get(normalize(attributes.get('content', '')))
            if key: item['attrs'].append(f'content:{key}')
        # Text labels may change, but existing program/region values stay stable.
        if tag == 'option' and 'value' not in attributes:
            item['option'] = True
        if tag not in VOID:
            self.stack.append(item)
        else: self.finish(item)
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID: self.handle_endtag(tag)
    def handle_data(self, data):
        if not self.stack: return
        item = self.stack[-1]
        key = self.keys.get(normalize(data))
        if key and item['tag'] not in ('script', 'style'): item['slots'].append(f'{item["count"]}:{key}')
        if item.get('option'): item['value'] = data
        item['count'] += 1
    def finish(self, item):
        addition = ''
        if item['slots']: addition += ' data-i18n="' + ';'.join(item['slots']) + '"'
        if item['attrs']: addition += ' data-i18n-attrs="' + ';'.join(item['attrs']) + '"'
        if item.get('option'): addition += ' value="' + escape(item.get('value', ''), quote=True) + '"'
        if addition: self.edits.append((item['position'], addition))
    def handle_endtag(self, tag):
        if self.stack and self.stack[-1]['tag'] == tag: self.finish(self.stack.pop())

def main():
    catalog = json.loads((ROOT/'assets/i18n/catalog.json').read_text(encoding='utf-8'))
    keys = {normalize(value['vi']): key for key, value in catalog.items()}
    for language in ('vi', 'en'):
        values = {key: value[language] for key, value in catalog.items()}
        (ROOT/f'assets/i18n/{language}.js').write_text('window.GHME_TRANSLATIONS = window.GHME_TRANSLATIONS || {};\nwindow.GHME_TRANSLATIONS.' + language + ' = ' + json.dumps(values, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
    for file in [ROOT/'index.html', ROOT/'about.html', *sorted((ROOT/'courses').glob('*.html'))]:
        source = file.read_text(encoding='utf-8')
        prefix = '../' if file.parent.name == 'courses' else ''
        if 'assets/js/language.js' not in source:
            head = f'''\n  <script src="{prefix}assets/js/language.js"></script>
  <link rel="stylesheet" href="{prefix}assets/css/i18n.css">
  <script src="{prefix}assets/i18n/vi.js" defer></script>
  <script src="{prefix}assets/i18n/en.js" defer></script>
  <script src="{prefix}assets/js/i18n.js" defer></script>'''
            source = source.replace('<meta charset="utf-8">', '<meta charset="utf-8">' + head)
        switch = '''<div class="language-switch" role="group" aria-label="Ngôn ngữ: Tiếng Việt / English">ICON<button type="button" data-language="vi" aria-pressed="true" lang="vi" aria-label="Tiếng Việt">VI</button><span aria-hidden="true">|</span><button type="button" data-language="en" aria-pressed="false" lang="en" aria-label="English">EN</button></div>'''
        if 'data-language="vi"' not in source and file.name == 'index.html':
            source = re.sub(r'<button class="language".*?</button>', switch.replace('ICON', '<i class="fa-solid fa-globe" aria-hidden="true"></i>'), source, count=1, flags=re.S)
        elif 'data-language="vi"' not in source and file.name == 'about.html':
            source = source.replace('</div>\n      </div>\n    </div>\n    <div class="nav-wrap">', '</div>\n        ' + switch.replace('ICON', '<i class="fa-solid fa-globe" aria-hidden="true"></i>') + '\n      </div>\n    </div>\n    <div class="nav-wrap">', 1)
        elif 'data-language="vi"' not in source and 'class="course-header"' in source:
            globe = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6h14M5 18h14"/></svg>'
            source = source.replace('<header class="course-header">', '<header class="course-header">\n    <div class="course-language-bar"><div class="course-container">' + switch.replace('ICON', globe) + '</div></div>', 1)
        source = re.sub(r' data-i18n(?:-attrs)?="[^"]*"', '', source)
        parser = Markup(source, keys)
        parser.feed(source)
        for position, addition in sorted(parser.edits, reverse=True): source = source[:position] + addition + source[position:]
        file.write_text(source, encoding='utf-8')
    print(f'Annotated 9 routes, generated VI/EN catalogs ({len(catalog)} keys).')

if __name__ == '__main__': main()
