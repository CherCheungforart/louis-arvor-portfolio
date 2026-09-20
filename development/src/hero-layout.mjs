// The cat and the full-bleed title are one composition. Reserve their space
// below the header instead of anchoring an ever-growing font to the viewport bottom.
export function layoutHero({ artwork, baseline, ascent, descent, catWidth, viewWidth }) {
  const heroStage = artwork.closest('.hero__stage');
  if (!heroStage) return; // Keep the separate model-review page's layout.
  const header = heroStage.querySelector('.hero__header');
  const artLayer = artwork.parentElement;
  const stageTop = heroStage.getBoundingClientRect().top;
  const headerBottom = header.getBoundingClientRect().bottom - stageTop;
  const air = parseFloat(getComputedStyle(artLayer).paddingTop);
  const screenHeight = parseFloat(getComputedStyle(heroStage).minHeight);
  const groundOffset = baseline.getBoundingClientRect().top - ascent - artwork.getBoundingClientRect().top;
  // A little more than the seated model's .6802-unit height also covers the walk.
  const envelope = .74 * catWidth / viewWidth;
  const ground = Math.max(screenHeight * .64, headerBottom + air + envelope);
  const top = ground - groundOffset;
  heroStage.style.setProperty('--wordmark-top', `${top}px`);
  const bottomInset = parseFloat(getComputedStyle(header).paddingTop);
  heroStage.style.setProperty('--hero-composition-height', `${Math.ceil(ground + ascent + descent + bottomInset)}px`);
}
