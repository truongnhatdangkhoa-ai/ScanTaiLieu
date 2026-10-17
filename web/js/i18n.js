/* i18n.js — Ngôn ngữ giao diện: Tiếng Việt (gốc) và English.
   Mã nguồn viết bằng tiếng Việt; khi chọn English, lớp này dịch chữ hiển thị (nội dung văn bản, placeholder, title, aria-label,
   alert/confirm) và tự dịch các phần giao diện sinh động về sau. Tên tài liệu và nội dung người dùng nhập không bị dịch.
   Mặc định theo ngôn ngữ điện thoại (tiếng Việt → Việt, còn lại → English); lựa chọn trong Cài đặt được nhớ lại. */
(function(root){
'use strict';
var KEY='scan-tai-lieu-lang',lang='vi';
try{var s=localStorage.getItem(KEY);if(s==='en'||s==='vi')lang=s;else lang=/^vi/i.test(navigator.language||'')?'vi':'en';}catch(e){}
var D={
"Scan tài liệu":"Scan documents",
"Chụp tài liệu thông minh":"Smart document capture",
"đóng":"close",
"Màu":"Color",
"Chế độ tài liệu màu":"Color document mode",
"Tài liệu màu: khử bóng, làm trắng nền, giữ màu con dấu đỏ / bút xanh / hình ảnh.":"Color documents: removes shadows, whitens the background, keeps red stamps / blue ink / pictures.",
"Trắng đen":"Black & white",
"Chế độ trắng đen để photo (ưu tiên)":"Black & white mode for copying (recommended)",
"Ưu tiên để in / photo: nền trắng tuyệt đối, chữ đen đậm, tiết kiệm mực, file PDF nhỏ.":"Best for printing / copying: pure white background, bold black text, saves ink, small PDF.",
"Màu mực":"Ink color",
"Chế độ giữ màu mực":"Keep ink color mode",
"Nền trắng tuyệt đối, chữ giữ ĐÚNG MÀU bút (đen / xanh / đỏ) và đậm, rõ nét — hợp phiếu viết nhiều màu mực.":"Pure white background, text keeps its EXACT pen color (black / blue / red), bold and sharp — good for forms written in several inks.",
"Chữ tay":"Handwriting",
"Chế độ giữ nét chữ viết tay":"Keep handwriting mode",
"Vở / giấy ghi tay: giữ nét bút (cả nét mờ, bút chì), nền trắng, tự xóa ô li để chữ nổi rõ.":"Notebooks / handwritten notes: keeps pen strokes (even faint ones and pencil), white background, removes ruled lines so the writing stands out.",
"Tùy chỉnh":"Custom",
"Chế độ tùy chỉnh":"Custom mode",
"Tự chọn kiểu (Gốc / Màu / Xám / Đen trắng) và chỉnh từng thanh trượt.":"Choose the style yourself (Original / Color / Gray / Black & white) and adjust each slider.",
"Gốc":"Original",
"Xám":"Gray",
"Đen trắng":"Black & white",
"Không đọc được ảnh này (định dạng không hỗ trợ?).":"Couldn't read this image (unsupported format?).",
"Thiếu thư viện đọc PDF (pdf.js).":"The PDF reading library (pdf.js) is missing.",
"Không tạo được ảnh.":"Couldn't create the image.",
"Thiếu thư viện tạo PDF (jsPDF).":"The PDF creation library (jsPDF) is missing.",
"Máy này không hỗ trợ lưu trong app.":"This device doesn't support saving inside the app.",
"Không mở được bộ nhớ của app.":"Couldn't open the app's storage.",
"Không ghi được vào bộ nhớ của app (đầy?)":"Couldn't write to the app's storage (full?)",
"Lưu":"Save",
"Đã lưu":"Saved",
"Đã tạo":"Created",
"Chụp / chọn ảnh hoặc PDF → tự cắt trang, khử bóng, làm trắng nền → lưu PDF để in":"Capture or pick a photo or PDF → auto-crop the page, remove shadows, whiten the background → save a PDF to print",
"Chụp":"Capture",
"Chụp tài liệu":"Capture document",
"Chụp (Space)":"Capture (Space)",
"Ảnh":"Photos",
"Chưa có trang nào":"No pages yet",
"Bấm":"Tap",
", kéo 4 chấm vào 4 góc tờ giấy rồi bấm nút tròn để chụp (chỉ phần trong 4 chấm được giữ). Hoặc chọn ảnh, file PDF có sẵn. App khử bóng và làm trắng nền.":", drag the 4 dots onto the 4 corners of the sheet, then tap the round button to shoot (only the area inside the 4 dots is kept). Or pick an existing photo or PDF. The app removes shadows and whitens the background.",
"Ảnh được xử lý ngay trên máy, không gửi đi đâu. Nhiều ảnh = nhiều trang trong cùng 1 file PDF. Chỉnh xong bấm":"Photos are processed on this device and never sent anywhere. Several photos = several pages in one PDF file. When done, tap",
"để cất vào máy — muốn sửa lại thì chọn ở danh sách bên dưới.":"to store it on this device — to edit it again, pick it from the list below.",
"Xem trang trước (←)":"Previous page (←)",
"Xem trang trước":"Previous page",
"Xem trang sau (→)":"Next page (→)",
"Xem trang sau":"Next page",
"Xoay trái":"Rotate left",
"Xoay phải (R)":"Rotate right (R)",
"Xoay phải":"Rotate right",
"Giữ để xem ảnh gốc":"Hold to see the original photo",
"Chỉnh 4 góc trang giấy":"Adjust the 4 corners of the page",
"Thu nhỏ (−)":"Zoom out (−)",
"Thu nhỏ":"Zoom out",
"Vừa khung (0) · bấm đúp vào ảnh để phóng to / thu về":"Fit to frame (0) · double-tap the image to zoom in / out",
"Vừa khung":"Fit to frame",
"Phóng to (+) · lăn chuột, kéo để di chuyển":"Zoom in (+) · pinch to zoom, drag to move",
"Phóng to":"Zoom in",
"Chuyển trang này lên trước":"Move this page earlier",
"Chuyển trang lên trước":"Move page earlier",
"Chuyển trang này ra sau":"Move this page later",
"Chuyển trang ra sau":"Move page later",
"Xóa trang này (Delete)":"Delete this page",
"Xóa trang":"Delete page",
"Chế độ":"Mode",
"Khử bóng":"Shadow removal",
"Độ trắng nền":"Background whiteness",
"Độ đậm chữ":"Text boldness",
"Xóa ô li / dòng kẻ":"Remove ruled lines",
"(giữ nét chữ cắt ngang)":"(keeps strokes that cross the lines)",
"Áp dụng cho mọi trang":"Apply to all pages",
"Mặc định":"Default",
"Cắt trang giấy":"Crop the page",
"Tự nhận 4 cạnh, nắn thẳng góc":"Auto-detect the 4 edges and straighten",
"Chỉnh 4 góc":"Adjust corners",
"Tự tìm lại":"Detect again",
"Lưu & xuất":"Save & export",
"Tên tài liệu":"Document name",
"Lưu vào máy":"Save to device",
"Lưu thay đổi":"Save changes",
"Lưu xong tài liệu được cất trong máy và màn hình về trang đầu; cần sửa thì chọn lại ở danh sách.":"After saving, the document is kept on this device and the screen returns to the start; to edit it again, pick it from the list.",
"Xuất file PDF / ảnh":"Export PDF / image file",
"Khổ A4":"A4 size",
"Theo ảnh":"Match photo",
"Xuất PDF":"Export PDF",
"Chia sẻ PDF (Zalo, Email…)":"Share PDF (Zalo, Email…)",
"Xuất trang này thành ảnh JPG":"Export this page as a JPG image",
"Tài liệu mới":"New document",
"Xuất tất cả trang thành ảnh JPG (ZIP)":"Export all pages as JPG images (ZIP)",
"Tách mỗi trang thành 1 file PDF (ZIP)":"Split each page into its own PDF file (ZIP)",
"Đang xử lý…":"Processing…",
"Chưa nhận ra tờ giấy — bấm \"Chỉnh 4 góc\" rồi kéo 4 chấm vào 4 góc tờ giấy.":"Couldn't find the sheet — tap \"Adjust corners\", then drag the 4 dots onto the 4 corners of the sheet.",
"Đang đọc…":"Reading…",
"Đang đọc ảnh":"Reading photo",
"— đã cắt theo 4 cạnh":"— cropped to the 4 edges",
"— đang tắt":"— turned off",
"— chưa có khung cắt: bấm \"Chỉnh 4 góc\"":"— no crop frame yet: tap \"Adjust corners\"",
"Thêm trang":"Add page",
"Thêm":"Add",
"Mở để xem / chỉnh sửa":"Open to view / edit",
"Xóa tài liệu này khỏi máy":"Delete this document from the device",
"Xóa tài liệu":"Delete document",
"Đã lưu gần đây":"Recently saved",
"Xóa danh sách":"Clear list",
"Kéo 4 chấm vào 4 góc trang giấy":"Drag the 4 dots onto the 4 corners of the page",
"Phần ngoài khung sẽ bị cắt bỏ, trang được nắn thẳng góc.":"Everything outside the frame is cut off and the page is straightened.",
"Hủy":"Cancel",
"Tự tìm":"Auto",
"Cả ảnh":"Whole photo",
"Xong":"Done",
"Đóng":"Close",
"Đèn":"Torch",
"Không tìm thấy rìa trang giấy — hãy kéo tay.":"Couldn't find the page edges — please drag the dots by hand.",
"Máy này không mở được camera trong app.":"This device can't open the camera in the app.",
"Đang mở camera…":"Opening camera…",
"Chụp lại":"Retake",
"Kéo 4 chấm vào 4 góc tờ giấy, rồi bấm nút tròn để chụp":"Drag the 4 dots onto the 4 corners of the sheet, then tap the round button to shoot",
"Tự dò: Bật":"Auto-detect: On",
"Tự dò: Tắt":"Auto-detect: Off",
"Tự dò":"Auto-detect",
"Đã bám 4 góc tờ giấy — bấm nút tròn để chụp":"Locked onto the 4 corners — tap the round button to shoot",
"Chưa thấy rìa tờ giấy — hãy kéo 4 chấm bằng tay (hoặc đặt giấy lên nền tối)":"Can't see the sheet edges — drag the 4 dots by hand (or put the paper on a dark surface)",
"Chưa được cấp quyền camera. Hãy cho phép camera cho app (Cài đặt › Ứng dụng › Quyền) rồi mở lại.":"Camera permission hasn't been granted. Allow the camera for the app (Settings › Apps › Permissions) and open it again.",
"Không tìm thấy camera trên máy này.":"No camera found on this device.",
"Không mở được camera":"Couldn't open the camera",
"Thông tin ứng dụng":"App info",
"Chưa được cấp quyền camera.\n\nMở Cài đặt của app để bật? (Quyền › Camera › Cho phép)":"Camera permission hasn't been granted.\n\nOpen the app's settings to turn it on? (Permissions › Camera › Allow)",
"Không mở được Cài đặt. Vào Cài đặt › Ứng dụng › Scan Tài Liệu › Quyền.":"Couldn't open Settings. Go to Settings › Apps › Scan Tài Liệu › Permissions.",
" Bạn vẫn có thể bấm \"Ảnh\" để chọn ảnh đã chụp.":" You can still tap \"Photos\" to pick an existing photo.",
"Máy không bật được đèn flash.":"This device couldn't turn on the flashlight.",
"Đang chụp…":"Capturing…",
"Xem trước trang vừa chụp":"Preview of the page just captured",
"Chỉ phần trong 4 chấm được giữ lại, đã nắn thẳng và làm trắng nền":"Only the area inside the 4 dots is kept, straightened and with a whitened background",
"Đang thêm trang…":"Adding page…",
"Đang tạo PDF…":"Creating PDF…",
"Đang mở chia sẻ…":"Opening share…",
"Đang lưu…":"Saving…",
"Đã chia sẻ":"Shared",
"Đang tạo ảnh…":"Creating image…",
"Đang chuẩn bị ZIP…":"Preparing ZIP…",
"Thiếu thư viện nén ZIP (JSZip).":"The ZIP library (JSZip) is missing.",
"Đang nén ZIP…":"Compressing ZIP…",
"Không tự lưu nháp được — nếu tắt app, trang đang làm có thể mất. Hãy bấm Lưu vào máy (bộ nhớ có thể đã đầy).":"Couldn't auto-save a draft — if you close the app, the pages you're working on may be lost. Tap Save to device (storage may be full).",
"Đang lưu vào máy…":"Saving to device…",
"Đang mở tài liệu…":"Opening document…",
"Tài liệu này không còn dữ liệu.":"This document has no data left.",
"Đang mở lại trang đang làm…":"Reopening the pages you were working on…",
"Đã mở lại trang đang làm dở lần trước.":"Reopened the pages you were working on last time.",
"Đã tìm lại 4 cạnh trang giấy.":"Found the 4 page edges again.",
"Không tìm thấy rìa trang giấy (bàn / nền quá giống màu giấy?). Bấm \"Chỉnh 4 góc\" để tự kéo.":"Couldn't find the page edges (table / background too similar to the paper?). Tap \"Adjust corners\" to drag them yourself.",
"Không đọc được file.":"Couldn't read the file.",
"Thiếu thành phần lưu file của app.":"The app's file-saving component is missing.",
"Lưu / gửi file":"Save / send file",
"chọn “Lưu vào Tệp” hoặc ứng dụng muốn gửi":"choose “Save to Files” or the app you want to send to",
"đã tải xuống":"downloaded",
"Cài đặt":"Settings",
"Ngôn ngữ":"Language",
"Mọi ảnh và tài liệu được xử lý ngay trên máy, không gửi đi đâu.":"All photos and documents are processed on this device and never sent anywhere.",
"Thông báo":"Notification",
" ảnh, ":" photos, ",
"Quét":"Scan"
};

var R=[
 [/^Trang (\d+)$/,'Page $1'],
 [/^Trang (\d+) \/ (\d+)$/,'Page $1 / $2'],
 [/^Xuất PDF \((\d+) trang\)$/,function(m){return 'Export PDF ('+m[1]+(m[1]==='1'?' page)':' pages)');}],
 [/^(\d+) trang · (.+)$/,function(m){return m[1]+(m[1]==='1'?' page':' pages')+' · '+num(m[2]);}],
 [/^Tài liệu đã lưu trong máy \((\d+)\)$/,'Documents saved on this device ($1)'],
 [/^Đang đọc PDF trang (\d+)\/(\d+)(.*)$/,'Reading PDF page $1/$2$3'],
 [/^Đang đọc ảnh( \(.+\))$/,'Reading photo$1'],
 [/^Đang mở trang (\d+)\/(\d+)…$/,'Opening page $1/$2…'],
 [/^Đang tạo PDF trang (\d+)\/(\d+)…$/,'Creating PDF page $1/$2…'],
 [/^Đang tạo PDF (\d+)\/(\d+)…$/,'Creating PDF $1/$2…'],
 [/^Đang tạo ảnh (\d+)\/(\d+)…$/,'Creating image $1/$2…'],
 [/^PDF có (\d+) trang — chỉ lấy (\d+) trang đầu\.$/,'The PDF has $1 pages — only the first $2 were taken.'],
 [/^Bỏ qua: (.+)$/,function(m){return 'Skipped: '+trCore(m[1]);}],
 [/^(.*): không phải ảnh \/ PDF$/,'$1: not an image / PDF'],
 [/^Đã tạo (.+?) \((\d+) (ảnh|file PDF), ([^)]*)\)(?: — (.+))?$/,function(m){return 'Created '+m[1]+' ('+m[2]+(m[3]==='ảnh'?(m[2]==='1'?' photo, ':' photos, '):(m[2]==='1'?' PDF file, ':' PDF files, '))+num(m[4])+')'+(m[5]?' — '+trCore(m[5]):'');}],
 [/^Đã tạo (.+?) \(([^)]*)\)(?: — (.+))?$/,function(m){return 'Created '+m[1]+' ('+num(m[2])+')'+(m[3]?' — '+trCore(m[3]):'');}],
 [/^Đã tạo (.+?) — (.+)$/,function(m){return 'Created '+m[1]+' — '+trCore(m[2]);}],
 [/^Đã lưu "(.+)" \((\d+) trang\) vào máy\. Muốn sửa lại: chọn ở danh sách bên dưới\.$/,function(m){return 'Saved "'+m[1]+'" ('+m[2]+(m[2]==='1'?' page':' pages')+') to the device. To edit it again, pick it from the list below.';}],
 [/^Bỏ (\d+) trang đang làm \(chưa bấm Lưu vào máy\)\?$/,'Discard the $1 page(s) you are working on (not yet saved to the device)?'],
 [/^Xóa tài liệu "(.+)" khỏi máy\? Không khôi phục lại được\.$/,'Delete the document "$1" from the device? This cannot be undone.'],
 [/^Xóa tài liệu khỏi máy\? Không khôi phục lại được\.$/,'Delete this document from the device? This cannot be undone.'],
 [/^Xóa trang (\d+)\?$/,'Delete page $1?'],
 [/^Đã áp dụng cho (\d+) trang\.$/,'Applied to $1 page(s).'],
 [/^Đã có (\d+) trang — chụp tiếp hoặc bấm Xong$/,'$1 page(s) so far — keep shooting or tap Done'],
 [/^(.+) · đã có (\d+) trang$/,function(m){return trCore(m[1])+' · '+m[2]+' page(s) so far';}],
 [/^Xong \((\d+)\)$/,'Done ($1)'],
 [/^Đã chia sẻ (.+)$/,'Shared $1']
];
var P=[
 ['Không vẽ được trang: ',"Couldn't draw the page: "],['Không thêm được trang: ',"Couldn't add the page: "],
 ['Không chụp được: ',"Couldn't capture: "],['Không lưu được ảnh: ',"Couldn't save the image: "],
 ['Không lưu được vào máy: ',"Couldn't save to the device: "],['Không lưu được: ',"Couldn't save: "],
 ['Không xuất được ZIP: ',"Couldn't export the ZIP: "],['Không mở được tài liệu: ',"Couldn't open the document: "],
 ['Không xóa được: ',"Couldn't delete: "],['Không nạp được thư viện: ',"Couldn't load the library: "],
 ['Không mở được camera: ',"Couldn't open the camera: "]
];
function num(s){return String(s).replace(/(\d),(\d)/g,'$1.$2');}

