---
name: textarea
description: Hướng dẫn frontend cho textarea, multiline input, comment box, message field, auto-resize, character count, max length và validation. Dùng khi cần nhập nội dung dài nhiều dòng.
---

# Textarea

Textarea dùng cho nội dung dài hơn một dòng. Nó cần đủ không gian để viết và phản hồi rõ khi vượt giới hạn.

## Khi Dùng

- Comment, message, bio, note, description.
- Nội dung người dùng cần chỉnh sửa nhiều dòng.
- Form cần nhập mô tả tự do.

## Behavior

- Có min height hợp lý, thường 3-5 dòng.
- Auto-resize nếu nội dung dài và không làm page nhảy quá mạnh.
- Character count khi có giới hạn.
- Max length rõ nếu server giới hạn.
- Preserve line breaks khi submit.

## States

- Focus, filled, disabled, readonly.
- Error khi thiếu nội dung hoặc vượt giới hạn.
- Loading/saving khi autosave.
- Empty state nếu dùng trong editor-like UI.

## Accessibility

- Label liên kết với textarea.
- Helper và error dùng `aria-describedby`.
- Count không gây spam screen reader.
- Keyboard không bị intercept vô lý.

## Checklist

- Người dùng thấy đủ nội dung đang viết.
- Mobile keyboard không che field quan trọng.
- Resize handle không phá layout nếu browser hiển thị.
- Error message nói cách sửa.
- Autosave không làm mất nội dung.
