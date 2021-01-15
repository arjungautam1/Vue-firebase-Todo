<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>MOCO To do</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <ToDoList />
    </v-content>
  </v-app>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
export default {
  name: "App",

  components: {
    ToDoList,
  },

  data: () => ({
    //
  }),
};
</script>
