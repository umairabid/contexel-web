import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home/Home.vue'
import SignUp from './components/SignUp/SignUp.vue'
import SignIn from './components/SignIn/SignIn.vue'
import Dashboard from "./components/Dashboard/Dashboard.vue"
import isAllowed from "./utils/authGuard";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
  ]
})

router.beforeResolve((to, from, next) => {
  next(isAllowed(to.name));
})

export default router;