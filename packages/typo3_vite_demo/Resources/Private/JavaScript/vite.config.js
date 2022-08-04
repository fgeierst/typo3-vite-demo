export default {
  server: {
    origin: 'https://typo3-vite-demo.ddev.site/'
  },
  publicDir: false, // disable copy `public/` to outDir
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'packages/typo3_vite_demo/Resources/Private/JavaScript/main.js'
    },
    outDir: 'packages/typo3_vite_demo/Resources/Public/JavaScript/',
  }
}