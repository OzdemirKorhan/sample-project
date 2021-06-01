<template>
  <div class="about">
    <Contactpage />
  </div>
</template>

<script>
import Contactpage from "@/components/Contactpage.vue";
import { mapActions } from "vuex";

export default {
  name: "Contact",
  components: {
    Contactpage,
  },
  methods: {
    ...mapActions({
      changePage: "changePage",
    }),
  },
  mounted() {
    this.changePage(1);
  },
};
</script>
