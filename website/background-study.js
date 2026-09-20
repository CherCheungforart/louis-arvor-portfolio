const panel = document.getElementById('background-study');
const tones = {
  ink: {name: '午夜墨蓝', relation: '冷暖对照：衬托暖灰字与旧金纸边。'},
  iris: {name: '鸢尾深紫', relation: '邻近色呼应：连接粉紫花瓣与暮色。'},
  peacock: {name: '深孔雀蓝', relation: '色相对照：突出粉紫花瓣与暖色纸张。'},
};

function chooseTone(key, updateURL = true) {
  const tone = tones[key] || tones.ink;
  const selected = tones[key] ? key : 'ink';
  document.documentElement.dataset.backgroundTone = selected;
  const hex = getComputedStyle(document.documentElement).getPropertyValue('--paper').trim().toUpperCase();
  for (const button of panel.querySelectorAll('[data-tone]')) {
    button.setAttribute('aria-pressed', String(button.dataset.tone === selected));
  }
  panel.querySelector('[data-tone-name]').textContent = tone.name;
  panel.querySelector('[data-tone-relation]').textContent = tone.relation;
  panel.querySelector('[data-tone-hex]').textContent = hex;
  document.querySelector('meta[name="theme-color"]').content = hex;
  if (updateURL) {
    const url = new URL(location.href);
    url.searchParams.set('tone', selected);
    history.replaceState(null, '', url);
  }
}
panel.addEventListener('click', event => {
  // Comparing a color must not trigger the page's outside-click close behavior.
  event.stopPropagation();
  const tone = event.target.closest('[data-tone]');
  if (tone) chooseTone(tone.dataset.tone);
  const jump = event.target.closest('[data-jump]');
  if (jump) {
    const stamps = jump.dataset.jump === 'stamps';
    const target = document.getElementById(stamps ? 'stamp-scene' : jump.dataset.jump);
    target?.scrollIntoView({behavior: 'auto', block: stamps ? 'center' : 'start'});
  }
});
function syncPanelLayer() {
  const dialog = document.querySelector('dialog[open]');
  const layer = dialog || document.body;
  if (panel.parentElement !== layer) layer.appendChild(panel);
  for (const button of panel.querySelectorAll('[data-jump]')) button.disabled = Boolean(dialog);
}
new MutationObserver(syncPanelLayer).observe(document.body, {
  subtree: true, attributes: true, attributeFilter: ['open'],
});
window.addEventListener('popstate', () => chooseTone(new URLSearchParams(location.search).get('tone'), false));
chooseTone(document.documentElement.dataset.backgroundTone, false);
