import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  { path: '/', redirect: '/Login' },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  }
  const tokenStr = sessionStorage.getItem('token');
  if (!tokenStr) {
    return next('/login');
  } else {
    return next();
  }
});
export default router;
