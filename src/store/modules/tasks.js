import tasksFactory from "../factories/tasksFactory";
import {
  replaceTupleInCollectionById,
  removeById
} from "../../helpers/functions";
import { TaskModel, TaskSubmission, TaskComment } from "../models/taskModels";

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
    saveSubmission(state, submission) {
      state.currentTask.task_submissions = replaceTupleInCollectionById(
        state.currentTask.task_submissions,
        new TaskSubmission(submission)
      );
    },
    saveComment(state, comment) {
      state.currentTask.task_comments = replaceTupleInCollectionById(
        state.currentTask.task_comments,
        new TaskComment(comment)
      );
    },
    setComments(state, comments) {
      state.currentTask.task_comments = comments.map(s => new TaskComment(s));
    },
    removeComment(state, commentId) {
      state.currentTask.task_comments = removeById(
        state.currentTask.task_comments,
        commentId
      );
    },
    setPublications(state, publications) {
      state.currentTask.task_publications = publications;
    },
    addPublication(state, publication) {
      state.currentTask.task_publications = replaceTupleInCollectionById(
        state.currentTask.task_publications,
        publication
      );
    },
    removePublication(state, publicationId) {
      state.currentTask.task_publications = removeById(
        state.currentTask.task_publications,
        publicationId
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
    saveSubmission({ commit }, submission) {
      tasksFactory
        .saveSubmission(submission)
        .then(commit.bind(null, "saveSubmission"));
    },
    getSubmissions({ commit }, taskId) {
      tasksFactory
        .getSubmissions(taskId)
        .then(commit.bind(null, "setSubmissions"));
    },
    saveComment({ commit }, comment) {
      tasksFactory.saveComment(comment).then(commit.bind(null, "saveComment"));
    },
    getComments({ commit }, taskId) {
      tasksFactory.getComments(taskId).then(commit.bind(null, "setComments"));
    },
    removeComment({ commit }, comment) {
      tasksFactory
        .removeComment(comment.task_id, comment.id)
        .then(res => commit("removeComment", comment.id));
    },
    getPublications({ commit }, taskId) {
      tasksFactory
        .getPublications(taskId)
        .then(commit.bind(null, "setPublications"));
    },
    addPublication({ commit }, data) {
      tasksFactory
        .addPublication(data)
        .then(commit.bind(null, "addPublication"));
    },
    deletePublication({ commit }, publication) {
      tasksFactory
        .deletePublication(publication.taskId, publication.id)
        .then(commit.bind(null, "removePublication", publication.id));
    }
  },
  getters: {
    tasks: state => state.tasks,
    currentTask: state => state.currentTask
  }
};
