import { getUser } from "../utils/storage";

export const apiUrl = "http://localhost:3000";

export default function apiClient(method, endpoint, payload) {
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${endpoint}`, {
      method,
      headers: getHeaders(),
      body: JSON.stringify(payload)
    })
      .then(handleResponse)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
}

function handleSuccess(response) {
  return response.json();
}

function handleError(error) {
  return error.json().then(err => {
    throw err;
  });
}

function handleResponse(res) {
  return res.status <= 299 && res.status >= 200
    ? handleSuccess(res)
    : handleError(res);
}

function getHeaders() {
  return {
    "Content-Type": "application/json",
    "Auth-Token": getUser() && getUser().access_token
  };
}
