---
name: dark-mode-toggle
description: Hướng dẫn frontend cho dark mode toggle, theme switcher, light/dark/system mode, persisted theme preference và accessible theme control. Dùng khi cần cho phép người dùng đổi theme hoặc tuân theo system preference.
---

# Dark Mode Toggle

Theme toggle phải rõ trạng thái hiện tại và không gây flash sai theme khi load.

## Khi Dùng

- App hoặc website hỗ trợ light/dark.
- User settings có theme preference.
- Dashboard/tool dùng lâu cần giảm mỏi mắt.
- Brand có nhiều theme mode.

## States

- Light.
- Dark.
- System.
- Loading/initializing nếu theme cần hydrate.
- Disabled nếu theme bị lock theo workspace/policy.

## Behavior

- Đọc system preference khi chưa có user preference.
- Persist lựa chọn bằng storage/cookie/server profile.
- Tránh flash theme sai lúc load.
- Toggle có icon và label rõ.
- Nếu có 3 mode, dùng menu/segmented control thay vì switch nhị phân.

## Accessibility

- Button có accessible label nói mode hiện tại hoặc action.
- Không chỉ dùng icon mặt trời/mặt trăng nếu dễ nhầm.
- Focus state rõ ở cả light và dark.
- Contrast token được kiểm tra cho cả hai theme.

## Checklist

- Theme không flash sai khi refresh.
- System mode hoạt động.
- Preference persist.
- Icon/label không mơ hồ.
- Tất cả UI state có token màu cho light/dark.
