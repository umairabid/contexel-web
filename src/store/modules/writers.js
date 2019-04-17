import writerFactory from "../../factories/writers";

export default {
  state: {
    writers: [{name: 'Blah'}]
  },
  mutations: {
    addWriter(state, writer) {
      const existingWriter = state.writers.find(w => writer.id === w.id);
      if(existingWriter)
        state.writers[state.writers.indexOf(existingWriter)] = writer
      else
        state.writers.push(writer)
      state.writers = state.writers.concat([])
    }
  },
  actions: { 
    addWriter({commit}, writer) {
      return writerFactory.add(writer,
        (res) => commit('addWriter', res),
        () => console.log('error')
      )
    }
  },
  getters: {
    writers: (state) => state.writers
  }
}