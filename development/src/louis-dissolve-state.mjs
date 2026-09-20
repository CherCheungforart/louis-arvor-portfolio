// A single bounded playhead: reversing input rewinds the same exposure instead
// of resetting its length or switching to a different effect. Time is never an
// input, and visual phase is derived (not accumulated) for exact round trips.
export function createDissolveState(initialY = 0) {
  const range = 260;
  let y = Number.isFinite(initialY) ? Math.max(0, initialY) : 0;
  let direction = 0, playhead = 0;
  return {
    rebase(nextY) { if (Number.isFinite(nextY)) y = Math.max(0, nextY); },
    update(nextY) {
      if (!Number.isFinite(nextY)) return false;
      const position = Math.max(0, nextY);
      const delta = position - y;
      y = position;
      if (!delta) return false;
      direction = Math.sign(delta);
      const before = playhead;
      playhead = Math.max(0, Math.min(range, playhead + delta));
      return playhead !== before;
    },
    inspect() { return { y, direction, playhead, range, phase: playhead * .018, strength: playhead / range }; },
  };
}
