import { ROLE_MANAGER, ROLE_WRITER, ROLE_GUEST } from "./constants";
import { getRole } from "./storage";

const controlList = {};

const commons = ['Home']

controlList[ROLE_GUEST] = ([
  'SignIn',
  'SignUp'
]);

controlList[ROLE_MANAGER] = commons.concat([
  'Dashboard'
]);

export default function isAllowed(route) {
  const role = getRole();
  const resources = controlList[role];
  return resources.indexOf(route) > -1;
}