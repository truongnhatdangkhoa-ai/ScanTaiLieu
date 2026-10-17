# Checklist đưa "Scan Tài Liệu" lên Google Play

## Trước khi build
- [ ] `appId` là `com.scantailieu.app` (file `capacitor.config.template.json`). Nếu Play báo đã có người dùng, đổi ở đó (chỉ một chỗ) **trước** khi tải bản đầu tiên.
- [ ] Email liên hệ đã điền sẵn trong `web/privacy.html` (`truongnhatdangkhoa@gmail.com`) → push → chạy workflow đăng trang chính sách → kiểm tra link mở được.
- [ ] Làm "Bước 1" (tạo khóa ký), lưu 4 secrets, **giữ `release.jks` an toàn**.
- [ ] Chạy "Bước 2" → lấy `ScanTaiLieu.aab`. versionCode tự tăng mỗi lần chạy.

## Đã xử lý trong code
- targetSdk/compileSdk **36** (script patch báo lỗi nếu thấp hơn).
- Chỉ xin quyền `CAMERA` (`required=false` nên máy không có camera vẫn cài được). Không xin quyền bộ nhớ, vị trí, micro, danh bạ.
- Web đóng gói trong app, chạy offline; không gọi mạng.

## Play Console — khai báo
- **Chính sách quyền riêng tư:** link `privacy.html` ở trên.
- **Data safety:** "Không thu thập dữ liệu", "Không chia sẻ dữ liệu". Dữ liệu chỉ nằm trên máy; không có SDK bên thứ ba.
- **Quyền Camera:** mục đích "chụp tài liệu"; xử lý trên máy, không tải lên.
- **Quảng cáo:** Không. **Cần đăng nhập:** Không. **Đối tượng:** không nhắm đến trẻ em.
- **Danh mục:** Công cụ (Tools) hoặc Năng suất (Productivity). **Phân loại nội dung:** Tiện ích, không nội dung nhạy cảm.
- **Hình:** icon `play-store/icon-512.png`, ảnh bìa `play-store/feature-graphic-1024x500.png`, ảnh chụp `play-store/screenshots/` (chụp từ bản web, nên thay vài ảnh bằng ảnh chụp trên máy thật sau khi cài APK). Mô tả: `play-store/listing-vi.md` (mặc định) và `play-store/listing-en.md` — thêm ngôn ngữ **English** ở mục *Bản dịch* của trang cửa hàng, dùng ảnh trong `screenshots-en/`.
- **Tài khoản cá nhân tạo sau 11/2023:** phải kiểm thử kín với ít nhất 12 người trong 14 ngày liên tục trước khi xin lên bản chính thức.
