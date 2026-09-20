// Stable paw geometry and ink density. No image or screenshot is used as a mask.
export const DEFAULT_REVEAL_STRENGTH = .70 * 1.15;
export const clamp = (x, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x));
export function smooth(a, b, x) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}
export const damp = (value, target, dt, tau) => target + (value - target) * Math.exp(-dt / tau);
export function hash(x, y, seed = 0) {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return n - Math.floor(n);
}
function ellipse(x, y, cx, cy, rx, ry, angle) {
  const c = Math.cos(angle), s = Math.sin(angle), dx = x - cx, dy = y - cy;
  const px = (dx * c + dy * s) / rx, py = (-dx * s + dy * c) / ry;
  return Math.hypot(px, py);
}
export function pawSample(x, y, seed = 0) {
  const toes = [
    [-.63, -.17, .19, .27, -.50],
    [-.26, -.61, .195, .29, -.22],
    [.22, -.67, .19, .285, .19],
    [.61, -.25, .18, .265, .48],
  ];
  let d = Infinity;
  for (const toe of toes) d = Math.min(d, ellipse(x, y, ...toe));
  // A broad rounded triangular metacarpal pad, with two upper shoulders and
  // a shallow basal cleft. It reads as a print, not a circular emoji stamp.
  const padY = (y - .39) / .48;
  const halfWidth = .43 + .17 * smooth(-.85, .3, padY);
  const cleft = .075 * Math.exp(-Math.pow(x / .16, 2)) * smooth(.2, 1, padY);
  const pad = Math.pow(x / halfWidth, 2) + Math.pow(padY + cleft, 2);
  d = Math.min(d, Math.sqrt(pad));
  const edgeGrain = (Math.sin(x * 53 + y * 37) + Math.sin(y * 69 - x * 19)) * .016;
  const mask = 1 - smooth(.90, 1.14, d + edgeGrain);
  const fibres = .5 + .5 * Math.sin(x * 19 + Math.sin(y * 11) * 1.2 + y * 4);
  const worn = .5 + .5 * Math.sin(x * 7 - y * 6 + seed);
  const sideLight = .42 + .38 * smooth(-.65, .65, x) + fibres * .20;
  const ink = clamp(mask * sideLight * (.7 + worn * .3));
  return { mask, ink };
}
export function revealAt(distance, radius) {
  return 1 - smooth(radius * .12, radius, distance);
}
let worldMotifs;
export function makeMotifs(width, height) {
  if (!worldMotifs) {
    worldMotifs = [];
    const cells = new Map();
    // Fixed seeded spatial field: resizing reveals another portion of the
    // same surface, never squeezes its paws or randomises them again.
    for (let row = -1; row < 32; row++) {
      for (let col = -1; col < 32; col++) {
        const motif = {
          x: 165 + col * 410,
          y: 150 + row * 410,
          scale: 145 + hash(col, row, 8) * 20,
          angle: (hash(col, row, 14) - .5) * .88,
          seed: row * 113 + col * 47 + 2000,
        };
        worldMotifs.push(motif);
        cells.set(`${col},${row}`, {col,row,motif});
      }
    }
    // Reserve a valid paw in every region before introducing randomness.
    // Testing against future neighbours too keeps a collision from deleting
    // an entire cell and leaving a large hole in narrow viewports.
    for (const {col,row,motif} of cells.values()) {
      const neighbours = [];
      for (let y=row-1; y<=row+1; y++) {
        for (let x=col-1; x<=col+1; x++) {
          const other=cells.get(`${x},${y}`)?.motif;
          if (other && other!==motif) neighbours.push(other);
        }
      }
      for (let attempt=0; attempt<24; attempt++) {
        const x=165+col*410+(hash(col,row,31+attempt*2)-.5)*170;
        const y=150+row*410+(hash(col,row,47+attempt*2)-.5)*170;
        if (neighbours.every(other => Math.hypot(x-other.x,y-other.y) >=
          (motif.scale+other.scale)*1.17)) {
          motif.x=x; motif.y=y; break;
        }
      }
    }
    worldMotifs.sort((a,b) => a.y - b.y || a.x - b.x);
  }
  return worldMotifs.filter(motif => motif.x > -200 && motif.x < width + 200 &&
    motif.y > -200 && motif.y < height + 200);
}
export function drawField(canvas, width, height, density = 1.5) {
  canvas.width = Math.ceil(width * density);
  canvas.height = Math.ceil(height * density);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(density, 0, 0, density, 0, 0);
  const motifs = makeMotifs(width, height);
  const cell = 5.8, glyphs = '.,:;+*ox%#';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '6.4px "IBM Plex Mono", monospace';
  let pointCount = 0;
  for (let y = cell / 2; y < height; y += cell) {
    for (let x = cell / 2; x < width; x += cell) {
      let ink = 0, mask = 0, seed = 0;
      for (const motif of motifs) {
        const dx = (x - motif.x) / motif.scale, dy = (y - motif.y) / motif.scale;
        if (Math.abs(dx) > 1.35 || Math.abs(dy) > 1.35) continue;
        const c = Math.cos(motif.angle), s = Math.sin(motif.angle);
        const sample = pawSample(dx * c + dy * s, -dx * s + dy * c, motif.seed);
        if (sample.ink > ink) { ink = sample.ink; mask = sample.mask; seed = motif.seed; }
      }
      const grain = hash(x, y, seed);
      if (ink < .015 || grain > mask * .93) continue;
      const character = glyphs[Math.floor(clamp(ink * .8 + grain * .2) * (glyphs.length - 1))];
      ctx.fillStyle = `rgba(255,255,255,${.28 + ink * .72})`;
      ctx.fillText(character, x + (grain - .5) * .6, y);
      // Irregular micro-dots preserve the dry, broken print edge between glyphs.
      if (grain > .62) {
        ctx.globalAlpha = ink * .7;
        ctx.fillRect(x + 2, y - 2, .65, .65);
        ctx.globalAlpha = 1;
      }
      pointCount++;
    }
  }
  return { pointCount, motifCount: motifs.length };
}
