import apiClient from "../../utils/apiClient";

export default {
  get() {
    return apiClient("GET", "/invoices");
  },
  save(invoice) {
    return apiClient("POST", "/invoices", { invoice });
  }
};
