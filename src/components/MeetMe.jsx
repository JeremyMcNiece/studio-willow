import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MeetMe() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".meet-photo", {
        scale: 1.2,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 70%" },
      });
      gsap.from(".meet-copy > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 65%" },
      });
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="bg-ink px-5 py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2 md:gap-20">
        {/* Portrait placeholder with personality */}
        <div className="meet-photo relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-grape via-punch to-lime">
          <div className="absolute inset-0 grid place-items-center">
            <span className="display text-[12rem] text-ink/20">R</span>
          </div>
          <div className="absolute bottom-6 left-6 rounded-full bg-ink/80 px-5 py-2 text-sm font-bold uppercase tracking-widest text-cream backdrop-blur">
            Rachel · Founder
          </div>
        </div>

        <div className="meet-copy">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-punch">Meet Me</p>
          <h2 className="display text-5xl text-cream md:text-7xl">
            The Human <span className="text-punch">Edge</span>
          </h2>
          <p className="mt-6 text-lg text-cream/70">
            Hi, I'm Rachel — the whole studio. Templates and AI tools can spit out a website, but
            they can't understand your clients, your story, or what makes someone finally hit
            "book now."
          </p>
          <p className="mt-4 text-lg text-cream/70">
            That's the part I obsess over: strategy, brand taste, and real human guidance. You get
            a partner who thinks about your business — not a faceless agency or a form-builder.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["14", "Days to launch"],
              ["1:1", "Always with me"],
              ["100%", "Strategy-first"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-4">
                <div className="display text-3xl text-lime md:text-4xl">{n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-cream/60">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
