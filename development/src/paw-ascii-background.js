import * as THREE from 'three';
import { clamp, damp, smooth, drawField, makeMotifs, DEFAULT_REVEAL_STRENGTH } from './paw-ascii-field.mjs';
import { updateFieldTexture } from './paw-ascii-texture.mjs';
import { ambientEnvelope, selectAmbientAnchors } from './paw-ascii-ambient.mjs';

const host = document.querySelector('.site-background');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
// Only the isolated study exposes a desktop preview of the phone behaviour.
let forceAmbient = Boolean(document.querySelector('.paw-review')) &&
  new URLSearchParams(location.search).get('mode') === 'ambient';
const isAmbient = () => forceAmbient || !finePointer.matches;
const canvas = document.createElement('canvas');
canvas.id = 'paw-ascii-background';
canvas.setAttribute('aria-hidden', 'true');
host.append(canvas);

// An original renderer inspired by Dot Matrix's soft breathing and smoothed
// pointer response. The cat-paw field, reveal mask and ink treatment are ours.
const vertexShader = `varying vec2 vUv;
void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}`;
const fragmentShader = `
precision highp float;
uniform sampler2D uField;
uniform vec2 uSize;
uniform vec2 uPointer;
uniform float uTime;
uniform float uRadius;
uniform float uAlpha;
uniform float uFull;
uniform float uMotion;
uniform float uStrength;
uniform vec4 uProtect;
uniform float uAmbient;
uniform vec3 uAmbientA;
uniform vec3 uAmbientB;
uniform float uAmbientRadius;
varying vec2 vUv;
void main(){
  vec2 px=vec2(vUv.x,1.0-vUv.y)*uSize;
  float dist=length(px-uPointer);
  float reveal=1.0-smoothstep(uRadius*.12,uRadius,dist);
  float autoA=(1.0-smoothstep(uAmbientRadius*.22,uAmbientRadius,length(px-uAmbientA.xy)))*uAmbientA.z;
  float autoB=(1.0-smoothstep(uAmbientRadius*.22,uAmbientRadius,length(px-uAmbientB.xy)))*uAmbientB.z;
  reveal=mix(reveal*uAlpha,max(autoA,autoB),uAmbient);
  reveal=mix(reveal,.72,uFull);
  // No moving motif or spawned paw trail: only its transparency is revealed.
  float breath=.88+.12*sin(uTime*.9+px.x*.005-px.y*.004)*uMotion;
  vec2 drift=vec2(sin(px.y*.011+uTime*.32),cos(px.x*.009-uTime*.26))*.55*uMotion;
  vec4 ink=texture2D(uField,vUv+drift/uSize);
  // Keep the frosted stamp pocket's transmitted material unchanged.
  vec2 outer=max(max(uProtect.xy-px,px-uProtect.zw),vec2(0.0));
  float protection=uProtect.z>uProtect.x?smoothstep(0.0,32.0,length(outer)):1.0;
  float alpha=ink.a*reveal*breath*uStrength*protection;
  gl_FragColor=vec4(vec3(.73,.69,.635),alpha);
}`;

let renderer, frame = 0, lastTime = 0, phase = 0, alpha = 0, targetAlpha = 0;
let width = 0, height = 0, frameCount = 0, lastFrameMs = 0, textureStats = {};
let full = false, paused = false, strength = DEFAULT_REVEAL_STRENGTH, disposed = false;
let lastDiagnostic = 0;
let ambientAnchors = [], dialogOpen = Boolean(document.querySelector('dialog[open]'));
const pointer = new THREE.Vector2(-1000, -1000), target = pointer.clone();
const atlas = document.createElement('canvas');
let texture = updateFieldTexture(atlas);
const uniforms = {
  uField: {value:texture}, uSize:{value:new THREE.Vector2()},
  uPointer:{value:pointer}, uTime:{value:0}, uRadius:{value:210},
  uAlpha:{value:0}, uFull:{value:0}, uMotion:{value:1},
  uStrength:{value:strength}, uProtect:{value:new THREE.Vector4()},
  uAmbient:{value:0},uAmbientA:{value:new THREE.Vector3()},uAmbientB:{value:new THREE.Vector3()},
  uAmbientRadius:{value:260},
};
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
const geometry = new THREE.PlaneGeometry(2,2);
const material = new THREE.ShaderMaterial({uniforms,vertexShader,fragmentShader,
  transparent:true,depthTest:false,depthWrite:false});
