import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".hero-line span", { yPercent: 120, duration: 1.1, stagger: 0.12 })
        .from(".hero-sub", { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { opacity: 0, y: 30, duration: 0.6 }, "-=0.6")
        .from(".hero-badge", { opacity: 0, scale: 0.6, duration: 0.6 }, "-=0.8");

      // Headline drifts up & fades as you leave the hero
      gsap.to(".hero-title", {
        yPercent: -16,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });

      // Background photo parallax (Ken-Burns-style slow zoom + drift)
      gsap.to(".hero-bg", {
        yPercent: 18,
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
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
      {/* Real brand photo, full-bleed with warm overlay for legibility */}
      <div
        className="hero-bg absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${asset("images/photo-2.jpg")})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso/80 via-espresso/60 to-oxblood/50" />

      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <span className="hero-badge mb-6 inline-block rounded-full border border-cream/30 bg-cream/10 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-cream backdrop-blur-sm">
          ✦ One-Woman Studio · Brisbane
        </span>

        <h1 className="hero-title display text-cream">
          <div className="hero-line overflow-hidden">
            <span className="block text-[15vw] md:text-[12vw] lg:text-[10rem]">Websites</span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="block text-[15vw] md:text-[12vw] lg:text-[10rem]">
              that <span className="italic-accent text-taupe">book</span>
            </span>
          </div>
          <div className="hero-line overflow-hidden">
            <span className="stroke-cream block text-[15vw] md:text-[12vw] lg:text-[10rem]">
              Clients
            </span>
          </div>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-xl text-base text-cream/85 md:text-lg">
          A pretty website and a website that <em className="italic-accent text-taupe">works</em>{" "}
          are two different things. I design strategy-first sites that turn scrollers into paying
          clients.
        </p>

        <div className="hero-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-oxblood px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-milk transition-transform hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="rounded-full border border-cream/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
          >
            See The Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-cream/70">
        <span className="animate-pulse">Scroll ↓</span>
      </div>
    </section>
  );
}
