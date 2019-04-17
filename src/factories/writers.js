import apiClient from "../utils/apiClient";

export default {
  add(writer, handleSuccess, handleFailure) {
    apiClient("POST", "/writers", writer)
      .then(handleSuccess)
      .catch(handleFailure)
  }
}