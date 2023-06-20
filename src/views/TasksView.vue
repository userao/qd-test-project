<template>
  <div>
    <TasksList />
  </div>
</template>

<script>
import TasksList from "@/components/TasksList.vue";

export default {
  name: "App",
  components: {
    TasksList,
  },
};
</script>
