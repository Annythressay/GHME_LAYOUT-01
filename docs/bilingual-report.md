# GHME — Báo cáo triển khai VI / EN

Ngày kiểm tra: 10/10/2026.

## Architecture

- Website: HTML/CSS/JavaScript thuần, Font Awesome; không có router/framework hoặc backend.
- 4 trang nội dung: `index.html`, `about.html`, `courses/program-1.html` (BPEC), `courses/program-2.html` (Doctor Talk).
- `courses/program-3.html` đến `program-7.html` là 5 URL chuyển hướng cũ về danh sách chương trình.
- Nội dung gốc: HTML, `assets/data/experts.json`, các template Python sinh khóa học/chuyên gia và chuỗi JS cho tương tác.
- Mini-game: React 19 / Vite / Tailwind v4 / Lucide, nhúng vào Shadow DOM qua `assets/first-aid/game.js`.
- Không tạo bản sao website, không thêm framework/dependency i18n.

## Files

Modified:

- `README.md`, `first-aid-game/README.md`.
- `index.html`, `about.html`, `courses/program-1.html` đến `courses/program-7.html`.
- `assets/js/main.js`, `about.js`, `course.js`, `experts.js`, `partners.js`.
- `scripts/build_courses.py`, `scripts/build_experts.py`.
- `first-aid-game/src/App.jsx`, `main.jsx`, `questions.js`.
- `first-aid-game/src/components/Feedback.jsx`, `GameIntro.jsx`, `Header.jsx`, `ParticipantForm.jsx`, `Question.jsx`, `Results.jsx`, `Situation.jsx`.
- `assets/first-aid/game.js`: bundle đã build lại từ source.

Added:

- `assets/i18n/catalog.json`: 598 khóa với bản VI/EN.
- `assets/i18n/vi.js`, `assets/i18n/en.js`: dictionary sinh từ catalog.
- `assets/js/language.js`, `assets/js/i18n.js`, `assets/css/i18n.css`.
- `first-aid-game/src/i18n.jsx`, `messages.js` (95 chuỗi UI song ngữ), `questions.en.js` (10 câu tương ứng).
- `scripts/build_i18n.py`, `qa_i18n.cjs`, `qa_game_i18n.cjs`, `qa_i18n_preferences.cjs`, `qa_asset_contact.cjs`.
- `docs/bilingual-report.md`.

Removed: Không xóa source/asset hiện hữu. Các script và tệp trung gian dùng riêng cho migration đã được dọn.

Các thay đổi/tệp tham chiếu tồn tại trước task, gồm `first-aid-game/qa-browser.cjs` và các thư mục concept/design-reference, không được chỉnh sửa trong task này.

## Localization

- Default: VI ở lần truy cập đầu; không suy đoán ngôn ngữ theo trình duyệt.
- Persistence: `localStorage.ghmeLanguage`, giá trị `vi` / `en`; dùng state trong trang khi storage bị chặn.
- Switch: một nhóm nút `VI | EN` trên Top Header mỗi trang, globe Font Awesome ở trang chủ/giới thiệu; SVG globe nhỏ ở khóa học vốn không tải Font Awesome. Active dùng weight/underline/opacity; có `aria-pressed`, hover, keyboard focus.
- Client-side: đổi nội dung không refresh, không thay URL/hash/router.
- Document: cập nhật `html.lang`, title và meta description. Title VI giữ nguyên.
- Early load: đọc preference trong head; nội dung EN được áp dụng trước khi body hiện ra. Có fallback hiển thị nội dung gốc nếu asset i18n không tải được.
- Static markup: `data-i18n` đánh dấu text node trực tiếp theo slot, `data-i18n-attrs` đánh dấu aria-label/alt/title/placeholder/meta. Engine giữ nguyên icon, liên kết, emphasis và cấu trúc HTML.
- Template: dịch cả `template.content`; hồ sơ/sản phẩm mở đúng ngôn ngữ, dialog đang mở cập nhật theo switch.
- Dynamic copy: phân trang, số kết quả, empty state, trạng thái carousel/sản phẩm, search, dialog demo, form validation/success đều dùng catalog.
- Form: giữ giá trị option/program ID ổn định. Prefill do website tạo được đổi ngôn ngữ; phần người dùng tự nhập giữ nguyên. Sửa escaping pattern số điện thoại cũ cho RegExp `v` của trình duyệt hiện tại.
- Search: tiếp tục dùng logic tìm chương trình hiện hữu trên copy hiện tại; từ khóa English hoạt động trong EN. Không thêm chức năng tìm kiếm khác.
- Fallback: khóa thiếu bản EN dùng VI; khóa không tồn tại trả fallback của caller hoặc chuỗi rỗng. Không hiện `undefined` hoặc tên khóa, không spam console.
- Proper nouns: giữ GHME, tên người, brand, địa chỉ và tên tổ chức chưa có tên English xác nhận. Không thay credentials.
- Game: context nhỏ theo `ghme:languagechange`; UI và dữ liệu câu hỏi tách khỏi component. IDs, thứ tự đáp án, correct indices, nguồn tham khảo và ảnh kế thừa bản gốc.
- Timer/reducer/score/session: `src/game.js` không thay đổi. Một interval 250ms trong quiz, duration 240 giây; replay, timeout, participant memory và sessionStorage marker giữ hành vi cũ.

