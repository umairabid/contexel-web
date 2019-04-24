import { ROLE_MANAGER, ROLE_GUEST } from "../helpers/constants";
import { getRole } from "./storage";

const controlList = {};

const commons = ["Home"];

controlList[ROLE_GUEST] = commons.concat(["SignIn", "SignUp"]);

controlList[ROLE_MANAGER] = commons.concat([
  "Dashboard",
  "Writers",
  "Teams",
  "Tasks"
]);

export default function isAllowed(route) {
  const role = getRole();
  const resources = controlList[role];
  return resources.indexOf(route) > -1;
}
