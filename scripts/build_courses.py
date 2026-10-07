"""Build GHME program pages: python scripts/build_courses.py."""
from html import escape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# The homepage supplies the title, introduction and photo. These profiles contain
# the corresponding curriculum and supporting program details.
PROFILES = {
    'program-1': {
        'eyebrow': 'Đào tạo kỹ năng cấp cứu ngoại viện',
        'english_name': 'Basic Pre-hospital Emergency Care (BPEC) Skills Training',
        'overview_heading': 'Trang bị kỹ năng.<br>Tự tin hỗ trợ khi cần.',
        'overview': 'BPEC trang bị kiến thức, kỹ năng và sự tự tin để thực hiện sơ cứu ban đầu trước khi người bị nạn được tiếp cận chăm sóc y tế. Chương trình theo chuẩn quốc tế, chú trọng thực hành và ứng dụng trong các tình huống thực tế.',
        'audience': 'Người cần trang bị kiến thức và kỹ năng sơ cứu ban đầu trong các tình huống khẩn cấp.',
        'format': 'Đào tạo kỹ năng, chú trọng thực hành',
        'outcomes': [
            'Tự tin hơn khi thực hiện sơ cứu ban đầu',
            'Hướng tới giảm nguy cơ tử vong và biến chứng cho người bị nạn',
            'Trang bị kỹ năng thực hành theo chuẩn quốc tế',
        ],
        'modules': [
            ('Check – Call – Care', 'Kiểm tra tình trạng, gọi trợ giúp và chăm sóc ban đầu theo quy trình Check – Call – Care.'),
            ('Nhận biết tình huống khẩn cấp', 'Nhận biết các tình huống cấp cứu và lựa chọn hành động phù hợp.'),
            ('Tư thế hồi phục và di chuyển an toàn', 'Thực hành tư thế hồi phục và cách di chuyển người bị nạn an toàn.'),
            ('Xử trí hóc dị vật ở các nhóm tuổi', 'Trang bị kỹ năng xử trí hóc dị vật phù hợp với các nhóm tuổi khác nhau.'),
            ('Kiểm soát chảy máu đe dọa tính mạng', 'Nhận biết và thực hiện sơ cứu ban đầu khi có chảy máu đe dọa tính mạng.'),
            ('Hồi sinh tim phổi (CPR) và sử dụng AED', 'Thực hành hồi sinh tim phổi (CPR) và sử dụng máy khử rung tim tự động (AED).'),
        ],
        'experience_heading': 'Học qua thực hành',
        'experience_title': 'Kỹ năng gắn với tình huống thực tế',
        'experience': 'Chương trình tập trung vào thực hành CPR, AED và xử trí ban đầu trong các tình huống khẩn cấp, giúp người học vận dụng kiến thức vào thực tế.',
        'takeaway': 'Kiến thức và kỹ năng sơ cứu ban đầu giúp bạn chủ động hơn khi gặp tình huống khẩn cấp. Chương trình hướng tới nâng cao sự tự tin và góp phần giảm nguy cơ tử vong, biến chứng cho người bị nạn.',
        'guide_eyebrow': 'Phương pháp đào tạo',
        'guide_heading': 'Hướng dẫn thực hành',
        'guide_title': 'Kỹ năng theo chuẩn quốc tế',
        'guide_copy': 'Nội dung kết hợp kiến thức với thực hành, tập trung vào kỹ năng cấp cứu ngoại viện và ứng dụng thực tế.',
        'image_alt': 'Học viên GHME thực hành CPR trên mô hình trong buổi đào tạo BPEC',
        'image_caption': 'Thực hành kỹ năng cấp cứu ngoại viện trong chương trình BPEC.',
        'mobile_label': 'BPEC',
        'faq': [
            ('BPEC có nội dung CPR và AED không?', 'Có. Chương trình bao gồm thực hành hồi sinh tim phổi (CPR) và sử dụng máy khử rung tim tự động (AED).'),
            ('Chương trình còn có những kỹ năng nào?', 'Các nội dung gồm Check – Call – Care, nhận biết tình huống khẩn cấp, tư thế hồi phục, di chuyển an toàn, xử trí hóc dị vật theo nhóm tuổi và kiểm soát chảy máu đe dọa tính mạng.'),
            ('Làm thế nào để trao đổi về lịch học và học phí?', 'Đăng ký tư vấn để GHME trao đổi về nhu cầu tham gia, lịch học, địa điểm và học phí phù hợp.'),
        ],
    },
    'program-2': {
        'eyebrow': 'Giáo dục sức khỏe',
        'english_name': 'Health Education – Doctor Talk',
        'overview_heading': 'Hiểu sức khỏe.<br>Chủ động chăm sóc mỗi ngày.',
        'overview': 'Doctor Talk gồm các buổi đào tạo, hội thảo và chia sẻ kiến thức sức khỏe dành cho nhân viên văn phòng và đội ngũ doanh nghiệp. Chương trình tập trung vào sức khỏe thể chất, tinh thần và phòng ngừa bệnh tật, do các bác sĩ và chuyên gia giàu kinh nghiệm trực tiếp chia sẻ.',
        'audience': 'Nhân viên văn phòng và đội ngũ doanh nghiệp.',
        'format': 'Đào tạo, hội thảo và chia sẻ sức khỏe',
        'outcomes': [
            'Hiểu cách chăm sóc sức khỏe thể chất',
            'Quan tâm đến sức khỏe tinh thần trong công việc',
            'Nâng cao nhận thức về phòng ngừa bệnh tật',
        ],
        'modules': [
            ('Dinh dưỡng cân bằng', 'Ăn uống nhanh chóng nhưng lành mạnh trong nhịp sống bận rộn, hướng tới hạn chế tăng cân và mệt mỏi.'),
            ('Quản lý căng thẳng và cảm xúc', 'Kiểm soát căng thẳng, quản lý cảm xúc và nâng cao nhận thức về phòng ngừa trầm cảm tại nơi làm việc.'),
            ('Đau cổ, vai và lưng', 'Tìm hiểu những vấn đề đau cổ, vai và lưng thường gặp ở nhân viên văn phòng cùng cách khắc phục.'),
            ('Bảo vệ mắt khi sử dụng máy tính', 'Kiến thức về tật khúc xạ, khô mắt và cách phòng ngừa các vấn đề về mắt khi làm việc với máy tính.'),
            ('Sức khỏe răng miệng ở người trưởng thành', 'Nhận biết và phòng ngừa các bệnh răng miệng thường gặp ở người trưởng thành.'),
            ('Bệnh hô hấp tại nơi làm việc', 'Tìm hiểu về viêm xoang, dị ứng, cúm và cách tự bảo vệ sức khỏe hô hấp tại nơi làm việc.'),
            ('Nguy cơ từ rượu, thuốc lá và ma túy', 'Nhận biết nguy cơ, hậu quả và cách tránh lệ thuộc vào rượu, thuốc lá, ma túy cùng các chất kích thích khác.'),
            ('Phòng ngừa bệnh tim mạch và đột quỵ', 'Nhận biết dấu hiệu sớm của bệnh tim mạch, đột quỵ và tìm hiểu các thói quen giúp phòng ngừa.'),
            ('Sức khỏe sinh sản', 'Chăm sóc sức khỏe sinh sản, kế hoạch hóa gia đình và phòng ngừa các bệnh phụ khoa, nam khoa.'),
            ('Nhận biết ung thư và tầm soát sớm', 'Nhận biết các loại ung thư thường gặp, dấu hiệu cảnh báo sớm và vai trò của tầm soát.'),
        ],
        'experience_heading': 'Chia sẻ kiến thức cùng chuyên gia',
        'experience_title': 'Nội dung thiết thực cho môi trường làm việc',
        'experience': 'Các buổi đào tạo, hội thảo và chia sẻ mang đến nội dung đa dạng về chăm sóc sức khỏe, phòng ngừa bệnh tật và an toàn cộng đồng, gắn với nhu cầu của nhân viên văn phòng và doanh nghiệp.',
        'takeaway': 'Chương trình giúp nâng cao nhận thức về sức khỏe thể chất, tinh thần và phòng ngừa bệnh tật, để người tham gia quan tâm hơn đến việc chăm sóc sức khỏe trong cuộc sống và công việc.',
        'guide_eyebrow': 'Người đồng hành',
        'guide_heading': 'Bác sĩ và chuyên gia',
        'guide_title': 'Đội ngũ giàu kinh nghiệm',
        'guide_copy': 'Các buổi Doctor Talk được trực tiếp chia sẻ bởi đội ngũ bác sĩ và chuyên gia giàu kinh nghiệm.',
        'image_alt': 'Bác sĩ chia sẻ kiến thức sức khỏe với người tham dự buổi Doctor Talk của GHME',
        'image_caption': 'Buổi chia sẻ kiến thức sức khỏe trong chương trình Doctor Talk.',
        'mobile_label': 'Doctor Talk',
        'faq': [
            ('Doctor Talk dành cho ai?', 'Chương trình dành cho nhân viên văn phòng và đội ngũ doanh nghiệp, với nội dung về sức khỏe thể chất, tinh thần và phòng ngừa bệnh tật.'),
            ('Ai chia sẻ nội dung trong chương trình?', 'Các buổi đào tạo, hội thảo và chia sẻ sức khỏe được trực tiếp thực hiện bởi đội ngũ bác sĩ và chuyên gia giàu kinh nghiệm.'),
            ('Doanh nghiệp có thể trao đổi về chủ đề và lịch tổ chức không?', 'Đăng ký tư vấn để GHME trao đổi về nhu cầu của đội ngũ, chủ đề quan tâm, lịch tổ chức, địa điểm và chi phí.'),
        ],
    },
}


