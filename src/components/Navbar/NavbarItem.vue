<template>
  <div>
    <router-link :to="path">{{ title }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  padding: 20px;
}
a:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
