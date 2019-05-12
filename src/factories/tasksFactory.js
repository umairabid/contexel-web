import apiClient from "../utils/apiClient";

export default {
  save(task) {
    const promise = task.id
      ? apiClient("PUT", `/tasks/${task.id}`, { task })
      : apiClient("POST", "/tasks", { task });
    return promise;
  },
  get(id) {
    return !id ? apiClient("GET", "/tasks") : apiClient("GET", `/tasks/${id}`);
  },
  remove(id) {
    return apiClient("DELETE", `/teams/${id}`);
  }
};
