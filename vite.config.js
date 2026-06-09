import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Project lives at https://JeremyMcNiece.github.io/studio-willow/ when on
// GitHub Pages, so built assets need that base path. Dev server stays at "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/studio-willow/" : "/",
  plugins: [react(), tailwindcss()],
}));
