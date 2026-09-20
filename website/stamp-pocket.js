(() => {
"use strict";

const scene=document.querySelector('#stamp-scene'),toggle=document.querySelector('#stamp-toggle');
const stamps=[document.querySelector('.sp-china'),document.querySelector('.sp-france')];
const reduced=matchMedia('(prefers-reduced-motion:reduce)');
let progress=0,desired=0,frame=0,postcards=null,pendingProject=null,ignoreClickUntil=0;
const clamp=v=>Math.max(0,Math.min(1,v));
const smooth=v=>{v=clamp(v);return v*v*v*(v*(v*6-15)+10)};
const hover=window.createStampHover?.(stamps,scene.closest('.stamp-page'))||{reset(){},setPose(){}};
// Each card clears the BACK panel before any lateral travel. Returning follows
// this exact path in reverse. Normalized coordinates scale with the pouch.
function draw(){
 if(postcards?.active)return;
 const w=scene.clientWidth;
 stamps.forEach((el,i)=>{
  const lift=smooth((progress-i*.055)/.59);
  const spread=smooth((progress-.69-i*.025)/(.31-i*.025));
  const x=(i===0?-.32:.32)*spread;
  const y=-(i===0?.81:.87)*lift;
  const tilt=(i===0?-3:3)*(1-lift);
  el.style.transform=`translate(${x*w}px,${y*w}px) rotate(${tilt}deg)`;
  // Full hover tilt fades in only once both cards have cleared the pocket.
  hover.setPose(i,spread,smooth((progress-.84)/.16));
 });
}
function setOpen(open,immediate=false){
 if(!open){pendingProject=null;postcards?.close({immediate:true,focus:false});}
 if(open&&!desired&&!immediate){
  const r=scene.getBoundingClientRect(),top=r.top-r.width*.98,bottom=r.top+r.width*.71;
  const available=window.visualViewport?.height||innerHeight;
  // A user may tap the pouch near the top of a phone screen. Reserve the entire
  // extraction path in the viewport instead of letting the stamps leave it.
  const delta=top<24?top-24:bottom>available-24?bottom-available+24:0;
  if(delta)window.scrollBy({top:delta,behavior:reduced.matches?'instant':'smooth'});
 }
 desired=open?1:0;toggle.setAttribute('aria-expanded',String(open));
 toggle.setAttribute('aria-label',open?'Close stamp pocket':'Open stamp pocket');
 stamps.forEach((stamp,i)=>stamp.setAttribute('aria-label',open?`Open ${i===0?'China':'France'} projects`:`Open stamp pocket — ${i===0?'China':'France'}`));
 hover.reset(immediate||reduced.matches);
 if(frame)cancelAnimationFrame(frame);
 if(reduced.matches||immediate){progress=desired;draw();frame=0;return}
 const start=progress,distance=Math.abs(desired-start),duration=Math.max(260,1450*distance);
 const begin=performance.now();
 function tick(now){
  const t=clamp((now-begin)/duration);
  // Smooth acceleration/deceleration, no elastic side overshoot through the bag.
  progress=start+(desired-start)*smooth(t);draw();
  frame=t<1?requestAnimationFrame(tick):0;
  if(t===1&&desired&&pendingProject!==null){const index=pendingProject;pendingProject=null;postcards?.open(index);}
  else if(t===1&&desired)hover.reveal?.();
 }
 frame=requestAnimationFrame(tick);
}
function bindActivation(element,action){
 let contact=null;
 element.addEventListener('pointerdown',event=>{
  if(event.pointerType==='touch')contact={id:event.pointerId,x:event.clientX,y:event.clientY,moved:false};
 },{passive:true});
 element.addEventListener('pointermove',event=>{
  if(contact&&Math.hypot(event.clientX-contact.x,event.clientY-contact.y)>12)contact.moved=true;
 },{passive:true});
 element.addEventListener('pointercancel',()=>{contact=null;});
 element.addEventListener('pointerup',event=>{
  if(!contact||contact.id!==event.pointerId)return;
  const moved=contact.moved;
  contact=null;ignoreClickUntil=performance.now()+700;
  event.preventDefault();
  if(!moved)action();
 });
 // Ignore the synthetic click from the same touch, including one whose target
 // changed because the stamp began moving. Mouse and keyboard keep native click.
 element.addEventListener('click',()=>{if(performance.now()>=ignoreClickUntil)action();});
}
bindActivation(toggle,()=>setOpen(!desired));
postcards=window.createStampPostcards?.({scene,stamps,hover,onReturn:draw});
// Wait for the stamp to clear the pouch before starting its postcard motion.
stamps.forEach((stamp,index)=>bindActivation(stamp,()=>{
 if(postcards?.active)return;
 if(!desired)setOpen(true);
 else if(progress<1)pendingProject=index;
 else postcards?.open(index);
}));
document.addEventListener('click',event=>{
 if(performance.now()<ignoreClickUntil)return;
 if(postcards?.active)return;
 if(!desired||event.target.closest('.sp-stamp')||event.target.closest('.sp-trigger'))return;
 const r=scene.getBoundingClientRect();
 const x=(event.clientX-r.left)/r.width,y=(event.clientY-r.top)/r.height;
 // The full back panel counts as the bag, including the area above the button.
 if(x>=.133333&&x<=.866667&&y>=-.13&&y<=.71)return;
 setOpen(false);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&desired&&!postcards?.active)setOpen(false)});
const resizeObserver=new ResizeObserver(draw);
resizeObserver.observe(scene);
reduced.addEventListener('change',()=>setOpen(Boolean(desired),true));
const visibilityObserver=new IntersectionObserver(entries=>{
 if(!entries[0].isIntersecting&&desired)setOpen(false,true);
});
visibilityObserver.observe(scene.closest('.stamp-page'));
window.addEventListener('pagehide',()=>{postcards?.close({immediate:true,focus:false});if(frame)cancelAnimationFrame(frame);frame=0;});
window.addEventListener('pageshow',()=>setOpen(Boolean(desired),true));
draw();

})();
