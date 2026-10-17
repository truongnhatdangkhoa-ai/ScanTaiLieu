# Scan Tài Liệu — App Android (APK + AAB) build bằng GitHub

Chụp hoặc chọn ảnh/PDF → tự tìm và cắt trang giấy, khử bóng, làm trắng nền → xuất PDF / JPG / ZIP.
Mọi xử lý chạy trên máy, **không gọi mạng**, không đăng nhập, không quảng cáo.

## Thiết lập 1 lần
1. Tạo repo mới trên GitHub, upload toàn bộ thư mục này (giữ nguyên thư mục `.github/`), nhánh `main`.
2. **Settings → Pages → Source: GitHub Actions**. Email liên hệ trong `web/privacy.html` đã điền sẵn (`truongnhatdangkhoa@gmail.com`). Push lên GitHub → vào tab Actions chạy "Đăng trang chính sách quyền riêng tư". Link dán vào Play Console: `https://<tên-github>.github.io/<tên-repo>/privacy.html`
3. **Actions → "Bước 1 (làm 1 lần): Tạo khóa ký app" → Run workflow.** Tải artifact `khoa-ky-app-GIU-BI-MAT`, rồi vào **Settings → Secrets and variables → Actions** tạo 4 secret: `KEYSTORE_BASE64` (nội dung `KEYSTORE_BASE64.txt`), `KEYSTORE_PASSWORD`, `KEY_PASSWORD`, `KEY_ALIAS` (xem `secrets.txt`).
   **Cất file `release.jks` ở nơi an toàn** — mất khóa thì không cập nhật được app trên Google Play.
4. **Actions → "Bước 2: Build APK + AAB" → Run workflow.** Xong tải `ScanTaiLieu.apk` (cài thẳng vào máy để thử) và `ScanTaiLieu.aab` (đưa lên Google Play) ở mục Artifacts. Chưa có secrets thì chỉ ra APK debug để thử.

Xem `PLAY-CHECKLIST.md` để đưa app lên Google Play.

## Số phiên bản
- Hiện tại: **1.1** (thêm song ngữ Việt–English). Tên phiên bản hiển thị là `1.1.<số lần chạy workflow>`; **versionCode** (số Google Play dùng để biết bản nào mới hơn) = số lần chạy workflow nên tự tăng mỗi lần build.
- Muốn lên bản lớn (ví dụ 1.2 hay 2.0): sửa `VERSION_NAME` trong `.github/workflows/android.yml` (và `version` trong `package.json`, `web/version.json` cho đồng bộ), rồi chạy lại Bước 2. Mỗi bản tải lên Play phải có versionCode lớn hơn bản trước.

## Cấu trúc
- `web/` — toàn bộ giao diện app: `index.html`, `css/app-mobile.css` (khung điện thoại, Sáng/Tối, bảng Cài đặt), `css/scan-tai-lieu.css`, `js/scan-tai-lieu.js` (lõi xử lý ảnh + giao diện + cầu nối Android), `js/i18n.js` (dịch Việt ⇄ English), `js/settings.js` (chọn ngôn ngữ), `privacy.html` (song ngữ).
- `web/js/lib/` — pdf.js, jsPDF, JSZip: **tự chép từ npm khi build** (`scripts/copy-libs.js`), không nằm trong git.
- `capacitor.config.template.json` — `appId` (`com.scantailieu.app`) và tên app. **appId phải duy nhất trên Google Play và không đổi được sau khi đã đăng**; muốn đổi thì sửa ở đây trước khi tải bản đầu lên.
- `scripts/patch-android.js` — thêm quyền Camera, ép targetSdk 36, màu nền Sáng/Tối, ký bản release, đặt versionCode (tự tăng theo số lần chạy workflow).
- `assets/` — icon + màn chờ (1024 / 2732 px). `web/icons/` — icon web. `brand/logo-scan-tai-lieu.svg` — logo gốc (vector).
- `play-store/` — icon 512, ảnh bìa 1024×500, 5 ảnh chụp màn hình 1080×2160, nội dung mô tả cửa hàng.

## Logo & icon
Logo do mình tự thiết kế bằng hình học thuần (tờ giấy có góc gấp + khung quét 4 góc + tia quét), **không dùng ảnh, biểu tượng hay phông chữ của bên thứ ba** nên không dính bản quyền hình ảnh. Muốn đổi: thay 3 file `assets/icon-only.png`, `icon-foreground.png`, `icon-background.png` (1024×1024) rồi chạy lại Bước 2; icon web ở `web/icons/`.

## Song ngữ Tiếng Việt / English
- Bản gốc chỉ có tiếng Việt, nên mình đã thêm lớp dịch `js/i18n.js` (cùng cách làm của app mẫu QRManager). Bấm nút **🌐 VI/EN** trên thanh tiêu đề → **Cài đặt → Ngôn ngữ**; đổi ngay không cần mở lại app và được nhớ cho lần sau.
- Lần đầu mở: máy để tiếng Việt → giao diện tiếng Việt, ngôn ngữ khác → English.
- Dịch cả nút, gợi ý, thông báo, hộp thoại xác nhận và các câu có số (số trang, dung lượng…). Tên tài liệu và nội dung bạn nhập không bị dịch.
- **Thêm/sửa câu chữ:** viết câu tiếng Việt vào mã như cũ, rồi thêm cặp `"câu Việt": "English"` vào bảng `D` đầu file `js/i18n.js` (câu có chèn số thì thêm quy tắc vào bảng `R`). Câu chưa có bản dịch sẽ hiện nguyên tiếng Việt.
- `privacy.html` có sẵn nút chuyển Tiếng Việt / English. Nội dung cửa hàng: `play-store/listing-vi.md` và `play-store/listing-en.md`; ảnh chụp màn hình: `screenshots/` (Việt) và `screenshots-en/` (English).

## Đã chỉnh cho điện thoại
- Màn hình tràn viền (tai thỏ, thanh điều hướng): vùng an toàn qua `env(safe-area-inset-*)`.
- Sáng/Tối theo hệ thống; nút ≥ 44 px; ô nhập ≥ 16 px (không bị tự phóng to).
- Nút Back của Android đóng màn camera / màn chỉnh 4 góc trước, rồi mới thoát app.
- Lưu file: tạo file → mở hộp thoại Chia sẻ của Android (chọn "Lưu vào Tệp", Zalo, Email…). Không xin quyền đọc/ghi bộ nhớ.
- Trang đang làm dở tự lưu nháp; tắt/mở lại app vẫn còn.

## Thử trước khi gửi lên Play
Cài `ScanTaiLieu.apk` (bản ký) lên điện thoại thật và thử: Chụp (cấp quyền camera) · chọn ảnh · chọn PDF nhiều trang · Xuất PDF · Chia sẻ PDF · Lưu vào máy rồi mở lại · nút Back khi đang ở camera · giao diện Sáng/Tối.
