import Vue from "vue";
import VueRouter from "vue-router";
import NewsFeed from "../views/pages/NewsFeed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "NewsFeed",
    component: NewsFeed
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/pages/Help.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/pages/Contact.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/pages/About.vue")
  }
];

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
