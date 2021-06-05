<template>
  <div class="container">
    <h1 class="title">{{ content.title }}</h1>
    <p class="subtext">{{ content.text }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import translations from "../assets/i18n/home-page.json";

export default {
  name: "homePage",
  data() {
    return {
      content: {
        title: "",
        text: "",
      },
      translations: translations,
    };
  },
  methods: {
    setContentLanguage() {
      this.content =
        this.chosenLanguage === "en"
          ? this.translations.content_en
          : this.translations.content_tr;
    },
  },
  mounted() {
    this.setContentLanguage();
  },
  watch: {
    chosenLanguage: function () {
      this.setContentLanguage();
    },
  },
  computed: {
    ...mapGetters(["chosenLanguage"]),
  },
};
</script>

<style scoped>
.title {
  color: #fff;
  max-width: 10ch;
  line-height: 1;
  text-transform: uppercase;
  font-size: clamp(30px, 5vw, 40px);
  margin-top: 1.5em;
}
.subtext {
  color: var(--primary-text-color);
  max-width: 35ch;
  line-height: 1.4;
  font-size: clamp(18px, 3vw, 25px);
  margin-top: 1em;
}
@media (max-width: 45em) {
}
</style>
