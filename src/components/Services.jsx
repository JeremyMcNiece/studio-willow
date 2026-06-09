import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const accentMap = {
  punch: "var(--color-punch)",
  grape: "var(--color-grape)",
};

export default function Services() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".services-head span", {
        yPercent: 120,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="services" ref={root} className="bg-ink px-5 py-28 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 md:mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-punch">
            Work With Me
          </p>
          <h2 className="services-head display text-6xl text-cream md:text-8xl">
            <span className="block overflow-hidden">
              <span className="block">Two Ways</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block stroke-text">To Launch</span>
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card group relative flex flex-col overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/[0.03] p-8 transition-colors hover:bg-cream/[0.06] md:p-12"
            >
              <div
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[80px] transition-opacity duration-500 group-hover:opacity-80"
                style={{ backgroundColor: accentMap[s.accent], opacity: 0.4 }}
              />
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-milk"
                    style={{ backgroundColor: accentMap[s.accent] }}
                  >
                    {s.tag}
                  </span>
                  <span className="display text-2xl text-cream">{s.price}</span>
                </div>

                <h3 className="display text-4xl text-cream md:text-5xl">{s.title}</h3>
                <p className="mt-4 text-base text-cream/70">{s.blurb}</p>

                <ul className="mt-8 space-y-3">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm font-semibold text-cream/90">
                      <span
                        className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-ink"
                        style={{ backgroundColor: accentMap[s.accent] }}
                      >
                        ✓
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-cream transition-colors group-hover:text-punch"
                >
                  Enquire Now →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
