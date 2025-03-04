import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '../public/router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from './axios'; // Importa la configuración de Axios

const app = createApp(App);

app.config.globalProperties.$axios = axios; // Hace que Axios esté disponible globalmente

app.use(router).mount('#app');
