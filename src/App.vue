<template>
  <div id="app">
    <nav class="text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks">Tasks</router-link>
    </nav>
    <router-view />
    <AddTaskModal v-if="isAddingTask" />
    <EditTaskModal v-if="isEditingTask" />
  </div>
</template>

<script>
import AddTaskModal from "./components/AddTaskModal.vue";
import EditTaskModal from "./components/EditTaskModal.vue";
import store from "./store";
export default {
  components: {
    AddTaskModal,
    EditTaskModal,
  },
  store: store,
  computed: {
    isAddingTask() {
      return store.getters.isAdding;
    },
    isEditingTask() {
      return store.getters.isEditing;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.text-center {
  text-align: center;
}

.modal {
  top: 50%;
  left: 50%;
  position: absolute;
  border: solid 1px black;
  transform: translate(-50%, -50%);
  background: white;
  z-index: 1;
  padding: 0.5rem;
}

.buttons-container {
  padding-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
</style>
