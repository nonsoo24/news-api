import NewsFeed from "../views/pages/NewsFeed.vue";

export default [
  {
    path: "/",
    name: "news-feed",
    title: "Home",
    component: NewsFeed
  },
  {
    path: "/help",
    name: "help",
    title: "Help",
    component: () => import("../views/pages/Help.vue")
  },
  {
    path: "/contact",
    name: "contact",
    title: "Contact",
    component: () => import("../views/pages/Contact.vue")
  },
  {
    path: "/about",
    name: "about",
    title: "About",
    component: () => import("../views/pages/About.vue")
  }
];
