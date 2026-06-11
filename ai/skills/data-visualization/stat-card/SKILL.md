---
name: stat-card
description: Hướng dẫn frontend cho stat card, KPI card, metric card, dashboard summary, trend card và số liệu nổi bật. Dùng khi cần hiển thị chỉ số, phần trăm, xu hướng, so sánh kỳ trước, trạng thái hoặc metric grid.
---

# Stat Card

Stat card phải giúp đọc số nhanh, hiểu ngữ cảnh và biết tín hiệu đó tốt hay xấu. Đừng chỉ phóng to con số; hãy cho nó một hệ phân cấp rõ.

## Thành Phần

- Label: tên chỉ số ngắn và cụ thể.
- Value: số chính, nổi bật nhất.
- Unit: %, ms, USD, users, orders hoặc đơn vị domain.
- Delta: thay đổi so với kỳ trước.
- Context: mốc so sánh như tuần trước, tháng trước, target hoặc baseline.
- Status: icon hoặc màu trend nếu cần.

## Layout

- Value nằm trên cùng hoặc trung tâm thị giác.
- Label không được cạnh tranh với value.
- Delta gần value để người dùng hiểu số đang tăng hay giảm.
- Grid nhiều stat card cần cùng chiều cao và baseline.
- Trên mobile, card có thể thành 1 cột hoặc 2 cột tùy độ dài value.

## Visual Rules

- Dùng màu trend nhất quán: positive, neutral, warning, negative.
- Không mặc định xanh là tốt nếu domain có nghĩa ngược, ví dụ chi phí tăng.
- Icon trend nên hỗ trợ màu, không thay thế text.
- Sparkline chỉ dùng khi có dữ liệu đủ nghĩa.
- Số cần format rõ: `12.4k`, `98.7%`, `1,240`, hoặc theo locale của app.

## States

- Loading: skeleton giữ cùng kích thước với value.
- Empty: giải thích ngắn, không để card trống.
- Error: cho biết metric không tải được.
- Selected/active: dùng khi card là filter hoặc drill-down.

## Checklist

- Người dùng hiểu metric trong 3 giây.
- Value không overflow ở mobile.
- Delta có ngữ cảnh so sánh.
- Màu trend không là tín hiệu duy nhất.
- Card grid không bị nhảy khi data đổi.
