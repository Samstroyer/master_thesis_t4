import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Tutorials from "../views/TutorialBrowser.vue"
import TutorialPage from "../views/TutorialPage.vue"
import RemotePage from "../views/RemotePage.vue"
import CreateRepository from "../views/CreateRepository.vue"

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
        name: "TutorialBrowser",
        component: Tutorials
    },
    {
        path: '/tutorial/:id',
        name: "TutorialPage",
        component: TutorialPage,
        props: true
    },
    {
        path: '/quickstart',
        name: "Quickstart",
        component: RemotePage,
    },
    {
        path: '/create',
        name: "CreateRepo",
        component: CreateRepository,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;