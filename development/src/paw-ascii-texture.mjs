import { CanvasTexture, LinearFilter } from 'three';

export function updateFieldTexture(canvas, previous = null) {
  const [width, height] = previous?.userData.pixelSize || [];
  if (previous && width === canvas.width && height === canvas.height) {
    previous.needsUpdate = true;
    return previous;
  }
  // WebGL's immutable texture storage cannot resize via needsUpdate. Reusing
  // the old allocation leaves stale pixels when shrinking and fails on growth.
  const next = new CanvasTexture(canvas);
  next.minFilter = LinearFilter;
  next.magFilter = LinearFilter;
  next.generateMipmaps = false;
  next.userData.pixelSize = [canvas.width, canvas.height];
  previous?.dispose();
  return next;
}
