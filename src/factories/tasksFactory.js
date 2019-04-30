import apiClient from "../utils/apiClient";

export default {
  save(task) {
    const promise = team.id
      ? apiClient("PUT", `/teams/${task.id}`, { task })
      : apiClient("POST", "/teams", { task });
    return promise;
  },
  get(id) {
    return !id ? apiClient("GET", "/tasks") : apiClient("GET", `/tasks/${id}`);
  },
  remove(id) {
    return apiClient("DELETE", `/teams/${id}`);
  }
};
