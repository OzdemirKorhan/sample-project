<template>
  <div>
    <contact-page />
  </div>
</template>

<script>
import contactPage from "@/components/contact-page.vue";
import { mapActions } from "vuex";

export default {
  name: "Contact",
  components: {
    contactPage,
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
