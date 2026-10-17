/* settings.js — Màn Cài đặt: chọn ngôn ngữ giao diện (Tiếng Việt / English). */
(function(){
'use strict';
var sheet=document.getElementById('stSheet'),openB=document.getElementById('stOpen'),seg=document.getElementById('stLang'),code=document.getElementById('stCode');
if(!sheet||!openB||!seg)return;
function cur(){return window.SC_LANG?SC_LANG():'vi';}
function mark(){
  var l=cur();code.textContent=l.toUpperCase();
  [].forEach.call(seg.children,function(b){var on=b.dataset.v===l;b.classList.toggle('on',on);b.setAttribute('aria-pressed',String(on));});
}
function open(){mark();sheet.hidden=false;requestAnimationFrame(function(){requestAnimationFrame(function(){sheet.classList.add('open');});});}
function close(){sheet.classList.remove('open');setTimeout(function(){if(!sheet.classList.contains('open'))sheet.hidden=true;},260);}
openB.addEventListener('click',open);
sheet.addEventListener('click',function(e){if(e.target===sheet||e.target.closest('[data-st="close"]'))close();});
seg.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(b&&window.SC_I18N){SC_I18N.set(b.dataset.v);mark();}});
window.addEventListener('sc-lang',mark);
// Nút Back của Android (scan-tai-lieu.js gọi click vào [data-st="close"] khi lớp này đang mở)
mark();
})();
