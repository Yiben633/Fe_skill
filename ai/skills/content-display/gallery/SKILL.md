---
name: gallery
description: Hướng dẫn frontend cho image gallery, video gallery, media grid, thumbnail gallery, lightbox, masonry nhẹ và responsive media display. Dùng khi cần trình bày nhiều ảnh/video, portfolio visuals, product images hoặc case-study media.
---

# Gallery

Gallery cần giúp người dùng xem media thật rõ, không chỉ tạo một lưới ảnh đẹp. Ưu tiên tỷ lệ ảnh, caption và khả năng inspect.

## Loại Gallery

- Grid gallery: ảnh cùng kích thước hoặc crop nhất quán.
- Masonry nhẹ: dùng khi tỷ lệ ảnh khác nhau và cần cảm giác editorial.
- Product gallery: ảnh chính, thumbnails và zoom/lightbox.
- Portfolio gallery: project visuals có caption và metadata.
- Video gallery: poster, duration, play state.

## Layout

- Dùng `aspect-ratio` để tránh layout shift.
- Thumbnail cần crop có chủ đích.
- Ảnh quan trọng không bị cắt mất chi tiết chính.
- Mobile có thể chuyển từ grid sang carousel hoặc single column.
- Caption không đè lên ảnh nếu contrast không đủ.

## Interaction

- Lightbox có next/previous, close và keyboard support.
- Zoom chỉ dùng khi người dùng cần inspect chi tiết.
- Hover reveal chỉ dành cho metadata phụ.
- Loading dùng skeleton hoặc dominant color placeholder.

## Accessibility

- Ảnh có alt text đúng ngữ cảnh.
- Lightbox restore focus sau khi đóng.
- Video có label và control phù hợp.
- Không chỉ dùng hover để hiện thông tin quan trọng.

## Checklist

- Media không bị méo tỷ lệ.
- Layout không nhảy khi ảnh tải.
- Lightbox dùng được trên mobile.
- Caption và metadata dễ đọc.
- Empty state giải thích khi chưa có media.
