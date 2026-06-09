import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industries } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Industries() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".industry-row", {
        opacity: 0,
        x: -60,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-lime px-5 py-28 text-ink md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
          Who It's For
        </p>
        <h2 className="display mb-12 text-5xl md:text-7xl">Built For Brands Like Yours</h2>

        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {industries.map((item, i) => (
            <div
              key={item}
              className="industry-row group flex cursor-default items-center justify-between py-6 transition-all hover:px-4"
            >
              <div className="flex items-center gap-6">
                <span className="display text-xl text-ink/40">0{i + 1}</span>
                <span className="display text-3xl transition-transform group-hover:translate-x-2 md:text-6xl">
                  {item}
                </span>
              </div>
              <span className="text-2xl opacity-0 transition-opacity group-hover:opacity-100 md:text-4xl">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
