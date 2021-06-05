<template>
  <div id="app">
    <navigation-bar v-on:show-modal="showModal" />
    <footer-bar />
    <login :isModal="isModal" v-on:close-modal="closeModal" />
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
