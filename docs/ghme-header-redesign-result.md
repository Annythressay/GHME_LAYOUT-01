# GHME — Redesign header trang chủ

Ngày thực hiện: 09/10/2026.

## File thay đổi

- `index.html`: chỉ sửa markup header và phiên bản cache của CSS/JS header.
- `assets/css/header.css`: layout, spacing, màu sắc, logo, active state, search, login và responsive; toàn bộ selector được giới hạn trong `.premium-header`.
- `assets/js/header.js`: chuyển cùng một form search ra ngoài drawer ở màn hình nhỏ và đưa về hàng navigation ở desktop; vô hiệu hóa các điều khiển phía sau khi drawer mở.
- `scripts/qa_header_main.cjs`: kiểm tra responsive, tương tác và lưu ảnh QA.

Không sửa `assets/css/styles.css`, `assets/js/main.js`, các section bên dưới header, trang Giới thiệu hoặc trang chi tiết khóa học. Các thay đổi có sẵn trong workspace được giữ nguyên. Không commit/push.

## Header mới

Top bar nền navy `#102f52`, cao 42px (mobile 40px): thông điệp cộng đồng, ba link nội dung, link đăng ký tư vấn và nút ngôn ngữ VI | EN.

Hàng chính nền trắng, cao 92px trên desktop: logo GHME hiện có, bốn menu gốc (Trang chủ, Giới thiệu, Khóa học, Sản phẩm), ô tìm kiếm nền xám xanh nhạt `#f5f7fa` cao 46px và nút Đăng nhập viền navy. Search rộng 320–400px ở desktop, viền mảnh, chữ xám đậm và icon tìm kiếm 16px ở bên trái. Menu được căn giữa phần không gian cạnh cụm search/login để cân đối khoảng cách với logo. Item active có chữ cam và underline mảnh căn giữa. Container rộng tối đa 1320px.

CTA Đăng ký tư vấn vẫn có ở top bar trên desktop/tablet và trong drawer. Các link top bar dẫn đến chương trình đào tạo, trang Doctor Talk và phần Về chúng tôi hiện có.

## Responsive

| Kích thước | Bố cục | QA |
| --- | --- | --- |
| 1440px | Logo + nav + search + login trên một hàng | PASS |
| 1200px | Thu gọn khoảng cách, search rộng 320–400px | PASS |
| 1024px | Logo + search + hamburger; nav/login trong drawer | PASS |
| 768px | Logo + search + hamburger; nav/login trong drawer | PASS |
| 430px | Logo + hamburger, search nằm ở hàng riêng | PASS |
| 375px | Như 430px, không tràn ngang hoặc đè nội dung | PASS |

Giữ breakpoint drawer hiện có tại 1099.98px. Dưới 768px, main header cao 132px để có hàng search 48px riêng. Các link phụ top bar được rút gọn theo không gian; logo giữ tỉ lệ bằng `object-fit: contain`.

## Logic được giữ và kiểm tra

- Mega menu Khóa học/Sản phẩm: hover, click, chuyển danh mục, Escape, click bên ngoài và điều hướng bằng bàn phím.
- Drawer: accordion, focus loop, trả focus, khóa cuộn và khôi phục trạng thái khi thay đổi breakpoint; backdrop phủ các điều khiển phía sau.
- Search: giữ nguyên ID, input, nội dung người dùng và handler; kiểm tra nút tìm kiếm, Enter, kết quả BPEC và trường hợp không có kết quả ở desktop/tablet/mobile.
- Login và VI | EN: giữ nguyên `data-info` cùng các hộp thoại hiện có.
- Hai trang khóa học, sáu link sản phẩm và link tư vấn vẫn dẫn đến đúng nội dung.
- Không có lỗi console/runtime hoặc asset lỗi trong lần QA cuối bằng Playwright trên Microsoft Edge.
- Nội dung từ `<main>` đến hết file và `assets/css/styles.css` được đối chiếu với snapshot trước task, không thay đổi.

Ảnh desktop/mobile và kết quả kiểm tra bản search mới: `docs/design-reference/header-search-refinement/`. File dữ liệu QA: `qa-result.json`. Bản header trước khi chỉnh search được giữ tại `docs/design-reference/header-main-redesign/` để đối chiếu.

## Giới hạn hiện có

Không phát hiện lỗi còn lại trong phạm vi kiểm tra header. Website vẫn là frontend prototype: Đăng nhập chưa kết nối hệ thống tài khoản, EN chưa có bản dịch chính thức; tìm kiếm vẫn dùng dữ liệu chương trình trên trang như trước.

Xem trước tại `http://127.0.0.1:4173/`. Các header riêng của trang Giới thiệu và trang khóa học vẫn giữ cấu trúc hiện có.
