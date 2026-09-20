import {bootReady,waitForAssets} from './src/loading-page-core.mjs';

const root=document.documentElement,view=document.querySelector('#cat-loading'),main=document.querySelector('main');
const study=new URLSearchParams(location.search).get('study')==='eyes';
const state={assets:false,cat:false,material:false,dissolve:false,background:false,error:false,study};
main.inert=true;
let finished=false;
// Original eyes animate in CSS; homepage owns the sole background canvas.
function reveal(partial=false){
  if(finished)return;finished=true;clearInterval(poll);clearTimeout(watchdog);
  view.dataset.state=JSON.stringify({...state,partial,revealed:true});
  view.setAttribute('aria-busy','false');root.classList.remove('boot-pending');main.inert=false;
  view.classList.add('leaving');
  setTimeout(()=>view.hidden=true,420);
}
function problem(message){view.querySelector('.boot-error').hidden=false;view.querySelector('.boot-error p').textContent=message;}
view.querySelector('[data-boot-retry]').onclick=()=>location.reload();
view.querySelector('[data-boot-continue]').onclick=()=>reveal(true);
const watchdog=setTimeout(()=>problem('Some assets are taking longer than expected. You can keep waiting or continue with available assets.'),30000);
const poll=setInterval(()=>{
  state.cat=document.body.dataset.ready==='true';
  state.material=document.body.dataset.materialReady==='true';
  state.dissolve=window.__louisDissolve?.inspect().ready===true;
  const bg=window.__pawAscii?.inspect();state.background=bg?.ready===true&&bg.frameCount>0;
  if(document.body.dataset.motion==='error'){state.error=true;problem('The cat model could not be loaded. Please retry.');}
  view.dataset.state=JSON.stringify(state);
  if(bootReady(state)){
    clearTimeout(watchdog);
    if(!study)requestAnimationFrame(()=>requestAnimationFrame(()=>reveal()));
  }
},120);
// Escape exits only the deliberately held design study, never a real load gate.
addEventListener('keydown',e=>{if(study&&e.key==='Escape')reveal(!bootReady(state));});
const images=[];
try {
  const paths=JSON.parse(document.querySelector('#boot-assets').textContent);
  await waitForAssets(paths.map(src=>{const image=new Image();images.push(image);image.src=src;return image.decode();}));
  await waitForAssets([...document.fonts].map(font=>font.load()));
  await document.fonts.ready;
  if(document.readyState!=='complete')await new Promise(resolve=>addEventListener('load',resolve,{once:true}));
  state.assets=true;
}catch(error){state.error=true;problem('An asset could not be loaded. Please retry or continue with available assets.');console.error('Loading gate:',error);}
