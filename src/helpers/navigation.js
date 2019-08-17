import { ROLE_MANAGER, ROLE_WRITER } from "../helpers/constants";

const navigation = {};

navigation[ROLE_MANAGER] = [
  { label: "Dashboard", name: "Dashboard", icon: "dashboard" },
  { label: "Writers", name: "Writers", icon: "person" },
  { label: "Teams", name: "Teams", icon: "group" },
  { label: "Tasks", name: "Tasks", icon: "ballot" },
  { label: "Platforms", name: "Platforms", icon: "book" },
  { label: "Invoices", name: "Invoices", icon: "list" }
];

navigation[ROLE_WRITER] = [
  { label: "Dashboard", name: "Dashboard", icon: "dashboard" },
  { label: "Tasks", name: "Tasks", icon: "ballot" },
  { label: "Invoices", name: "Invoices", icon: "list" }
];

export default navigation;
