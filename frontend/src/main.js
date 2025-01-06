import { createApp } from 'vue';
import App from './App.vue';

// Bootstrap과 Font Awesome CSS를 node_modules에서 직접 임포트
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).mount('#app');
