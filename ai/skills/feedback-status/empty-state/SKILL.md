---
name: empty-state
description: Hướng dẫn frontend cho empty state, no data, no results, first-use empty, filtered empty, onboarding empty và placeholder content. Dùng khi một vùng UI chưa có dữ liệu hoặc kết quả.
---

# Empty State

Empty state tốt không chỉ nói "trống"; nó giải thích vì sao trống và người dùng có thể làm gì tiếp theo.

## Loại Empty State

- First-use: chưa có dữ liệu vì user chưa tạo gì.
- No results: filter/search không có kết quả.
- Permission empty: user không có quyền xem.
- Archived/deleted empty: dữ liệu đã bị xóa hoặc ẩn.
- Temporary empty: data chưa đồng bộ hoặc đang chờ.

## Nội Dung

- Title ngắn, cụ thể.
- Description giải thích nguyên nhân.
- Primary action nếu có bước tiếp theo.
- Secondary action như reset filter hoặc learn more.
- Visual nhẹ, không lấn át UI chính.

## Layout

- Đặt trong vùng dữ liệu liên quan.
- Không chiếm cả page nếu chỉ một section trống.
- Với table/list, giữ header/filter nếu user cần thao tác lại.
- Mobile giữ action dễ chạm.

## Accessibility

- Empty message đọc được như content bình thường.
- Action button label rõ.
- Không phụ thuộc vào illustration để truyền nghĩa.
- Khi filter đổi sang empty, focus không nhảy bất ngờ.

## Checklist

- User hiểu vì sao không có dữ liệu.
- User biết bước tiếp theo.
- No results có reset/clear filter nếu phù hợp.
- Empty khác loading và error.
- Visual không làm UI giống landing page không cần thiết.
