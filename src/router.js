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
import Tasks from "./components/MainApp/Tasks/Tasks.vue";
import TaskDetail from "./components/MainApp/TaskDetail/TaskDetail.vue";
import TaskInfo from "./components/MainApp/TaskDetail/TaskInfo/TaskInfo.vue";
import TaskSubmissions from "./components/MainApp/TaskDetail/TaskSubmissions/TaskSubmissions.vue";
import TaskSubmission from "./components/MainApp/TaskDetail/TaskSubmission/TaskSubmission.vue";

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
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/tasks/:id",
    component: TaskDetail,
    children: [
      {
        path: "",
        name: "TaskInfo",
        component: TaskInfo
      },
      {
        path: "/tasks/:id/submissions",
        name: "TaskSubmissions",
        component: TaskSubmissions,
        children: [
          {
            path: "/tasks/:id/submissions/create",
            name: "CreateTaskSubmission",
            component: TaskSubmission
          }
        ]
      }
    ]
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
