import 'vite/modulepreload-polyfill';
import '../Scss/main.scss';
import { createApp } from 'vue'
import Counter from './Components/Counter.vue';
import Greeting from './Components/Greeting.vue';

document.addEventListener('DOMContentLoaded', () => {
  const containerElements = document.querySelectorAll('[data-container="vue"]');
  containerElements.forEach(element => {
    const component = element.getAttribute('data-component');
    switch (component) {
      case 'Counter': {
        createApp(Counter).mount(element);
        break;
      }
      case 'Greeting': {
        createApp(Greeting).mount(element);
        break;
      }
    }
  })
})

console.log('Hello Vite, hello TYPO3!');
