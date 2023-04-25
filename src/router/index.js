import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/About.vue'
import HomeView from '../views/Home.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
