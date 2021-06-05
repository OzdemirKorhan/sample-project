import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_info: {
      name: "",
      email: "",
      password: "",
    },
    chosen_page: 0,
    chosen_language: "en",
  },
  mutations: {
    changePage(state, value) {
      state.chosen_page = value;
    },
    setUserInfo(state, value) {
      state.user_info = value;
    },
    changeLanguage(state, value) {
      state.chosen_language = value;
    },
  },
  actions: {
    changePage({ commit }, value) {
      commit("changePage", value);
    },
    setUserInfo({ commit }, value) {
      commit("setUserInfo", value);
    },
    changeLanguage({ commit }, value) {
      commit("changeLanguage", value);
    },
  },
  modules: {},
  getters: {
    userInfo: (state) => {
      return state.user_info;
    },
    chosenPage: (state) => {
      return state.chosen_page;
    },
    chosenLanguage: (state) => {
      return state.chosen_language;
    },
  },
});
