import { useEffect, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="display text-2xl tracking-tight text-cream md:text-3xl">
          STUDIO<span className="text-punch">.</span>WILLOW
        </a>

        <ul className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-cream/70 transition-colors hover:text-punch"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full bg-punch px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-milk transition-transform hover:scale-105 md:px-7 md:text-sm"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}
