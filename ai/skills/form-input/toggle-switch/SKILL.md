---
name: toggle-switch
description: Hướng dẫn frontend cho toggle, switch, binary setting, on/off control, settings switch và instant boolean action. Dùng khi cần bật/tắt một trạng thái có hiệu lực rõ.
---

# Toggle Switch

Switch phù hợp với trạng thái bật/tắt có hiệu lực rõ. Nếu user cần submit form sau cùng, checkbox thường dễ hiểu hơn.

## Khi Dùng

- Setting bật/tắt.
- Feature flag cá nhân.
- Notification preference.
- Visibility hoặc availability state.
- Control có hiệu lực ngay hoặc sau confirm rõ.

## Behavior

- State on/off phải rõ bằng cả vị trí và label.
- Nếu thay đổi có side effect lớn, cần confirm hoặc mô tả.
- Loading state khi update async.
- Rollback nếu server update fail.
- Disabled state cần lý do nếu không rõ.

## Labeling

- Label nói điều gì được bật, không chỉ "Enable".
- Có thể thêm helper text cho hệ quả.
- Avoid label đảo nghĩa gây nhầm.
- Nếu cần Yes/No trong form dài, radio có thể rõ hơn.

## Accessibility

- Dùng button/switch semantics phù hợp.
- Có `aria-checked`.
- Keyboard toggle bằng space.
- Focus visible rõ.

## Checklist

- User hiểu trạng thái hiện tại.
- User hiểu thay đổi có hiệu lực khi nào.
- Async update không làm mất state.
- Mobile touch target đủ lớn.
- Không dùng switch cho lựa chọn nhiều trạng thái.
