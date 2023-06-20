import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    modalShown: null,
    editingTaskId: null,
    tasks: [],
  },
  mutations: {
    addTask(state, newTask) {
      let newTaskId = Math.random();

      function checkUniquness(id) {
        return state.tasks.every((task) => task.id !== id);
      }

      let isUnique = checkUniquness(newTaskId);

      while (!isUnique) {
        newTaskId = Math.random();
        isUnique = checkUniquness(newTaskId);
      }

      state.tasks = [...state.tasks, { ...newTask, id: newTaskId }];
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
    updateTask(state, updatedTask) {
      let taskPos;
      state.tasks.every((task, i) => {
        if (task.id === updatedTask.id) {
          taskPos = i;
          return false;
        }
        return true;
      });
      state.tasks.splice(taskPos, 1, updatedTask);
    },
    setModalShown(state, modalType) {
      state.modalShown = modalType;
    },
    setEditingTaskId(state, taskId) {
      state.editingTaskId = taskId;
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    isAdding: (state) => state.modalShown === "adding task",
    isEditing: (state) => state.modalShown === "editing task",
    editingTaskId: (state) => state.editingTaskId,
    getTaskById: (state) => (id) => {
      return state.tasks.find((task) => task.id === id);
    },
  },
  plugins: [vuexLocal.plugin],
});
