import Vue from "vue";
import App from "./App/App.vue";
import router from "./router";
import store from "./store/index";
import CKEditor from "@ckeditor/ckeditor5-vue";

Vue.use(CKEditor);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
