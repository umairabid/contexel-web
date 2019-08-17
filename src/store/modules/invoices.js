import invoicesFactory from "../factories/invoicesFactory";

export default {
  state: {
    invoices: []
  },
  mutations: {
    saveInvoice() {},
    setInvoices(state, invoices) {
      state.invoices = invoices;
    }
  },
  actions: {
    getInvoices({ commit }) {
      invoicesFactory.get().then(commit.bind(null, "setInvoices"));
    },
    saveInvoice({ commit }, data) {
      return invoicesFactory.save(data).then(commit.bind(null, "saveInvoice"));
    }
  },
  getters: {
    invoices: state => state.invoices
  }
};
