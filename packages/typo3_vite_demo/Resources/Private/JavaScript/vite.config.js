export default {
  server: {
    origin: '/'
  },
  publicDir: false, // disable copy `public/` to outDir
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: 'main.js',
    },
    outDir: '../../Public/JavaScript/',
  },
  css: {
    devSourcemap: true,
  }
}
