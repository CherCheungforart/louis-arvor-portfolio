import { createDissolveState } from './louis-dissolve-state.mjs';

const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const t = clamp(value); return t * t * (3 - 2 * t); };

// Adapted from the supplied Dissolve Creative Code: layered echoes → blur →
// four-stop tonal remapping → grain. The time-based wave was intentionally
// removed: it moved the letter tops, which are the cat's contact surface.
export function mountLouisDissolve({ title, baseline, container, ScrollTrigger }) {
  if (!title || !baseline || !container) return () => {};
  const canvas = document.createElement('canvas');
  canvas.className = 'louis-dissolve';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'absolute', left: '0', pointerEvents: 'none', zIndex: '2',
  });
  container.append(canvas);
  const output = canvas.getContext('2d');
  const glyph = document.createElement('canvas');
  const ink = glyph.getContext('2d', { willReadFrequently: true });
  const echoes = document.createElement('canvas');
  const echo = echoes.getContext('2d', { willReadFrequently: true });
  const blurred = document.createElement('canvas');
  const blur = blurred.getContext('2d', { willReadFrequently: true });
  const supportsBlurFilter = 'filter' in blur;
  const state = createDissolveState(window.scrollY);
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let geometry, disposed = false, frame = 0, resizeFrame = 0, ready = false;
  let draws = 0, lastRenderMs = 0, maxRenderMs = 0;
  let effect = { direction: 0, maxOffset: 0, activeStart: 0 };

  // Invert the reference's four-stop map, retaining its tonal bands: dark edges,
  // light exposure, dark trough, light core. A flat two-stop fill loses contrast.
  const palette = new Uint8Array(256 * 3);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    const light = t < .3 ? smooth(t / .3) : t < .6 ? 1 - smooth((t - .3) / .3) : smooth((t - .6) / .4);
    [177, 170, 163].forEach((channel, c) => { palette[i * 3 + c] = 13 + (channel - 13) * light; });
  }

  function measure() {
    resizeFrame = 0;
    if (disposed || !ready) return;
    const style = getComputedStyle(title);
    ink.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const text = title.textContent.trim();
    const metrics = ink.measureText(text);
    const bounds = container.getBoundingClientRect();
    const cap = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    const top = baseline.getBoundingClientRect().top - bounds.top - metrics.actualBoundingBoxAscent;
    // Never render over the upper 42% of the letters, including their top edge.
    const guard = cap * .42;
    const cssWidth = container.clientWidth;
    // Only the deliberately soft echo is downsampled; live type stays full-res.
    const scale = Math.min(1, 640 / cssWidth);
    const width = Math.ceil(cssWidth * scale);
    // Original HTML: 35 echoes × 23.2px offset at a 341px font size.
    const maxTrail = parseFloat(style.fontSize) * (35 * 23.2 / 341);
    const extent = cap + maxTrail * 1.08 + cap * .15;
    const height = Math.ceil(extent * scale);
    geometry = { top, cap, guard, scale, width, height, cssWidth, maxTrail, extent, fontSize: style.fontSize };
    glyph.width = width;
    glyph.height = Math.ceil(cap * scale) + 2;
    for (const layer of [echoes, blurred]) { layer.width = width; layer.height = height; }
    canvas.width = width;
    canvas.height = Math.ceil((extent - guard) * scale);
    Object.assign(canvas.style, {
      top: `${top + guard}px`, width: `${cssWidth}px`, height: `${canvas.height / scale}px`,
    });
    ink.setTransform(scale, 0, 0, scale, 0, 0);
    ink.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    ink.fillStyle = '#fff';
    ink.fillText(text, title.getBoundingClientRect().left - bounds.left, metrics.actualBoundingBoxAscent);
    const hero = container.closest('.hero');
    if (hero) {
      // Reserve the full exposure length before the opaque overview section.
      // This is font/layout-driven, never scroll-driven, so scrolling cannot
      // move the contact plane or cause the next section to jump.
      const needed = Math.ceil(bounds.top - hero.getBoundingClientRect().top + top + extent + cap * .12);
      const value = `${needed}px`;
      if (hero.style.getPropertyValue('--dissolve-min-height') !== value) {
        hero.style.setProperty('--dissolve-min-height', value);
        ScrollTrigger.refresh();
      }
    }
    state.rebase(window.scrollY);
    draw();
  }

  function draw() {
    frame = 0;
    if (disposed || !geometry) return;
    const start = performance.now();
    output.clearRect(0, 0, canvas.width, canvas.height);
    const motion = state.inspect();
    if (reduced.matches || !motion.strength) {
      effect = { direction: motion.direction, maxOffset: 0, activeStart: geometry.guard };
      if (!reduced.matches && motion.direction) draws++;
      return;
    }
    const { width, height, scale, cap, guard, maxTrail } = geometry;
    // Direction changes the playhead only. Every rendering parameter stays on
    // this one exposure path, including its full canvas extent and tonal map.
    const strength = motion.strength;
    const travel = maxTrail * strength;
    const count = 35;
    echo.clearRect(0, 0, width, height);
    // Distance-driven irregular exposure spacing, not a per-letter sine wave.
    for (let i = count; i >= 0; i--) {
      const t = i / count;
      const spacing = t * (1 + .045 * Math.sin(motion.phase + t * 9));
      echo.globalAlpha = Math.pow(1 - t, 1.5);
      echo.drawImage(glyph, 0, travel * spacing * scale);
    }
    echo.globalAlpha = 1;
    blur.clearRect(0, 0, width, height);
    const radius = Math.max(.5, cap * .018 * scale);
    if (supportsBlurFilter) {
      blur.filter = `blur(${radius}px)`;
      blur.drawImage(echoes, 0, 0);
      blur.filter = 'none';
    } else {
      // Portable softening for browsers without CanvasRenderingContext2D.filter.
      blur.globalCompositeOperation = 'lighter';
      blur.globalAlpha = 1 / 25;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
        blur.drawImage(echoes, dx * radius, dy * radius);
      }
      blur.globalAlpha = 1;
      blur.globalCompositeOperation = 'source-over';
    }
    const crop = Math.round(guard * scale);
    const rows = canvas.height;
    const pixels = blur.getImageData(0, crop, width, rows);
    const data = pixels.data;
    const activeStart = guard;
    const seed = Math.floor(motion.phase * 997);
    for (let y = 0; y < rows; y++) {
      const logicalY = y / scale + guard;
      const tail = 1 - smooth((logicalY - cap - travel * .70) / Math.max(cap * .08, travel * .28));
      const mask = smooth((logicalY - activeStart) / (cap * .32)) * tail;
      // Repeated solid echoes otherwise saturate into a uniform gray column.
      // Lower exposure gradually AFTER the original baseline, keeping the
      // body-to-trail seam light while revealing the reference's tonal bands.
      const exposure = 1 - .62 * smooth((logicalY - cap) / Math.max(1, travel * .85));
      for (let x = 0; x < width; x++) {
        const p = (y * width + x) * 4;
        const lum = data[p + 3];
        if (lum < 2 || mask === 0) { data[p + 3] = 0; continue; }
        const hash = Math.imul((x + y * 4099) ^ seed, 1597334677) >>> 0;
        const noise = ((hash >>> 24) / 255 - .5) * 30;
        const level = Math.max(0, Math.min(255, Math.round(lum * exposure + noise)));
        data[p] = palette[level * 3];
        data[p + 1] = palette[level * 3 + 1];
        data[p + 2] = palette[level * 3 + 2];
        data[p + 3] = Math.min(255, lum * 2.5) * mask * smooth(strength * 3);
      }
    }
    output.putImageData(pixels, 0, 0);
    effect = { direction: motion.direction, maxOffset: travel, activeStart };
    draws++;
    lastRenderMs = performance.now() - start;
    maxRenderMs = Math.max(maxRenderMs, lastRenderMs);
  }

  function update() {
    if (disposed || !geometry || reduced.matches) { state.rebase(window.scrollY); return; }
    const rect = canvas.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > innerHeight) { state.rebase(window.scrollY); return; }
    if (state.update(window.scrollY) && !frame) frame = requestAnimationFrame(draw);
  }
  function scheduleMeasure() {
    if (!resizeFrame && !disposed) resizeFrame = requestAnimationFrame(measure);
  }
  function preferenceChanged() { state.rebase(window.scrollY); draw(); }
  const trigger = ScrollTrigger.create({ start: 0, end: 'max', onUpdate: update });
  // The observer catches the cat module's font fit, without changing its layout.
  const observer = new ResizeObserver(scheduleMeasure);
  observer.observe(title);
  observer.observe(container);
  const mutations = new MutationObserver(scheduleMeasure);
  mutations.observe(title, { childList: true, characterData: true, subtree: true });
  // A height-only resize can reposition the hero without changing glyph width.
  // Re-reserve the tail's document space after that layout change as well.
  window.addEventListener('resize', scheduleMeasure, { passive: true });
  reduced.addEventListener('change', preferenceChanged);
  document.fonts.ready.then(() => { ready = true; scheduleMeasure(); });
  const inspection = { inspect: () => ({
    ready: !!geometry && !resizeFrame && !!title.style.fontSize && geometry.fontSize === getComputedStyle(title).fontSize,
    ...state.inspect(), geometry, effect, draws, lastRenderMs, maxRenderMs, reducedMotion: reduced.matches,
  }) };
  window.__louisDissolve = inspection;
  function dispose() {
    disposed = true;
    cancelAnimationFrame(frame); cancelAnimationFrame(resizeFrame);
    trigger.kill(); observer.disconnect(); mutations.disconnect();
    reduced.removeEventListener('change', preferenceChanged);
    window.removeEventListener('resize', scheduleMeasure);
    window.removeEventListener('pagehide', onPageHide);
    canvas.remove();
    if (window.__louisDissolve === inspection) delete window.__louisDissolve;
  }
  function onPageHide(event) { if (!event.persisted) dispose(); }
  window.addEventListener('pagehide', onPageHide);
  return dispose;
}