## Coverage

| Nội dung | VI / EN |
| --- | --- |
| Top/Main Header, navigation, dropdown, search, CTA | Có |
| Hero | Có |
| Programs, cards, BPEC/Doctor Talk detail, curriculum, FAQ | Có |
| Products, categories, kits, specs, detail dialog | Có |
| Experts, academic titles, specialties, biographies, profiles, tabs/filter/pagination | Có |
| Activities / About GHME / approach / partners | Có |
| Consultation form, labels/placeholders/validation/success | Có |
| Footer, copyright, policies/terms demo dialogs | Có |
| Accessibility, alt, title/meta description | Có |
| Mini-game trigger, intro, registration, progress/timer, questions/answers/hints, feedback, result/review, replay/exit/CTA | Có |
| Schedule | Source hiện tại không render lịch học. Anchor `#schedule` là phần sản phẩm; nội dung phần này đã VI/EN. Các thông tin lịch/chi phí ở trang khóa học đã dịch. |
| Certificates | Source hiện tại dùng anchor `#certificates` cho directory chuyên gia, đã VI/EN. Các ảnh chứng nhận cũ không render và vốn có nội dung English. |

## Assets chứa chữ Việt

Đã kiểm kê 157 tệp hình hiện hữu trong `assets/images` và `assets/first-aid/images`, xem 7 contact sheets QA. Không tạo/thay ảnh website hoặc phủ chữ bằng CSS. Không có bản English tương ứng đã xác nhận trong project cho các ảnh dưới đây.

### Đang sử dụng

| Filename | Vị trí | Chữ Việt embedded đọc được | Xử lý |
| --- | --- | --- | --- |
| `assets/images/about/bpec-cpr-practice.webp` | Homepage `#activities` | “DẤU HIỆU NHẬN BIẾT NGƯNG TIM”; bullet “Tim ngừng đập”, “Hoặc đập quá kém hiệu quả…” và các mô tả dấu hiệu nhỏ trên màn chiếu | Giữ ảnh nguồn; cần ảnh với slide English nếu muốn toàn bộ chữ trong ảnh cũng EN. |
| `assets/images/programs/bpec-training.webp` | Homepage BPEC; About approach; BPEC detail hero/experience | “PHẦN 7”, “Thực hành CPR và sử dụng máy AED” | Giữ ảnh nguồn; cần bản English. |
| `assets/images/about/training-session.webp` | About hero | “KHỦNG HOẢNG TÂM LÝ VỊ THÀNH NIÊN”; các chú thích nhỏ tiếng Việt trong infographic trên màn chiếu | Giữ ảnh nguồn; cần bản English. |
| `assets/images/contact-team.webp` | Homepage consultation, ảnh trang trí desktop | “Hỗ trợ tại Hà Nội, TP. H…”; “và đào tạo tại doanh n…”; “Linh hoạt triển khai trực tiếp…” (bị cắt ngay trong ảnh gốc) | Giữ ảnh nguồn; cần ảnh không có chữ hoặc bản English. |
| `assets/images/partners/partner-18-diab.svg` | Partner carousel ở homepage/About | “Đồng Hành - Thấu Cảm” | Giữ official brand asset; cần logo English được chủ thương hiệu duyệt. |
| `assets/images/partner-3.webp` | Partner carousel ở homepage/About | “Trí Thiện Preschool” | Tên riêng của tổ chức; giữ nguyên. |

