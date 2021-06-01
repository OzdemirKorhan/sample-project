<template>
  <div class="container">
    <h1 class="title">{{ content.title }}</h1>
    <p class="subtext">{{ content.text }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Homepage",
  data() {
    return {
      content: {
        title: "",
        text: "",
      },
      content_en: {
        title: "Hop With Toad",
        text:
          "Frog ran up the path to Toad’s house. He knocked on the front door. There\n" +
          "      was no answer. “Toad, Toad,” shouted Frog, “wake up. It is spring!”\n" +
          "      “Blah,” said a voice from inside the house. “Toad, Toad,” cried Frog.",
      },
      content_tr: {
        title: "KÜÇÜK KURBAĞA",
        text:
          "      Bir köyde her sene kurbağa yarışı yapılırmış. Yüksek bir yokuşun dibine\n" +
          "      herkes kurbağasını getirir, onları tepeye doğru yarıştırırlarmış. Bir gün\n" +
          "      yaşlı bir dede, küçük, cılız bir kurbağa getirmiş yarıştırmak için.",
      },
    };
  },
  methods: {
    setContentLanguage() {
      this.content =
        this.chosenLanguage === "en" ? this.content_en : this.content_tr;
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
