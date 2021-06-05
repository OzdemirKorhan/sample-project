<template>
  <div class="home">
    <toads-page />
  </div>
</template>

<script>
// @ is an alias to /src
import toadsPage from "@/components/toads-page.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    toadsPage,
  },
  methods: {
    ...mapActions({
      changePage: "changePage",
    }),
  },
  mounted() {
    this.changePage(2);
  },
};
</script>
