import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("./src/pages/Homepage.vue"),
        },
        // {
        //     path: '/doctor',
        //     name: 'doctor',
        //     component: () => import("./pages/DoctorDetails.vue"),
        // },
    ]
});

export { router };