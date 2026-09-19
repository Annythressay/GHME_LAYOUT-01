import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './', plugins: [react(), tailwindcss()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: {
    outDir: '../assets/first-aid', emptyOutDir: true,
    lib: { entry: 'src/main.jsx', formats: ['es'], fileName: () => 'game.js' },
  },
});
