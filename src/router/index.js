import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/test/model',
      name: 'testModel',
      component: () => import('@/views/TestModel.vue'),
    },
    {
      path: '/monkey',
      name: 'monkey',
      component: () => import('@/views/monkey.vue'),
    },
    {
      path: '/run',
      name: 'run',
      component: () => import('@/views/run.vue'),
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/views/result.vue'),
    },
  ]
});