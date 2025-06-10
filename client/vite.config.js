import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory of vite.config.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // corrected alias path
    },
  },
  // root is already __dirname by default, so you can remove this line or keep if you want:
  // root: __dirname,

  build: {
    outDir: path.resolve(__dirname, "../dist"), // builds outside client folder, optional
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      format: {
        comments: false,
      },
      mangle: true,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'sonner', 'lucide-react'],
        },
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
