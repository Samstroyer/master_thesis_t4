import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Tutorials from "../views/TutorialBrowser.vue"
import TutorialPage from "../views/TutorialPage.vue"

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/about',
        name: "About",
        component: About
    },
    {
        path: '/tutorials',
        name: "Tutorials",
        component: Tutorials
    },
    {
        path: '/tutorials/:id',
        name: "TutorialPage",
        component: TutorialPage,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;