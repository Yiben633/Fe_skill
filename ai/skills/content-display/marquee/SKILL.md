---
name: marquee
description: Hướng dẫn frontend cho marquee, scrolling logos, announcement strip, infinite horizontal loop, sponsor strip và decorative content rail. Dùng khi cần tạo dải nội dung chạy ngang có kiểm soát, thường cho logo, tag, headline ngắn hoặc visual rhythm.
---

# Marquee

Marquee là pattern dễ lạm dụng. Dùng nó như nhịp thị giác phụ, không dùng để chứa thông tin bắt buộc phải đọc.

## Khi Dùng

- Logo strip hoặc partner strip.
- Tag/keyword rail.
- Announcement ngắn có thể lặp.
- Visual rhythm trong landing page.
- Showcase item không yêu cầu đọc từng mục.

## Motion Rules

- Tốc độ chậm và đều.
- Loop liền mạch, không giật ở điểm nối.
- Pause on hover/focus nếu item có thể tương tác.
- Tôn trọng `prefers-reduced-motion`.
- Không chạy nhiều marquee khác hướng trong cùng viewport.

## Content

- Item ngắn, có width ổn định.
- Logo cần cùng chiều cao optical.
- Text không quá dài.
- Không đặt CTA chính trong marquee.
- Nếu item clickable, hit target rõ.

## Implementation Notes

- Duplicate content để loop mượt.
- Dùng mask/fade cạnh rất tiết chế nếu cần.
- Tránh animation gây layout/reflow liên tục.
- Mobile giảm tốc hoặc chuyển thành static wrap nếu quá chật.

## Checklist

- Marquee không chứa thông tin thiết yếu duy nhất.
- Loop không bị gap.
- Motion không gây khó chịu.
- Item vẫn đọc được ở tốc độ hiện tại.
- Reduced motion path hiển thị nội dung tĩnh.
