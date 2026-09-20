(() => {
const nav=document.querySelector('.portfolio-nav');
if(!nav)return;
const links=[...nav.querySelectorAll('a')];
let clickMotion;
function animateNavigation(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  clickMotion?.cancel();
  clickMotion=nav.querySelector(".portfolio-nav__surface").animate([
    {inset:'0px 0px',borderRadius:'29px',offset:0,easing:'cubic-bezier(.4,0,.7,1)'},
    {inset:'1.8px 3px',borderRadius:'27px',offset:.18,easing:'cubic-bezier(.16,.5,.3,1)'},
    {inset:'-.8px -1.3px',borderRadius:'30px',offset:.43,easing:'ease-in-out'},
    {inset:'.4px .65px',borderRadius:'28.5px',offset:.64,easing:'ease-in-out'},
    {inset:'-.15px -.25px',borderRadius:'29.2px',offset:.82,easing:'ease-out'},
    {inset:'0px 0px',borderRadius:'29px',offset:1}
  ],{duration:560,easing:'linear'});
}
const detail=location.pathname.endsWith('/project.html');
const sections=[['home','home'],['stamps','projects'],['information','about'],['contact','contact']]
  .map(([id,view])=>({element:document.getElementById(id),view})).filter(section=>section.element);
const loading=document.querySelector('#cat-loading');
let targetView=null,settleTimer,frame;
const isLoading=()=>document.documentElement.classList.contains('boot-pending')||(loading&&!loading.hidden);
// Carry a single pulse to the destination so native navigation never waits on an animation.
const motionStorageKey='portfolio:nav-motion';
let arrivalMotion=false;
try{
  const pending=JSON.parse(sessionStorage.getItem(motionStorageKey)||'null');
  sessionStorage.removeItem(motionStorageKey);
  const age=pending?Date.now()-pending.created:Infinity;
  arrivalMotion=!!pending&&pending.href===location.href&&age>=0&&age<10000;
}catch{}
function playArrivalMotion(){
  if(!arrivalMotion||isLoading())return;
  arrivalMotion=false;
  requestAnimationFrame(()=>requestAnimationFrame(animateNavigation));
}
const viewForHash=hash=>hash==='#information'?'about':hash==='#contact'?'contact':['#stamps','#overview','#project-01'].includes(hash)?'projects':'home';
function setCurrent(view){
for(const link of links){if(link.dataset.destination===view)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');}
}
function updateFromPosition(){
  frame=null;
  if(detail||isLoading()||targetView)return;
  const viewport=innerHeight;
  let current=sections[0],mostVisible=0;
  for(const section of sections){
    const rect=section.element.getBoundingClientRect();
    const visible=Math.max(0,Math.min(rect.bottom,viewport)-Math.max(rect.top,0));
    if(visible>mostVisible){current=section;mostVisible=visible;}
  }
  // A short final chapter should still be selected when the reader reaches it.
  if(scrollY+viewport>=document.documentElement.scrollHeight-3)current=sections.at(-1);
  if(current&&mostVisible>0)setCurrent(current.view);
}
function schedulePosition(){if(!frame)frame=requestAnimationFrame(updateFromPosition);}
function releaseTarget(){
  clearTimeout(settleTimer);
  targetView=null;
  schedulePosition();
}
function waitForScroll(){
  clearTimeout(settleTimer);
  settleTimer=setTimeout(releaseTarget,180);
}
function updateFromLocation(){
  clearTimeout(settleTimer);
  targetView=null;
  setCurrent(detail?'projects':viewForHash(location.hash));
  if(!detail&&!isLoading())schedulePosition();
}
for(const link of links)link.addEventListener('click',event=>{
if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
const hash=link.getAttribute('href');
if(!detail&&hash.startsWith('#')){
 const destination=document.querySelector(hash);
 if(!destination)return;
 animateNavigation();
 event.preventDefault();
 history.pushState(null,'',hash);
 targetView=link.dataset.destination;
 setCurrent(targetView);
 destination.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
 waitForScroll();
}else if((!link.target||link.target==='_self')&&new URL(link.href).origin===location.origin){
 try{sessionStorage.setItem(motionStorageKey,JSON.stringify({href:link.href,created:Date.now()}));}catch{}
}
});
addEventListener('hashchange',updateFromLocation);addEventListener('popstate',updateFromLocation);
if(!detail){
  addEventListener('scroll',()=>{if(targetView)waitForScroll();else schedulePosition();},{passive:true});
  addEventListener('resize',schedulePosition);
  for(const type of ['wheel','touchstart','pointerdown'])addEventListener(type,()=>{if(targetView)releaseTarget();},{passive:true});
  addEventListener('keydown',event=>{
    if(targetView&&['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' ','Escape'].includes(event.key))releaseTarget();
  });
  if(isLoading()){
    const ready=new MutationObserver(()=>{
      if(!isLoading()){ready.disconnect();schedulePosition();playArrivalMotion();}
    });
    ready.observe(document.documentElement,{attributes:true,attributeFilter:['class']});
    if(loading)ready.observe(loading,{attributes:true,attributeFilter:['hidden']});
  }
}
updateFromLocation();
playArrivalMotion();
})();
