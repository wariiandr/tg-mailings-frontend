import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/GroupsView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map