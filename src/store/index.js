import Vue from "vue";
import Vuex from "vuex";
import session from "./modules/session";
import writers from "./modules/writers";
import teams from "./modules/teams";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    writers,
    teams
  },
  state: {},
  mutations: {},
  actions: {}
});
