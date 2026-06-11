---
name: drag-drop
description: Hướng dẫn frontend cho drag and drop, draggable items, sortable list, reorder grid, dropzone, drag handles và cross-list movement. Dùng khi cần kéo thả item để sắp xếp, di chuyển, upload hoặc cấu hình layout.
---

# Drag Drop

Drag and drop cần phản hồi rõ: kéo được gì, thả ở đâu và điều gì xảy ra sau khi thả.

## Khi Dùng

- Reorder list/grid.
- Kanban/card movement.
- File dropzone.
- Layout builder.
- Drag handles trong editor/dashboard.

## Behavior

- Có drag handle nếu toàn item cũng có click action.
- Drop target hiển thị rõ.
- Placeholder giữ layout khi item được kéo.
- Reorder có animation nhẹ.
- Optimistic update cần rollback nếu save fail.

## Accessibility

- Có keyboard alternative cho reorder/move.
- Announce vị trí mới khi reorder.
- Không phụ thuộc hoàn toàn vào drag gesture.
- Touch behavior được test riêng.

## States

- Draggable, dragging, drag over.
- Invalid drop.
- Disabled/locked item.
- Saving/error sau drop.

## Checklist

- User biết item nào kéo được.
- Drop target không mơ hồ.
- Layout không nhảy khó chịu.
- Mobile/touch dùng được hoặc có fallback.
- Data order persist sau refresh.
