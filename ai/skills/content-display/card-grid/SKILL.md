---
name: card-grid
description: Hướng dẫn frontend cho card grid, responsive card collections, project grid, product grid, content grid, masonry-like grid, loading skeleton và empty states. Dùng khi cần hiển thị nhiều card cùng loại trong layout có thể scan.
---

# Card Grid

Card grid tốt giúp người dùng so sánh nhiều item nhanh. Đừng để hiệu ứng hover hoặc decoration làm mất khả năng scan.

## Khi Dùng

- Project cards, product cards, article cards.
- Feature collections hoặc integration lists.
- Dashboard summary cards cùng loại.
- Search results dạng card.

## Layout

- Dùng grid columns có min/max rõ, ví dụ `minmax(240px, 1fr)`.
- Giữ gap nhất quán giữa card.
- Card cùng hàng nên có baseline ổn định.
- Tránh card cao thấp quá lệch nếu cần so sánh.
- Mobile chuyển 1 cột hoặc 2 cột tùy mật độ.

## Content

- Title và primary metadata phải dễ scan.
- Image hoặc icon có kích thước ổn định.
- Action chính không bị lẫn với secondary action.
- Badge/tag nên giới hạn số lượng.
- Empty state nằm trong vùng grid, không làm page trống trơn.

## States

- Loading skeleton giữ đúng card dimensions.
- Hover/focus không làm card đổi kích thước.
- Selected state rõ nếu card có thể chọn.
- Disabled/unavailable state cần lý do.

## Checklist

- Grid không overflow trên mobile.
- Card text wrap sạch.
- Click target và nested actions không xung đột.
- Sort/filter không làm layout nhảy khó chịu.
- Số lượng card lớn vẫn performance ổn.
