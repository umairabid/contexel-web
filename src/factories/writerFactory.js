import apiClient from "../utils/apiClient";

export default {
  save(writer, handleSuccess) {
    const promise = writer.id
      ? apiClient("PUT", `/writers/${writer.id}`, { writer })
      : apiClient("POST", "/writers", { writer });
    return promise.then(handleSuccess);
  },
  fetchWriters(handleSuccess) {
    return apiClient("GET", "/writers").then(handleSuccess);
  },
  delete(id, handleSuccess) {
    apiClient("DELETE", `/writers/${id}`).then(handleSuccess);
  }
};
