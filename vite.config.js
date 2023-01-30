import { defineConfig } from 'vite';
import ViteFluid from "./vite.fluid.js";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    ViteFluid(),
    vue(),
  ],
  server: {
    origin: '',
  },
  publicDir: false, // disable copy `public/` to outDir
  build: {
    rollupOptions: {
      input: 'packages/typo3_vite_demo/Resources/Private/JavaScript/main.js', // overwrite default .html entry
    },
    manifest: true, // generate manifest.json in outDir
    outDir: 'packages/typo3_vite_demo/Resources/Public/Vite/', // ⚠️ `pnpm build` purges outDir
  },
  css: {
    devSourcemap: true, // disabled by default because of performance reasons
  }
})
