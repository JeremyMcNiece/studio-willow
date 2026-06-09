import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { asset } from "../constants";

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
    <footer id="contact" ref={root} className="relative overflow-hidden bg-oxblood text-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:py-40">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-cream/60">
          Start a Project
        </p>

        <h2 className="display text-center text-cream">
          <div className="cta-line overflow-hidden">
            <span className="block text-[14vw] leading-[0.95] md:text-[10rem]">Let's build</span>
          </div>
          <div className="cta-line overflow-hidden">
            <span className="block stroke-cream italic-accent text-[14vw] leading-[0.95] md:text-[10rem]">
              something
            </span>
          </div>
          <div className="cta-line overflow-hidden">
            <span className="block text-[14vw] leading-[0.95] md:text-[10rem]">that works</span>
          </div>
        </h2>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:hello@studiowillow.com.au"
            className="rounded-full bg-cream px-10 py-5 text-base font-bold uppercase tracking-[0.2em] text-oxblood transition-transform hover:scale-105"
          >
            hello@studiowillow.com.au
          </a>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-cream/20 pt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70 md:flex-row">
          <img
            src={asset("images/logo-cream.png")}
            alt="Studio Willow"
            className="h-6 w-auto opacity-90"
          />
          <div className="flex gap-6">
            <a href="https://www.instagram.com/" className="transition-colors hover:text-cream">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cream">
              Terms
            </a>
          </div>
          <span>Made w/ love in Brisbane ✦</span>
        </div>
      </div>
    </footer>
  );
}
