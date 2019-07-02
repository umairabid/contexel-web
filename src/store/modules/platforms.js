import platformsFactory from "../factories/platformsFactory";

export default {
  state: {
    platforms: []
  },
  mutations: {
    setPlatforms(state, platforms) {
      state.platforms = platforms;
    },
    removePlatform() {},
    savePlatform() {}
  },
  actions: {
    getPlatforms({ commit }) {
      platformsFactory.get().then(commit.bind(null, "setPlatforms"));
    },
    removePlatform({ commit }, id) {
      return platformsFactory
        .remove(id)
        .then(commit.bind(null, "removePlatform"));
    },
    savePlatform({ commit }, data) {
      return platformsFactory
        .save(data)
        .then(commit.bind(null, "savePlatform"));
    }
  },
  getters: {
    platforms: state => state.platforms
  }
};
