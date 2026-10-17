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
/* vuốt xuống trên khay Cài đặt để đóng (khi nội dung đang ở đầu) */
(function(){
  var c=sheet.querySelector('.st-card');if(!c)return;
  var y0=0,x0=0,dy=0,t0=0,drag=false,on=false;
  c.addEventListener('touchstart',function(e){if(e.touches.length!==1){on=false;return;}y0=e.touches[0].clientY;x0=e.touches[0].clientX;dy=0;t0=Date.now();drag=false;on=true;},{passive:true});
  c.addEventListener('touchmove',function(e){
    if(!on)return;var t=e.touches[0],d=t.clientY-y0;
    if(!drag){if(d>6&&Math.abs(d)>Math.abs(t.clientX-x0)&&c.scrollTop<=0){drag=true;y0=t.clientY;d=0;c.style.transition='none';}else return;}
    dy=Math.max(0,d);c.style.transform='translateY('+dy+'px)';if(e.cancelable)e.preventDefault();
  },{passive:false});
  function end(){on=false;if(!drag)return;drag=false;c.style.transition='';var go=dy>90||(dy>40&&Date.now()-t0<250);c.style.transform='';if(go)close();}
  c.addEventListener('touchend',end);c.addEventListener('touchcancel',end);
})();
// Nút Back của Android (scan-tai-lieu.js gọi click vào [data-st="close"] khi lớp này đang mở)
mark();
})();
