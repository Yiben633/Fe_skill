---
name: sidebar
description: Hướng dẫn frontend cho sidebar navigation, app shell, dashboard nav, collapsible sidebar, nested menu, active route, icon rail và responsive side navigation. Dùng khi xây dựng sidebar cho admin, SaaS, dashboard, docs, settings hoặc workspace UI.
---

# Sidebar

Sidebar giúp người dùng định vị trong hệ thống lớn. Nó cần ổn định, dễ scan và không chiếm quá nhiều sự chú ý khỏi nội dung chính.

## Khi Dùng

- Dashboard có nhiều module hoặc nhóm chức năng.
- Docs hoặc knowledge base có cấu trúc phân cấp.
- Settings có nhiều trang con.
- App shell cần navigation tồn tại xuyên suốt.
- Workspace UI cần chuyển ngữ cảnh nhanh giữa project, team hoặc section.

## Cấu Trúc

- Header: logo, workspace switcher hoặc tên khu vực.
- Primary nav: nhóm link chính.
- Secondary nav: settings, help, billing, profile.
- Footer: account, status hoặc quick action.
- Collapse control: thu gọn sidebar khi không gian hẹp.

## States

- Active route rõ ràng.
- Hover và focus visible đủ mạnh.
- Collapsed state vẫn giữ icon dễ hiểu.
- Nested open/closed state không làm layout nhảy mạnh.
- Disabled hoặc locked item cần giải thích bằng tooltip hoặc label ngắn.

## Responsive

- Desktop: sidebar sticky hoặc fixed trong app shell.
- Tablet: có thể chuyển thành icon rail hoặc drawer.
- Mobile: chuyển thành drawer/full-screen menu, đóng khi chọn link.
- Tránh để sidebar đẩy content quá hẹp ở viewport nhỏ.

## Accessibility

- Dùng semantic navigation khi phù hợp.
- Giữ thứ tự tab hợp lý.
- Collapse button có `aria-expanded`.
- Nested groups có label rõ.
- Không chỉ dùng màu để biểu thị active route.

## Checklist

- Người dùng biết mình đang ở đâu.
- Link quan trọng luôn trong tầm scan.
- Sidebar không làm content chính bị bó.
- Collapse/expand không gây layout shift khó chịu.
- Keyboard navigation dùng được từ đầu đến cuối.
