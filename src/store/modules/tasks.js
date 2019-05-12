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
    },
    addTask(state, task) {
      state.tasks = replaceTupleInCollectionById(
        state.tasks,
        new TaskModel(task)
      );
    }
  },
  actions: {
    getTasks({ commit }) {
      tasksFactory.get().then(commit.bind(null, "setTasks"));
    },
    saveTask({ commit }, task) {
      tasksFactory.save(task).then(commit.bind(null, "addTask"));
    }
  },
  getters: {
    tasks: state => state.tasks
  }
};
