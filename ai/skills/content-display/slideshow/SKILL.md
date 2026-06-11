---
name: slideshow
description: Hướng dẫn UI cho slideshow, carousel, deck, gallery và stepper kèm animation patterns. Dùng khi xây dựng image slider, testimonial carousel, hero slides, product gallery, onboarding slides, presentation deck hoặc animated slide transitions.
---

# Slideshow

Xây dựng slideshow để dùng trước, đẹp và có motion sau.

## Các Dạng

- Hero slideshow: media lớn, copy ngắn, action rõ.
- Gallery carousel: ưu tiên hình ảnh, có thumbnail hoặc dots, media dễ xem kỹ.
- Testimonial slider: text card kèm avatar và context công ty.
- Product showcase: media, nhãn feature, chi tiết và CTA.
- Stepper deck: các bước có số thứ tự, progress và nút next/back rõ ràng.

## Điều Khiển

- Có nút previous và next.
- Thêm dots, thumbnails hoặc progress indicator để định hướng.
- Hỗ trợ phím mũi tên khi slideshow đang focus.
- Tạm dừng autoplay khi hover, focus hoặc người dùng tương tác.
- Tránh autoplay với nội dung người dùng cần đọc kỹ.

## Animation

- Mỗi slideshow chỉ nên có một kiểu transition chính.
- Giữ transition duration khoảng 250-600ms.
- Kết hợp opacity với transform để chuyển động mượt.
- Tránh khoảng cách motion lớn trên mobile.
- Tôn trọng `prefers-reduced-motion`.

## Patterns

```ts
const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -48 : 48, opacity: 0 })
};
```

## Checklist

- Slides giữ chiều cao ổn định khi nội dung thay đổi.
- Buttons không bị nhảy vị trí khi đổi slide.
- Images có alt text.
- Touch targets ít nhất 40px.
- Active slide được thông báo hoặc hiển thị rõ.
