(() => {
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 // Animate on arrival, without hiding content while assets are loading.
 const observer=new IntersectionObserver(entries=>{
  for(const entry of entries){
   if(!entry.isIntersecting)continue;
   observer.unobserve(entry.target);
   const lines=entry.target.querySelectorAll('.chapter-line>span');
   if(lines.length)lines.forEach((line,index)=>line.animate([
    {transform:'translateY(28%)',opacity:0},
    {transform:'translateY(0)',opacity:1}
   ],{duration:1050,delay:index*140,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'}));
   else entry.target.animate([{transform:'translateY(12px)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:900,easing:'cubic-bezier(.16,1,.3,1)'});
  }
 },{threshold:.18});
 const start=()=>document.querySelectorAll('.chapter-title,.contact-content,.about-portrait,.about-copy,#project .project-header,#project .text-section,#project figure').forEach(el=>observer.observe(el));
 const loading=document.querySelector('#cat-loading');
 if(loading&&!loading.hidden){
  const ready=new MutationObserver(()=>{if(loading.hidden){ready.disconnect();start();}});
  ready.observe(loading,{attributes:true,attributeFilter:['hidden']});
 }else start();
})();
