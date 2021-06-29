import { createRouter, createWebHistory } from "vue-router";

import Teste from "../Pages/Teste.vue";
import Home from "../Pages/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Teste",
        name: "Teste",
        component: Teste,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
