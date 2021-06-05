import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Toads from "../views/Toads.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/toads",
    name: "Toads",
    component: Toads,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
