<template>
  <div>
    <nav class="header">
      <NavbarItem
        v-for="(menu, index) in menuItems"
        :key="index"
        :title="menu.title"
        :path="menu.path"
      />
    </nav>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
import menu from "../../router/menu";

export default {
  data() {
    return {
      menuItems: menu
    };
  },
  components: {
    NavbarItem
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 1.25rem;
  background-color: #f6f6f6;
}
</style>
