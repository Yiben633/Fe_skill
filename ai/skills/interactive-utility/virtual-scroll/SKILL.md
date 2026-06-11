---
name: virtual-scroll
description: Hướng dẫn frontend cho virtual scroll, virtualized list, virtualized grid, windowing, large data rendering, dynamic row height và scroll performance. Dùng khi cần render danh sách/bảng/grid rất lớn mà vẫn mượt.
---

# Virtual Scroll

Virtual scroll là tối ưu hiệu năng, nhưng dễ gây lỗi focus, đo chiều cao và accessibility. Chỉ dùng khi số item đủ lớn để cần windowing.

## Khi Dùng

- List/table hàng nghìn item.
- Chat/feed history dài.
- Data grid lớn.
- Search results nhiều item.
- Grid media số lượng lớn.

## Behavior

- Render window quanh viewport.
- Overscan đủ để scroll mượt.
- Preserve scroll position khi data update.
- Dynamic height cần measurement strategy.
- Loading next page kết hợp được với virtualization.

## Accessibility

- Keyboard navigation không bị mất item focus.
- Screen reader không bị hiểu sai tổng số nếu quan trọng.
- Row index/count có thể cần announce trong grid.
- Không làm focus nhảy khi item unmount.

## Performance

- Memo/render cell nhẹ.
- Avoid layout thrash khi đo height.
- Stable item keys.
- Test fast scroll và resize.

## Checklist

- Scroll mượt với dataset lớn.
- Item không flicker.
- Dynamic height không làm jump.
- Focus/selection preserve.
- Empty/loading/error state tương thích virtual list.
