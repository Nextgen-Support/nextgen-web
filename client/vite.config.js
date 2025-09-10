import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { readdirSync, copyFileSync, existsSync, mkdirSync } from 'fs';

// Function to copy public directory
const copyPublicFolder = () => {
  return {
    name: 'copy-public-folder',
    apply: 'build',
    generateBundle() {
      const publicDir = resolve(fileURLToPath(import.meta.url), '../public');
      const outDir = resolve(fileURLToPath(import.meta.url), '../dist');
      
      const copyRecursiveSync = (src, dest) => {
        const entries = readdirSync(src, { withFileTypes: true });
        
        if (!existsSync(dest)) {
          mkdirSync(dest, { recursive: true });
        }
        
        for (const entry of entries) {
          const srcPath = resolve(src, entry.name);
          const destPath = resolve(dest, entry.name);
          
          if (entry.isDirectory()) {
            copyRecursiveSync(srcPath, destPath);
          } else {
            copyFileSync(srcPath, destPath);
          }
        }
      };
      
      if (existsSync(publicDir)) {
        copyRecursiveSync(publicDir, outDir);
      }
    },
  };
};

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    copyPublicFolder(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep video files in their original directory structure
          if (assetInfo.name && assetInfo.name.endsWith('.mp4')) {
            return 'asset/videos/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Ensure public assets are copied as-is
    assetsInlineLimit: 0, // Disable inlining of assets
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