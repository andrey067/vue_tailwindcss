import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/LoginPage.vue';
import HomePage from '@/views/HomePage.vue';
import FundamentosPage from '@/views/FundamentosPage.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/fundamentos",
        name: "Fundamentos",
        component: FundamentosPage,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router