---
name: infinite-scroll
description: Hướng dẫn frontend cho infinite scroll, load more, intersection sentinel, paginated feed, virtualized list và scroll restoration. Dùng khi cần tải thêm nội dung khi người dùng kéo xuống danh sách dài.
---

# Infinite Scroll

Infinite scroll phù hợp với feed khám phá, nhưng không phải lúc nào cũng tốt cho dữ liệu cần định vị. Hãy cân nhắc pagination hoặc load more khi người dùng cần kiểm soát.

## Khi Dùng

- Feed, gallery, social content.
- Search/browse ít cần nhảy tới trang cụ thể.
- Nội dung mới có thể append tự nhiên.
- Mobile-first browsing.

## Behavior

- Dùng sentinel gần cuối list.
- Có loading row rõ.
- Có end-of-list state.
- Có error + retry cho page tiếp theo.
- Preserve scroll position khi quay lại.

## Alternatives

- Load more button khi user cần kiểm soát.
- Pagination khi cần định vị theo trang.
- Virtualization khi list rất lớn.

## Accessibility

- Không tự cướp focus khi item mới thêm.
- Có cách biết nội dung mới đã tải.
- Load more button fallback hữu ích.
- Footer không bị không bao giờ chạm tới.

## Checklist

- Không request trùng khi scroll nhanh.
- End state rõ.
- Error page tiếp theo không phá content đã có.
- URL/state restore nếu cần.
- Performance ổn với nhiều item.
