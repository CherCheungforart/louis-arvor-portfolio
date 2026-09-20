import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CatMotionState, STOP_DELAY_MS, placement, sampledFloor, sampleScrollPose } from './cat-preview-state.mjs';
import { attachEyeFollow } from './cat-eye-follow.mjs';
import { fitWordmark } from './fit-wordmark.mjs';
import { layoutHero } from './hero-layout.mjs';

const $ = (selector) => document.querySelector(selector);
const canvas = $('#cat-canvas');
const stage = $('#cat-stage');
const artwork = $('#artwork');
const wordmark = $('.wordmark');
const body = document.body;
const status = $('#motion-status');
const loadStatus = $('#load-status');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const coarsePointer = matchMedia('(pointer: coarse)');
const motion = new CatMotionState(window.scrollY);
const asset = 'assets/cat-3d-preview/';
const VIEW_HEIGHT = .9;
const VIEW_WIDTH = 1.38;
const FLOOR_MARGIN = .04;
let renderer, scene, camera, sitting, walking, mixer, clip, calibration;
let stopTimer = 0, drawFrame = 0, ready = false, failed = false;
let layout = { width: 0, height: 0, minX: 0, maxX: 0, range: 1, top: 0, secondsPerPixel: .005 };
let drawCount = 0;
let trigger;
let renderedPose = { x: 0, time: 0 }, lastDraw = 0;
let disposed = false;
let typographyReady = false;
let sittingEyes, walkingEyes;
const pointer = { x: 0, y: 0, active: false };

function fail(error) {
  failed = true;
  clearTimeout(stopTimer);
  motion.stop();
  body.dataset.ready = 'false';
  body.dataset.motion = 'error';
  if (status) status.textContent = '预览未能加载';
  $('#loading-message').hidden = false;
  loadStatus.textContent = '模型或 WebGL 加载失败。请重新加载，或换用支持 WebGL 2 的浏览器。';
  $('#retry').hidden = false;
  console.error('Cat preview:', error);
}

function requestDraw() {
  if (!ready || failed || disposed || drawFrame || document.hidden) return;
  drawFrame = requestAnimationFrame((now) => {
    drawFrame = 0;
    const moving = motion.moving && !reducedMotion.matches;
    sitting.visible = !moving;
    walking.visible = moving;
    const rotation = motion.facing * Math.PI/2;
    sitting.rotation.y = rotation;
    walking.rotation.y = rotation;
    const target = {
      x: placement(reducedMotion.matches ? 0 : motion.scrollY, layout.range, layout.minX, layout.maxX),
      time: motion.walkTime,
    };
    const elapsed = Math.min(.05, (now-lastDraw)/1000);
    renderedPose = sampleScrollPose(renderedPose, target, elapsed, moving);
    lastDraw = now;
    if (moving) {
      const time = renderedPose.time % clip.duration;
      mixer.setTime(time);
      walking.position.y = -sampledFloor(time, calibration);
    }
    stage.style.transform = `translate3d(${renderedPose.x}px,0,0)`;
    scene.updateMatrixWorld(true);
    const rect = stage.getBoundingClientRect();
    const visible = rect.bottom>0 && rect.top<innerHeight;
    const gazeInput = { pointer: {...pointer,active:pointer.active && visible && !reducedMotion.matches},
      camera,rect,viewport:{width:innerWidth,height:innerHeight},facing:motion.facing,elapsed };
    const gazePending = (moving ? walkingEyes : sittingEyes).update(gazeInput);
    renderer.render(scene, camera);
    drawCount++;
    body.dataset.motion = moving ? 'walking' : 'sitting';
    body.dataset.facing = motion.facing === 1 ? 'right' : 'left';
    const description = `${moving ? '行走' : '坐姿'} / ${motion.facing === 1 ? '朝右 →' : '← 朝左'}`;
    if (status) status.textContent = reducedMotion.matches ? '坐姿 / 已启用减少动态效果' : description;
    if ((moving && !renderedPose.settled) || gazePending) requestDraw();
  });
}

function stop() {
  clearTimeout(stopTimer);
  if (!motion.moving) return;
  motion.stop();
  requestDraw();
}

function scrollChanged() {
  if (!ready || failed) return;
  const y = Math.min(Math.max(0, window.scrollY), Math.max(0, document.documentElement.scrollHeight-window.innerHeight));
  if (!motion.scrollTo(y, layout.secondsPerPixel)) return;
  clearTimeout(stopTimer);
  if (reducedMotion.matches) motion.stop();
  else stopTimer = setTimeout(stop, STOP_DELAY_MS);
  requestDraw();
}

