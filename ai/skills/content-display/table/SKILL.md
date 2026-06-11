---
name: table
description: Hướng dẫn frontend cho table, responsive table, row states, sortable columns, empty/loading states và dữ liệu dạng hàng-cột. Dùng khi cần hiển thị dữ liệu có cấu trúc để so sánh theo cột.
---

# Table

Table phù hợp khi người dùng cần so sánh dữ liệu theo hàng và cột. Nếu dữ liệu không cần so sánh, list hoặc card grid có thể tốt hơn.

## Khi Dùng

- Dữ liệu có cùng schema.
- Người dùng cần scan theo cột.
- Admin list, invoice list, user list.
- Báo cáo hoặc summary có số liệu.

## Structure

- Header rõ label và alignment.
- Row height ổn định.
- Numeric values canh phải khi cần so sánh.
- Primary column dễ nhận biết.
- Actions đặt cuối row hoặc trong menu.

## States

- Loading skeleton giữ column width.
- Empty state có hướng dẫn tiếp theo.
- Error state cho biết dữ liệu không tải được.
- Selected row, hover row và focus row rõ ràng.
- Sticky header dùng khi table dài.

## Responsive

- Mobile có thể chuyển thành card rows nếu quá nhiều cột.
- Ẩn cột phụ có chủ đích, không làm mất nghĩa chính.
- Horizontal scroll cần affordance rõ.
- Column width không để text quan trọng bị cắt vô lý.

## Accessibility

- Dùng semantic `table` cho dữ liệu dạng bảng.
- Header dùng `th` đúng scope.
- Sort button có trạng thái sort.
- Row actions keyboard-accessible.

## Checklist

- Người dùng so sánh được các cột chính.
- Table không vỡ ở mobile.
- Sort/filter không làm mất selection bất ngờ.
- Empty/loading/error state đầy đủ.
- Actions không quá sát nhau.
