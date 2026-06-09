import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Intro reveal — lines rise into place
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".hero-line span", {
          yPercent: 120,
          duration: 1.1,
          stagger: 0.12,
        })
        .from(
          ".hero-sub",
          { opacity: 0, y: 30, duration: 0.8 },
          "-=0.5"
        )
        .from(
          ".hero-cta",
          { opacity: 0, y: 30, duration: 0.6 },
          "-=0.6"
        )
        .from(".hero-badge", { opacity: 0, scale: 0.6, duration: 0.6 }, "-=0.8");

      // Parallax + scrub-out as you scroll past the hero
      gsap.to(".hero-title", {
        yPercent: -18,
        scale: 0.92,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating blobs parallax
      gsap.to(".blob-1", {
        yPercent: 40,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1 },
      });
      gsap.to(".blob-2", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: 1.5 },
      });
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5"
    >
      {/* Decorative parallax blobs */}
      <div className="blob-1 pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-grape/40 blur-[100px] md:h-[420px] md:w-[420px]" />
      <div className="blob-2 pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-punch/40 blur-[110px] md:h-[460px] md:w-[460px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <span className="hero-badge mb-6 inline-block rounded-full border border-cream/20 bg-cream/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-cream/80 backdrop-blur-sm">
          ✦ One-Woman Studio · Brisbane
        </span>

        <h1 className="hero-title display text-cream">
          <div className="hero-line overflow-hidden">
            <span className="block text-[18vw] md:text-[13vw] lg:text-[11rem]">
              Websites
            </span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="block text-[18vw] text-punch md:text-[13vw] lg:text-[11rem]">
              That Book
            </span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="stroke-text block text-[18vw] md:text-[13vw] lg:text-[11rem]">
              Clients
            </span>
          </div>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-xl text-base text-cream/70 md:text-lg">
          A pretty website and a website that <em className="text-lime not-italic">works</em> are
          two different things. I design strategy-first sites that turn scrollers into paying
          clients.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-punch px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-milk transition-transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="rounded-full border border-cream/30 px-8 py-4 text-sm font-extrabold uppercase tracking-widest text-cream transition-colors hover:border-punch hover:text-punch"
          >
            See The Work
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-bold uppercase tracking-[0.3em] text-cream/50">
        <span className="animate-pulse">Scroll ↓</span>
      </div>
    </section>
  );
}
