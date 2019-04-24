import Vue from "vue";
import App from "./App/App.vue";
import router from "./router";
import store from "./store/index";
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
