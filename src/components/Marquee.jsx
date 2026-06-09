import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { marqueeWords } from "../constants";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Marquee() {
  const root = useRef(null);

  useGSAP(
    () => {
      // Base infinite drift
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 22,
        ease: "none",
      });

      // Scroll velocity nudges the skew for a reactive "flow" feel
      gsap.to(".marquee-track", {
        skewX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const skew = gsap.utils.clamp(-12, 12, self.getVelocity() / -120);
            gsap.to(".marquee-track", { skewX: skew, duration: 0.4, overwrite: true });
          },
        },
      });
    },
    { scope: root }
  );

  const Row = () => (
    <div className="flex shrink-0 items-center">
      {marqueeWords.map((w, i) => (
        <span key={i} className="flex items-center">
          <span className="display text-[8vw] text-cream md:text-[5vw]">{w}</span>
          <span className="mx-6 text-[5vw] text-taupe md:mx-10 md:text-[2.5vw]">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <section ref={root} className="overflow-hidden bg-oxblood py-6 md:py-8">
      <div className="marquee-track flex w-max whitespace-nowrap">
        <Row />
        <Row />
      </div>
    </section>
  );
}
