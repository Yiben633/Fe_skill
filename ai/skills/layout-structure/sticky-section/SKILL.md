---
name: sticky-section
description: Hướng dẫn frontend cho sticky section, sticky panel, pinned content, scroll storytelling, sticky sidebar và section-based layout. Dùng khi cần giữ một vùng nội dung cố định trong khi vùng khác scroll.
---

# Sticky Section

Sticky section nên giúp so sánh hoặc kể chuyện theo scroll. Nếu sticky chỉ để trang trông lạ hơn, nó dễ gây khó chịu và chiếm không gian.

## Khi Dùng

- Feature storytelling với visual cố định.
- Sidebar mục lục trong docs.
- Product comparison hoặc spec panel.
- Form summary/checkout summary.
- Timeline có media hoặc preview đi kèm.

## Layout

- Sticky element cần container đủ cao.
- Xác định `top` theo navbar/header.
- Tránh sticky vùng quá cao hơn viewport.
- Mobile thường tắt sticky hoặc chuyển thành inline.
- Nội dung cạnh sticky không bị che.

## Behavior

- Không trap scroll.
- Không dùng quá nhiều sticky layers.
- Sticky phải có điểm bắt đầu và kết thúc rõ.
- Scroll performance ổn, tránh layout thrash.

## Checklist

- Sticky không che content khác.
- Mobile fallback tự nhiên.
- Header height được tính đúng.
- Section cuối không bị khoảng trống lạ.
- Reduced motion không ảnh hưởng khả năng đọc.
