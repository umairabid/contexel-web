import apiClient from "../utils/apiClient";

export default {
  save(writer) {
    const promise = writer.id
      ? apiClient("PUT", `/writers/${writer.id}`, { writer })
      : apiClient("POST", "/writers", { writer });
    return promise;
  },
  fetchWriters() {
    return apiClient("GET", "/writers");
  },
  delete(id) {
    apiClient("DELETE", `/writers/${id}`);
  }
};
