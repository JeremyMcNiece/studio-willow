# STUDIO WILLOW — SPYLT-style immersive site

A bold, scroll-driven rebuild of [studiowillow](https://leafy-paprenjak-a1d4ca.netlify.app/),
inspired by the immersive "endless flow" feel of [spylt.com](https://spylt.com).

## Stack

- **React + Vite** — fast SPA build
- **GSAP + ScrollTrigger** — pinning, scrubbed reveals, parallax, horizontal scroll
- **Lenis** — buttery smooth scrolling
- **Tailwind CSS v4** — styling with a custom SPYLT-energy theme

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Deploy to Netlify

This repo includes `netlify.toml`. Either:

- **Drag & drop**: run `npm run build`, then drag the `dist/` folder into Netlify, or
- **Git deploy**: connect the repo — Netlify auto-detects `npm run build` → `dist`.

## What's inside

| Section | SPYLT-style effect |
|---|---|
| Hero | Chunky broken type, staggered line reveal, parallax blobs, scrub-out |
| Marquee | Infinite drift that skews with scroll velocity |
| Message | Word-by-word illumination on scrubbed scroll |
| The Work | **Pinned horizontal scroll** gallery of case studies |
| Services | Staggered card reveals with accent glow |
| Industries | Hover-reactive list rows |
| Meet Me | Scaling portrait reveal + animated stats |
| Footer/CTA | Big broken headline reveal |

## Customise

- Content lives in `src/constants/index.js`
- Colors & fonts in the `@theme` block of `src/index.css`
- Swap the portrait gradient / project colors for real imagery in the components
