<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title> Vue Lesson </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.path" :to="item.path">
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    items() {
      return [
        { path: "/todo-list", name: "Todo List" },
        { path: "/counter", name: "Counter" },
        { path: "/area-select", name: "Area-select" },
        { path: "/currency", name: "Currency" },
        { path: "/form", name: "Form" },
        { path: "/style", name: "Style" },
        { path: "/toggle", name: "Toggle" },
        { path: "/users", name: "Users" },
        { path: "/policy", name: "Policy" },
        { path: "/user-table", name: "UserTalbe" },
      ];
    },
  },
};
</script>
<style>
a {
  margin-right: 1em;
}
</style>