### Asset cũ / tham chiếu không render trong các trang đang hoạt động

| Filename | Chữ Việt embedded |
| --- | --- |
| `assets/images/banner_02.png` | “TƯ VẤN – ĐÀO TẠO – CUNG CẤP”, “THIẾT BỊ CẤP CỨU NGOẠI VIỆN CHUYÊN NGHIỆP”, “LIÊN HỆ NGAY”. |
| `assets/images/footer-reference.png` | Screenshot footer tiếng Việt: “Về GHME”, “Liên hệ”, “Đào tạo y khoa thực hành…” và các nhãn/liên kết. Footer thật là HTML đã dịch. |
| `assets/images/products/aed-overview.png` | Screenshot sản phẩm: “Thiết bị & giải pháp sơ cấp cứu GHME”, “Máy khử rung tim tự động (AED)”, “Nhà sản xuất”, “Điểm nổi bật”, “Thông số chính”, “Xem chi tiết sản phẩm”, “Nhận tư vấn” cùng mô tả. |
| `assets/images/products/personal-kit.png` | Screenshot sản phẩm: “SẢN PHẨM NỔI BẬT”, “Phù hợp sử dụng”, “Điểm nổi bật”, “Thông tin chính”, “Nhận tư vấn”, các mô tả tiếng Việt. |
| `assets/images/products/office-family-kit.png` | Screenshot sản phẩm: “SẢN PHẨM NỔI BẬT”, “Phù hợp sử dụng”, “Điểm nổi bật”, “Thông tin chính”, “Nhận tư vấn”, các mô tả tiếng Việt. |
| `assets/images/products/travel-kit.png` | Screenshot sản phẩm: “SẢN PHẨM NỔI BẬT”, “Phù hợp sử dụng”, “Điểm nổi bật”, “Thông tin chính”, “Nhận tư vấn”, các mô tả tiếng Việt. |
| `assets/images/program-1.webp` | “KỸ NĂNG CUỘC SỐNG TRONG TẦM TAY”, “AN TOÀN HÔM NAY”. |
| `assets/images/program-3.webp` | “KIẾN THỨC HÔM NAY”, “CUỘC SỐNG AN TOÀN NGÀY MAI”. |
| `assets/images/program-4.webp` | “GIA ĐÌNH AN TOÀN”, “BẮT ĐẦU TỪ NGÔI NHÀ CỦA BẠN”. |
| `assets/images/partner-1.webp` | Tagline “Vững bước tiên phong”. Logo BIDV đang render là SVG không có tagline này. |
| `assets/images/about/partner-lawrence-s-ting-school.webp` | “TRƯỜNG THCS VÀ THPT ĐINH THIỆN LÝ”; đồng thời có “LAWRENCE S. TING SCHOOL”. Tên riêng của tổ chức. |
| `assets/images/hcm.webp` | Chữ địa danh bị crop ở cạnh dưới: “…Chí Minh”. |
| `assets/images/activity-5.webp` | “CHƯƠNG TRÌNH TẬP HUẤN”, “KIẾN THỨC SƠ CỨU VÀ AN TOÀN TRONG TRƯỜNG HỌC”, địa danh/ngày tháng. |

Các ảnh workshop cũ `activity-1.webp`, `activity-2.webp`, `activity-3.webp`, `activity-7.webp`, `activity-8.webp`, `activity-9.webp`, `activity-10.webp` còn màn chiếu với chữ nhỏ/mờ: không thể chép lại đầy đủ hoặc xác nhận ngôn ngữ của từng dòng từ asset độ phân giải hiện tại. Nếu dùng lại, cần kiểm tra bản gốc. `sections/bg-section-01.png` có chữ viết mờ trong reference background; nền sản phẩm hiện tại đã override bằng CSS gradient nên ảnh này không render.

Ảnh mini-game đang sử dụng không có chữ Việt UI rõ ràng cần dịch; chữ GHME/brand được giữ nguyên. Chữ cực nhỏ trên bao bì sản phẩm/slide ảnh không được suy diễn hoặc chỉnh sửa.

## QA VI / EN

