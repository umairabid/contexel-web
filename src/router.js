import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue';
import SignUp from './components/SignUp/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignUp
    },
  ]
})
