import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: () => import('@/views/Layout'),
        
        meta: { auth: false },
        children: [
            {
                path: '/',
                component: () => import('@/views/Home'),
                meta: { auth: false },
            },
            {
                path: '/fish',
                component: () => import('@/views/Fish'),
                meta: { auth: false },
            },
            {
                path: '/about',
                component: () => import('@/views/About'),
                meta: { auth: false },
            },

        ],
    },

]


const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
