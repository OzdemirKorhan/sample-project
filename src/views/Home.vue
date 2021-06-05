<template>
  <div class="home">
    <home-page />
  </div>
</template>

<script>
// @ is an alias to /src
import homePage from "@/components/home-page.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    homePage,
  },
  methods: {
    ...mapActions({
      changePage: "changePage",
    }),
  },
  mounted() {
    this.changePage(0);
  },
};
</script>
