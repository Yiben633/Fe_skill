---
name: stepper
description: Hướng dẫn frontend cho stepper, wizard flow, checkout steps, onboarding progress, multi-step form, progress indicator và validation theo bước. Dùng khi xây dựng flow nhiều bước có thứ tự, trạng thái complete/current/error và điều hướng next/back.
---

# Stepper

Stepper giúp chia flow dài thành các bước rõ ràng. Nó phải cho người dùng biết đang ở đâu, còn bao nhiêu bước và bước nào cần sửa.

## Khi Dùng

- Checkout hoặc booking flow.
- Onboarding nhiều bước.
- Multi-step form có validation.
- Setup wizard hoặc import flow.
- Process cần trạng thái current, complete, error.

## Thành Phần

- Step label ngắn.
- Step number hoặc icon trạng thái.
- Current step nổi bật.
- Completed step có dấu hiệu rõ.
- Error step chỉ ra nơi cần sửa.
- Next, back và cancel/save draft nếu flow dài.

## Behavior

- Next chỉ đi tiếp khi bước hiện tại hợp lệ hoặc có cơ chế skip rõ.
- Back không làm mất dữ liệu đã nhập.
- Click step đã hoàn tất có thể quay lại nếu business rule cho phép.
- Không cho jump tới bước chưa hợp lệ nếu flow tuyến tính.
- Persist progress khi flow dài hoặc dễ bị gián đoạn.

## Layout

- Horizontal stepper tốt cho 3-5 bước ngắn.
- Vertical stepper tốt cho nhiều bước hoặc label dài.
- Mobile có thể dùng progress text: `Bước 2/5`.
- Form content không bị đẩy quá thấp bởi stepper quá cao.

## Accessibility

- Current step có `aria-current="step"` khi phù hợp.
- Error step có text giải thích, không chỉ dùng màu.
- Button next/back có label rõ.
- Focus chuyển tới heading của bước mới sau khi đổi bước.

## Checklist

- Người dùng hiểu tiến độ trong 3 giây.
- State complete/current/error phân biệt rõ.
- Dữ liệu không mất khi back.
- Mobile không vỡ layout với label dài.
- Validation message gắn đúng field và đúng step.
