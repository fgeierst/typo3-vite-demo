export default {
  build: {
    lib: {
        entry: 'packages/typo3_vite_demo/Resources/Private/JavaScript/main.js', 
        name: 'Main',
        fileName: (format) => `vite.${format}.js`
      },
      outDir: 'packages/typo3_vite_demo/Resources/Public/JavaScript/', 
  }
}