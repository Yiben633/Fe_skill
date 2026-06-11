---
name: mobile-hamburger
description: Hướng dẫn frontend cho mobile hamburger menu, drawer navigation, full-screen mobile menu, slide panel, body scroll lock, focus handling và responsive nav behavior. Dùng khi xây dựng menu mobile cho navbar, marketing site, dashboard hoặc app shell.
---

# Mobile Hamburger

Hamburger menu trên mobile phải mở nhanh, đóng dễ và không làm người dùng lạc khỏi ngữ cảnh hiện tại.

## Cấu Trúc

- Trigger button có icon hamburger hoặc close.
- Panel dạng drawer, sheet hoặc full-screen menu.
- Primary links ở trên, secondary links ở dưới.
- CTA quan trọng có vị trí rõ.
- Account/workspace action đặt cuối panel nếu có.

## Behavior

- Button target tối thiểu 40px.
- Mở menu đổi icon hoặc state rõ.
- Đóng khi chọn link, bấm escape, outside click hoặc đổi route.
- Lock body scroll khi panel phủ màn hình.
- Restore focus về trigger sau khi đóng.

## Animation

- Drawer: translate từ cạnh 220-340ms.
- Overlay: fade 120-220ms.
- Full-screen menu: fade/slide nhẹ, không delay link quá lâu.
- Tôn trọng `prefers-reduced-motion`.

## Accessibility

- Trigger có accessible label.
- Dùng `aria-expanded` và `aria-controls`.
- Focus trap khi panel là modal-like overlay.
- Link order đúng với visual order.
- Close button luôn có thể focus.

## Checklist

- Menu không bị kẹt mở khi route thay đổi.
- Nội dung bên dưới không scroll khi overlay mở.
- Safe area trên mobile được xử lý.
- Link dài không overflow.
- Active route vẫn rõ trong menu mobile.
