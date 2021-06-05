import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.component("navigationBar", () => import("./components/navigation-bar.vue"));
Vue.component("footerBar", () => import("./components/footer-bar.vue"));
Vue.component("login", () => import("./components/login.vue"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