scene.add(new THREE.Mesh(geometry,material));

function schedule() {
  if (!frame && !disposed && !document.hidden && renderer) frame=requestAnimationFrame(render);
}
function protectPocket() {
  const bounds=document.querySelector('.sp-frost')?.getBoundingClientRect();
  if (bounds && bounds.bottom>0 && bounds.top<height)
    uniforms.uProtect.value.set(bounds.left-10,bounds.top-10,bounds.right+10,bounds.bottom+10);
  else uniforms.uProtect.value.set(0,0,0,0);
}
function render(now) {
  frame=0;
  const ambient = isAmbient();
  // Throttle the decorative phone layer, independently of the foreground cat.
  if (ambient && lastTime && now-lastTime < 1000/30-1 && !reducedMotion.matches) {
    schedule(); return;
  }
  const started=performance.now(), dt=lastTime?clamp((now-lastTime)/1000,0,.1):1/60;
  lastTime=now;
  const animate=!reducedMotion.matches&&!paused;
  if (animate) phase+=dt;
  pointer.lerp(target,1-Math.exp(-dt/.085));
  alpha=damp(alpha,targetAlpha,dt,targetAlpha>alpha?.22:.55);
  if (Math.abs(alpha-targetAlpha)<.001) alpha=targetAlpha;
  uniforms.uTime.value=phase;
  uniforms.uMotion.value=animate?1:0;
  uniforms.uAlpha.value=alpha;
  uniforms.uFull.value=full?1:0;
  uniforms.uStrength.value=strength;
  const ambientVisible = ambient && !dialogOpen;
  uniforms.uAmbient.value=ambientVisible?1:0;
  for (const [i,uniform] of [uniforms.uAmbientA,uniforms.uAmbientB].entries()) {
    const anchor=ambientAnchors[i];
    const envelope=reducedMotion.matches ? .18 : ambientEnvelope(phase,i*4.5)*smooth(0,2,phase);
    uniform.value.set(anchor?.x||0,anchor?.y||0,anchor&&ambientVisible?envelope:0);
  }
  protectPocket();
  renderer.render(scene,camera);
  frameCount++;
  lastFrameMs=performance.now()-started;
  const transitioning=alpha!==targetAlpha||pointer.distanceTo(target)>.1;
  if (transitioning || (animate&&(alpha>.001||full||ambientVisible))) schedule();
  if (now-lastDiagnostic>200 || !frame) {
    lastDiagnostic=now;
    canvas.dataset.state=JSON.stringify(inspect());
  }
}
function resize() {
  width=host.clientWidth; height=host.clientHeight;
  if (!width||!height||!renderer) return;
  const density=Math.min(devicePixelRatio,isAmbient()?1.25:1.5);
  renderer.setPixelRatio(density);
  renderer.setSize(width,height,false);
  uniforms.uSize.value.set(width,height);
  uniforms.uRadius.value=Math.min(215,Math.max(145,width*.16));
  textureStats=drawField(atlas,width,height,density);
  ambientAnchors=selectAmbientAnchors(width,height,makeMotifs(width,height));
  uniforms.uAmbientRadius.value=Math.min(290,Math.max(240,width*.55));
  texture=updateFieldTexture(atlas,texture);
  uniforms.uField.value=texture;
  schedule();
}
function move(event) {
  if (isAmbient() || event.pointerType==='touch' || dialogOpen) return;
  if (targetAlpha===0 && alpha<.01) pointer.set(event.clientX,event.clientY);
  target.set(event.clientX,event.clientY);
  targetAlpha=1;
  schedule();
}
function leave() {targetAlpha=0;schedule();}
function visibility() {
  if (document.hidden) {
    cancelAnimationFrame(frame); frame=0; alpha=0; targetAlpha=0; lastTime=0;
  } else schedule();
}
function preference() {if(isAmbient())leave();resize();schedule();}
const onScroll=()=>schedule();
const resizeObserver=new ResizeObserver(resize);
const dialogObserver=new MutationObserver(()=>{
  dialogOpen=Boolean(document.querySelector('dialog[open]'));
  if(dialogOpen)leave();
  schedule();
});

