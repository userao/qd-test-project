<template>
  <div class="tasks-list__container">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      :description="task.description"
    />
    <button class="tasks-list__add-btn" @click="showModal">Add new task</button>
  </div>
</template>

<script>
import Task from "@/components/TaskComponent.vue";
import store from "@/store";
export default {
  components: {
    Task,
  },
  name: "TasksList",
  store: store,
  computed: {
    tasks() {
      return store.getters.tasks;
    },
  },
  methods: {
    showModal() {
      store.commit("setModalShown", "adding task");
    },
  },
};
</script>

<style scoped>
  .tasks-list__container {
    margin-inline: 15%;
  }
  .tasks-list__add-btn {
    display: block;
    margin-inline: auto;
  }
</style>
