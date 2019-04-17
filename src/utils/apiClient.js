import { getUser } from "../utils/storage";

const url = "http://localhost:3000";

export default function apiClient(method, endpoint, payload) {
  return fetch(`${url}${endpoint}`, {
    method,
    headers: getHeaders(),
    body: JSON.stringify(payload)
  }).then(handleResponse)
}

function handleResponse(res) {
  return res.json();
}

function getHeaders() {
  return {
    "Content-Type": "application/json",
    "Auth-Token": getUser() && getUser().access_token
  }
}