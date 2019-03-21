import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Main.vue'),
      children: [
        {
          path: '',
          component: () => import('./components/MainHome.vue'),
        },
        {
          path: 'personal',
          component: () => import('./components/MainPersonal.vue'),
        },
      ],
    },
    {
      path: '*',
      component: () => import('./components/Page404.vue'),
    },
  ],
});
