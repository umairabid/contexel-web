import Vue from "vue";
import Vuex from "vuex";
import session from "./modules/session";
import writers from "./modules/writers";
import teams from "./modules/teams";
import tasks from "./modules/tasks";
import platforms from "./modules/platforms";
import invoices from "./modules/invoices";

Vue.use(Vuex);

import apiClient from "../utils/apiClient";

export default new Vuex.Store({
  modules: {
    session,
    writers,
    teams,
    tasks,
    platforms,
    invoices
  },
  state: {
    dashboard: {}
  },
  mutations: {
    setDashboard(state, data) {
      this.state.dashboard = data;
    }
  },
  actions: {
    getDashboard({ commit }) {
      apiClient("GET", "/dashboard").then(commit.bind(null, "setDashboard"));
    }
  },
  getters: {
    dashboard: state => state.dashboard
  }
});
