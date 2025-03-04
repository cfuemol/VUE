import { createRouter, createWebHistory } from 'vue-router';
import Login from '../src/views/login.vue';
import Registro from '../src/views/Register.vue';
import Planner from '../src/views/planner.vue';
import Landing from '../src/views/landing.vue';
import Ahorcado1 from '../src/views/ahorcado1.vue';
import Ahorcado2 from '../src/views/ahorcado2.vue';
import Ruleta from '../src/views/ruleta.vue';

const routes = [
    { path: '/',
     name: 'Login',
     component: Login 
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/planner',
      name: 'Planner',
      component: Planner
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/ahorcado1',
      name: 'Ahorcado1',
      component: Ahorcado1
    },
    {
      path: '/ahorcado2',
      name: 'Ahorcado2',
      component: Ahorcado2
    },
    {
      path: '/ruleta',
      name: 'Ruleta',
      component: Ruleta
    }
  ];
  
const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;