<template>
  <div class="modal edit-task-modal">
    <h4>Edit task</h4>
    <form @submit="updateTask">
      <label class="input-group"
        >Task title
        <input v-model="title" type="text" />
      </label>
      <label class="input-group"
        >Task description
        <input v-model="description" type="title" />
      </label>
      <div class="buttons-container">
        <button type="submit">Save</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </form>
  </div>  
</template>

<script>
import store from "@/store";
export default {
  name: "AddTaskModal",
  store: store,
  data: () => ({
    editedTitle: "",
    editedDescription: "",
  }),
  computed: {
    title: {
      get() {
        const editingTask = this.getEditingTask();
        return editingTask.title;
      },
      set(value) {
        this.editedTitle = value;
      },
    },
    description: {
      get() {
        const editingTask = this.getEditingTask();
        return editingTask.description;
      },
      set(value) {
        this.editedDescription = value;
      },
    },
  },
  methods: {
    getEditingTask() {
      const editingTaskId = store.getters.editingTaskId;
      const editingTask = store.getters.getTaskById(editingTaskId);
      return editingTask;
    },
    updateTask(e) {
      e.preventDefault();

      const editingTaskId = store.getters.editingTaskId;
      const updatedTask = {
        title: this.editedTitle,
        description: this.editedDescription,
        id: editingTaskId,
      };
      store.commit("updateTask", updatedTask);
      this.closeModal();
    },
    closeModal() {
      store.commit("setModalShown", null);
      store.commit("setEditingTaskId", null);
    },
  },
  created() {
    this.editedTitle = this.getEditingTask().title;
    this.editedDescription = this.getEditingTask().description;
  },
};
</script>

<style>
.input-group {
  display: block;
}

input {
  display: block;
}
</style>
