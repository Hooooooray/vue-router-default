import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect:'/home',
        name: 'main',
        component: () => import('../views/MainView.vue'),
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/HomeView.vue')
            },
            {
                path: 'menu',
                name: 'menu',
                component: () => import('../views/MenuView.vue')
            },
            {
                path: 'setting',
                name:'setting',
                component:()=>import('../views/SettingView.vue')
            }
        ]
    },



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router





