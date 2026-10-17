// Tạo capacitor.config.json từ capacitor.config.template.json.
// Web nằm TRONG app (offline hoàn toàn, không phụ thuộc mạng) — đúng yêu cầu cho bản đưa lên Google Play.
const fs = require('fs');
const cfg = JSON.parse(fs.readFileSync('capacitor.config.template.json', 'utf8'));
cfg.server = { androidScheme: 'https' };
fs.writeFileSync('capacitor.config.json', JSON.stringify(cfg, null, 2));
console.log('Đã tạo capacitor.config.json — appId:', cfg.appId, '| web nằm trong app (offline).');
