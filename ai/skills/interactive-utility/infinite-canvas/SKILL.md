---
name: infinite-canvas
description: Hướng dẫn frontend cho infinite canvas, pan zoom canvas, whiteboard, node editor, mind map, diagram canvas, viewport controls và spatial UI. Dùng khi cần xây dựng bề mặt làm việc có thể kéo, zoom và đặt object tự do.
---

# Infinite Canvas

Infinite canvas là một workspace không gian. Nó cần ưu tiên điều hướng, hiệu năng và cảm giác kiểm soát hơn trang trí.

## Khi Dùng

- Whiteboard, diagram, mind map.
- Node editor hoặc workflow builder.
- Design/canvas tool.
- Map-like workspace.
- Spatial planning UI.

## Core Controls

- Pan bằng drag/space hoặc trackpad.
- Zoom bằng wheel/pinch và controls.
- Fit to screen.
- Minimap nếu canvas lớn.
- Selection, multi-select và bounding box.

## Behavior

- Giới hạn zoom min/max.
- Preserve viewport state khi quay lại.
- Object hit testing chính xác.
- Snap/grid chỉ dùng khi giúp thao tác.
- Keyboard shortcuts có thể discoverable ngoài UI chính.

## Performance

- Virtualize hoặc cull objects ngoài viewport.
- Dùng canvas/SVG/DOM tùy số lượng object.
- Avoid rerender toàn canvas khi drag.
- Debounce expensive layout.

## Checklist

- User không bị lạc trong canvas.
- Pan/zoom mượt trên mobile/desktop.
- Selection state rõ.
- Empty canvas có onboarding nhẹ.
- Undo/redo và save state được cân nhắc nếu canvas chỉnh sửa được.
