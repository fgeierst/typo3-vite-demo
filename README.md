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


## Control Vite dev server

	ddev vite-serve start|stop


## Build JS and CSS

	ddev pnpm build