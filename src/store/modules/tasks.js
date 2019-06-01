import tasksFactory from "../../factories/tasksFactory";
import { replaceTupleInCollectionById } from "../../helpers/functions";
import { TaskModel, TaskSubmission } from "../models/taskModels";

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
    },
    setSubmissions(state, submissions) {
      state.currentTask.task_submissions = submissions.map(
        s => new TaskSubmission(s)
      );
    },
    addSubmission(state, submission) {
      state.currentTask.task_submissions = replaceTupleInCollectionById(
        state.tasks,
        new TaskSubmission(submission)
      );
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
    },
    addSubmission({ commit }, submission) {
      tasksFactory
        .saveSubmission(submission)
        .then(commit.bind(null, "addSubmission"));
    },
    getSubmissions({ commit }, taskId) {
      tasksFactory
        .getSubmissions(taskId)
        .then(commit.bind(null, "setSubmissions"));
    }
  },
  getters: {
    tasks: state => state.tasks,
    currentTask: state => state.currentTask
  }
};
