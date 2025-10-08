import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "PageBuilder",
      fileName: (format) => `page-builder.${format}.js`,
      formats: ["es"], // ESM format for modern bundlers
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // externalize React dependencies
    },
  },
});

