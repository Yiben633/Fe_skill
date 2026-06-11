---
name: command-palette
description: Hướng dẫn frontend cho command palette, command menu, global search, action launcher, keyboard shortcut launcher và searchable navigation. Dùng khi cần mở hộp tìm kiếm lệnh bằng phím tắt hoặc trigger để điều hướng và thực thi action nhanh.
---

# Command Palette

Command palette là lối tắt cho người dùng quen app. Nó cần search nhanh, kết quả rõ và thao tác keyboard thật tốt.

## Khi Dùng

- App có nhiều route, action hoặc resource.
- Power users cần thao tác nhanh bằng keyboard.
- Docs/editor/dashboard cần global search.
- Navigation và command có thể gom vào một launcher.

## Cấu Trúc

- Input search autofocus khi mở.
- Nhóm kết quả: pages, actions, records, settings.
- Empty state có gợi ý.
- Recent hoặc suggested commands nếu hữu ích.
- Shortcut hint cho command phổ biến.

## Behavior

- Mở bằng shortcut như `Cmd/Ctrl+K` và trigger button.
- Đóng bằng escape hoặc chọn command.
- Arrow keys điều hướng kết quả.
- Debounce search nếu query remote.
- Execute command không gây mất dữ liệu bất ngờ.

## Accessibility

- Modal/dialog semantics nếu overlay chặn nền.
- Input có label rõ.
- Active result được announce phù hợp.
- Keyboard flow không bị kẹt.
- Restore focus sau khi đóng.

## Checklist

- Search phản hồi nhanh.
- Kết quả có title và context đủ hiểu.
- Empty/loading/error states có đủ.
- Command destructive cần confirm.
- Mobile fallback dùng được, không chỉ desktop shortcut.