function resize() {
  if (!typographyReady || disposed) return;
  // Fit the font by changing its font size, never by stretching its X/Y scale.
  if (wordmark.id === 'hero-title') fitWordmark(wordmark, artwork.clientWidth);
  else {
    wordmark.style.fontSize = `${artwork.clientWidth*.36}px`;
    wordmark.style.fontSize = `${parseFloat(getComputedStyle(wordmark).fontSize)*artwork.clientWidth/wordmark.getBoundingClientRect().width}px`;
  }
  const style = getComputedStyle(wordmark);
  const context = document.createElement('canvas').getContext('2d');
  context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  // Plane Crash stores uppercase letterforms in lowercase slots; its uppercase
  // slots are pictograms. Measure the same glyph case the live title renders.
  // Rounded O/S overshoot the cap line; use the flat L/U/I tops as the ground.
  const flatCaps = wordmark.textContent === wordmark.textContent.toLowerCase() ? 'lui' : 'LUI';
  const ascent = context.measureText(flatCaps).actualBoundingBoxAscent;
  const width = stage.offsetWidth;
  layoutHero({ artwork, baseline: $('#font-baseline'), ascent,
    descent: context.measureText(wordmark.textContent.trim()).actualBoundingBoxDescent,
    catWidth: width, viewWidth: VIEW_WIDTH });
  // Publish the fitted title before model downloads or GPU preparation finish.
  // The same layout path also handles a resize while the models are loading.
  wordmark.dataset.layoutReady = 'true';
  if (!ready || failed) return;
  motion.rebase(window.scrollY);
  const baseline = $('#font-baseline').getBoundingClientRect().top;
  const groundY = baseline-ascent-artwork.getBoundingClientRect().top;
  const height = width*VIEW_HEIGHT/VIEW_WIDTH;
  const pxPerUnit = width/VIEW_WIDTH;
  // Orthographic Y=0 is FLOOR_MARGIN above the bottom of the canvas.
  const top = groundY-height+FLOOR_MARGIN*pxPerUnit;
  stage.style.top = `${top}px`;
  if ($('#ground-guide')) $('#ground-guide').style.top = `${groundY}px`;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarsePointer.matches ? 1.5 : 2));
  renderer.setSize(width, height, false);
  // Both orientations, including tail and all sampled Walk poses, fit inside a
  // conservative silhouette envelope. The canvas may extend into blank margins.
  const halfBody = .56*pxPerUnit;
  const minX = halfBody-width/2;
  const maxX = artwork.clientWidth-halfBody-width/2;
  const range = Math.max(220, window.innerHeight*.57);
  const travel = Math.max(1, maxX-minX);
  layout = { width, height, minX, maxX, range, top,
    secondsPerPixel: (travel/range)/pxPerUnit * (clip.duration/.98) };
  renderedPose = { x: placement(motion.scrollY, range, minX, maxX), time: motion.walkTime };
  requestDraw();
}

async function prepareTextures(root) {
  const textures = new Set();
  root.traverse((obj) => {
    if (!obj.isMesh) return;
    obj.frustumCulled = false;
    obj.castShadow = false;
    obj.receiveShadow = false;
    const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
    for (const material of materials) if (material.map) textures.add(material.map);
  });
  // Limit GPU memory on phones; this does not alter either source GLB/texture.
  if (!coarsePointer.matches) return;
  for (const texture of textures) {
    const source = texture.image;
    const longest = Math.max(source.width, source.height);
    if (longest <= 2048 || !window.createImageBitmap) continue;
    const ratio = 2048/longest;
    texture.image = await createImageBitmap(source, {
      resizeWidth: Math.round(source.width*ratio), resizeHeight: Math.round(source.height*ratio),
      resizeQuality: 'high', imageOrientation: 'none', premultiplyAlpha: 'none', colorSpaceConversion: 'none',
    });
    texture.needsUpdate = true;
    source.close?.();
  }
}

