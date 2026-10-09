# GHME EXPERTS SECTION REDESIGN RESULT

## Cập nhật mới nhất — 2 hàng và phân trang, 09/10/2026

Theo yêu cầu mới, desktop hiện tối đa **2 hàng × 3 cột = 6 giảng viên/trang**.
Danh sách thật có 12 người, chia thành 2 trang. Phân trang có số 1/2, nút
Trước/Sau, trang hiện tại và số lượng đang hiển thị. Bộ lọc/tìm kiếm áp dụng
trước phân trang và đưa về trang 1 khi thay đổi. Khi còn tối đa 6 kết quả,
phân trang được ẩn. Tablet và điện thoại vẫn dùng 6 người/trang.

QA: kiểm tra 1440/1024/768/390/320 px; 6 hồ sơ trên mỗi trang, đúng 2 hàng
desktop; chuyển trang hiển thị đúng 6 người tiếp theo, không lặp hoặc bỏ sót.
Hồ sơ mở được ở cả hai trang. Kiểm tra bộ lọc, trang đầu/cuối, focus và dữ
liệu thử 25 người (5 trang: 6/6/6/6/1); không ghi dữ liệu thử vào website.

Ảnh mới: [Trang 1 desktop](design-reference/experts/concept-03-two-rows/directory-1440.png),
[Trang 2 desktop](design-reference/experts/concept-03-two-rows/directory-page-2-1440.png),
[Mobile](design-reference/experts/concept-03-two-rows/directory-390.png),
[Báo cáo QA](design-reference/experts/concept-03-two-rows/qa-results.json).
Các phần dưới đây là lịch sử thiết kế trước khi giảm xuống 2 hàng.

## Concept 03 đã chọn — danh bạ chuyên gia, 09/10/2026

Bản concept 03 ban đầu thay thế bố cục spotlight và nút mở rộng ở bản cũ bên dưới.
Phần đội ngũ dùng nền trắng, tiêu đề navy/cam, thanh tab/tìm kiếm/lọc trên nền
xanh nhạt và các thẻ ngang với ảnh chân dung tròn. Ảnh, tên và hồ sơ vẫn dùng
dữ liệu nguồn hiện có; nhóm lãnh đạo giữ nguyên lựa chọn của khách hàng.

- Desktop 1440 và 1024 px: 3 cột × 4 hàng, 12 giảng viên mỗi trang.
- Tablet 768 px: 2 cột; điện thoại 390 và 320 px: 1 cột. Vẫn 12 người mỗi trang.
- Phân trang chỉ xuất hiện khi kết quả có hơn 12 người, có số trang và nút
  Trước/Sau; nút ở đầu/cuối được vô hiệu hóa. Tab giữ trang đang xem.
- Tìm kiếm tên bỏ qua dấu, chữ hoa/thường và khoảng trắng ở đầu/cuối; kết hợp
  lọc chuyên khoa trước khi chia trang. Đổi tìm kiếm hoặc chuyên khoa về trang 1.
- Bộ lọc chuyên khoa chỉ hiện ở tab giảng viên. Tìm kiếm áp dụng cả hai tab.
- Không có kết quả: thông báo và nút xóa tìm kiếm/bộ lọc. Số lượng thực tế được
  tính từ dữ liệu; bỏ các assertion cố định 12 giảng viên/15 hồ sơ trong builder.
- Hồ sơ modal, bàn phím, phục hồi focus, reduced motion và fallback không có JS
  được giữ. Ảnh gốc được cắt bằng CSS trong khung tròn; không sửa file ảnh.

Browser QA: Edge 154, 1440/1024/768/390/320 px. Không tràn ngang, ảnh lỗi hoặc
lỗi console. Đã mở 12 hồ sơ tại desktop/mobile và 3 hồ sơ lãnh đạo, kiểm tra
tab bằng bàn phím, tìm kiếm, kết hợp lọc, kết quả rỗng và đóng modal.

Phân trang thử với 25 hồ sơ trong HTTP response riêng của browser QA: trang
1/2/3 lần lượt 12/12/1 người; kiểm tra đầu/cuối, focus, trở về trang 1 khi lọc,
ẩn phân trang khi chỉ còn 1 trang và không tràn ngang ở 320 px. Dữ liệu thử
không được ghi vào JSON hoặc HTML của website. Builder cũng được kiểm tra
với 25 giảng viên trong bộ nhớ để xác nhận không khóa cứng số hồ sơ.

