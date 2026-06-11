---
name: rich-text-editor
description: Hướng dẫn frontend cho rich text editor, toolbar editor, markdown-like editor, formatting controls, mention/link/image insertion và editor states. Dùng khi người dùng cần nhập nội dung có định dạng.
---

# Rich Text Editor

Rich text editor là bề mặt nhập liệu phức tạp. Nó cần toolbar rõ, selection behavior ổn và dữ liệu lưu an toàn.

## Khi Dùng

- Article, note, documentation, comment nâng cao.
- Email composer.
- CMS content block.
- Message có formatting, mentions hoặc attachments.
- Markdown/preview editor.

## Toolbar

- Dùng icon quen thuộc cho bold, italic, link, list, quote.
- Group command theo loại.
- Active formatting state rõ.
- Disable command không dùng được trong context hiện tại.
- Tooltip cho icon ít quen thuộc.

## Editor Behavior

- Placeholder không thay label nếu editor là field chính.
- Autosave hoặc dirty state nếu nội dung dài.
- Paste handling sạch formatting rác.
- Link/image insert có validation.
- Undo/redo không bị phá bởi custom commands.

## Accessibility

- Toolbar keyboard-accessible.
- Editor có label rõ.
- Formatting state không chỉ dựa vào màu.
- Focus order giữa editor và toolbar hợp lý.

## Checklist

- Nội dung không mất khi submit fail.
- Empty, loading, error và readonly state rõ.
- Mobile toolbar không che vùng nhập.
- Output format an toàn với XSS.
- Character/word count nếu domain cần.
