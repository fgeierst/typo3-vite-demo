# TYPO3 Vite Demo

This project demonstrates how to integrate [Vite](https://vitejs.dev/) with with [TYPO3](https://github.com/TYPO3/typo3) both as an optimized CSS/JS build pipeline and a fast local development server. This setup enables Hot Module Reloading, out-of-the-box TypeScript support, SCSS compilation, PostCSS and especially [Vite's plugins](https://github.com/vitejs/awesome-vite#plugins) for Vue, Svelte, React, Preact and Solid.

Watch a demo video at https://florian.geierstanger.org/blog/typo3-vite


## Based on

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
	ddev exec cp .env.example .env
	ddev composer install
	ddev snapshot restore --latest

Login via [typo3-vite-demo.ddev.site/typo3](https://typo3-vite-demo.ddev.site/typo3) using these credentials:

- Username: `admin`
- Password: `oZim4R7eLEWzzL`


## Vite development server

The development server is already running in the background (started by `ddev start`). You can control it with

	ddev vite-serve start|stop

Running `ddev pnpm dev` does the same, but shows Vite's output in the terminal - which is helpful for debugging.

### File watcher

All files that are imported by the main entry point [main.js](https://github.com/fgeierst/typo3-vite-demo/blob/c746ce69dbd42b626c93280f642dc7bb9d7ab973/packages/typo3_vite_demo/Resources/Private/JavaScript/main.js) are watched and trigger a Hot Module Replacement.

Additionally, a [custom Vite plugin](https://github.com/fgeierst/typo3-vite-demo/blob/master/vite.fluid.js) does a full page reload whenever .html, .php, .typoscript or .yaml files are changed.


## Test the production build

	ddev pnpm build

Switch applicationContext to production in _.env_ (or in .ddev/config.yaml under web_environment)

	# TYPO3_CONTEXT="Development/Local"
	TYPO3_CONTEXT="Production/Staging"

This environmental variable is read out in  [setup.typoscript](https://github.com/fgeierst/typo3-vite-demo/blob/master/packages/typo3_vite_demo/Configuration/TypoScript/setup.typoscript#L177) and determines if TYPO3 loads CSS/JS from Vite's local dev server at port 5173 — or the optimized production build assets from _Ressources/Public/_.
