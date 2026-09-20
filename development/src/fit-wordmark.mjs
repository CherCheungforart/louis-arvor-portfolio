// Align visible outlines, not the font's advance box and side bearings.
// Font size is the only scale adjustment; X/Y proportions stay untouched.
export function fitWordmark(title, availableWidth) {
  const style = getComputedStyle(title);
  const context = document.createElement('canvas').getContext('2d');
  const text = title.textContent.trim();
  const measure = size => {
    context.font = `${style.fontWeight} ${size}px ${style.fontFamily}`;
    context.fontKerning = style.fontKerning;
    return context.measureText(text);
  };
  let size = 100;
  let metrics = measure(size);
  for (let i=0;i<3;i++) {
    size *= availableWidth / (metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight);
    metrics = measure(size);
  }
  title.style.fontSize = `${size}px`;
  // Positive left bearing means ink starts left of the text origin.
  title.style.left = `${metrics.actualBoundingBoxLeft}px`;
}
