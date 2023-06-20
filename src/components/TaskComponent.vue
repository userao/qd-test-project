<template>
  <div class="task">
    <h4 class="task__title">{{ title }}</h4>
    <p class="task__description">{{ description }}</p>
    <div class="buttons-container">
      <button @click="showModal">Edit</button>
      <button @click="removeTask">Delete</button>
    </div>
    <hr />
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "TaskComponent",
  methods: {
    removeTask() {
      store.commit("removeTask", this._props.id);
    },
    showModal() {
      store.commit("setModalShown", "editing task");
      store.commit("setEditingTaskId", this._props.id);
    },
  },
  props: {
    id: Number,
    title: String,
    description: String,
  },
};
</script>
