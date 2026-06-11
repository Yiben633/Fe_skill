---
name: mega-menu
description: Hướng dẫn frontend cho mega menu, navigation dropdown nhiều cột, product menu, category menu, preview panel, hover/focus behavior và responsive fallback. Dùng khi xây dựng menu lớn cho marketing site, SaaS, ecommerce, docs hoặc navigation có nhiều nhóm link.
---

# Mega Menu

Mega menu giúp phơi bày nhiều lựa chọn mà vẫn giữ cấu trúc dễ scan. Nó cần được tổ chức bằng nhóm có nghĩa, không chỉ là một danh sách link lớn.

## Khi Dùng

- Navigation có nhiều destination quan trọng.
- Product hoặc feature được nhóm theo use case.
- Ecommerce có category và subcategory.
- Docs có nhiều section cấp cao.
- Marketing site cần preview hoặc mô tả ngắn cho từng nhóm.

## Cấu Trúc

- Trigger rõ label và trạng thái open.
- Nhóm link theo category có heading.
- Link có title ngắn, description nếu cần.
- Preview panel cho item nổi bật hoặc recently updated.
- CTA phụ như "View all", "Contact sales", "Explore docs".

## Behavior

- Mở bằng click hoặc hover có delay hợp lý.
- Luôn hỗ trợ keyboard và focus.
- Đóng khi escape, outside click hoặc chọn link.
- Không đóng quá nhanh khi con trỏ di chuyển giữa trigger và panel.
- Giữ panel trong viewport, tránh tràn khỏi mép màn hình.

## Responsive

- Mobile không dùng hover mega menu.
- Chuyển thành accordion, drawer hoặc full-screen menu.
- Nhóm link vẫn giữ heading.
- Preview dài nên ẩn hoặc chuyển xuống cuối nhóm.

## Accessibility

- Trigger có `aria-expanded`.
- Panel có focus management hợp lý.
- Heading nhóm không bị đọc như link nếu không clickable.
- Link text phải tự đủ nghĩa.

## Checklist

- Người dùng scan được nhóm trong vài giây.
- Không quá nhiều cột gây rối.
- Panel không che mất trigger active một cách khó hiểu.
- Hover, focus và open state đồng bộ.
- Mobile fallback dùng tốt, không chỉ là bản desktop thu nhỏ.
