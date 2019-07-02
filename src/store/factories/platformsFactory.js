import apiClient from "../../utils/apiClient";

export default {
  get() {
    return apiClient("GET", "/platforms");
  },
  remove(id) {
    return apiClient("DELETE", "/platforms/" + id);
  },
  save(platform) {
    return apiClient("POST", "/platforms", { platform });
  }
};
