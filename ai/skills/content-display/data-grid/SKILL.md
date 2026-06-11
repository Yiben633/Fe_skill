---
name: data-grid
description: Hướng dẫn frontend cho data grid nâng cao, column resize, column pinning, sorting, filtering, selection, bulk actions, virtualization và dense enterprise data UI. Dùng khi table cơ bản không đủ cho dữ liệu lớn hoặc thao tác phức tạp.
---

# Data Grid

Data grid là công cụ làm việc với dữ liệu lớn. Nó cần ưu tiên độ rõ, hiệu năng và khả năng thao tác lặp lại hơn trang trí.

## Khi Dùng

- Dữ liệu nhiều cột, nhiều hàng.
- Người dùng cần sort/filter/group/resize columns.
- Bulk actions hoặc row selection quan trọng.
- Dataset lớn cần virtualization.
- Admin, CRM, inventory, analytics hoặc operations UI.

## Core Features

- Column sorting và filtering.
- Column resize, reorder hoặc pin khi cần.
- Row selection và bulk action bar.
- Pagination hoặc virtualization.
- Density control nếu người dùng làm việc lâu với dữ liệu.

## Interaction

- Header controls không làm label khó đọc.
- Selection state giữ ổn định qua sort/filter theo rule rõ.
- Bulk action chỉ hiện khi có selection.
- Inline edit cần save/cancel và error state.
- Keyboard navigation nên được hỗ trợ nếu grid là tool chính.

## Performance

- Virtualize khi row count lớn.
- Tránh render cell quá nặng.
- Skeleton giữ column layout.
- Debounce filter text nếu query tốn kém.
- Preserve column config nếu app có user preferences.

## Checklist

- Grid vẫn scan được ở density cao.
- Empty state phân biệt no data và no results.
- Loading không làm column width nhảy.
- Mobile có chiến lược rõ: scroll ngang, card mode hoặc limited columns.
- Accessibility không bị hy sinh bởi virtualization.
