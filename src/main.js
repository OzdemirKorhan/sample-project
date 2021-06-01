import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
Vue.component("NavigationBar", () => import("./components/Navigation-bar.vue"));
Vue.component("Footer", () => import("./components/Footer.vue"));
Vue.component("Login", () => import("./components/Login.vue"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
