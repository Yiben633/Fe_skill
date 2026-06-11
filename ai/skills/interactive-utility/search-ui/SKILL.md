---
name: search-ui
description: Hướng dẫn frontend cho search UI, search box, global search, local search, suggestions, recent searches, result list, no results và query state. Dùng khi cần xây dựng trải nghiệm tìm kiếm trong app, dashboard, docs, table hoặc command-like interface.
---

# Search UI

Search UI tốt giúp người dùng nhập nhanh, hiểu phạm vi tìm kiếm và xử lý kết quả rỗng rõ ràng.

## Khi Dùng

- Tìm trong list, table, docs hoặc dashboard.
- Global search trong app.
- Search kèm suggestions hoặc recent queries.
- Search trong filter bar.
- Search với async results.

## Anatomy

- Input có label hoặc placeholder rõ phạm vi.
- Search icon hoặc shortcut hint nếu hữu ích.
- Clear button khi có query.
- Result count hoặc status text.
- Suggestions, recent searches hoặc popular searches nếu có nghĩa.

## Behavior

- Debounce query async.
- Preserve query trong URL nếu cần share.
- Loading state không xóa kết quả cũ quá sớm.
- No results có gợi ý sửa query hoặc clear filter.
- Keyboard support cho suggestions/results.

## Accessibility

- Input có label thật.
- Results update có live region phù hợp.
- Focus order từ input tới results tự nhiên.
- Clear button có accessible label.

## Checklist

- Người dùng biết đang tìm trong phạm vi nào.
- Query dài không phá layout.
- Loading, empty và error states đầy đủ.
- Search không reset filter/sort ngoài ý muốn.
- Mobile keyboard và clear action dùng tốt.
