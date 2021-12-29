import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  // 路由重定向
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/pages/home/home-page'),
  },
  {
    path: '/about',
    component: () => import('@/pages/about/about-page'),
  },
  {
    path: '/todo',
    component: () => import('@/pages/todo/todo-page'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  // to.path = '/login'
  return true;
});

export default router;
