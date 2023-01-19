import FullReload from 'vite-plugin-full-reload';

export default {
  plugins: [
    FullReload(['packages/typo3_vite_demo/Resources/Private/Templates/**/*.html', 'packages/typo3_vite_demo/Resources/Private/Partials/**/*.html'])
  ],
  server: { 
    origin: '',
  },
  publicDir: false, // disable copy `public/` to outDir
  build: {
    rollupOptions: {
      // overwrite default .html entry
      input: 'packages/typo3_vite_demo/Resources/Private/JavaScript/main.js',
    },
    // generate manifest.json in outDir
    manifest: true,
    outDir: 'packages/typo3_vite_demo/Resources/Public/',
  },
  css: {
    devSourcemap: true,
  }
}