try {
  renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'low-power'});
  renderer.setClearColor(0x000000,0);
  resizeObserver.observe(host);
  dialogObserver.observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
  window.addEventListener('pointermove',move,{passive:true});
  document.documentElement.addEventListener('pointerleave',leave);
  window.addEventListener('blur',leave);
  window.addEventListener('scroll',onScroll,{passive:true});
  document.addEventListener('visibilitychange',visibility);
  finePointer.addEventListener('change',preference);
  reducedMotion.addEventListener('change',preference);
  await document.fonts.load('6.4px "IBM Plex Mono"');
  resize();
} catch(error) {
  canvas.hidden=true;
  console.warn('Paw background unavailable; the original background is retained.',error);
}

// These optional controls belong to the isolated preview, not portfolio copy.
document.querySelector('#paw-full')?.addEventListener('click',event=>{
  full=!full;
  event.currentTarget.setAttribute('aria-pressed',String(full));
  schedule();
});
document.querySelector('#paw-pause')?.addEventListener('click',event=>{
  paused=!paused;
  event.currentTarget.setAttribute('aria-pressed',String(paused));
  schedule();
});
document.querySelector('#paw-strength')?.addEventListener('input',event=>{
  strength=Number(event.target.value); schedule();
});
const mobilePreviewButton=document.querySelector('#paw-mobile');
mobilePreviewButton?.setAttribute('aria-pressed',String(forceAmbient));
mobilePreviewButton?.addEventListener('click',event=>{
  forceAmbient=!forceAmbient;targetAlpha=0;alpha=0;
  event.currentTarget.setAttribute('aria-pressed',String(forceAmbient));
  resize();schedule();
});
function inspect() {
  return {ready:Boolean(renderer),width,height,frameCount,lastFrameMs,...textureStats,
    alpha,targetAlpha,radius:uniforms.uRadius.value,phase,pointer:pointer.toArray(),
    full,paused,strength,reducedMotion:reducedMotion.matches,inputMode:isAmbient()?'ambient':'pointer',
    nativeFinePointer:finePointer.matches,ambientAnchors,ambientAlpha:[uniforms.uAmbientA.value.z,uniforms.uAmbientB.value.z],
    maxFps:isAmbient()?30:60,dialogOpen,
    drawing:Boolean(frame),source:'procedural-glyph-field',layer:'site-background',
    texturePixels:texture.userData.pixelSize,gpuTextures:renderer?.info.memory.textures};
}
window.__pawAscii={inspect};
window.addEventListener('pagehide',event=>{
  if(event.persisted)return;
  disposed=true;cancelAnimationFrame(frame);
  resizeObserver.disconnect();dialogObserver.disconnect();
  window.removeEventListener('pointermove',move);
  document.documentElement.removeEventListener('pointerleave',leave);
  window.removeEventListener('blur',leave);window.removeEventListener('scroll',onScroll);
  document.removeEventListener('visibilitychange',visibility);
  finePointer.removeEventListener('change',preference);reducedMotion.removeEventListener('change',preference);
  texture.dispose();geometry.dispose();material.dispose();renderer?.dispose();
});
