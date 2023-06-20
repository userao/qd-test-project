<template>
  <div class="modal add-task-modal">
    <h4>Add new task</h4>
    <form @submit="addTask">
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
    title: "",
    description: "",
  }),
  methods: {
    addTask(e) {
      e.preventDefault();
      const newTask = { title: this.title, description: this.description };
      store.commit("addTask", newTask);
      this.title = "";
      this.description = "";
      this.closeModal();
    },
    closeModal() {
      store.commit("setModalShown", null);
    },
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
