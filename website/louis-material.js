const body = document.body;
let ready = false;
let intensity = 24;

export function setMaterialIntensity(value) {
  const parsed = Number(value);
  intensity = Number.isFinite(parsed) ? Math.max(0, Math.min(40, parsed)) : 24;
  const strength = intensity / 100;
  // Center the approved bitmap's mean around the original warm-gray ink.
  // Detail strength changes texture contrast, not the overall color.
  const tint = [177, 170, 163].map(channel => Math.round((channel - 193.43 * strength) / (1 - strength)));
  body.style.setProperty('--material-paint', `rgba(${tint.join(',')},${1 - strength})`);
}

export function setMaterialMode(mode) {
  body.dataset.materialMode = mode === 'plain' ? 'plain' : 'print';
}

export function inspectMaterial() {
  return {ready, mode: body.dataset.materialMode, intensity};
}

setMaterialIntensity(24);
setMaterialMode('print');

// Only turn on clipped background paint after the bitmap decodes. A failed
// texture keeps the original readable warm-gray text. No extra animation loop.
const texture = new Image();
texture.src = new URL('assets/hero/louis-print-texture-v1.png', import.meta.url).href;
export const materialReady = texture.decode().then(() => {
  ready = true;
  body.dataset.materialReady = 'true';
  return true;
}).catch(() => false);

window.__louisMaterial = {inspect: inspectMaterial};
