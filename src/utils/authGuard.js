import { ROLE_MANAGER, ROLE_GUEST, ROLE_WRITER } from "../helpers/constants";
import { getRole } from "./storage";

const controlList = {};

const commons = ["Home"];

controlList[ROLE_GUEST] = commons.concat(["SignIn", "SignUp"]);

controlList[ROLE_WRITER] = commons.concat([
  "Dashboard",
  "Tasks",
  "TaskDetail",
  "TaskInfo",
  "TaskSubmissions",
  "TaskPublications",
  "CreateTaskSubmission",
  "UpdateTaskSubmission",
  "TaskComments",
  "Invoices"
]);

controlList[ROLE_MANAGER] = controlList[ROLE_WRITER].concat([
  "Writers",
  "Teams",
  "Platforms",
  "Invoices"
]);

export default function isAllowed(route) {
  const role = getRole();
  const resources = controlList[role];
  return resources.indexOf(route) > -1;
}
