import Vue from 'vue'
import Router from 'vue-router'
import ViewMainFeed from './views/ViewMainFeed.vue'
import ViewLogin from './views/ViewLogin.vue'
import ViewRegister from './views/ViewRegister.vue'
import ViewPersonalFeed from './views/ViewPersonalFeed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'view_login',
      component: ViewLogin
    },
    {
      path: '/register',
      name: 'view_register',
      component: ViewRegister
    },
    {
        path: '/user/:id',
        name: 'view_personal_feed',
        component: ViewPersonalFeed
    },
    {
        path: '/main',
        name: 'view_main_feed',
        component: ViewMainFeed
    }

      /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( webpackChunkName: "about"  './views/About.vue')
    }
    */
  ]
})
