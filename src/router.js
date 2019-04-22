import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home.vue";
import SignUp from "./components/SignUp/SignUp.vue";
import SignIn from "./components/SignIn/SignIn.vue";
import isAllowed from "./utils/authGuard";
import MainApp from "./components/MainApp/MainApp.vue";
import Dashboard from "./components/MainApp/Dashboard/Dashboard.vue";
import Writers from "./components/MainApp/Writers/Writers.vue";
import Teams from "./components/MainApp/Teams/Teams.vue";

Vue.use(Router);

const mainAppChildren = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/writers",
    name: "Writers",
    component: Writers
  },
  {
    path: "/teams",
    name: "Teams",
    component: Teams
  }
];

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/sign-in",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/dashboard",
      component: MainApp,
      children: mainAppChildren
    }
  ]
});

router.beforeResolve((to, from, next) => {
  next(isAllowed(to.name));
});

export default router;
