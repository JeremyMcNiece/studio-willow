import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TEXT =
  "Anyone can spin up a pretty template. I build websites with strategy baked in — every word, every section, every button engineered to turn a curious visitor into a booked client.";

export default function Message() {
  const root = useRef(null);
  const words = TEXT.split(" ");

  useGSAP(
    () => {
      // Word-by-word illumination as the section is pinned and scrubbed
      gsap.fromTo(
        ".msg-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-ink px-5 py-32 md:py-48">
      <div className="mx-auto max-w-5xl">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.3em] text-punch">
          The Difference
        </p>
        <h2 className="display flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-3xl leading-tight text-cream md:text-6xl">
          {words.map((w, i) => (
            <span key={i} className="msg-word">
              {w}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
