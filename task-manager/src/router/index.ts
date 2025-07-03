/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { isAuthenticated } from "@/utils/auth.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/index.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/auth/login.vue'),
            meta: { guestOnly: true }
        }
    ]
})

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        return '/login'
    }
})

export default router
