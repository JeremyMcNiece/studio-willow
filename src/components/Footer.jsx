import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".cta-line span", {
        yPercent: 120,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    },
    { scope: root }
  );

  return (
    <footer id="contact" ref={root} className="relative overflow-hidden bg-punch text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:py-40">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
          Start a Project
        </p>

        <h2 className="display text-center text-ink">
          <div className="cta-line overflow-hidden">
            <span className="block text-[16vw] leading-[0.85] md:text-[11rem]">Let's Build</span>
          </div>
          <div className="cta-line overflow-hidden">
            <span className="block stroke-text-ink text-[16vw] leading-[0.85] md:text-[11rem]">
              Something
            </span>
          </div>
          <div className="cta-line overflow-hidden">
            <span className="block text-[16vw] leading-[0.85] md:text-[11rem]">That Works</span>
          </div>
        </h2>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:hello@studiowillow.com.au"
            className="rounded-full bg-ink px-10 py-5 text-base font-extrabold uppercase tracking-widest text-cream transition-transform hover:scale-105"
          >
            hello@studiowillow.com.au
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-ink/20 pt-8 text-sm font-semibold uppercase tracking-widest text-ink/70 md:flex-row">
          <span className="display text-2xl text-ink">STUDIO.WILLOW</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Instagram</a>
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
          <span>Made w/ love in Brisbane ✦</span>
        </div>
      </div>
    </footer>
  );
}
