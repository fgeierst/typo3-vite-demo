# TYPO3 Vite Demo

Integrate ViteJS build pipeline and development server with TYPO3.

- https://florian.geierstanger.org/blog/typo3-vite
- https://github.com/torenware/ddev-viteserve
- https://vitejs.dev/guide/backend-integration.html


## Prerequisites

- [Docker Desktop or Colima](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
- [DDEV](https://ddev.readthedocs.io/en/latest/)
- [Mutagen](https://ddev.readthedocs.io/en/latest/users/install/performance/#mutagen) needs to be enabled for HMR


## Local installation guide

	git clone https://github.com/fgeierst/typo3-vite-demo.git
	cd typo3-vite-demo
	ddev start
	ddev composer install
	ddev snapshot restore --latest
	
Login via [https://typo3-vite-demo.ddev.site/typo3](https://typo3-vite-demo.ddev.site/typo3) using these credentials:

- Username: `admin`
- Password: `oZim4R7eLEWzzL`


## Control Vite dev server

	ddev vite-serve start|stop


## Build JS and CSS

	ddev pnpm build

Set TYPO3_CONTEXT to 'Production/Staging' to test the production build of JS and CSS. See [setup.typoscript](https://github.com/fgeierst/typo3-vite-demo/blob/master/packages/typo3_vite_demo/Configuration/TypoScript/setup.typoscript#L177).
