(() => {
 const cover=document.querySelector('.pc-project-image-window');
 if(!cover)return;
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 const cursor=document.createElement('div');cursor.className='view-cursor';cursor.setAttribute('aria-hidden','true');cursor.innerHTML='<span>View</span>';
 const overlay=cover.closest('dialog');(overlay||document.body).append(cursor);
 function hide(){cursor.classList.remove('is-visible');document.documentElement.classList.remove('has-view-cursor');}
 cover.addEventListener('pointermove',e=>{
  if(!fine.matches||e.pointerType==='touch')return;
  cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';
  cursor.classList.add('is-visible');document.documentElement.classList.add('has-view-cursor');
 });
 cover.addEventListener('pointerleave',hide);window.addEventListener('blur',hide);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)hide();});
 fine.addEventListener('change',hide);
 if(overlay)new MutationObserver(hide).observe(overlay,{attributes:true,attributeFilter:['open']});
})();