var KEYS=Object.keys(D).filter(function(k){return k.length>=16;}).sort(function(a,b){return b.length-a.length;});
var VI=/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
function trCore(c){
  if(Object.prototype.hasOwnProperty.call(D,c))return D[c];
  var i,m;
  for(i=0;i<R.length;i++){m=R[i][0].exec(c);if(m)return typeof R[i][1]==='function'?R[i][1](m):c.replace(R[i][0],R[i][1]);}
  for(i=0;i<P.length;i++){if(c.indexOf(P[i][0])===0)return P[i][1]+trCore(c.slice(P[i][0].length));}
  if(c.indexOf(' · ')>0){var p=c.split(' · '),o=p.map(trCore);if(o.join('\u0001')!==p.join('\u0001'))return o.join(' · ');}
  var k=c.indexOf(' — ');
  if(k>0){var q=[c.slice(0,k),c.slice(k+3)],w=q.map(trCore);if(w.join('\u0001')!==q.join('\u0001'))return w.join(' — ');}
  if(VI.test(c)||/[ÀÁẢÃẠĂÂÈÉÊÌÍÒÓÔƠÙÚƯỲÝĐ]/.test(c)){var r=c,ch=false;for(i=0;i<KEYS.length;i++){if(r.indexOf(KEYS[i])>=0){r=r.split(KEYS[i]).join(D[KEYS[i]]);ch=true;}}if(ch)return r;}
  return c;
}
function tr(s){
  if(lang!=='en'||s==null)return s;s=String(s);
  var m=/^(\s*)([\s\S]*?)(\s*)$/.exec(s);if(!m[2])return s;
  var r=trCore(m[2]);return r===m[2]?s:m[1]+r+m[3];
}
/* ---------- dịch DOM ---------- */
var ATTRS=['placeholder','title','aria-label','alt'],tRec=new WeakMap(),aRec=new WeakMap(),SKIP='PRE,TEXTAREA,CODE,SCRIPT,STYLE,NOSCRIPT,[data-notr],.sc-doc b,#scHist li b,#scName',SKIPA='[data-notr]';
function skipped(n,sel){var e=n.nodeType===1?n:n.parentElement;return !e||!!(e.closest&&e.closest(sel||SKIP));}
function doText(n){
  if(skipped(n))return;var rec=tRec.get(n);
  if(rec&&n.nodeValue===rec.en)return;
  var vi=n.nodeValue,en=tr(vi);
  if(en!==vi){tRec.set(n,{vi:vi,en:en});n.nodeValue=en;}else tRec.delete(n);
}
function doAttrs(e){
  if(skipped(e,SKIPA))return;
  for(var i=0;i<ATTRS.length;i++){var a=ATTRS[i];if(!e.hasAttribute(a))continue;
    var rec=aRec.get(e)||{},cur=e.getAttribute(a);
    if(rec[a]&&cur===rec[a].en)continue;
    var en=tr(cur);if(en!==cur){rec[a]={vi:cur,en:en};aRec.set(e,rec);e.setAttribute(a,en);}else if(rec[a]){delete rec[a];}
  }
}
function walk(node,fn,fa){
  if(node.nodeType===3){fn(node);return;}
  if(node.nodeType!==1)return;
  if(/^(SCRIPT|STYLE)$/.test(node.tagName))return;
  fa(node);
  for(var c=node.firstChild;c;c=c.nextSibling)walk(c,fn,fa);
}
function undoText(n){var r=tRec.get(n);if(r&&n.nodeValue===r.en){n.nodeValue=r.vi;}tRec.delete(n);}
function undoAttrs(e){var r=aRec.get(e);if(!r)return;for(var a in r){if(e.getAttribute(a)===r[a].en)e.setAttribute(a,r[a].vi);}aRec.delete(e);}
var mo=null;
function observe(){
  if(mo||typeof MutationObserver==='undefined'||!document.body)return;
  mo=new MutationObserver(function(list){
    if(lang!=='en')return;
    for(var i=0;i<list.length;i++){var r=list[i];
      if(r.type==='childList'){for(var j=0;j<r.addedNodes.length;j++)walk(r.addedNodes[j],doText,doAttrs);}
      else if(r.type==='characterData')doText(r.target);
      else if(r.type==='attributes')doAttrs(r.target);
    }
  });
  mo.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
function apply(){
  if(!document.body)return;
  if(lang==='en')walk(document.body,doText,doAttrs);else walk(document.body,undoText,undoAttrs);
  document.documentElement.lang=lang;
  document.title=lang==='en'?'Scan Tài Liệu':'Scan Tài Liệu';
}
function setLang(l){
  if(l!=='en'&&l!=='vi')return;lang=l;
  try{localStorage.setItem(KEY,l);}catch(e){}
  apply();
  try{root.dispatchEvent(new CustomEvent('sc-lang',{detail:l}));}catch(e){}
}
['alert','confirm','prompt'].forEach(function(k){var o=root[k];if(typeof o!=='function')return;root[k]=function(m){var a=[].slice.call(arguments);a[0]=tr(m);return o.apply(root,a);};});
root.SC_T=tr;root.SC_LANG=function(){return lang;};
root.SC_I18N={set:setLang,get:function(){return lang;},tr:tr,dict:D};
document.documentElement.lang=lang;
function boot(){observe();apply();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})(window);