Ảnh review và báo cáo mới: [Desktop](design-reference/experts/concept-03/directory-1440.png),
[Tablet](design-reference/experts/concept-03/directory-768.png),
[Mobile](design-reference/experts/concept-03/directory-390.png),
[QA](design-reference/experts/concept-03/qa-results.json).
Ảnh `pagination-25-test-only.png` minh họa dữ liệu thử, không phải danh sách thật.
Các mục tiếp theo lưu lịch sử thiết kế trước khi chọn concept 03.

## Cập nhật theo yêu cầu khách hàng - 09/10/2026

Nhóm hiển thị “Ban lãnh đạo” hiện chỉ gồm, theo thứ tự: **Nguyen Hoang Linh,
Nguyen Hong Truong, Nguyen Vu Truong An**. Đã bỏ Nguyen Xuan Phuong Uyen và
Le Binh Phuong khỏi nhóm này. Vai trò chuyên môn vẫn theo hồ sơ nguồn; không
tự gán chức danh lãnh đạo mới cho hai bác sĩ. Danh sách 12 giảng viên và cố vấn
nổi bật giữ nguyên. `leadershipDisplayIds` trong JSON điều khiển danh sách này,
tách khỏi các category và chức danh theo PDF.

Ảnh cập nhật: [1440 px](design-reference/experts/leadership-selection-1440.png)
/ [390 px](design-reference/experts/leadership-selection-390.png).
Các kết quả và ảnh bên dưới lưu lại lần redesign ban đầu.

Ngày kiểm tra: 09/10/2026. Nguồn nội dung: Company Profile do khách hàng cung cấp,
trang 11-15. Nội dung trong PDF được dùng làm tài liệu nguồn, không làm chỉ dẫn
thay đổi phạm vi công việc.

| Hạng mục | Kết quả |
| --- | --- |
| PDF content extraction | PASS |
| Leadership profiles | 3/3 |
| Medical Advisor | 1/1 |
| Instructor profiles | 12/12 |
| Portrait extraction | PASS - đủ ảnh cho 15 nhân sự duy nhất |
| Expert section redesign | PASS |
| Card interaction | PASS |
| Profile details | PASS |
| Modal / Tabs / Expandable list | PASS |
| Profile interaction | PASS |
| Responsive | PASS - 1440 / 1024 / 768 / 390 px |
| Accessibility | PASS trong phạm vi QA bàn phím, focus, semantics, alt và reduced motion |
| Content accuracy | PASS - tên, học vị, chuyên ngành và tiểu sử đối chiếu PDF |
| Missing information/images | Không thiếu ảnh. Trang 15 không cung cấp tiểu sử riêng cho 11 giảng viên; các trường này để trống. Nên bổ sung ảnh gốc chất lượng cao cho Nguyen Thanh Cong (432 × 432 px). |
| Broken assets | 0 |
| Console errors | NONE |
| Changes outside requested section | NO - chỉ bổ sung hai thẻ tải CSS/JS cho section trong head |
| Commit | NONE |
| Push | NONE |
| Deployment | NONE |
| Safe for visual review | YES |

## Thiết kế và dữ liệu

- Đổi class section thành `experts decorated`; giữ `id="certificates"` và
  `certificates-title`, giữ vị trí section trong Homepage.
- Cố vấn nổi bật: ảnh gốc, vai trò, học vị, chuyên ngành và giới thiệu từ trang 14.
- Tab giảng viên mặc định hiện 4 hồ sơ theo thứ tự tài liệu; nút mở đủ 12 và thu
  gọn. Grid 4 / 4 / 2 / 1 cột tại các kích thước kiểm tra.
- Tab lãnh đạo: 3 hồ sơ, chức danh CSO / CEO / CMO và Đồng sáng lập; tiểu sử ngắn
  trên card, thông tin đầy đủ trong modal. Nhóm lãnh đạo không được gán là giảng viên.
- Modal: nút đóng, Escape, click nền; Tab và Shift+Tab giữ focus trong modal;
  khôi phục focus và cuộn trang ngay khi đóng. Close button 44 × 44 CSS pixels.
- Hai tab hỗ trợ ArrowLeft, ArrowRight, Home, End và aria-selected; chuyển tab
  giữ nguyên trạng thái mở rộng của danh sách giảng viên.
- Hover 240 ms, focus rõ và tắt chuyển động khi người dùng chọn reduced motion.
- 15 hồ sơ duy nhất trong `assets/data/experts.json`, với ID, name, academicTitle,
  position, specialty, shortBiography, fullBiography, portraitImage, category và
  displayOrder. Có thêm học vị tiếng Anh, kích thước ảnh và trang nguồn để đối chiếu.
