import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import Tutorials from "../views/TutorialBrowser.vue"
import TutorialPage from "../views/TutorialPage.vue"
import RemotePage from "../views/QuickstartPage.vue"
import CloneRepository from "../tools/views/CloneRepository.vue"
import InitRepository from "../tools/views/InitRepository.vue"
import ExtraTools from "../views/ExtraTools.vue"
import ProjectExplorer from "../tools/views/ProjectExplorer.vue"

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
        path: '/clone',
        name: "CloneRepo",
        component: CloneRepository,
    },
    {
        path: '/tools',
        name: "ExtraTools",
        component: ExtraTools,
    },
    {
        path: '/init',
        name: "InitRepo",
        component: InitRepository,
    },
    {
        path: '/project-explorer',
        name: "Explorer",
        component: ProjectExplorer,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;