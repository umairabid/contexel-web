import { ROLE_MANAGER, ROLE_WRITER } from "../helpers/constants";

const navigation = {};

navigation[ROLE_MANAGER] = [
  { label: "Dashboard", name: "Dashboard", icon: "dashboard" },
  { label: "Writers", name: "Writers", icon: "person" },
  { label: "Teams", name: "Teams", icon: "group" }
];

export default navigation;
