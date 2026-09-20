(() => {
'use strict';

window.createStampHover=(elements,root)=>{
 const reduced=matchMedia('(prefers-reduced-motion:reduce)');
 const hoverPointer=matchMedia('(any-hover:hover) and (any-pointer:fine)');
 const settings={maxTilt:10,stiffness:200,damping:20,lift:3,sheenStrength:2.4};
 const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
 let frame=0,previousTime=0,touch=null;
 const cards=elements.map(element=>({
  element,face:element.querySelector('.sp-face'),image:element.querySelector('img'),
  canvas:element.querySelector('canvas'),surface:null,loading:false,
  tint:[1,3,5].map(offset=>parseInt(element.dataset.sheenTint.slice(offset,offset+2),16)/255),
  current:[0,0,0],target:[0,0,0],velocity:[0,0,0],spread:0,free:0
 }));

 function render(card){
  const mobile=touch?.sample(card);
  const [rx,ry]=mobile?mobile.values:card.current;
  const activity=mobile?mobile.values[4]:card.current[2];
  const free=mobile?.transfer?1:card.free;
  const lift=clamp(activity,0,1.08)*free;
  card.face.style.transform=`translate3d(0,${(-lift*settings.lift).toFixed(3)}px,${(lift*7).toFixed(3)}px) rotateX(${(rx*free).toFixed(4)}deg) rotateY(${(ry*free).toFixed(4)}deg) rotateZ(${(ry*.045*free).toFixed(4)}deg)`;
  const shadowX=2+card.spread*2-ry*.35*free;
  const shadowY=4+card.spread*8+lift*3+rx*.2*free;
  card.element.style.filter=`drop-shadow(${shadowX.toFixed(2)}px ${shadowY.toFixed(2)}px ${(3+card.spread*5+lift*2).toFixed(2)}px rgba(0,0,0,.42))`;
  card.surface?.draw(mobile?mobile.values[2]:clamp(ry/settings.maxTilt,-1,1),mobile?mobile.values[3]:clamp(-rx/settings.maxTilt,-1,1),clamp(activity,0,1)*settings.sheenStrength);
 }

 function requestDraw(){
  if(frame||reduced.matches)return;
  previousTime=performance.now();
  frame=requestAnimationFrame(tick);
 }
 function tick(now){
  const dt=clamp((now-previousTime)/1000,0,.032);
  previousTime=now;
  const steps=Math.max(1,Math.ceil(dt/(1/120))),step=dt/steps;
  let moving=false;
  cards.forEach(card=>{
   let cardMoving=false;
   for(let i=0;i<3;i++){
    for(let n=0;n<steps;n++){
     const force=settings.stiffness*(card.target[i]-card.current[i])-settings.damping*card.velocity[i];
     card.velocity[i]+=force*step;
     card.current[i]+=card.velocity[i]*step;
    }
    if(Math.abs(card.target[i]-card.current[i])>.001||Math.abs(card.velocity[i])>.008)cardMoving=true;
    else{card.current[i]=card.target[i];card.velocity[i]=0;}
   }
   render(card);
   card.element.classList.toggle('is-hover-moving',cardMoving);
   moving ||= cardMoving;
  });
  frame=moving?requestAnimationFrame(tick):0;
 }

 function reset(immediate=false,keepTouch=-1){
  touch?.reset(immediate,keepTouch);
  cards.forEach(card=>{card.target=[0,0,0];});
  if(immediate||reduced.matches){
   cancelAnimationFrame(frame);frame=0;
   cards.forEach(card=>{
    card.current=[0,0,0];card.velocity=[0,0,0];
    card.element.classList.remove('is-hover-moving');render(card);
   });
  }else requestDraw();
 }
 function release(card){card.target=[0,0,0];requestDraw();}
 function aim(card,event,entering=false){
  if(reduced.matches||event.pointerType==='touch')return;
  touch?.useMouse();
  const rect=card.element.getBoundingClientRect();
  const x=clamp((event.clientX-rect.left)/rect.width*2-1,-1,1);
  const y=clamp((event.clientY-rect.top)/rect.height*2-1,-1,1);
  card.target=[-y*settings.maxTilt,x*settings.maxTilt,1];
  if(entering){card.velocity[0]+=-y*13+5;card.velocity[1]+=x*13-3;}
  requestDraw();
 }

 function loadMaterials(){
  const baked=Boolean(touch?.enabled);
  if(reduced.matches||(!hoverPointer.matches&&!baked))return Promise.resolve();
  return Promise.all(cards.map((card,index)=>{
   if(card.surface)return Promise.resolve();
   if(card.loading)return card.materialReady;
   card.loading=true;
   const restoreImage=()=>{
    card.face.classList.remove('has-surface');
    card.surface?.dispose();card.surface=null;
   };
   card.materialReady=window.createStampSurface(card.image,card.canvas,restoreImage,card.tint,baked?{bakedKey:index===0?'china':'france'}:{}).then(surface=>{
    card.surface=surface;render(card);card.face.classList.add('has-surface');
   }).catch(error=>{restoreImage();console.warn('Stamp material: retaining the original image.',error);})
    .finally(()=>{card.loading=false;});
   return card.materialReady;
  }));
 }

 touch=window.createStampTouch?.(cards,render,loadMaterials)||null;

 cards.forEach(card=>{
  card.element.addEventListener('pointerenter',event=>{loadMaterials();aim(card,event,true);});
  card.element.addEventListener('pointermove',event=>aim(card,event));
  card.element.addEventListener('pointerleave',()=>release(card));
  card.element.addEventListener('pointercancel',()=>release(card));
  card.element.addEventListener('focus',()=>{
   if(reduced.matches||!card.element.matches(':focus-visible'))return;
   loadMaterials();card.target=[0,0,1];requestDraw();
  });
  card.element.addEventListener('blur',()=>release(card));
 });
 // Prepare the material near the postage page, keeping it out of hero startup.
 const observer=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting)loadMaterials();
  else reset(true);
 },{rootMargin:'400px 0px'});
 observer.observe(root);
 reduced.addEventListener('change',()=>{reset(true);});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset(true);});
 window.addEventListener('blur',()=>reset(true));
 window.addEventListener('pagehide',()=>reset(true));

 return{
  setPose(index,spread,free){const card=cards[index];card.spread=spread;card.free=free;render(card);},
  reveal(){touch?.reveal();},
  beginPostcard(index){reset(true,index);},
  reset
 };
};
})();
