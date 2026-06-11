---
name: anti-slop-ui
description: Quy tắc chất lượng thiết kế frontend để tránh UI chung chung, cẩu thả, quá trang trí, hoặc thiếu nhất quán. Dùng khi xây dựng hoặc review bất kỳ page, component, animation, layout, landing page, dashboard, portfolio, hoặc giao diện trực quan nào.
---

# Anti-Slop UI

Xây dựng giao diện có chủ đích, dễ đọc và phù hợp với đúng sản phẩm đang làm.

## Quy Tắc Cốt Lõi

- Bắt đầu từ tác vụ thật của người dùng, không bắt đầu từ trang trí.
- Ưu tiên design system, spacing scale, typography và component pattern sẵn có nếu project đã có.
- Chọn bề mặt tiết chế, phân cấp rõ ràng và quy tắc layout có thể lặp lại.
- Tránh palette một màu đơn điệu. Kết hợp nền trung tính với 1-2 màu nhấn có ý nghĩa.
- Giữ border radius nhất quán. Dùng 8px hoặc nhỏ hơn trừ khi style sản phẩm đã có quy ước khác.
- Dùng icon cho hành động công cụ phổ biến; dùng label chữ cho lệnh cần rõ nghĩa.
- Không đặt card lồng trong card.
- Không dùng gradient blob, hình cầu ngẫu nhiên, hoặc background chỉ để tạo không khí.
- Giữ text nằm gọn trong container ở mọi viewport.
- Làm rõ các trạng thái tương tác: hover, focus, active, disabled, loading và selected.

## Checklist Layout

- Định nghĩa max-width cho nội dung cần đọc.
- Dùng gap của grid/flex thay vì margin thủ công giữa các sibling.
- Giữ nhịp section nhất quán.
- Với tool dày thông tin, ưu tiên khả năng scan trước khi trang trí.
- Chỉ dùng cỡ chữ hero cho hero thật sự.
- Trên mobile, tránh tràn ngang và text button bị ép.

## Checklist Thị Giác

- Chọn typography scale trước khi tinh màu.
- Dùng tương phản để tạo phân cấp, không chỉ dựa vào font size.
- Làm primary action nổi bật hơn secondary action.
- Tránh hình stock-like khi người dùng cần xem sản phẩm hoặc công việc thật.
- Giữ animation vừa đủ để hỗ trợ việc hiểu nội dung.

## Lượt Kiểm Cuối

Trước khi hoàn tất, scan UI ở mobile và desktop. Sửa overlap, text bị cắt, xuống dòng kỳ, spacing thiếu nhất quán và state chưa rõ.
