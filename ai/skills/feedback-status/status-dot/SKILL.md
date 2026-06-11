---
name: status-dot
description: Hướng dẫn frontend cho status dot, presence indicator, health indicator, live dot, availability dot và compact state signal. Dùng khi cần biểu thị trạng thái nhỏ như online, offline, active, warning, error hoặc live.
---

# Status Dot

Status dot là tín hiệu rất nhỏ, nên mapping màu và label phải nhất quán. Không để dot là nguồn nghĩa duy nhất nếu trạng thái quan trọng.

## Khi Dùng

- Online/offline/away presence.
- System health: healthy, degraded, down.
- Live/recording/active indicator.
- Item status trong list/table.
- Sync state hoặc connection state.

## Variants

- Neutral, success, warning, danger.
- Pulsing live dot dùng rất tiết chế.
- Dot kèm label cho trạng thái quan trọng.
- Dot-only chỉ dùng khi ngữ cảnh đã rất rõ.

## Layout

- Size thường 6-10px.
- Có ring/background khi nằm trên avatar hoặc ảnh.
- Không quá sát text.
- Dot trong table phải căn baseline ổn.
- Tooltip có thể bổ sung chi tiết trạng thái.

## Accessibility

- Nếu dot truyền nghĩa, cần text label hoặc `aria-label`.
- Không chỉ dùng màu để phân biệt trạng thái quan trọng.
- Motion pulse tôn trọng `prefers-reduced-motion`.
- Contrast đủ trên nền phức tạp.

## Checklist

- Mapping màu nhất quán toàn app.
- Dot không bị lẫn với decoration.
- Trạng thái quan trọng có text đi kèm.
- Pulse không gây mất tập trung.
- Tooltip/label giải thích khi state không rõ.
