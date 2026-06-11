---
name: tab-bar
description: Hướng dẫn frontend cho tab bar, tabs, segmented navigation, page tabs, data view tabs, mobile bottom tabs và active tab behavior. Dùng khi xây dựng điều hướng giữa các view ngang hàng, filter view, dashboard tabs hoặc mobile app tabs.
---

# Tab Bar

Tab bar dùng để chuyển giữa các view ngang hàng. Nó phải cho thấy tab nào đang active và không làm người dùng nghĩ đây là stepper hay pagination.

## Khi Dùng

- Các view cùng cấp trong một page.
- Dashboard có nhiều góc nhìn dữ liệu.
- Profile/settings có nhiều nhóm nội dung.
- Mobile app cần bottom tabs cho destination chính.
- Product UI cần chuyển giữa table, board, calendar hoặc analytics.

## Biến Thể

- Underline tabs: gọn, tốt cho page content.
- Pill tabs: nổi bật, tốt cho filter nhẹ hoặc segmented view.
- Icon tabs: dùng khi icon rất quen thuộc hoặc có label đi kèm.
- Scrollable tabs: dùng khi số tab nhiều trên mobile.
- Bottom tabs: dùng cho navigation cấp cao trên mobile.

## Interaction

- Active tab phải rõ hơn hover.
- Keyboard hỗ trợ arrow navigation khi dùng tab semantics.
- Tab không gây mất dữ liệu form nếu user chưa xác nhận.
- Loading của tab content không làm tab bar nhảy.
- Nếu tab có count, count cập nhật mà không đổi chiều cao.

## Accessibility

- Dùng role `tablist`, `tab`, `tabpanel` khi tab thay đổi nội dung trong cùng page.
- Dùng link thật khi tab là route navigation.
- Active tab có `aria-selected` hoặc route active state.
- Focus visible không bị che bởi underline.

## Checklist

- Tab labels ngắn và ngang hàng về nghĩa.
- Không dùng tab cho flow bắt buộc theo thứ tự.
- Mobile không overflow vô tình.
- Content panel có loading, empty và error state.
- Active state vẫn rõ khi chỉ nhìn grayscale.
