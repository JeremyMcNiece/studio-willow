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

      panels.forEach((panel) => {
        gsap.from(panel.querySelector(".work-inner"), {
          scale: 0.86,
          opacity: 0.3,
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
    <section id="work" ref={root} className="relative h-screen overflow-hidden bg-sand text-ink">
      <div className="pointer-events-none absolute left-5 top-24 z-20 md:left-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-oxblood">Selected Work</p>
        <h2 className="display text-5xl md:text-7xl">The Work</h2>
      </div>

      <div ref={track} className="flex h-full w-max">
        {work.map((p, i) => (
          <article
            key={p.name}
            className="work-panel relative flex h-screen w-screen shrink-0 items-center justify-center px-6"
          >
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-inner group relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] bg-espresso p-8 md:p-16"
            >
              {/* Accent glow in the project's brand colour */}
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[90px] opacity-50 transition-opacity duration-500 group-hover:opacity-90"
                style={{ backgroundColor: p.color }}
              />
              <span
                className="display text-[20vw] leading-none md:text-[12rem]"
                style={{ color: p.color, opacity: 0.22 }}
              >
                0{i + 1}
              </span>
              <div className="relative z-10 -mt-10 md:-mt-20">
                <p
                  className="text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: p.color }}
                >
                  {p.category} · {p.year}
                </p>
                <h3 className="display mt-3 text-5xl text-cream md:text-8xl">{p.name}</h3>
                <p className="mt-4 max-w-md text-base font-light text-cream/70 md:text-lg">
                  {p.desc}
                </p>
                <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-cream transition-colors group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                  Visit Live Site ↗
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