Microsoft Edge headless qua Playwright; 48 layout checks = 4 trang × 6 widths × 2 languages. Ngoài layout trang, kiểm tra dialog/dropdown và cả 10 câu mini-game tại từng width.

| Width | QA VI — website + game | QA EN — website + game |
| --- | --- | --- |
| 1440 | PASS | PASS |
| 1200 | PASS | PASS |
| 1024 | PASS | PASS |
| 768 | PASS | PASS |
| 430 | PASS | PASS |
| 375 | PASS | PASS |

- Không horizontal overflow trang hoặc dialog; nav/search/consultation không overlap ở desktop.
- Một switch mỗi trang; active/keyboard/persistence đúng. Navigation thật và redirect cũ giữ EN.
- Rà soát toàn bộ marked copy/attributes và template ở từng trang; không còn chuỗi VI nguyên bản trong EN, ngoại trừ proper nouns/ảnh đã liệt kê.
- Expert tab, specialty filter, empty state, profile clone; pagination/counter dùng ngôn ngữ hiện tại.
- Product dialog, consultation prefill, English search, policy dialog đổi ngôn ngữ khi mở.
- Form validation được localize; valid form hiện demo success. Program query vẫn chọn đúng option và không bị custom validity cũ chặn.
- Game VI/EN: trigger → intro → invalid/valid registration → tất cả 10 câu → hint → feedback → result; cùng lựa chọn cho điểm **7/10** ở mọi width.
- Review 3 câu sai / tất cả 10 câu; replay dùng participant memory; exit confirmation; timeout; CTA; timer cleanup và completion marker đều PASS.
- Feedback không làm primary action nhảy; không có chuỗi VI trong Shadow DOM EN.
- Kiểm thử storage bị chặn và live language change với lỗi participant form đã hiển thị: PASS.
- Đọc các frame visible đầu tiên sau saved EN: đều là nội dung EN, không thấy flash VI.
- Visual review: header/hero homepage, About/BPEC mobile; game intro/quiz/feedback/result desktop/mobile; các contact sheets asset. Ảnh QA từng trang ở cả 6 widths đã lưu.

## Technical

- Missing translation keys: **0** trong QA toàn website; website catalog có đủ VI/EN cho 598 keys, game catalog có đủ VI/EN cho 95 chuỗi và 10 questions.
- Mojibake scan (`Ã`, `Ä`, `Æ`, `áº`, `á»`, `�`): **không phát hiện** trong HTML/catalog/JS/React source chỉnh sửa.
- Console/page errors: **0** trong các bộ QA thành công; asset requests lỗi: **0** trong QA website.
- Build: `npm --prefix first-aid-game run build` **PASS**; production bundle đã cập nhật.
- Course generator + localization: **PASS**; chạy lại localization không đổi hash HTML (idempotent).
- JavaScript syntax / `git diff --check`: **PASS**.
- Existing `first-aid-game/qa-redesign.cjs`: **PASS**, full flow VI và all questions/all widths.
- Existing `scripts/qa_experts.cjs`: **PASS**, pagination/filter/profile/keyboard/responsive.
- Existing `first-aid-game/qa-trigger.cjs`: **PASS**, sáu widths, animation/keyboard/focus/reduced-motion, không console errors.

Evidence (ignored QA outputs):

- `first-aid-game/qa-output/i18n/report.json` — 48 website layout checks.
- `first-aid-game/qa-output/i18n/game-report.json` — 12 full game flows, 120 questions.
- `first-aid-game/qa-output/i18n/preferences-report.json` — persistence/keyboard/first-load/storage/fallback.
- `first-aid-game/qa-output/i18n/*.png` — page/game screenshots và asset contact sheets.
- `first-aid-game/qa-output/redesign/report.json` — existing full-game regression suite.

## Cập nhật nội dung sau này

1. Sửa copy gốc hoặc dữ liệu nguồn hiện tại.
2. Thêm/cập nhật cặp VI/EN trong `assets/i18n/catalog.json`.
3. Chạy `python scripts/build_i18n.py`; hai generator khóa học/chuyên gia tự chạy bước này.
4. Copy mini-game: sửa `messages.js` hoặc `questions.en.js`, rồi build Vite.
5. Chạy QA liên quan. Không cần tạo trang `*-en.html`.

Xem thử tại `http://127.0.0.1:4173/`, chọn VI/EN ở Top Header.
