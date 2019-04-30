import tasksFactory from "../../factories/tasksFactory";
import { replaceTupleInCollectionById } from "../../helpers/functions";
import { TaskModel } from "../models/taskModels";

export default {
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks.map(task => new TaskModel(task));
    }
  },
  actions: {
    getTasks({ commit }) {
      tasksFactory.get().then(commit.bind(null, "setTasks"));
    }
  },
  getters: {
    tasks: state => state.tasks
  }
};
