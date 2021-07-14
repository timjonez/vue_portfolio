import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import './assets/style.css';
import './assets/fontawesome/css/all.css';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router).use(VueSweetalert2).mount('#app');
