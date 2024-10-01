import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [svgr(), react()],
  server: {
    open: true,
    port: 3000,
  },
});
