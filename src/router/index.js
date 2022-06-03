import Vue from "vue";
import VueRouter from "vue-router";
import menu from "./menu";

Vue.use(VueRouter);

const routes = [...menu];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach(to => {
//   // dynamic page title
//   window.document.title = to.name;
// });

export default router;