class Programs(HTMLParser):
    def __init__(self):
        super().__init__()
        self.courses = []
        self.course = None
        self.field = None
        self.buffer = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'article' and 'program-card' in attrs.get('class', '').split():
            self.course = {'id': attrs['id']}
            if attrs.get('data-duration'):
                self.course['duration'] = attrs['data-duration']
        if self.course is None:
            return
        if tag == 'img':
            self.course['image'] = attrs['src']
        field = {'h3': 'title', 'p': 'description'}.get(tag)
        if tag == 'span' and 'badge' in attrs.get('class', '').split():
            field = 'badge'
        if field:
            self.field, self.buffer = (tag, field), []

    def handle_data(self, data):
        if self.field:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if self.course is None:
            return
        if self.field and self.field[0] == tag:
            self.course[self.field[1]] = ' '.join(''.join(self.buffer).split())
            self.field = None
        if tag == 'article':
            self.courses.append(self.course)
            self.course = None


def page(c):
    p = PROFILES[c['id']]
    title, description = escape(c['title']), escape(c['description'])
    image = '../' + escape(c['image'], quote=True)
    audience = escape(p['audience'])
    consult = '../index.html?program=' + c['id'] + '#consultation'
    duration = ''
    if c.get('duration'):
        duration = f'<div><dt>Thời lượng</dt><dd class="course-duration">{escape(c["duration"])}</dd></div>'
    outcomes = ''.join(f'<li><span class="course-number">{i:02}</span><h3>{escape(t)}</h3></li>' for i, t in enumerate(p['outcomes'], 1))
    curriculum = ''.join(f'''<details class="course-module" {'open' if i == 1 else ''}>
      <summary><span class="course-number">{i:02}</span><span>{escape(t)}</span><span class="course-toggle" aria-hidden="true"></span></summary>
      <div class="course-module-body"><p>{escape(body)}</p></div>
    </details>''' for i, (t, body) in enumerate(p['modules'], 1))
    questions = ''.join(f'<details class="course-question"><summary>{escape(q)}<span class="course-toggle" aria-hidden="true"></span></summary><p>{escape(a)}</p></details>' for q, a in p['faq'])
    return f'''<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="{description}">
  <meta name="theme-color" content="#10365e">
  <title>{title} | GHME</title>
  <link rel="icon" href="../assets/images/branding/logo-ghme.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/css/styles.css">
  <link rel="stylesheet" href="../assets/css/course.css">
  <script src="../assets/js/course.js" defer></script>
</head>
<body class="course-page">
  <a class="skip-link" href="#main">Đến nội dung chính</a>
  <header class="course-header">
    <div class="course-container course-header-inner">
      <a href="../index.html" aria-label="GHME — Trang chủ"><img src="../assets/images/branding/logo-ghme.svg" width="166" height="49" alt="GHME"></a>
      <button class="course-menu" type="button" aria-label="Mở menu" aria-expanded="false" aria-controls="course-navigation">Menu <span aria-hidden="true">☰</span></button>
      <nav id="course-navigation" aria-label="Điều hướng chính">
        <a href="../index.html#about">Giới thiệu</a>
        <a class="is-current" href="../index.html#programs">Chương trình đào tạo</a>
        <a href="{consult}">Liên hệ</a>
      </nav>
      <a class="course-header-back" href="../index.html#programs">Tất cả chương trình <span aria-hidden="true">↗</span></a>
    </div>
  </header>
  <main id="main" class="course-container">
    <nav class="course-breadcrumb" aria-label="Đường dẫn"><a href="../index.html">Trang chủ</a><span aria-hidden="true">/</span><a href="../index.html#programs">Chương trình</a><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
    <div class="course-layout">
      <div class="course-heading"><p class="course-eyebrow">{escape(p['eyebrow'])}</p><h1>{title}</h1><p class="course-lead">{description}</p></div>
      <figure class="course-hero"><img src="{image}" alt="{escape(p['image_alt'], quote=True)}" width="720" height="470" fetchpriority="high"><figcaption>{escape(p['image_caption'])}</figcaption></figure>
      <aside class="course-sidebar" aria-labelledby="course-action-title">
        <div class="course-action">
          <p class="course-eyebrow">Thông tin chương trình</p><h2 id="course-action-title">{title}</h2>
          <dl class="course-facts">
            {duration}<div><dt>Chương trình</dt><dd>{escape(c.get('badge', p['mobile_label']))}</dd></div>
            <div><dt>Đối tượng</dt><dd>{audience}</dd></div>
            <div><dt>Hình thức</dt><dd>{escape(p['format'])}</dd></div>
            <div><dt>Chi phí & lịch tổ chức</dt><dd>Liên hệ GHME để được tư vấn</dd></div>
          </dl>
          <a class="button course-consult" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a>
          <a class="course-text-link" href="#curriculum">Xem nội dung chương trình <span aria-hidden="true">↓</span></a>
          <p class="course-action-note">Trao đổi về nhu cầu, chủ đề và lịch tổ chức phù hợp.</p>
        </div>
      </aside>
      <div class="course-content">
        <nav class="course-section-nav" aria-label="Mục lục chương trình"><a href="#overview">Tổng quan</a><a href="#audience">Đối tượng</a><a href="#curriculum">Nội dung</a><a href="#experience">Trải nghiệm học</a><a href="#faq">Hỏi đáp</a></nav>
        <section class="course-section" id="overview"><p class="course-eyebrow">{escape(p['english_name'])}</p><h2>{p['overview_heading']}</h2><p>{escape(p['overview'])}</p></section>
        <section class="course-section course-audience" id="audience"><h2>Chương trình này dành cho ai?</h2><p>{audience}</p></section>
        <section class="course-section"><h2>Mục tiêu của chương trình</h2><ol class="course-outcomes">{outcomes}</ol></section>
        <section class="course-section" id="curriculum"><p class="course-eyebrow">Nội dung đào tạo</p><h2>Nội dung chương trình</h2>{curriculum}</section>
        <section class="course-section" id="experience"><p class="course-eyebrow">Từ kiến thức đến ứng dụng</p><h2>{escape(p['experience_heading'])}</h2><figure class="course-experience-image"><img src="{image}" alt="{escape(p['image_alt'], quote=True)}" width="720" height="390" loading="lazy"><figcaption>{escape(p['image_caption'])}</figcaption></figure><div class="course-experience-copy"><h3>{escape(p['experience_title'])}</h3><p>{escape(p['experience'])}</p></div></section>
        <section class="course-section course-takeaway"><h2>Bạn nhận được gì?</h2><p>{escape(p['takeaway'])}</p></section>
        <section class="course-section course-trainer"><p class="course-eyebrow">{escape(p['guide_eyebrow'])}</p><h2>{escape(p['guide_heading'])}</h2><div class="course-trainer-placeholder"><span class="course-avatar" aria-hidden="true">GHME</span><div><h3>{escape(p['guide_title'])}</h3><p>{escape(p['guide_copy'])}</p></div></div></section>
        <section class="course-section" id="faq"><p class="course-eyebrow">Trước khi đăng ký</p><h2>Những điều bạn muốn biết</h2>{questions}</section>
        <section class="course-section" id="practical"><h2>Trao đổi về chương trình</h2><dl class="course-practical"><div><dt>Chi phí</dt><dd>Liên hệ GHME để được tư vấn</dd></div><div><dt>Lịch tổ chức</dt><dd>Trao đổi theo nhu cầu tham gia</dd></div><div><dt>Địa điểm</dt><dd>Trao đổi khi đăng ký tư vấn</dd></div></dl><p class="course-note">Chia sẻ nhu cầu và số người tham gia để GHME tư vấn phương án tổ chức phù hợp.</p></section>
      </div>
    </div>
    <section class="course-final" aria-labelledby="course-final-title"><div><p class="course-eyebrow">Bước tiếp theo</p><h2 id="course-final-title">Cần tư vấn chương trình phù hợp?</h2><p>Chia sẻ nhu cầu tham gia và những chủ đề bạn quan tâm.</p></div><div class="course-final-actions"><a class="button" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a><a href="{consult}">Trao đổi về lịch tổ chức <span aria-hidden="true">→</span></a></div></section>
  </main>
  <footer class="course-footer"><div class="course-container"><a href="../index.html" aria-label="GHME — Trang chủ"><img src="../assets/images/branding/logo-ghme.svg" width="142" height="42" alt="GHME" loading="lazy"></a><p>Kiến thức · Kỹ năng · Vì một cộng đồng an toàn hơn</p><a href="../index.html#programs">Xem các chương trình khác <span aria-hidden="true">↗</span></a></div></footer>
  <div class="course-mobile-action"><span>{escape(c.get('duration', p['mobile_label']))}<small>Tư vấn chương trình</small></span><a class="button" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a></div>
</body>
</html>
'''


def main():
    parser = Programs()
    parser.feed((ROOT / 'index.html').read_text(encoding='utf-8'))
    ids = [c['id'] for c in parser.courses]
    if len(ids) != len(set(ids)) or set(ids) != set(PROFILES):
        raise ValueError(f'Expected program cards {sorted(PROFILES)}, got {ids}')
    for course in parser.courses:
        for key in ('title', 'description', 'image'):
            if not course.get(key):
                raise ValueError(f'Missing {key}: {course["id"]}')
    destination = ROOT / 'courses'
    destination.mkdir(exist_ok=True)
    for course in parser.courses:
        (destination / (course['id'] + '.html')).write_text(page(course), encoding='utf-8')
    print(f'Built {len(parser.courses)} program pages.')


if __name__ == '__main__':
    main()
