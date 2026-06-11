---
name: carousel
description: Hướng dẫn frontend cho carousel, horizontal scroller, product carousel, testimonial carousel, card carousel, snapping behavior, controls, dots, thumbnails và autoplay. Dùng khi cần hiển thị nhiều item trong một vùng ngang có điều hướng.
---

# Carousel

Carousel nên giúp người dùng duyệt nhiều item mà không mất định hướng. Hãy ưu tiên kiểm soát rõ ràng hơn hiệu ứng phô trương.

## Khi Dùng

- Product cards, testimonials, logos hoặc feature cards.
- Bộ item ngang có cùng loại nội dung.
- Không gian hạn chế nhưng vẫn cần hé lộ nhiều lựa chọn.
- Mobile cần swipe tự nhiên.

## Controls

- Có previous/next khi item không thấy hết.
- Dots hoặc progress dùng khi số slide ít.
- Thumbnail dùng cho media quan trọng.
- Disable nút khi đến đầu/cuối nếu không loop.
- Pause autoplay khi hover, focus hoặc user tương tác.

## Behavior

- Dùng snap points để chuyển item ổn định.
- Giữ chiều cao carousel không nhảy khi item đổi.
- Trên mobile, ưu tiên swipe và touch target lớn.
- Không autoplay nội dung cần đọc kỹ.
- Loop chỉ dùng khi không gây mất ngữ cảnh.

## Accessibility

- Button có label rõ như "Previous item" và "Next item".
- Active item hoặc page indicator có trạng thái rõ.
- Tôn trọng `prefers-reduced-motion`.
- Không trap focus trong carousel.

## Checklist

- Người dùng biết còn item ở hai bên.
- Controls không che nội dung chính.
- Item width ổn định ở mobile và desktop.
- Carousel vẫn dùng được bằng keyboard.
- Loading state giữ cùng kích thước layout.
