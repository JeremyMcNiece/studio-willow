import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function MeetMe() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".meet-photo img", {
        scale: 1.25,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
      gsap.from(".meet-photo", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
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
    <section id="about" ref={root} className="bg-cream px-5 py-28 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2 md:gap-20">
        <div className="meet-photo relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
          <img
            src={asset("images/photo-3.jpg")}
            alt="Rachel, founder of Studio Willow"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 rounded-full bg-espresso/85 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur">
            Rachel · Founder
          </div>
        </div>

        <div className="meet-copy">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-oxblood">Meet Me</p>
          <h2 className="display text-5xl text-ink md:text-7xl">
            The human <span className="italic-accent text-oxblood">edge</span>
          </h2>
          <p className="mt-6 text-lg font-light text-ink/75">
            Hi, I'm Rachel — the whole studio. Templates and AI tools can spit out a website, but
            they can't understand your clients, your story, or what makes someone finally hit
            "book now."
          </p>
          <p className="mt-4 text-lg font-light text-ink/75">
            That's the part I obsess over: strategy, brand taste, and real human guidance. You get
            a partner who thinks about your business — not a faceless agency or a form-builder.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              ["14", "Days to launch"],
              ["1:1", "Always with me"],
              ["100%", "Strategy-first"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-ink/10 bg-milk p-4">
                <div className="display text-3xl text-oxblood md:text-4xl">{n}</div>
                <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink/60">
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
