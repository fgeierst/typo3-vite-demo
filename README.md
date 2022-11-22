# TYPO3 Vite Demo

Integrate ViteJS build pipeline and development server with TYPO3.

- https://florian.geierstanger.org/blog/typo3-vite
- https://github.com/torenware/ddev-viteserve
- https://vitejs.dev/guide/backend-integration.html

[Open with Gitpod](https://gitpod.io/#https://github.com/fgeierst/typo3-11-tailwind-demo/)

## Prerequisites

- Docker Desktop
- DDEV


## Local installation guide

	git clone https://github.com/fgeierst/typo3-vite-demo.git
	cd typo3-vite-demo
	ddev start
	ddev composer install
	ddev snapshot restore
	
Login via [https://typo3-vite-demo.ddev.site/typo3](https://typo3-vite-demo.ddev.site/typo3) using these credentials:

- Username: `admin`
- Password: `oZim4R7eLEWzzL`


## Control Vite dev server

	ddev vite-serve start|stop


## Build JS and CSS

	ddev pnpm build
