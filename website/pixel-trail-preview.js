// Originkit Pixel Trail: vanilla-DOM adaptation of the source supplied by user.
// Retains instant strike, 300ms hold, 450ms linear fade and coalesced sampling.
// Small vector paws replace squares, with distance-based spacing between prints.
// Portfolio adaptations: transparent host, no caption/inversion, cat's colour,
// desktop-only input and placement beneath the existing cat cursor.
import {measureCursorGrid,behindCat,overlapsCat,traceCells,spacePawCells,pawAppearance,pawDepth,pawScale,TRAIL_DEFAULTS} from './src/pixel-trail-core.mjs?v=8';

const fine=matchMedia('(hover: hover) and (pointer: fine)');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const layer=document.createElement('div');
layer.className='pixel-trail-layer';
layer.setAttribute('aria-hidden','true');
document.body.append(layer);
let grid=measureCursorGrid(0,0),cells=new Map(),last=null,lastPaw=null,disposed=false;
let sequence=0,heading=0;
const enabled=()=>fine.matches&&!reduced.matches&&!document.hidden;

function clear(){
  for(const index of cells.keys())removeCell(index);
  last=null;lastPaw=null;
}
function removeCell(index){
  const entry=cells.get(index);if(!entry)return;
  clearTimeout(entry.timer);entry.cell.remove();cells.delete(index);
}
function syncLayer(){
  const parent=document.querySelector('dialog[open]')||document.body;
  if(layer.parentElement!==parent){clear();parent.append(layer);}
}
function resize(){
  clear();
  grid=enabled()?measureCursorGrid(layer.clientWidth,layer.clientHeight):measureCursorGrid(0,0);
  layer.dataset.grid=JSON.stringify({...grid,hold:TRAIL_DEFAULTS.hold,fade:TRAIL_DEFAULTS.fade,desktopOnly:true});
}
function strike(index){
  let entry=cells.get(index);
  if(!entry){
    const cell=document.createElement('i');
    cell.style.cssText=`position:absolute;left:${index%grid.cols*grid.pitch}px;top:${Math.floor(index/grid.cols)*grid.pitch}px;width:${grid.pitch}px;height:${grid.pitch}px`;
    entry={cell,timer:0};cells.set(index,entry);layer.append(cell);
  }
  const {cell}=entry;
  entry.serial=++sequence;
  const look=pawAppearance(sequence,heading);
  cell.style.transform=`rotate(${look.angle}deg) scale(${look.scale})`;
  // Spatial falloff is separate from timed fade, so aging never restarts a fade.
  for(const item of cells.values()){
    const age=sequence-item.serial;
    item.cell.style.filter=`opacity(${pawDepth(age)})`;
    item.cell.style.scale=String(pawScale(age));
  }
  clearTimeout(entry.timer);
  cell.style.transition='scale 140ms ease-out';cell.style.opacity='0.75';
  entry.timer=setTimeout(()=>{
    cell.style.transition=`opacity ${TRAIL_DEFAULTS.fade}ms linear, scale 140ms ease-out`;
    cell.style.opacity='0';
    entry.timer=setTimeout(()=>removeCell(index),TRAIL_DEFAULTS.fade);
  },TRAIL_DEFAULTS.hold);
}
function move(event){
  const cat=document.querySelector('.pixel-cat-cursor');
  if(!enabled()||event.pointerType==='touch'||event.target.closest?.('input,textarea,[contenteditable="true"]')||!cat?.classList.contains('is-visible')){clear();return;}
  syncLayer();
  // Read the current cat fill rather than introduce a second palette token.
  layer.style.setProperty('--pixel-trail-color',getComputedStyle(cat).getPropertyValue('--pixel-cat-color').trim()||'#d7cfc3');
  const rect=layer.getBoundingClientRect();
  const sx=rect.width/layer.clientWidth,sy=rect.height/layer.clientHeight;
  if(!(sx>0&&sy>0))return;
  const bounds=cat.getBoundingClientRect();
  const catBox={left:(bounds.left-rect.left)/sx,top:(bounds.top-rect.top)/sy,right:(bounds.right-rect.left)/sx,bottom:(bounds.bottom-rect.top)/sy};
  // Clear old prints as well: reversing over a previous trail must not fill the cat's eyes.
  const clearOverCat=()=>{
    for(const [index,entry] of cells){
      const r=entry.cell.getBoundingClientRect();
      if(r.left<bounds.right&&r.right>bounds.left&&r.top<bounds.bottom&&r.bottom>bounds.top)removeCell(index);
    }
  };
  clearOverCat();
  const samples=event.getCoalescedEvents?.()||[];
  for(const sample of samples.length?samples:[event]){
    const dx=(sample.clientX-event.clientX)/sx,dy=(sample.clientY-event.clientY)/sy;
    const point=behindCat({left:catBox.left+dx,top:catBox.top+dy,bottom:catBox.bottom+dy},grid.pitch);
    if(last&&Math.hypot(point.x-last.x,point.y-last.y)>1)heading=Math.atan2(point.y-last.y,point.x-last.x)*180/Math.PI;
    const spaced=spacePawCells(traceCells(last,point,grid).filter(index=>!overlapsCat(index,grid,catBox)),grid,lastPaw);
    for(const index of spaced.indices)strike(index);
    lastPaw=spaced.last;
    last=point;
  }
  clearOverCat();
}
function leave(){last=null;lastPaw=null;}
function visibility(){if(document.hidden)clear();else resize();}
const observer=new ResizeObserver(resize);
observer.observe(layer);
const dialogs=new MutationObserver(syncLayer);
dialogs.observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
window.addEventListener('pointermove',move,{passive:true});
document.documentElement.addEventListener('pointerleave',leave);
window.addEventListener('blur',clear);
document.addEventListener('visibilitychange',visibility);
fine.addEventListener('change',resize);
reduced.addEventListener('change',resize);
window.addEventListener('pagehide',event=>{if(!event.persisted)dispose();});
function dispose(){
  if(disposed)return;disposed=true;clear();observer.disconnect();dialogs.disconnect();
  window.removeEventListener('pointermove',move);
  document.documentElement.removeEventListener('pointerleave',leave);
  window.removeEventListener('blur',clear);
  document.removeEventListener('visibilitychange',visibility);
  fine.removeEventListener('change',resize);reduced.removeEventListener('change',resize);
  layer.remove();
}
resize();
