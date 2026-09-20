import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './src/cat-preview.js';
import { mountLouisDissolve } from './src/louis-scroll-dissolve.mjs';

(() => {
  "use strict";

  const heroHeaderItems = document.querySelectorAll(".hero__identity, .hero__discipline");
  const overview = document.querySelector(".overview");

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });
  mountLouisDissolve({
    title: document.querySelector('#hero-title'),
    baseline: document.querySelector('#font-baseline'),
    container: document.querySelector('#artwork'),
    ScrollTrigger,
  });

  const media = gsap.matchMedia();

  media.add(
    {
      desktop: "(min-width: 901px)",
      compact: "(max-width: 900px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      const { desktop, reduceMotion } = context.conditions;

      if (reduceMotion) {
        gsap.set(heroHeaderItems, { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        heroHeaderItems,
        { autoAlpha: 0, y: -9 },
        { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.12, ease: "power2.out" }
      );

      const overviewTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: overview,
          start: "top 96%",
          end: "top 22%",
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      overviewTimeline
        .fromTo(
          ".overview__divider",
          desktop ? { scaleY: 0 } : { scaleX: 0 },
          desktop ? { scaleY: 1, duration: 0.62 } : { scaleX: 1, duration: 0.62 },
          0
        )
        .fromTo(
          ".overview__name, .project-nav",
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.42 },
          0.09
        )
        .fromTo(
          ".profile, .project__number, .project__heading, .project__summary",
          { autoAlpha: 0, y: 38 },
          { autoAlpha: 1, y: 0, stagger: 0.055, duration: 0.46 },
          0.16
        )
        .fromTo(
          ".market-plate",
          { autoAlpha: 0, y: 46, clipPath: "inset(0 0 100% 0)" },
          { autoAlpha: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 0.46 },
          0.36
        )
        .fromTo(
          ".project__link",
          { autoAlpha: 0, x: -18 },
          { autoAlpha: 1, x: 0, duration: 0.26 },
          0.66
        );

    }
  );

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });
    });
  });

  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
})();
