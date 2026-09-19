"""Build static course pages from the homepage cards: python scripts/build_courses.py."""
from html import escape
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]


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
            self.course = {'id': attrs['id'], 'topics': []}
        if self.course is None:
            return
        if tag == 'img':
            self.course['image'] = attrs['src']
        field = {'h3': 'title', 'p': 'description', 'li': 'topic'}.get(tag)
        if tag == 'span' and 'badge' in attrs.get('class', '').split():
            field = 'duration'
        if field:
            self.field, self.buffer = (tag, field), []

    def handle_data(self, data):
        if self.field:
            self.buffer.append(data)

    def handle_endtag(self, tag):
        if self.course is None:
            return
        if self.field and self.field[0] == tag:
            value = ' '.join(''.join(self.buffer).split())
            if self.field[1] == 'topic':
                self.course['topics'].append(value)
            else:
                self.course[self.field[1]] = value
            self.field = None
        if tag == 'article':
            self.courses.append(self.course)
            self.course = None


def page(c):
    title, description = escape(c['title']), escape(c['description'])
    image = '../' + escape(c['image'], quote=True)
    duration = c['duration'] if 'buổi' in c['duration'] else 'Chờ xác nhận'
    location = 'Tại nhà' if c['id'] == 'program-4' else 'Chờ xác nhận'
    audience = description.removeprefix('Dành cho ').rstrip('.')
    audience = audience[0].upper() + audience[1:]
    consult = '../index.html?program=' + c['id'] + '#consultation'
    topics = ''.join(f'<li><span class="course-number">{i:02}</span><h3>{escape(t)}</h3></li>' for i, t in enumerate(c['topics'], 1))
    curriculum = ''.join(f'''<details class="course-module" {'open' if i == 1 else ''}>
      <summary><span class="course-number">{i:02}</span><span>{escape(t)}</span><span class="course-toggle" aria-hidden="true"></span></summary>
      <div class="course-module-body"><p>Nội dung được giới thiệu trong chương trình: {escape(t[0].lower() + t[1:])}.</p><p class="course-note">Đề cương chi tiết và thời lượng của nội dung này: Chờ GHME xác nhận.</p></div>
    </details>''' for i, t in enumerate(c['topics'], 1))
    faq = [
        ('Tôi chưa từng học sơ cứu có tham gia được không?', 'Điều kiện tham gia và kiến thức đầu vào của chương trình đang chờ GHME xác nhận. Bạn có thể nêu kinh nghiệm hiện tại khi đăng ký tư vấn.'),
        ('Tôi cần chuẩn bị gì trước khi học?', 'Yêu cầu chuẩn bị, địa điểm và hình thức tổ chức đang chờ xác nhận theo lớp.'),
        ('Tôi có thể đăng ký cho cả gia đình không?', 'Số người tham gia, độ tuổi phù hợp và cách đăng ký theo gia đình cần được GHME tư vấn theo nhu cầu của bạn.'),
        ('Sau khóa học có được cấp chứng nhận không?', 'Loại chứng nhận, tài liệu và điều kiện nhận của chương trình này chưa được xác nhận. Vui lòng trao đổi với GHME trước khi đăng ký.'),
    ]
    if c['id'] == 'program-2':
        faq.insert(1, ('Có nội dung xử trí hóc dị vật cho trẻ không?', 'Danh mục hiện tại chưa xác nhận nội dung xử trí hóc dị vật. Hãy trao đổi với GHME để kiểm tra nội dung này trước khi chọn khóa.'))
    questions = ''.join(f'<details class="course-question"><summary>{escape(q)}<span class="course-toggle" aria-hidden="true"></span></summary><p>{escape(a)}</p></details>' for q, a in faq)
    return f'''<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="{description}">
  <meta name="theme-color" content="#10365e">
  <title>{title} | GHME</title>
  <link rel="icon" href="../logo_GHME.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/css/styles.css">
  <link rel="stylesheet" href="../assets/css/course.css">
  <script src="../assets/js/course.js" defer></script>
</head>
<body class="course-page">
  <a class="skip-link" href="#main">Đến nội dung chính</a>
  <header class="course-header">
    <div class="course-container course-header-inner">
      <a href="../index.html" aria-label="GHME — Trang chủ"><img src="../logo_GHME.svg" width="166" height="49" alt="GHME"></a>
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
      <div class="course-heading"><p class="course-eyebrow">Đào tạo sơ cấp cứu gia đình</p><h1>{title}</h1><p class="course-lead">{description}</p></div>
      <figure class="course-hero"><img src="{image}" alt="Hình minh họa {title}" width="720" height="470" fetchpriority="high"><figcaption>Ảnh minh họa chương trình</figcaption></figure>
      <aside class="course-sidebar" aria-labelledby="course-action-title">
        <div class="course-action">
          <p class="course-eyebrow">Thông tin chương trình</p><h2 id="course-action-title">{title}</h2>
          <dl class="course-facts">
            <div><dt>Thời lượng</dt><dd class="course-duration">{escape(duration)}</dd></div>
            <div><dt>Đối tượng</dt><dd>{audience}</dd></div>
            <div><dt>Hình thức</dt><dd>{location}</dd></div>
            <div><dt>Học phí & lịch học</dt><dd>Chờ xác nhận</dd></div>
          </dl>
          <a class="button course-consult" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a>
          <a class="course-text-link" href="#curriculum">Xem nội dung chương trình <span aria-hidden="true">↓</span></a>
          <p class="course-action-note">Trao đổi về nhu cầu, lịch học và hình thức phù hợp với gia đình bạn.</p>
        </div>
      </aside>
      <div class="course-content">
        <nav class="course-section-nav" aria-label="Mục lục chương trình"><a href="#overview">Tổng quan</a><a href="#audience">Đối tượng</a><a href="#curriculum">Nội dung</a><a href="#experience">Trải nghiệm học</a><a href="#faq">Hỏi đáp</a></nav>
        <section class="course-section" id="overview"><p class="course-eyebrow">Hiểu chương trình</p><h2>Chuẩn bị kỹ năng.<br>Chủ động hơn khi cần.</h2><p>{description}</p></section>
        <section class="course-section course-audience" id="audience"><h2>Chương trình này dành cho ai?</h2><p>{audience}.</p><p class="course-note">Điều kiện đầu vào, độ tuổi và số thành viên có thể tham gia: Chờ xác nhận.</p></section>
        <section class="course-section"><h2>Bạn sẽ học những gì?</h2><ol class="course-outcomes">{topics}</ol></section>
        <section class="course-section" id="curriculum"><p class="course-eyebrow">Nội dung đào tạo</p><h2>Nội dung chương trình</h2><p class="course-note course-curriculum-note">Các nhóm nội dung dưới đây được lấy từ giới thiệu chương trình. Phân bổ theo buổi và thời lượng chi tiết: Chờ GHME xác nhận.</p>{curriculum}</section>
        <section class="course-section" id="experience"><p class="course-eyebrow">Từ kiến thức đến thực hành</p><h2>Học qua tình huống thực tế</h2><figure class="course-experience-image"><img src="{image}" alt="Minh họa hoạt động đào tạo của {title}" width="720" height="390" loading="lazy"><figcaption>Ảnh minh họa chương trình · Chưa phải ảnh xác thực của lớp học</figcaption></figure><div class="course-experience-copy"><h3>Nội dung gắn với nhu cầu gia đình</h3><p>{escape(c['topics'][-1])}. Hình thức tổ chức, trang thiết bị thực hành và cách hướng dẫn cụ thể của khóa đang chờ xác nhận.</p></div></section>
        <section class="course-section course-takeaway"><h2>Bạn nhận được gì?</h2><p>Chương trình tập trung vào các nhóm kỹ năng đã giới thiệu ở trên. Chuẩn đầu ra và cách đánh giá kết quả sẽ được cập nhật khi có đề cương chính thức.</p><div class="course-pending"><strong>Tài liệu & chứng nhận</strong><span>Chờ xác nhận theo chương trình.</span></div></section>
        <section class="course-section course-trainer"><p class="course-eyebrow">Người đồng hành</p><h2>Người hướng dẫn</h2><div class="course-trainer-placeholder"><span class="course-avatar" aria-hidden="true">GHME</span><div><h3>Hồ sơ giảng viên đang cập nhật</h3><p>Tên, vai trò và chuyên môn: Chờ xác nhận.</p></div></div></section>
        <section class="course-section" id="faq"><p class="course-eyebrow">Trước khi đăng ký</p><h2>Những điều bạn muốn biết</h2>{questions}</section>
        <section class="course-section" id="practical"><h2>Thông tin lớp học</h2><dl class="course-practical"><div><dt>Học phí</dt><dd>Chờ xác nhận</dd></div><div><dt>Lịch học</dt><dd>Chờ xác nhận</dd></div><div><dt>Địa điểm</dt><dd>{location}</dd></div></dl><p class="course-note">GHME cần xác nhận thông tin của lớp phù hợp trước khi bạn quyết định đăng ký.</p></section>
      </div>
    </div>
    <section class="course-final" aria-labelledby="course-final-title"><div><p class="course-eyebrow">Bước tiếp theo</p><h2 id="course-final-title">Cần tư vấn chương trình phù hợp?</h2><p>Chia sẻ nhu cầu của gia đình và những điều bạn muốn tìm hiểu thêm.</p></div><div class="course-final-actions"><a class="button" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a><a href="{consult}">Trao đổi về lịch học <span aria-hidden="true">→</span></a></div></section>
  </main>
  <footer class="course-footer"><div class="course-container"><a href="../index.html" aria-label="GHME — Trang chủ"><img src="../logo_GHME.svg" width="142" height="42" alt="GHME" loading="lazy"></a><p>Kiến thức · Kỹ năng · Vì một cộng đồng an toàn hơn</p><a href="../index.html#programs">Xem các chương trình khác <span aria-hidden="true">↗</span></a></div></footer>
  <div class="course-mobile-action"><span>{escape(duration)}<small>Tư vấn chương trình</small></span><a class="button" href="{consult}">Đăng ký tư vấn <span aria-hidden="true">↗</span></a></div>
</body>
</html>
'''


def main():
    source = ROOT / 'index.html'
    html = source.read_text(encoding='utf-8')
    parser = Programs()
    parser.feed(html)
    destination = ROOT / 'courses'
    destination.mkdir(exist_ok=True)
    for course in parser.courses:
        for key in ('title', 'description', 'image', 'duration', 'topics'):
            if not course.get(key):
                raise ValueError(f'Missing {key}: {course["id"]}')
        (destination / (course['id'] + '.html')).write_text(page(course), encoding='utf-8')
        pattern = r'href="[^"]*" data-program="' + re.escape(escape(course['title'], quote=True).replace('&amp;', '&')) + r'"'
        html, count = re.subn(pattern, f'href="courses/{course["id"]}.html" data-program="{course["title"]}"', html)
        if count != 1:
            raise ValueError(f'Expected one entry link for {course["id"]}, got {count}')
    source.write_text(html, encoding='utf-8')
    print(f'Built {len(parser.courses)} course pages and updated entry links.')


if __name__ == '__main__':
    main()
