import writerFactory from "../../factories/writerFactory";

export default {
  state: {
    writers: [{ name: "Blah" }]
  },
  mutations: {
    addWriter(state, writer) {
      const existingWriter = state.writers.find(w => writer.id === w.id);
      if (existingWriter)
        state.writers[state.writers.indexOf(existingWriter)] = writer;
      else state.writers.push(writer);
      state.writers = state.writers.concat([]);
    },
    replaceWriters(state, writers) {
      state.writers = writers;
    },
    remove(state, id) {
      state.writers = state.writers.filter(w => w.id != id);
    }
  },
  actions: {
    saveWriter({ commit }, writer) {
      return writerFactory.save(writer, commit.bind(null, "addWriter"));
    },
    getWriters({ commit }) {
      return writerFactory.fetchWriters(commit.bind(null, "replaceWriters"));
    },
    deleteWriter({ commit }, id) {
      return writerFactory.delete(id, commit.bind(null, "remove", id));
    }
  },
  getters: {
    writers: state => state.writers
  }
};
