import 'vite/modulepreload-polyfill';
import '../Scss/main.scss';
import { createApp } from 'vue'
import MyCounter from './Components/MyCounter.vue';
import MyGreeting from './Components/MyGreeting.vue';

document.addEventListener('DOMContentLoaded', () => {
	const containerElements = document.querySelectorAll('[data-container="vue"]');
	containerElements.forEach(element => {
		const component = element.getAttribute('data-component');
		switch (component) {
			case 'Counter': {
				createApp(MyCounter).mount(element);
				break;
			}
			case 'Greeting': {
				const message = element.dataset.propMessage;
				const age = Number(element.dataset.propAge);
				createApp(MyGreeting,
					{
						message: message,
						age: age,
					}
				).mount(element);
				break;
			}
		}
	})
})

console.log('Hello Vite, hello TYPO3!');