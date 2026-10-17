// Chép 3 thư viện chạy trong app từ node_modules sang web/js/lib/ (chạy sau `npm install`):
//   pdf.js 3.11.174 (đọc PDF) · jsPDF 2.5.1 (tạo PDF) · JSZip 3.10.1 (gói ZIP). Đều là bản chạy thẳng trong WebView, không cần mạng.
const fs = require('fs'), path = require('path');
const out = path.join('web', 'js', 'lib');
fs.mkdirSync(out, { recursive: true });
const jobs = [
  ['pdfjs-dist', 'build/pdf.min.js', 'pdf.min.js'],
  ['pdfjs-dist', 'build/pdf.worker.min.js', 'pdf.worker.min.js'],
  ['jspdf', 'dist/jspdf.umd.min.js', 'jspdf.umd.min.js'],
  ['jszip', 'dist/jszip.min.js', 'jszip.min.js']
];
let bad = 0;
for (const [pkg, rel, name] of jobs) {
  const src = path.join('node_modules', pkg, rel);
  if (!fs.existsSync(src)) { console.error('THIẾU:', src); bad++; continue; }
  fs.copyFileSync(src, path.join(out, name));
  console.log('OK  ', name, (fs.statSync(src).size / 1024).toFixed(0) + ' KB');
}
if (bad) { console.error('Thiếu thư viện — kiểm tra `npm install`.'); process.exit(1); }
