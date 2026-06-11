---
name: pagination
description: Hướng dẫn frontend cho pagination, page navigation, page size selector, cursor pagination, infinite list fallback, table pagination và dữ liệu nhiều trang. Dùng khi xây dựng phân trang cho table, search results, product listing, admin list hoặc dashboard data.
---

# Pagination

Pagination giúp người dùng kiểm soát tập dữ liệu lớn. Nó cần rõ vị trí hiện tại, tổng phạm vi và cách chuyển trang.

## Khi Dùng

- Danh sách hoặc table có nhiều item.
- Search results cần chia trang.
- Admin data cần page size và tổng số record.
- API hỗ trợ offset pagination hoặc cursor pagination.
- Infinite scroll không phù hợp vì người dùng cần định vị.

## Thành Phần

- Current page.
- Previous và next.
- Page numbers có ellipsis khi nhiều trang.
- Total count hoặc range: `21-40 of 238`.
- Page size selector nếu người dùng cần kiểm soát mật độ.
- Loading state khi đổi trang.

## Behavior

- Disable previous ở trang đầu và next ở trang cuối.
- Giữ filter/sort khi chuyển trang.
- Reset về trang 1 khi filter thay đổi mạnh.
- Scroll hoặc focus về vùng danh sách sau khi đổi trang nếu phù hợp.
- Không làm layout nhảy khi loading data mới.

## Cursor Pagination

- Dùng next/previous khi không biết tổng số trang.
- Không hiển thị page number giả nếu API không hỗ trợ.
- Có loading và empty state rõ.
- Preserve cursor theo filter/sort hiện tại.

## Accessibility

- Bọc bằng `nav` có label phân trang.
- Current page dùng `aria-current="page"`.
- Button disabled phải rõ bằng cả visual và semantics.
- Label nút nên nói rõ "Trang tiếp theo", "Trang trước".

## Checklist

- Người dùng biết đang xem phần nào của dataset.
- Filter, sort và page state đồng bộ với URL nếu cần share.
- Mobile không bị quá nhiều page buttons.
- Loading không xóa sạch context hiện tại.
- Empty state phân biệt rõ không có dữ liệu và page vượt phạm vi.
