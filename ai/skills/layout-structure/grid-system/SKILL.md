---
name: grid-system
description: Hướng dẫn frontend cho grid system, responsive columns, gutters, container widths, layout tracks, CSS grid, flex layout và breakpoint strategy. Dùng khi cần xây dựng cấu trúc layout nhất quán cho page, dashboard, card grid hoặc content sections.
---

# Grid System

Grid system giúp layout có nhịp và dễ mở rộng. Nó cần định nghĩa container, columns, gaps và breakpoint rõ thay vì căn chỉnh từng phần thủ công.

## Thành Phần

- Container max-width.
- Column count theo breakpoint.
- Gutter/gap scale.
- Section padding.
- Alignment rules cho content, media và sidebar.

## Pattern

- 12-column grid cho page phức tạp.
- CSS grid `minmax()` cho card collections.
- Flex row cho toolbar hoặc layout một chiều.
- Container queries nếu component cần tự thích nghi theo vùng chứa.

## Responsive

- Mobile ưu tiên 1 cột, nội dung quan trọng lên trước.
- Tablet có thể 2 cột hoặc sidebar nhẹ.
- Desktop dùng grid rộng hơn nhưng giữ line length dễ đọc.
- Không scale font theo viewport width.

## Checklist

- Layout không overflow ở mobile.
- Gap nhất quán giữa section và component.
- Content chính không quá rộng để đọc.
- Cards/items có kích thước ổn định.
- Breakpoint đổi layout có chủ đích, không nhảy bất ngờ.
