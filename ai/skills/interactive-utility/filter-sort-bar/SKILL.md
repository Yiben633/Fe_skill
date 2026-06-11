---
name: filter-sort-bar
description: Hướng dẫn frontend cho filter bar, sort bar, filter chips, faceted filters, search filters, applied filters, reset filters và query state. Dùng khi cần lọc/sắp xếp list, table, grid, feed hoặc search results.
---

# Filter Sort Bar

Filter/sort bar cần giúp người dùng hiểu dữ liệu đang bị thu hẹp bởi điều kiện nào và có thể reset nhanh.

## Thành Phần

- Search input nếu filter theo text.
- Filter controls theo domain.
- Sort select hoặc segmented sort.
- Applied filter chips.
- Clear all/reset action.
- Result count.

## Behavior

- Filter state đồng bộ với URL khi cần share.
- Sort không reset filter.
- Reset filter rõ và không phá query ngoài ý muốn.
- Async filter có loading state.
- Mobile có thể chuyển filter thành drawer hoặc bottom sheet.

## Design Rules

- Chỉ hiển thị filter quan trọng nhất ở thanh chính.
- Filter nâng cao gom trong popover/drawer.
- Applied chips ngắn, có remove action.
- Result count phản hồi sau khi filter đổi.
- Sort label nói rõ tiêu chí hiện tại.

## Accessibility

- Controls có label rõ.
- Chips remove bằng keyboard được.
- Result count update không gây ồn.
- Focus không nhảy khi filter refresh data.

## Checklist

- User thấy filter nào đang active.
- Clear/reset dễ tìm.
- Mobile không bị quá nhiều controls chen nhau.
- Empty state phân biệt no data và no results.
- Filter/sort preserve qua pagination nếu cần.