- Nguyen Hong Truong dùng chung một hồ sơ cho vai trò cố vấn và giảng viên.
- Tên người giữ nguyên không dấu. Không thêm kinh nghiệm, học vị hay chứng chỉ
  ngoài PDF. Các chức vụ theo Company Profile, không được xác minh lại theo thời gian thực.
- `scripts/build_experts.py` tạo HTML từ JSON. Không cần fetch dữ liệu lúc chạy;
  không cần WordPress, framework hoặc thư viện tương tác mới. Chạy lại script
  sau khi cập nhật dữ liệu. Nội dung cả hai nhóm card vẫn hiện khi JavaScript bị tắt.

## QA

Microsoft Edge 154.0.4258.62 chạy qua Playwright trên website local thật.
Đã kiểm tra 12 hồ sơ giảng viên và 3 lãnh đạo ở mỗi kích thước, hồ sơ cố vấn,
giữ focus, Escape, nút đóng, click nền, mở/đóng liên tiếp, mở/thu gọn danh sách,
chuyển tab bằng bàn phím, trạng thái được giữ, reduced motion, ảnh tải đầy đủ và
không phóng ảnh vượt kích thước gốc. Không tràn ngang trang, section hoặc modal;
modal nằm trong viewport và cuộn được khi nội dung dài.

Mini-game mở/đóng bình thường trong kiểm tra smoke; các file mini-game không
thay đổi. Anchor cũ, Programs và Partners vẫn tồn tại. So sánh với Git HEAD xác
nhận HTML ngoài section (trừ hai thẻ tải CSS/JS) và CSS ngoài khối chứng chỉ cũ
không đổi. Không sửa Header, Hero, Programs, Products, Partners, Footer, About
hoặc Course. Chỉ xóa CSS thuộc section chứng chỉ cũ; JS không có logic riêng cho
section đó. Giữ các ảnh chứng chỉ cũ nguyên vẹn.

Đã xem screenshot 1440, 1024, 768, 390, danh sách đủ 12, lãnh đạo và modal.
Ảnh review section tạm ẩn overlay cố định skip-link/mini-game **chỉ trong thao
tác chụp**, không thay đổi giao diện hoặc mã mini-game thực tế.

| Viewport | Layout | Modal / nội dung | Tràn ngang |
| --- | --- | --- | --- |
| 1440 | PASS - 4 cột, spotlight ngang | PASS | Không |
| 1024 | PASS - 4 cột, spotlight ngang | PASS | Không |
| 768 | PASS - 2 cột, spotlight dọc | PASS | Không |
| 390 | PASS - 1 cột, spotlight dọc | PASS | Không |

Ảnh trước được chụp từ HTML/CSS tại Git HEAD qua browser route, giữ nguyên
working tree. Ảnh sau dùng code hoàn tất:

- [Trước 1440](design-reference/experts/before-1440.png) / [Sau 1440](design-reference/experts/after-1440.png)
- [Trước 390](design-reference/experts/before-390.png) / [Sau 390](design-reference/experts/after-390.png)
- [Sau 1024](design-reference/experts/after-1024.png), [Sau 768](design-reference/experts/after-768.png)
- [Đủ 12 giảng viên](design-reference/experts/instructors-all-1440.png)
- [Lãnh đạo 1440](design-reference/experts/leadership-1440.png) / [Lãnh đạo 390](design-reference/experts/leadership-390.png)
- [Modal 1440](design-reference/experts/profile-1440.png) / [Modal 390](design-reference/experts/profile-390.png)
- [Kết quả browser QA](design-reference/experts/qa-results.json)

## Files changed

- `index.html`: section mới, profile templates và hai thẻ tải CSS/JS.
- `assets/css/styles.css`: bỏ khối CSS độc quyền cho section chứng chỉ cũ.

## Files added

- `assets/css/experts.css`
- `assets/js/experts.js`
- `assets/data/experts.json`
- `scripts/build_experts.py`
- `scripts/qa_experts.cjs`
- `assets/images/experts/README.md`
- 11 ảnh `.webp` trong `assets/images/experts/` (chi tiết tên và nguồn trong README).
- `docs/experts-redesign-result.md`
- 11 screenshot và `qa-results.json` trong `docs/design-reference/experts/`.

## Files removed

NONE.

Git sạch trước khi sửa. Sau khi hoàn tất đã chạy `git status`, `git diff --stat`
và `git diff --check`; không lỗi whitespace. JavaScript syntax check PASS.
