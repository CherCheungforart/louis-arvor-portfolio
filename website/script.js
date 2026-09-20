(() => {
  "use strict";

  const catRig = document.querySelector(".cat-rig");
  const catFrames = [...document.querySelectorAll(".cat-frame")];
  const hero = document.querySelector(".hero");
  const heroStage = document.querySelector(".hero__stage");
  const heroArtwork = document.querySelector(".hero__artwork");
  const heroTitle = document.querySelector(".hero__title");
  const heroHeaderItems = document.querySelectorAll(".hero__identity, .hero__discipline, .hero__hint");
  const overview = document.querySelector(".overview");

  let idleTimer = 0;
  let currentDirection = 1;

  function setSpriteFrame(frameIndex, direction = 1) {
    currentDirection = direction || currentDirection;

    catFrames.forEach((frame) => {
      const column = frameIndex % 4;
      const row = Math.floor(frameIndex / 4);
      const x = column * (100 / 3);
      const y = row * 100;

      frame.style.backgroundPosition = `${x}% ${y}%`;
      frame.style.setProperty("--facing", currentDirection > 0 ? "1" : "-1");
    });
  }

  function showWalking(progress, direction) {
    if (!catRig || progress <= 0.004 || progress >= 0.995) return;

    window.clearTimeout(idleTimer);
    catRig.classList.add("is-walking");
    setSpriteFrame(Math.floor(progress * 64) % 8, direction);

    idleTimer = window.setTimeout(() => {
      catRig.classList.remove("is-walking");
    }, 115);
  }

  if (!window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.add("is-static");
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none" });

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
        gsap.set([heroArtwork, heroTitle, heroHeaderItems, catRig], { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        heroHeaderItems,
        { autoAlpha: 0, y: -9 },
        { autoAlpha: 1, y: 0, duration: 1.05, stagger: 0.12, ease: "power2.out" }
      );

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (Math.abs(self.getVelocity()) > 8) {
              showWalking(self.progress, self.direction);
            }
          },
          onLeave: () => catRig.classList.remove("is-walking"),
          onLeaveBack: () => catRig.classList.remove("is-walking")
        }
      });

      heroTimeline
        .to(heroTitle, {
          scaleX: desktop ? 1.018 : 1,
          transformOrigin: "left bottom",
          duration: 1
        }, 0)
        .to(catRig, {
          x: () => window.innerWidth * (desktop ? 0.75 : 0.69),
          duration: 1
        }, 0.015)
        .to(".hero__hint", {
          autoAlpha: 0,
          y: -8,
          duration: 0.18
        }, 0.04)
        ;

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

      return () => {
        window.clearTimeout(idleTimer);
        catRig.classList.remove("is-walking");
      };
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
