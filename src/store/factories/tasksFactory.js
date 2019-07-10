import apiClient from "../../utils/apiClient";

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
  },
  saveSubmission(submission) {
    const promise = submission.id
      ? apiClient(
          "PUT",
          `/tasks/${submission.task_id}/submissions/${submission.id}`,
          { submission }
        )
      : apiClient("POST", `/tasks/${submission.task_id}/submissions`, {
          submission
        });
    return promise;
  },
  getSubmissions(taskId, id) {
    const endpoint = `/tasks/${taskId}/submissions`;
    return !id
      ? apiClient("GET", endpoint)
      : apiClient("GET", `${endpoint}/${id}`);
  },
  saveComment(comment) {
    const promise = comment.id
      ? apiClient("PUT", `/tasks/${comment.task_id}/comments/${comment.id}`, {
          comment
        })
      : apiClient("POST", `/tasks/${comment.task_id}/comments`, {
          comment
        });
    return promise;
  },
  getComments(taskId, id) {
    const endpoint = `/tasks/${taskId}/comments`;
    return !id
      ? apiClient("GET", endpoint)
      : apiClient("GET", `${endpoint}/${id}`);
  },
  removeComment(taskId, id) {
    return apiClient("DELETE", `/tasks/${taskId}/comments/${id}`);
  },
  getPublications(taskId) {
    return apiClient("GET", `/tasks/${taskId}/publications`);
  }
};
