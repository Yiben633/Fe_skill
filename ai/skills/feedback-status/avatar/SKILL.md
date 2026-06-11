---
name: avatar
description: Hướng dẫn frontend cho avatar, user avatar, initials fallback, group avatar, presence avatar, profile image và identity display. Dùng khi cần hiển thị người dùng, team, tổ chức hoặc entity bằng hình đại diện.
---

# Avatar

Avatar là tín hiệu nhận diện nhỏ. Nó cần ổn định, dễ nhận ra và có fallback tốt khi ảnh không tải được.

## Khi Dùng

- User/profile identity.
- Comment, feed, table row hoặc card owner.
- Team/group avatars.
- Presence hoặc online state.
- Organization hoặc workspace icon.

## Variants

- Image avatar.
- Initials fallback.
- Icon fallback cho entity không phải người.
- Avatar group với overflow count.
- Avatar kèm status dot.

## Layout

- Kích thước ổn định: 24, 32, 40, 48px tùy mật độ.
- Shape nhất quán: circle cho người, rounded square có thể dùng cho org/app.
- Initials canh giữa, text không overflow.
- Image dùng object-fit phù hợp.
- Group overlap vừa phải, không che hết mặt.

## Accessibility

- Avatar trang trí có thể ẩn với screen reader nếu tên đã hiển thị.
- Avatar duy nhất đại diện cho user cần alt text.
- Status dot cần label nếu truyền thông tin quan trọng.
- Không chỉ dựa vào ảnh để định danh.

## Checklist

- Fallback hiển thị đẹp khi ảnh lỗi.
- Avatar không làm row/card nhảy khi load.
- Initials tạo nhất quán.
- Presence state không che chi tiết quan trọng.
- Group avatar có overflow count rõ.
