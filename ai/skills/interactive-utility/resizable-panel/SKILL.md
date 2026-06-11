---
name: resizable-panel
description: Hướng dẫn frontend cho resizable panel, split pane, draggable splitter, sidebar resize, editor panes, layout persistence và min/max panel constraints. Dùng khi cần cho người dùng thay đổi kích thước vùng làm việc.
---

# Resizable Panel

Resizable panel giúp người dùng tự điều chỉnh workspace. Nó cần constraint rõ để không làm layout vỡ.

## Khi Dùng

- Editor + preview.
- Sidebar có thể resize.
- Data table + detail panel.
- Multi-pane workspace.
- Dashboard/tool có vùng làm việc cá nhân hóa.

## Behavior

- Splitter/handle dễ nhìn khi hover/focus.
- Min/max size cho từng panel.
- Double click có thể reset size nếu hữu ích.
- Persist layout preference.
- Collapse/expand nếu panel phụ có thể ẩn.

## Accessibility

- Resize handle keyboard-accessible nếu pattern yêu cầu.
- Handle có label rõ.
- Focus visible trên splitter.
- Không chỉ dựa vào drag chuột.

## Layout Rules

- Không để panel co nhỏ làm text overflow nặng.
- Mobile chuyển thành tabs/drawer/stack thay vì resize.
- Resize không gây rerender tốn kém quá mức.
- Content trong panel có overflow strategy.

## Checklist

- Min/max constraints hợp lý.
- Layout preference được lưu nếu cần.
- Mobile fallback rõ.
- Resize mượt.
- Panel content không bị mất access khi co nhỏ.
