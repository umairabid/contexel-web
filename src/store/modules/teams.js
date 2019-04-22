import teamFactory from "../../factories/teamFactory";
import { replaceTupleInCollectionById } from "../../helpers/functions";

export default {
  state: {
    teams: []
  },
  mutations: {
    addTeam(state, team) {
      state.teams = replaceTupleInCollectionById(state.teams, team);
    },
    setTeams(state, teams) {
      state.teams = teams;
    },
    remove(state, id) {
      state.teams = state.teams.filter(t => t.id !== id);
    }
  },
  actions: {
    saveTeam({ commit }, team) {
      teamFactory.save(team).then(commit.bind(null, "addTeam"));
    },
    getTeams({ commit }) {
      teamFactory.get().then(commit.bind(null, "setTeams"));
    },
    deleteTeam({ commit }, id) {
      return teamFactory.remove(id).then(commit.bind(null, "remove", id));
    }
  },
  getters: {
    teams: state => state.teams
  }
};
