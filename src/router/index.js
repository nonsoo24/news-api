import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  // debugger
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (user !== null) {
    next()
  } else {
    next('/')
  }
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import("../views/Dashboard.vue"),
      beforeEnter: ifAuthenticated
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