function inspect() {
  if (!ready) return { ready: false, failed };
  scene.updateMatrixWorld(true);
  const active = walking.visible ? walking : sitting;
  let lowest = Infinity, highest = -Infinity;
  let minBoneScale = Infinity, maxBoneScale = 0;
  const vertex = new THREE.Vector3();
  active.traverse((obj) => {
    if (obj.isBone) for (const n of obj.scale.toArray()) {
      minBoneScale = Math.min(minBoneScale, n); maxBoneScale = Math.max(maxBoneScale, n);
    }
    if (!obj.isMesh) return;
    for (let i = 0; i < obj.geometry.attributes.position.count; i++) {
      obj.getVertexPosition(i, vertex).applyMatrix4(obj.matrixWorld);
      lowest = Math.min(lowest, vertex.y);
      highest = Math.max(highest, vertex.y);
    }
  });
  return { ready, failed, moving: motion.moving, facing: motion.facing,
    walkTime: motion.walkTime, clipTime: mixer.time, drawCount, scrollY: motion.scrollY,
    renderedX: renderedPose.x, renderedWalkTime: renderedPose.time,
    eyes: (walking.visible ? walkingEyes : sittingEyes).inspect(),
    headQuaternion: walking.getObjectByName('DEF_head')?.quaternion.toArray(),
    pointerActive: pointer.active,
    visibleModels: Number(sitting.visible)+Number(walking.visible),
    sittingVisible: sitting.visible, walkingVisible: walking.visible,
    sittingScale: sitting.scale.toArray(), walkingScale: walking.scale.toArray(),
    floorGapPx: lowest*layout.width/VIEW_WIDTH,
    headDocumentTop: stage.getBoundingClientRect().top + window.scrollY + (VIEW_HEIGHT - FLOOR_MARGIN - highest) * layout.width / VIEW_WIDTH,
    minBoneScale: Number.isFinite(minBoneScale) ? minBoneScale : null,
    maxBoneScale: maxBoneScale || null, layout,
    stageDocumentTop: stage.getBoundingClientRect().top+window.scrollY,
    textureSizes: [...new Set([...sitting.children, ...walking.children].flatMap(root => {
      const values = [];root.traverse(o => {if (o.isMesh && o.material.map) values.push(`${o.material.map.image.width}x${o.material.map.image.height}`);});return values;
    }))],
  };
}

async function main() {
  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = 1.03;
  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-VIEW_WIDTH/2, VIEW_WIDTH/2, VIEW_HEIGHT-FLOOR_MARGIN, -FLOOR_MARGIN, .1, 10);
  camera.position.set(0, 0, 3);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.HemisphereLight(0xf7f4ef, 0x96938d, 2.0));
  for (const x of [-2, 2]) {
    const key = new THREE.DirectionalLight(0xfffaf5, 1.55);
    key.position.set(x, 2.5, 3);
    scene.add(key);
  }
  const front = new THREE.DirectionalLight(0xffffff, .65);
  front.position.set(0, .7, 4);
  scene.add(front);
  const loader = new GLTFLoader();
  let completed = 0;
  const load = (name) => loader.loadAsync(asset+name).then(gltf => {
    completed++;
    loadStatus.textContent = `模型 ${completed}/2 已加载，正在准备纹理…`;
    return gltf;
  });
  const [sit, walk, ground] = await Promise.all([
    load('sitting-v1.glb'), load('walk-normal-v7.glb'),
    fetch(asset+'walk-calibration.json').then(response => {if (!response.ok) throw Error('Ground calibration missing');return response.json();}),
    typeLayoutReady,
  ]);
  calibration = ground;
  await Promise.all([prepareTextures(sit.scene), prepareTextures(walk.scene)]);
  sitting = new THREE.Group();
  walking = new THREE.Group();
  sitting.name = 'Seated supplied GLB';
  walking.name = 'Normal-stride v7, unmodified';
  sitting.add(sit.scene);
  walking.add(walk.scene);
  const seatBox = new THREE.Box3().setFromObject(sit.scene, true);
  const uniformScale = .68017578125/(seatBox.max.y-seatBox.min.y);
  sitting.scale.setScalar(uniformScale);
  sitting.position.y = -seatBox.min.y*uniformScale;
  // Match the shader response only; retain this model's own UVs and fur map.
  sit.scene.traverse(obj => {
    if (!obj.isMesh) return;
    obj.material = obj.material.clone();
    obj.material.color.set(0xffffff);
    obj.material.roughness = .9;
  });
  sittingEyes = attachEyeFollow(sit.scene, 'sitting');
  walkingEyes = attachEyeFollow(walk.scene, 'walking');
  scene.add(sitting, walking);
  clip = walk.animations.find(action => action.name === 'Walk');
  if (!clip || Math.abs(clip.duration-calibration.duration) > .001) throw Error('Expected original 2-second Walk clip');
  mixer = new THREE.AnimationMixer(walk.scene);
  mixer.clipAction(clip).setLoop(THREE.LoopRepeat, Infinity).play();
  mixer.setTime(0);
  walking.position.y = -sampledFloor(0, calibration);
  // Warm both shaders while the loading UI hides the canvas: no ghost-frame flash.
  await renderer.compileAsync(scene, camera);
  // Upload buffers/textures before interaction; the first wheel event should not
  // also pay the first SkinnedMesh draw cost.
  sitting.visible = false;
  walking.visible = true;
  renderer.render(scene, camera);
  sitting.visible = true;
  walking.visible = false;
  renderer.render(scene, camera);
  ready = true;
  motion.rebase(window.scrollY);
  resize();
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  trigger = ScrollTrigger.create({
    id: 'cat-dual-model-preview', start: 0, end: 'max',
    onUpdate: scrollChanged,
  });
  ScrollTrigger.addEventListener('refreshInit', refreshLayout);
  // Native scrollend also fires after each discrete mouse-wheel notch. A short
  // inactivity window treats a series of those notches as one walking gesture.
  window.addEventListener('pointermove', pointerMoved, { passive: true });
  document.documentElement.addEventListener('pointerleave', clearPointer);
  window.addEventListener('blur', clearPointer);
  reducedMotion.addEventListener('change', motionPreferenceChanged);
  document.addEventListener('visibilitychange', visibilityChanged);
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fail(Error('WebGL context lost')); });
  $('#loading-message').hidden = true;
  body.dataset.ready = 'true';
  ScrollTrigger.refresh();
  requestDraw();
}

