import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { work, asset } from "../constants";

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
          scale: 0.88,
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
      <div className="pointer-events-none absolute left-5 top-20 z-20 md:left-10 md:top-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-oxblood">Selected Work</p>
        <h2 className="display text-5xl md:text-7xl">The Work</h2>
      </div>

      <div ref={track} className="flex h-full w-max">
        {work.map((p, i) => (
          <article
            key={p.name}
            className="work-panel relative flex h-screen w-screen shrink-0 items-center justify-center px-6"
          >
            <div className="work-inner grid w-full max-w-6xl items-center gap-8 pt-20 md:grid-cols-2 md:gap-14 md:pt-0">
              {/* Copy */}
              <div className="order-2 md:order-1">
                <span
                  className="display text-7xl leading-none md:text-[10rem]"
                  style={{ color: p.color }}
                >
                  0{i + 1}
                </span>
                <p
                  className="mt-2 text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: p.color }}
                >
                  {p.category} · {p.year}
                </p>
                <h3 className="display mt-2 text-4xl text-ink md:text-6xl">{p.name}</h3>
                <p className="mt-4 max-w-md text-base font-light text-ink/70 md:text-lg">
                  {p.desc}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-oxblood px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-milk transition-transform hover:scale-105"
                >
                  Visit Live Site ↗
                </a>
              </div>

              {/* Browser-framed live screenshot */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group order-1 overflow-hidden rounded-2xl bg-espresso shadow-2xl md:order-2"
              >
                <div className="flex items-center gap-2 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-cream/30" />
                  <span className="h-3 w-3 rounded-full bg-cream/30" />
                  <span className="h-3 w-3 rounded-full bg-cream/30" />
                  <span className="ml-3 truncate text-[0.65rem] text-cream/40">
                    {p.url.replace("https://", "")}
                  </span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(p.image)}
                    alt={`${p.name} website`}
                    loading="lazy"
                    className="absolute left-0 top-0 w-full object-cover transition-transform duration-[3500ms] ease-linear group-hover:-translate-y-[60%]"
                  />
                </div>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
