<template>
  <div class="toads container">
    <div class="toad">
      <h1 class="title">{{ content.title_one }}</h1>
      <p class="subtext">{{ content.text_one }}</p>
    </div>
    <div class="toad">
      <h1 class="title">{{ content.title_two }}</h1>
      <p class="subtext">{{ content.text_two }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import translations from "../assets/i18n/toads-page.json";

export default {
  name: "toadsPage",
  data() {
    return {
      content: {
        title_one: "",
        text_one: "",
        title_two: "",
        text_two: "",
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
.toads {
  display: flex;
  gap: 2em;
  justify-content: space-between;
}
.title {
  color: #fff;
  max-width: 13ch;
  line-height: 1;
  text-transform: uppercase;
  font-size: clamp(30px, 3vw, 40px);
  margin-top: 1.5em;
}
.subtext {
  color: var(--primary-text-color);
  max-width: 35ch;
  line-height: 1.4;
  font-size: clamp(18px, 2vw, 25px);
  margin-top: 1em;
}
@media (max-width: 45em) {
  .toads {
    flex-direction: column;
    gap: 1em;
  }
}
</style>
