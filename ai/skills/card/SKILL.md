---
name: card
description: Hướng dẫn component card cho hover patterns, media cards, flip cards, expandable cards, grids, selectable states và animated card interactions.
---

# Card

Card nên gom nhóm nội dung liên quan và giúp người dùng scan dễ hơn.

## Các Loại

- Content card: title, tóm tắt, metadata, action.
- Media card: image hoặc video kèm caption và action.
- Metric card: số liệu, label, trend, comparison.
- Selectable card: selected state và focus state rõ ràng.
- Flip card: nội dung mặt trước và mặt sau có cặp.
- Expand card: preview gọn kèm chi tiết khi cần.

## Hover Patterns

- Lift: translate nhẹ và đổi shadow.
- Media zoom: giữ image clipped và tiết chế.
- Border accent: hữu ích trong grid dày thông tin.
- Action reveal: chỉ dùng cho secondary actions.
- Tilt: dùng tiết chế và tắt trên thiết bị touch.

## Flip Cards

- Chỉ dùng khi cả hai mặt đều ngắn.
- Cho phép kích hoạt bằng click hoặc keyboard, không chỉ dựa vào hover.
- Giữ kích thước card trong lúc flip.
- Tránh flip lặp lại với nội dung quan trọng cần đọc.

## Expand Cards

- Làm trigger rõ ràng.
- Animate height cẩn thận để tránh layout jump.
- Cân nhắc accordion semantics cho lists.
- Giữ scroll position khi expand nội dung lớn.

## Checklist

- Radius, border, shadow và padding của card khớp với system.
- Text xuống dòng gọn ở mobile widths.
- Clickable area và nested actions không xung đột.
- Cards lặp lại căn theo grid ổn định.
- Loading và empty states giữ kích thước card.
