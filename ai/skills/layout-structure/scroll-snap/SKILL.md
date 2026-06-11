---
name: scroll-snap
description: Hướng dẫn frontend cho scroll snap, snap sections, horizontal snapping, paged scroll, carousel snap và full-screen section navigation. Dùng khi cần scroll dừng theo từng section hoặc item có kích thước cố định.
---

# Scroll Snap

Scroll snap tạo cảm giác chính xác khi duyệt section hoặc item, nhưng dễ khó chịu nếu dùng cho nội dung đọc dài.

## Khi Dùng

- Carousel ngang.
- Product panels hoặc feature slides.
- Full-screen story sections.
- Mobile media gallery.
- Onboarding hoặc showcase ngắn.

## Layout

- Item/section có kích thước ổn định.
- Snap alignment rõ: start, center hoặc end.
- Có padding để item không bị che bởi nav.
- Tránh snap với nội dung cao hơn viewport nếu cần đọc.

## Behavior

- Scroll tự nhiên, không ép quá mạnh.
- Có controls phụ nếu navigation cần rõ hơn.
- Mobile touch momentum được test kỹ.
- Keyboard navigation nếu section là experience chính.

## Accessibility

- Không dùng snap làm cách duy nhất để điều hướng.
- Tôn trọng reduced motion nếu có smooth scroll.
- Focus vào element không bị snap che.
- Nội dung vẫn đọc được khi scroll thường.

## Checklist

- Snap không kẹt giữa section.
- Content dài không bị khó đọc.
- Header/footer không che item snap.
- Có indicator nếu người dùng cần biết vị trí.
- Works on mobile and desktop.
