import { createRouter, createWebHistory } from "vue-router";

import Teste from "./Pages/Teste.vue";
import Layout from "./Layout.vue";

const routes = [
    {
        path: "/",
        component: Layout,
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
