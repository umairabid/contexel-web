import apiClient from "../../utils/apiClient";

export default {
  save(team) {
    const promise = team.id
      ? apiClient("PUT", `/teams/${team.id}`, { team })
      : apiClient("POST", "/teams", { team });
    return promise;
  },
  get(id) {
    return !id ? apiClient("GET", "/teams") : apiClient("GET", `/teams/${id}`);
  },
  remove(id) {
    return apiClient("DELETE", `/teams/${id}`);
  }
};
