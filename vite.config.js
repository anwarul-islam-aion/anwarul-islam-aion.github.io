import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative base so the built site works both at the domain root and under
  // a repository subpath such as /portfolio/ on GitHub Pages.
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
  },
});
