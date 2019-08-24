import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Login from '@/components/login-component';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
  mode: 'history',
});
