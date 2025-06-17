import { createRouter, createWebHistory } from 'vue-router';
import Homepage from "@/pages/Homepage.vue";
import Bookpage from "@/pages/Bookpage.vue";

const routes = [
    {
        path : "/",
        name : "Home",
        component: Homepage
    },
    {
        path : "/book",
        name : "Book",
        component: Bookpage
    },
]


const router = createRouter({
    'history': createWebHistory(),
    routes
})

export default router;