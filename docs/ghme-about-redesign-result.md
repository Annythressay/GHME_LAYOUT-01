# GHME ABOUT US — REDESIGN RESULT

Ngày kiểm tra: 09/10/2026. Môi trường: website demo tĩnh, Microsoft Edge / Playwright.

Phương án được chọn và đã áp dụng: **Concept 01 — Corporate Clarity**.
Desktop dùng ảnh thực hành bên trái và nội dung bên phải; mobile ưu tiên nội
dung trước ảnh. Section nằm ngay sau banner Hero theo yêu cầu cập nhật.
Đã đồng bộ điểm nhấn với `--orange` của website, dùng kiểu nút CTA chung và
tách nền ảnh khỏi chú thích. Tiêu đề/chú thích có hai dòng riêng; khoảng cách
với ảnh là 32px ở desktop và 28px ở mobile.
Ảnh và QA mới nhất được lưu trong `docs/design-reference/about-us/color-caption-fix/`.

## Kết quả

| Hạng mục | Kết quả |
| --- | --- |
| PDF analysis | PASS — đọc nội dung và xem đầy đủ trang 1, 4, 5, 9, 17 của Company Introduction. |
| Content extraction | PASS — GHME cung cấp đào tạo cấp cứu trước viện BPEC, giáo dục sức khỏe Doctor Talk, sản phẩm sơ cấp cứu. |
| About Us section | PASS — áp dụng Concept 01 Corporate Clarity ngay sau banner Hero; giữ `#activities`, `#activities-title`. |
| Main image | Ảnh CPR gốc nhúng trong nền trang 5; 4096 × 3072, giảm đúng tỷ lệ xuống WebP 1600 × 1200. |
| Supporting image | NONE trong Concept 01 đã chọn; ảnh Doctor Talk được giữ trong project và các phương án tham khảo. |
| Core values | Ba dòng dịch vụ nhỏ có icon đồng bộ; nhấn mạnh chương trình theo nhu cầu, tương tác, thực hành cùng bác sĩ/chuyên gia. |
| CTA | PASS — “Tìm hiểu thêm về GHME” → `about.html`; “Khám phá chương trình đào tạo” → `#programs`. Đã thử click và điều hướng bằng bàn phím. |
| Responsive | PASS — 1440/1024 hai cột; 768/390 một cột, nội dung trước hình ảnh. |
| Content accuracy | PASS — đối chiếu trang 4, 5, 9; không bổ sung năm thành lập, số học viên, thành tựu hay chứng nhận GHME. |
| Broken assets | 0 trong các lượt kiểm tra trình duyệt; ảnh CPR và font/icon tải thành công. |
| Console errors | NONE — không có lỗi console hoặc JavaScript runtime. |
| Files changed | `index.html`, `assets/css/styles.css`; chỉ thay khối section và CSS dành riêng cho section. |
| Files added | Ảnh CPR, ghi chú nguồn ảnh, script trích xuất ảnh, script browser QA, báo cáo này, ảnh chụp và JSON QA (danh sách bên dưới). |
| Files removed | NONE — ảnh minh họa cũ được giữ trên đĩa; homepage không còn tham chiếu gallery cũ. |
| Changes outside section | NO đối với giao diện website — phần HTML/CSS còn lại được đối chiếu với bản trước chỉnh sửa và giữ nguyên; chỉ thêm tài liệu, asset và công cụ QA. |
| Commit | NONE |
| Push | NONE |
| Deployment | NONE |
| Safe for visual review | YES |

## Nghiên cứu và biên tập

- Trang 1: nhận diện GHME, màu xanh navy/cam/trắng và thông điệp giáo dục đúng cách.
- Trang 4: ba nhóm giải pháp; CPR/AED và xử trí ban đầu, Doctor Talk do bác sĩ/chuyên gia dẫn dắt, túi sơ cứu và thiết bị y tế.
- Trang 5: BPEC trang bị kỹ năng ứng phó cấp cứu; ảnh gốc thể hiện giảng viên hướng dẫn thực hành CPR trên mô hình.
- Trang 9: khác biệt gồm đội ngũ chuyên môn, chương trình theo nhu cầu, đào tạo tương tác và thực hành, thiết bị hỗ trợ hiện đại. Nội dung section chọn các ý ngắn, phù hợp lời giới thiệu; không chuyển tuyên bố về tiêu chuẩn thành chứng nhận của tổ chức.
- Trang 17: đối chiếu hoạt động thực tế và ảnh Doctor Talk tại trường Đinh Thiện Lý. Không dùng ảnh stock hoặc ảnh đào tạo do AI tạo.

Mô tả đã triển khai:

