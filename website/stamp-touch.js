/* Touch-only presentation. Desktop pointer tracking stays in stamp-hover.js. */
(() => {
  'use strict';
  window.createStampTouch = (cards, render, prepare) => {
    const mobile = matchMedia('(any-pointer: coarse)');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const states = cards.map(card => ({card, current: [0, 0, 0, 0, 0, 0],
      target: [0, 0, 0, 0, 0, 0], velocity: [0, 0, 0, 0, 0, 0],
      contact: null, pulse: null, transfer: false}));
    let frame = 0, previous = 0, generation = 0, touchInput = true;
    const enabled = () => mobile.matches && !reduced.matches;

    function requestDraw() {
      if (frame || !enabled()) return;
      previous = performance.now(); frame = requestAnimationFrame(tick);
    }
    function tick(now) {
      const dt = clamp((now - previous) / 1000, 0, .032);
      previous = now;
      let moving = false;
      for (const state of states) {
        if (state.pulse) {
          const p = clamp((now - state.pulse) / 700, 0, 1);
          // An off-axis arc crosses the existing image-derived normals; no stripe.
          state.target[2] = -.7 + p * 1.4;
          state.target[3] = -.35 + Math.sin(p * Math.PI) * .5;
          state.target[4] = Math.sin(p * Math.PI) ** 1.3 * .95;
          if (p === 1) { state.pulse = null; state.target.fill(0); }
          else moving = true;
        }
        let changing = false;
        const steps = Math.max(1, Math.ceil(dt / (1 / 120))), step = dt / steps;
        for (let i = 0; i < 6; i++) {
          for (let n = 0; n < steps; n++) {
            state.velocity[i] += (200 * (state.target[i] - state.current[i]) - 20 * state.velocity[i]) * step;
            state.current[i] += state.velocity[i] * step;
          }
          if (Math.abs(state.target[i] - state.current[i]) > .001 || Math.abs(state.velocity[i]) > .008) changing = true;
          else { state.current[i] = state.target[i]; state.velocity[i] = 0; }
        }
        if (!changing && !state.contact) state.transfer = false;
        render(state.card);
        moving ||= changing;
      }
      frame = moving ? requestAnimationFrame(tick) : 0;
    }

    function release(state) {
      state.contact = null; state.pulse = null; state.target.fill(0); requestDraw();
    }

    function aim(state, event) {
      const rect = state.card.element.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width * 2 - 1, -1, 1);
      const y = clamp((event.clientY - rect.top) / rect.height * 2 - 1, -1, 1);
      state.target = [-y * 10, x * 10, x, y, 1, 0];
      requestDraw();
    }
    let finger = null;
    function routeFinger() {
      if (!enabled() || !finger) return;
      const hit = document.elementFromPoint(finger.clientX, finger.clientY)?.closest('.sp-stamp');
      states.forEach(state => {
        if (state.card.element === hit && state.card.free >= .99) {
          const entering = !state.contact;
          state.pulse = null; state.contact = finger;
          if (entering) { generation++; prepare(); }
          aim(state, finger);
        } else if (state.contact) release(state);
      });
    }
    function trackFinger(event) {
      if (!enabled()) return;
      touchInput = true;
      const point = event.touches.length === 1 ? event.touches[0] : null;
      finger = point ? {clientX: point.clientX, clientY: point.clientY} : null;
      if (finger) routeFinger();
      else states.forEach(release);
    }
    // Native scrolling cancels Pointer Events. Passive Touch Events keep reporting
    // the real finger, even when the gesture began outside the postage artwork.
    // Never capture the gesture or preventDefault: passing across a stamp is enough.
    for (const type of ['touchstart', 'touchmove']) {
      document.addEventListener(type, trackFinger, {passive: true});
    }
    for (const type of ['touchend', 'touchcancel']) {
      document.addEventListener(type, () => {
        finger = null; states.forEach(release);
      }, {passive: true});
    }
    // The page can move beneath a nearly stationary finger while scrolling.
    window.addEventListener('scroll', routeFinger, {passive: true});

    function reset(immediate = false, keepIndex = -1) {
      generation++; finger = null;
      for (const [index, state] of states.entries()) {
        release(state);
        state.transfer = enabled() && index === keepIndex;
        if ((immediate || !enabled()) && !state.transfer) {
          state.current.fill(0); state.velocity.fill(0);
        }
      }
      if (immediate) { cancelAnimationFrame(frame); frame = 0; }
      states.forEach(state => render(state.card));
      if (enabled()) requestDraw();
    }
    function reveal() {
      if (!enabled() || !touchInput) return;
      const ticket = ++generation;
      Promise.resolve(prepare()).then(() => {
        if (ticket !== generation || !enabled() || document.hidden) return;
        const start = performance.now();
        states.forEach((state, i) => {
          if (state.card.free >= .99 && state.card.surface && !state.contact) state.pulse = start + i * 100;
        });
        requestDraw();
      });
    }
    mobile.addEventListener('change', () => reset(true));
    reduced.addEventListener('change', () => reset(true));
    return {
      get enabled() { return enabled(); },
      sample(card) {
        if (!enabled() || !touchInput) return null;
        const state = states[cards.indexOf(card)];
        return {values: state.current, transfer: state.transfer};
      },
      useMouse() { if (touchInput) { touchInput = false; reset(true); } },
      reset, reveal
    };
  };
})();
