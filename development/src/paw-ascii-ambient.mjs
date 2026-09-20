import { clamp } from './paw-ascii-field.mjs';

// Nine-second, low-contrast breaths. Phase offsets are seconds, not frames.
export function ambientEnvelope(timeSeconds, phaseOffset = 0) {
  const wave = .5 - .5 * Math.cos((timeSeconds + phaseOffset) * Math.PI * 2 / 9);
  return .04 + .58 * Math.pow(clamp(wave), 1.35);
}

export function selectAmbientAnchors(width, height, motifs) {
  if (width <= 0 || height <= 0) return [];
  const unique = [...motifs].sort((a,b) => a.seed-b.seed || a.x-b.x || a.y-b.y)
    .filter((m,i,all) => i === 0 || m.seed !== all[i-1].seed);
  const inside = unique.filter(m => m.x >= 0 && m.x <= width && m.y >= 0 && m.y <= height);
  if (inside.length) {
    const first = inside[0];
    const second = inside.slice(1).sort((a,b) =>
      Math.hypot(b.x-first.x,b.y-first.y) - Math.hypot(a.x-first.x,a.y-first.y) || a.seed-b.seed)[0];
    return [first,second].filter(Boolean).map(({x,y,seed}) => ({x,y,seed}));
  }
  const intersecting = unique.filter(m => {
    const radius = m.scale * 1.16;
    return m.x+radius >= 0 && m.x-radius <= width && m.y+radius >= 0 && m.y-radius <= height;
  }).sort((a,b) => Math.hypot(a.x-width/2,a.y-height/2) - Math.hypot(b.x-width/2,b.y-height/2) || a.seed-b.seed);
  const first = intersecting[0];
  return first ? [{x:clamp(first.x,0,width),y:clamp(first.y,0,height),seed:first.seed}] : [];
}
