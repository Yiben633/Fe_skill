---
name: parallax
description: Hướng dẫn frontend cho parallax section, scroll-linked depth, background parallax, layered motion và visual storytelling. Dùng khi cần tạo chiều sâu theo scroll mà vẫn giữ nội dung đọc được và performance ổn.
---

# Parallax

Parallax nên là lớp hỗ trợ thị giác, không phải điều kiện để hiểu nội dung. Dùng tiết chế để tạo chiều sâu và nhịp.

## Khi Dùng

- Hero hoặc editorial section có media mạnh.
- Product storytelling.
- Portfolio case study.
- Background depth rất nhẹ.
- Layered visual scene.

## Motion Rules

- Motion distance nhỏ, thường 8-40px.
- Foreground content đọc được ở mọi thời điểm.
- Không parallax text dài.
- Tránh nhiều layer chuyển động cùng lúc.
- Tôn trọng `prefers-reduced-motion`.

## Performance

- Ưu tiên transform, opacity.
- Tránh cập nhật layout properties khi scroll.
- Dùng requestAnimationFrame hoặc thư viện motion phù hợp.
- Kiểm tra mobile jank.

## Checklist

- Nội dung vẫn hiểu được khi tắt motion.
- Motion không làm chóng mặt.
- Text không bị lệch khỏi vùng đọc.
- Mobile có fallback hoặc motion giảm.
- Parallax không che CTA hoặc navigation.