> GHME kết hợp đào tạo cấp cứu trước viện, giáo dục sức khỏe và giải pháp sơ cấp cứu, giúp doanh nghiệp, trường học và cộng đồng chủ động ứng phó với tình huống khẩn cấp.
>
> Chương trình được thiết kế theo nhu cầu, chú trọng tương tác và thực hành cùng đội ngũ bác sĩ, chuyên gia.

Ảnh hiển thị toàn bộ theo tỷ lệ nguồn, không cắt khuôn mặt, không kéo méo,
không phóng lớn quá kích thước nguồn. Chất lượng đủ cho kích thước hiện tại;
không có ảnh bắt buộc khách hàng bổ sung để review.

## Quality Assurance

| Kiểm tra | Trạng thái |
| --- | --- |
| Company Profile research | PASS |
| Content accuracy | PASS |
| About GHME redesign | PASS |
| Visual hierarchy | PASS — xem ảnh thực tế cả bốn kích thước. |
| Image quality | PASS — ảnh gốc, kiểm tra tỷ lệ vùng nội dung ảnh và kích thước hiển thị. |
| CTA functionality | PASS — URL giới thiệu có thật, anchor chương trình hoạt động, CTA tối thiểu 48px. |
| Responsive 1440 | PASS |
| Responsive 1024 | PASS |
| Responsive 768 | PASS |
| Responsive 390 | PASS |
| Broken assets | 0 |
| Console errors | NONE |
| Không horizontal overflow | PASS — toàn trang và riêng section ở cả bốn kích thước. |
| Reduced motion / không JavaScript | PASS — tắt transition theo hệ thống; nội dung/CTA vẫn có khi JavaScript bị tắt. |
| Bảo toàn kiến trúc | PASS — About nằm ngay sau Hero; giữ thứ tự tương đối và nội dung các section còn lại. Không thay đổi Header/Hero, Programs/Products, Experts, Partners, Footer, mini-game, trang khóa học. |
| Git safety | PASS — đã chạy `git status`, `git diff --stat`, `git diff --check`; không có lỗi whitespace. |

Không bổ sung scroll reveal vì homepage chưa có cơ chế reveal tương tự.
CTA có hover nhẹ và focus ring hiện có; không cần thêm JavaScript.

## File và ảnh review

File thêm:

- `assets/images/about/bpec-cpr-practice.webp`
- `assets/images/about/ABOUT-SECTION-SOURCES.md`
- `scripts/build_about_section.py`
- `scripts/qa_about_section.cjs`
- `docs/ghme-about-redesign-result.md`
- `docs/design-reference/about-us/before-qa.json`
- `docs/design-reference/about-us/after-qa.json`
- `docs/design-reference/about-us/before-{1440,1024,768,390}.png`
- `docs/design-reference/about-us/after-{1440,1024,768,390}.png`
- `docs/design-reference/about-us/before-{1440,390}-viewport.png`
- `docs/design-reference/about-us/after-{1440,390}-viewport.png`

Ảnh `before/after-WIDTH.png` chụp toàn section. Ảnh `*-viewport.png` chụp khung
trình duyệt thực tế. Trong ảnh toàn section, skip-link và mini-game được ẩn
chỉ lúc chụp để tránh lớp nổi che nội dung; không thay đổi code của chúng.

Bản đã chọn: `selected-concept-01/after-{1440,1024,768,390}.png`,
`selected-concept-01/after-{1440,390}-viewport.png` và
`selected-concept-01/after-qa.json`. Các ảnh và concept cũ được giữ để đối chiếu.

Chạy lại QA: phục vụ dự án ở `http://127.0.0.1:4173/`, rồi chạy
`node scripts/qa_about_section.cjs`. Có thể đặt `PLAYWRIGHT_MODULE` để dùng
Playwright đã cài và `ABOUT_QA_URL` để đổi địa chỉ preview.

## Chuyển sang ACF sau này

HTML chia riêng nhóm intro, service list, visual và CTA; các thuộc tính
`data-field` đánh dấu `eyebrow`, `heading`, `short_description`, `core_services`,
`main_image`, `ctas` (supporting image là trường tùy chọn, Concept 01 không dùng). Khi chuyển sang WordPress, service
list/CTA có thể dùng repeater, mỗi ảnh giữ URL/alt/caption và kích thước nguồn.
Đây chỉ là cấu trúc chuẩn bị; chưa cài WordPress, ACF hoặc thay hạ tầng.

Git đã có thay đổi chưa commit trước tác vụ ở README, index, styles và phần
Experts. Các thay đổi đó được giữ nguyên. `git diff --stat` so với HEAD bao gồm
cả thay đổi có sẵn; phạm vi của tác vụ này được xác minh riêng bằng bản trước
chỉnh sửa của index/styles.
