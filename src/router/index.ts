import { createRouter,createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import TimeLine from '../views/TimeLine.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/timeline',
        name: 'TimeLine',
        component: () => import('../views/TimeLine.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router