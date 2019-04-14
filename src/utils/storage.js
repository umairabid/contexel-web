import { ROLE_GUEST } from "./constants";

const IDENTIFIERS = {
  USER: 'user'
}

export function setUser(user) {
  localStorage.setItem(IDENTIFIERS.USER, JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem(IDENTIFIERS.USER))
}

export function getRole() {
  const user = getUser();
  return (user && user.role) || ROLE_GUEST;
}