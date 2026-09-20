export const STOP_DELAY_MS = 140;

/** Scroll-position input only: wheel intent at a page edge cannot trigger walking. */
export class CatMotionState {
  constructor(scrollY = 0) {
    this.scrollY = Math.max(0, scrollY);
    this.facing = 1;
    this.moving = false;
    this.walkTime = 0;
  }

  scrollTo(y, secondsPerPixel) {
    const next = Math.max(0, Number.isFinite(y) ? y : this.scrollY);
    const delta = next - this.scrollY;
    this.scrollY = next;
    if (Math.abs(delta) < .01) return false;
    this.facing = delta > 0 ? 1 : -1;
    this.walkTime += Math.abs(delta) * secondsPerPixel;
    this.moving = true;
    return true;
  }

  stop() {
    this.moving = false;
  }

  rebase(y) {
    this.scrollY = Math.max(0, y);
  }
}

export function placement(scrollY, range, minX, maxX) {
  const progress = Math.min(1, Math.max(0, scrollY / Math.max(1, range)));
  return minX + (maxX - minX) * progress;
}

// Interpolate translation and gait with the same response. Smoothing only the
// legs would let planted paws slide independently of the body's travel.
export function sampleScrollPose(current, target, elapsed, moving) {
  const blend = moving ? 1-Math.exp(-Math.max(0, elapsed)/.035) : 1;
  const x = current.x+(target.x-current.x)*blend;
  const time = current.time+(target.time-current.time)*blend;
  const settled = Math.abs(target.x-x)<.05 && Math.abs(target.time-time)<.0001;
  return settled ? { ...target, settled: true } : { x, time, settled: false };
}

export function sampledFloor(time, calibration) {
  const t = ((time % calibration.duration) + calibration.duration) % calibration.duration;
  const frame = t * calibration.samples_per_second;
  const i = Math.floor(frame);
  const fraction = frame-i;
  return calibration.ground[i]*(1-fraction) + calibration.ground[i+1]*fraction;
}
