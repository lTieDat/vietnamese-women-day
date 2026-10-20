# Một lá thư cho em — thiệp 20/10

Thiệp tương tác dạng phong thư, viết bằng HTML, CSS và JavaScript thuần.

## Gửi thiệp

Sau khi bật GitHub Pages, dùng đường dẫn:

`https://ltiedat.github.io/vietnamese-women-day/?name=T%C3%AAn%20ng%C6%B0%E1%BB%9Di%20nh%E1%BA%ADn`

Thay phần sau `name=` bằng tên người nhận đã được URL encode. Ví dụ `?name=Lan`. Trang cũng nhận `?ten=Lan` hoặc `?to=Lan`. Nếu không có tên, thiệp sẽ xưng hô là “em”. Tên chỉ hiển thị trong trình duyệt, không được gửi tới máy chủ riêng.

## Xem thử tại máy

Chạy `python3 -m http.server 8000` trong thư mục này, rồi mở `http://localhost:8000/?name=Lan`.

## Triển khai

Workflow trong `.github/workflows/deploy.yml` đăng nội dung nhánh `main` lên GitHub Pages sau mỗi lần đẩy mã. Trong Settings → Pages của repository, chọn **GitHub Actions** làm nguồn xuất bản nếu chưa được bật.