function refreshLayout() { stop(); resize(); }
function pointerMoved(event) {
  if (event.pointerType==='touch' || coarsePointer.matches || reducedMotion.matches) return;
  pointer.x=event.clientX;pointer.y=event.clientY;pointer.active=true;
  requestDraw();
}
function clearPointer() { pointer.active=false; requestDraw(); }
function motionPreferenceChanged() { clearPointer(); stop(); requestDraw(); }
function visibilityChanged() { if (document.hidden) { clearPointer();stop(); } else requestDraw(); }
function dispose() {
  if (disposed) return;
  disposed = true;
  clearTimeout(stopTimer);
  cancelAnimationFrame(drawFrame);
  trigger?.kill();
  ScrollTrigger.removeEventListener('refreshInit', refreshLayout);
  window.removeEventListener('resize', resize);
  window.removeEventListener('pointermove', pointerMoved);
  document.documentElement.removeEventListener('pointerleave', clearPointer);
  window.removeEventListener('blur', clearPointer);
  reducedMotion.removeEventListener('change', motionPreferenceChanged);
  document.removeEventListener('visibilitychange', visibilityChanged);
  mixer?.stopAllAction();
  const textures = new Set(), materials = new Set(), geometries = new Set();
  scene?.traverse(obj => {
    if (!obj.isMesh) return;
    geometries.add(obj.geometry);
    obj.skeleton?.dispose();
    for (const material of Array.isArray(obj.material) ? obj.material : [obj.material]) {
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  for (const texture of textures) { texture.dispose(); texture.image?.close?.(); }
  for (const material of materials) material.dispose();
  for (const geometry of geometries) geometry.dispose();
  renderer?.dispose();
}
// Keep GPU resources when the browser puts the page in its back/forward cache.
window.addEventListener('pagehide', event => { if (!event.persisted) dispose(); });

$('#retry').addEventListener('click', () => location.reload());
$('#show-ground')?.addEventListener('change', event => { body.dataset.guide = String(event.target.checked); });
$('#back-top')?.addEventListener('click', event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'auto' }); });
window.__catPreview = { inspect, version: 'profile-eye-follow-v3', stopDelayMs: STOP_DELAY_MS };
const typeLayoutReady = Promise.all([
  document.fonts.load(`400 100px ${getComputedStyle(wordmark).fontFamily}`),
  document.fonts.load(`400 16px ${getComputedStyle(body).fontFamily}`),
]).then(() => {
  typographyReady = true;
  resize();
});
window.addEventListener('resize', resize, { passive: true });
main().catch(fail);
