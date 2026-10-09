"""Rebuild only the homepage expert section from its CMS-ready source data.

Run: python scripts/build_experts.py
No runtime fetch, JavaScript framework, or build step is needed for hosting.
"""
import json
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'assets/data/experts.json').read_text(encoding='utf-8'))
PROFILES = DATA['profiles']


def e(value):
    return escape(str(value), quote=True)


def portrait(profile, css_class='experts__portrait'):
    return (f'<img class="{css_class}" src="{e(profile["portraitImage"])}" '
            f'alt="Chân dung {e(profile["name"])}" width="{profile["portraitWidth"]}" '
            f'height="{profile["portraitHeight"]}" loading="lazy" decoding="async">')


def trigger(profile, label='Xem hồ sơ', css_class='experts__profile-button', circular=False):
    contents = ('<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>' if circular else
                f'<span class="experts__profile-label">{label}</span> '
                '<span class="experts__profile-arrow" aria-hidden="true">→</span>')
    return (f'<button type="button" class="{css_class}" data-expert-id="{e(profile["id"])}" '
            f'aria-haspopup="dialog" aria-controls="expert-dialog" '
            f'aria-label="{label}: {e(profile["name"])}">{contents}</button>')


SPECIALTY_ICONS = {
    'Hồi sức tích cực': 'fa-heart-pulse',
    'Huyết học & Truyền máu': 'fa-droplet',
    'Y học cổ truyền': 'fa-stethoscope',
    'Dinh dưỡng': 'fa-apple-whole',
    'Sản phụ khoa': 'fa-person-pregnant',
    'Y học dự phòng': 'fa-shield-heart',
    'Y học quân sự': 'fa-kit-medical',
    'Nội khoa': 'fa-stethoscope',
    'Cấp cứu & Chăm sóc trước viện': 'fa-truck-medical',
    'Tâm lý học, Phục hồi chức năng': 'fa-brain',
    'Nhãn khoa': 'fa-eye',
}


def card(profile, leadership=False):
    title = f'<p class="experts__academic">{e(profile["academicTitle"])}</p>' if profile['academicTitle'] else ''
    position = f'<p class="experts__position">{e(profile["position"])}</p>' if leadership else ''
    biography = f'<p class="experts__bio">{e(profile["shortBiography"])}</p>' if leadership and profile['shortBiography'] else ''
    specialty = (f'<p class="experts__specialty"><i class="fa-solid {SPECIALTY_ICONS.get(profile["specialty"], "fa-stethoscope")}" aria-hidden="true"></i>'
                 f'<span>{e(profile["specialty"])}</span></p>') if profile['specialty'] else ''
    # Reuse the existing medical-advisor category; never feature by card order.
    featured = 'medical-advisor' in profile['category']
    classes = 'experts__card' + (' experts__card--featured' if featured else '')
    badge = ('<p class="experts__advisor-tag"><i class="fa-regular fa-star" aria-hidden="true"></i>'
             '<span>Chuyên gia nổi bật</span></p>') if featured else ''
    return f'''<article class="{classes}" data-profile="{e(profile['id'])}" data-name="{e(profile['name'])}" data-specialty="{e(profile['specialty'])}">
              <div class="experts__photo">{portrait(profile)}{badge}</div>
              <div class="experts__card-copy">
                <div class="experts__identity"><h4 class="experts__card-name">{e(profile['name'])}</h4>{title}{position}</div>
                {specialty}{biography}
                <div class="experts__card-actions">
                  {trigger(profile)}
                  {trigger(profile, css_class='experts__profile-circle', circular=True)}
                </div>
              </div>
            </article>'''


def profile_template(profile):
    specialty = f'<div><dt>Chuyên ngành đào tạo</dt><dd>{e(profile["specialty"])}</dd></div>' if profile['specialty'] else ''
    academic = f'<p class="experts__academic">{e(profile["academicTitle"])}</p>' if profile['academicTitle'] else ''
    paragraphs = ''.join(f'<p>{e(p)}</p>' for p in profile['fullBiography'])
    biography = f'<div class="experts__full-bio"><h3>Kinh nghiệm &amp; hoạt động chuyên môn</h3>{paragraphs}</div>' if paragraphs else ''
    source = ', '.join(str(n) for n in profile['sourcePages'])
    return f'''<template id="expert-profile-{e(profile['id'])}">
          <div class="experts__dialog-heading">
            {portrait(profile)}
            <div><p class="experts__eyebrow">HỒ SƠ CHUYÊN MÔN</p><h2 id="expert-dialog-title">{e(profile['name'])}</h2>{academic}</div>
          </div>
          <dl class="experts__details"><div><dt>Vai trò tại GHME</dt><dd>{e(profile['position'])}</dd></div>{specialty}</dl>
          {biography}
          <p class="experts__source">Nguồn: GHME Company Profile · Trang {source}</p>
        </template>'''


