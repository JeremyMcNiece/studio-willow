import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Work() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".work-panel");

      // Horizontal pin-scroll across the project panels
      const horizontal = gsap.to(track.current, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + track.current.offsetWidth,
          invalidateOnRefresh: true,
        },
      });

      // Subtle inner parallax on each panel's content
      panels.forEach((panel) => {
        gsap.from(panel.querySelector(".work-inner"), {
          scale: 0.85,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontal,
            start: "left center",
            end: "center center",
            scrub: true,
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="work" ref={root} className="relative h-screen overflow-hidden bg-cream text-ink">
      {/* Pinned heading overlay */}
      <div className="pointer-events-none absolute left-5 top-24 z-20 md:left-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-punch">Selected Work</p>
        <h2 className="display text-5xl md:text-7xl">The Work</h2>
      </div>

      <div ref={track} className="flex h-full w-max">
        {work.map((p, i) => (
          <article
            key={p.name}
            className="work-panel relative flex h-screen w-screen shrink-0 items-center justify-center px-6"
          >
            <div
              className="work-inner relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] p-8 md:p-16"
              style={{ backgroundColor: p.color }}
            >
              <span className="display text-[20vw] leading-none text-ink/10 md:text-[12rem]">
                0{i + 1}
              </span>
              <div className="-mt-10 md:-mt-20">
                <p className="text-sm font-bold uppercase tracking-widest text-ink/70">
                  {p.category} · {p.year}
                </p>
                <h3 className="display mt-2 text-5xl text-ink md:text-8xl">{p.name}</h3>
                <p className="mt-4 max-w-md text-base font-medium text-ink/80 md:text-lg">
                  {p.desc}
                </p>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-cream">
                  View Case Study →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
