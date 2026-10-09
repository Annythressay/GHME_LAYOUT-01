# GHME expert portraits

Source: user-supplied `Final EN 24.09_GHME_Company Introduction (1).pdf`,
pages 11-15 (one-based PDF pages).

The 11 WebP files here are original embedded raster portraits extracted with
`pypdf`, not page screenshots. Each portrait is matched to the name directly
below it on page 15, in left-to-right order across the first and second rows.
Conversion: Pillow WebP, quality 90, method 6, original pixel dimensions.
No face reconstruction, AI generation, cropping or upscaling was used.

| Person | PDF portrait | Output / reused path | Pixels |
| --- | --- | --- | --- |
| Nguyen Hong Truong | Page 14, X9; also page 15, X9 | `../about/nguyen-hong-truong.webp` | 1350 × 1350 |
| Nguyen Quoc Vu Khanh | Page 15, X12 | `nguyen-quoc-vu-khanh.webp` | 675 × 675 |
| Nguyen Kim | Page 15, X15 | `nguyen-kim.webp` | 675 × 675 |
| Nguyen Vu Truong An | Page 15, X18 | `nguyen-vu-truong-an.webp` | 675 × 675 |
| Tran Nguyen Quynh Anh | Page 15, X21 | `tran-nguyen-quynh-anh.webp` | 675 × 675 |
| Le Dang Dai | Page 15, X24 | `le-dang-dai.webp` | 675 × 675 |
| Le Nguyen Thuy Mai | Page 15, X27 | `le-nguyen-thuy-mai.webp` | 675 × 675 |
| Nguyen Thanh Cong | Page 15, X30 | `nguyen-thanh-cong.webp` | 432 × 432 |
| Le Tran The Gia | Page 15, X33 | `le-tran-the-gia.webp` | 675 × 675 |
| Le Hoang Long | Page 15, X36 | `le-hoang-long.webp` | 675 × 675 |
| Nguyen Thanh Sang | Page 15, X39 | `nguyen-thanh-sang.webp` | 675 × 675 |
| Nguyen Quang Vinh | Page 15, X42 | `nguyen-quang-vinh.webp` | 675 × 675 |
| Nguyen Hoang Linh | Page 11, X9 | `../about/nguyen-hoang-linh.webp` | 1350 × 1350 |
| Nguyen Xuan Phuong Uyen | Page 12, X9 | `../about/nguyen-xuan-phuong-uyen.webp` | 1350 × 1350 |
| Le Binh Phuong | Page 13, X9 | `../about/le-binh-phuong.webp` | 1350 × 1350 |

The four existing About-page originals are reused without changes. The higher
resolution page-14 portrait serves both of Nguyen Hong Truong's roles, with a
single canonical person record in `assets/data/experts.json`.

QA compared decoded WebP pixels with the corresponding embedded source image:
all dimensions matched; maximum per-channel RMS differences were 1.39-2.33
(on the 0-255 scale), consistent with WebP compression. The complete page-15
layout and leadership/advisor pages were also visually inspected for mapping.

Quality limitation: Nguyen Thanh Cong's source is only 432 × 432 pixels. Request
a higher-resolution original for Retina displays or larger future uses. The
other 11 instructor-source portraits are 675 × 675 pixels; 10 are used here,
and Nguyen Hong Truong uses the 1350 × 1350 version. Do not promise extra detail
beyond the PDF originals. The earlier design capped card portraits at 250 CSS
pixels. The current directory uses circular frames of 80–108
CSS pixels and a 1.45× CSS crop to emphasize faces; source files remain intact.
