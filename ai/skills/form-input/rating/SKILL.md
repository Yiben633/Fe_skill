---
name: rating
description: Hướng dẫn frontend cho rating input, star rating, score picker, feedback rating, NPS-like scale và review score. Dùng khi người dùng cần đánh giá bằng điểm, sao hoặc mức hài lòng.
---

# Rating

Rating input nên rõ thang điểm và dễ sửa lựa chọn. Đừng dùng icon đẹp nếu người dùng không hiểu điểm đó nghĩa là gì.

## Khi Dùng

- Review sản phẩm hoặc dịch vụ.
- Feedback sau task.
- Satisfaction score.
- Quality rating.
- NPS-like quick score.

## Pattern

- Star rating 1-5.
- Numeric scale 0-10.
- Emoji/mood rating nếu brand phù hợp.
- Read-only rating display.
- Half-step rating nếu domain cần.

## Behavior

- Hover preview nhưng click mới commit.
- Keyboard chọn được điểm.
- Clear rating nếu optional.
- Label thang điểm đầu/cuối nếu không hiển nhiên.
- Read-only state khác input state.

## Accessibility

- Radio group thường phù hợp cho rating input.
- Mỗi option có label rõ, ví dụ "4 sao".
- Không chỉ dùng màu/icon để truyền nghĩa.
- Focus visible trên lựa chọn hiện tại.

## Checklist

- User hiểu thang điểm.
- Mobile touch target đủ lớn.
- Rating đã chọn nhìn rõ.
- Error state nếu required.
- Read-only rating không bị nhầm là có thể chỉnh.
