import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import './assets/style.css';
import './assets/fontawesome/css/all.css';

createApp(App).use(router).mount('#app');
