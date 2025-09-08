import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
  server: {
    open: true,
    port: 3000,
    strictPort: true,
    host: true,
    hmr: {
      port: 3000,
    },
    // Support for SPA fallback and deep linking
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /^\/support/, to: '/support/index.html' },
      ]
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
});