def render():
    instructors = sorted((p for p in PROFILES if 'instructor' in p['category']), key=lambda p: p['displayOrder'])
    # Homepage selection is supplied by the client; source categories and roles
    # remain intact so selecting a card does not invent a leadership title.
    by_id = {p['id']: p for p in PROFILES}
    leaders = [by_id[person_id] for person_id in DATA['leadershipDisplayIds']]
    assert len({p['id'] for p in PROFILES}) == len(PROFILES)
    specialties = sorted({p['specialty'] for p in instructors if p['specialty']})
    options = ''.join(f'<option value="{e(s)}">{e(s)}</option>' for s in specialties)
    for profile in PROFILES:
        assert (ROOT / profile['portraitImage']).is_file(), profile['id']
    return f'''    <section class="experts decorated" id="certificates" aria-labelledby="certificates-title">
      <!-- Generated from assets/data/experts.json by scripts/build_experts.py. Keep the legacy anchor. -->
      <div class="experts__container">
        <div class="experts__intro">
          <div><p class="experts__eyebrow">ĐỘI NGŨ CHUYÊN MÔN</p>
            <h2 id="certificates-title">Gặp gỡ đội ngũ chuyên gia <em>GHME</em></h2>
          </div>
          <p class="experts__description">Tìm giảng viên phù hợp với lĩnh vực bạn quan tâm.</p>
        </div>
        <div class="experts__directory">
          <div class="experts__directory-header">
            <div class="experts__tabs" aria-label="Nhóm nhân sự GHME">
              <button type="button" id="experts-tab-instructors" data-experts-tab="instructors" aria-controls="experts-instructors">Đội ngũ giảng viên <span>{len(instructors)}</span></button>
              <button type="button" id="experts-tab-leadership" data-experts-tab="leadership" aria-controls="experts-leadership">Ban lãnh đạo <span>{len(leaders):02d}</span></button>
            </div>
            <div class="experts__filters" hidden>
              <label class="experts__search"><span class="sr-only">Tìm theo tên chuyên gia</span><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><input id="experts-search" type="search" placeholder="Tìm theo tên chuyên gia" autocomplete="off" aria-controls="experts-instructors experts-leadership"></label>
              <label class="experts__filter"><span class="sr-only">Lọc theo chuyên khoa</span><select id="experts-specialty" aria-controls="experts-instructors"><option value="">Tất cả chuyên khoa</option>{options}</select></label>
            </div>
          </div>
          <div id="experts-instructors" class="experts__panel">
            <h3 class="experts__group-title">Đội ngũ giảng viên</h3>
            <div class="experts__grid" id="experts-instructor-grid">
              {''.join(card(p) for p in instructors)}
            </div>
          </div>
          <div id="experts-leadership" class="experts__panel">
            <h3 class="experts__group-title">Ban lãnh đạo</h3>
            <div class="experts__grid experts__grid--leadership">
              {''.join(card(p, True) for p in leaders)}
            </div>
          </div>
          <div class="experts__empty" hidden><p>Không tìm thấy chuyên gia phù hợp.</p><button class="experts__reset" type="button">Xóa tìm kiếm và bộ lọc</button></div>
          <div class="experts__footer" hidden>
            <p id="experts-count" role="status" aria-live="polite" aria-atomic="true"></p>
            <nav class="experts__pagination" aria-label="Phân trang đội ngũ chuyên gia" hidden></nav>
          </div>
        </div>
      </div>
      <dialog class="experts__dialog" id="expert-dialog" aria-labelledby="expert-dialog-title">
        <button class="experts__close" type="button" aria-label="Đóng hồ sơ chuyên gia" autofocus><span aria-hidden="true">×</span></button>
        <div id="expert-dialog-content"></div>
      </dialog>
      {''.join(profile_template(p) for p in PROFILES)}
    </section>'''


if __name__ == '__main__':
    index = ROOT / 'index.html'
    with index.open(encoding='utf-8', newline='') as file:
        original = file.read()
    newline = '\r\n' if '\r\n' in original else '\n'
    replacement = '\n'.join(line.rstrip() for line in render().splitlines()).replace('\n', newline)
    updated, count = re.subn(r'    <section class="(?:certificates|experts) decorated" id="certificates".*?</section>', lambda _: replacement, original, count=1, flags=re.S)
    assert count == 1, 'Expert section not found'
    css = '    <link rel="stylesheet" href="assets/css/experts.css?v=20261010-pagination">'
    js = '  <script src="assets/js/experts.js?v=20261010-pagination" defer></script>'
    updated = re.sub(r'assets/css/experts\.css(?:\?[^"\s]*)?', 'assets/css/experts.css?v=20261010-pagination', updated)
    updated = re.sub(r'assets/js/experts\.js(?:\?[^"\s]*)?', 'assets/js/experts.js?v=20261010-pagination', updated)
    if css not in updated:
        updated = updated.replace('    <link rel="stylesheet" href="assets/css/styles.css">', '    <link rel="stylesheet" href="assets/css/styles.css">' + newline + css)
    if js not in updated:
        updated = updated.replace('  <script src="assets/js/main.js?v=20261007-programs" defer></script>', '  <script src="assets/js/main.js?v=20261007-programs" defer></script>' + newline + js)
    with index.open('w', encoding='utf-8', newline='') as file:
        file.write(updated)
    print('Generated expert directory from source profiles.')
    from build_i18n import main as localize
    localize()
