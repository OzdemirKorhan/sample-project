<template>
  <div id="app">
    <NavigationBar v-on:show-modal="showModal" />
    <Footer />
    <Login :isModal="isModal" v-on:close-modal="closeModal" />
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return { isModal: 0 };
  },
  methods: {
    showModal() {
      this.isModal = 1;
    },
    closeModal() {
      this.isModal = 0;
    },
  },
};
</script>
<style></style>
