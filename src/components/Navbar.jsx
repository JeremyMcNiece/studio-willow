import { useEffect, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hero has a dark photo overlay, so the nav starts light-on-dark and flips
  // to dark-on-cream once you scroll onto the page body.
  const onDark = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-cream/90 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a
          href="#top"
          className={`display text-2xl tracking-tight transition-colors md:text-3xl ${
            onDark ? "text-cream" : "text-ink"
          }`}
        >
          Studio<span className="text-oxblood">.</span>Willow
        </a>

        <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`transition-colors hover:text-oxblood ${
                  onDark ? "text-cream/80" : "text-ink/70"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-oxblood px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-milk transition-transform hover:scale-105 md:px-7"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}
