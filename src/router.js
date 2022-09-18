import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './components/TheHome.vue';
import TheAbout from './components/TheAbout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: TheHome},
        {path: '/about', component: TheAbout}
    ]
});

export default router;