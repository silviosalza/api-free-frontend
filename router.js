import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./src/pages/Homepage.vue"),
        },
         {
             path: '/create',
             name: 'create',
             component: () => import("./src/pages/CreatePost.vue"),
         },
    ]
});

export { router };