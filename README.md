# TYPO3 Vite Demo

Integrate ViteJS build pipeline and development server with TYPO3.

- https://github.com/torenware/ddev-viteserve
- https://vitejs.dev/guide/backend-integration.html


## Prerequisites

- Docker Desktop
- DDEV


## Local installation guide

	git clone https://github.com/fgeierst/typo3-vite-demo.git
	cd typo3-vite-demo
	ddev start
	ddev composer install


## Control local ViteJS dev server

	ddev vite-serve start|stop


## Build JS and CSS

	ddev exec node packages/typo3_vite_demo/Resources/Private/JavaScript/node_modules/vite/bin/vite.js build packages/typo3_vite_demo/Resources/Private/JavaScript/