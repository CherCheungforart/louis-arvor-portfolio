// Recolor the user's exact transparent PNG through CSS, without redrawing its shape.
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const cursor = document.createElement('div');
cursor.className = 'pixel-cat-cursor';
cursor.setAttribute('aria-hidden', 'true');
document.body.append(cursor);

// Native dialogs live above ordinary z-index layers. The same cursor must enter
// that top layer with the postcard, then return to the page when it closes.
function syncLayer() {
  const layer = document.querySelector('dialog[open]') || document.body;
  if (cursor.parentElement !== layer) layer.appendChild(cursor);
}
new MutationObserver(syncLayer).observe(document.body, {
  subtree: true, attributes: true, attributeFilter: ['open'],
});

const source = new Image();
source.src = new URL('./assets/cursor/pixel-cat-source-v1.png', import.meta.url).href;
let ready = false;
function reset() {
  cursor.classList.remove('is-visible');
  document.documentElement.classList.remove('has-pixel-cat');
}

window.addEventListener('pointermove', (event) => {
  if (!ready || !finePointer.matches || event.pointerType === 'touch' ||
      event.target.closest?.('input, textarea, [contenteditable="true"]')) {
    reset();
    return;
  }
  document.documentElement.classList.add('has-pixel-cat');
  syncLayer();
  cursor.classList.add('is-visible');
  // No position easing: the point between the eyes remains the exact click hotspot.
  cursor.style.transform = `translate(${event.clientX - 18.2}px, ${event.clientY - 11.2}px)`;
}, { passive: true });

document.documentElement.addEventListener('pointerleave', reset);
window.addEventListener('blur', reset);
document.addEventListener('visibilitychange', () => { if (document.hidden) reset(); });
finePointer.addEventListener('change', reset);
source.decode().then(() => { ready = true; }).catch(reset);
