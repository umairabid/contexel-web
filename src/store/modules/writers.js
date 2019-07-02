import writerFactory from "../factories/writerFactory";
import { replaceTupleInCollectionById } from "../../helpers/functions";

export default {
  state: {
    writers: []
  },
  mutations: {
    addWriter(state, writer) {
      state.writers = replaceTupleInCollectionById(state.writers, writer);
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
      return writerFactory.save(writer).then(commit.bind(null, "addWriter"));
    },
    getWriters({ commit }) {
      return writerFactory
        .fetchWriters()
        .then(commit.bind(null, "replaceWriters"));
    },
    deleteWriter({ commit }, id) {
      return writerFactory.delete(id).then(commit.bind(null, "remove", id));
    }
  },
  getters: {
    writers: state => state.writers
  }
};
