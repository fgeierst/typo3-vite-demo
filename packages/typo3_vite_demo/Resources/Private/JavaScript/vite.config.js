export default {
  publicDir: false, // disable copy `public/` to outDir
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'packages/typo3_vite_demo/Resources/Private/JavaScript/src/main.js'
    },
    outDir: 'packages/typo3_vite_demo/Resources/Public/JavaScript/',
  }
}