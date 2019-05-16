import tasksFactory from "../../factories/tasksFactory";
import { replaceTupleInCollectionById } from "../../helpers/functions";
import { TaskModel } from "../models/taskModels";

export default {
  state: {
    tasks: [],
    currentTask: {}
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
    },
    setCurrentTask(state, task) {
      state.currentTask = new TaskModel(task);
    }
  },
  actions: {
    getTask({ commit }, id) {
      tasksFactory.get(id).then(commit.bind(null, "setCurrentTask"));
    },
    getTasks({ commit }) {
      tasksFactory.get().then(commit.bind(null, "setTasks"));
    },
    saveTask({ commit }, task) {
      tasksFactory.save(task).then(commit.bind(null, "addTask"));
    }
  },
  getters: {
    tasks: state => state.tasks,
    currentTask: state => state.currentTask
  }
};
