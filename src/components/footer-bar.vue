<template>
  <div class="footer">
    <img src="@/assets/logo.svg" alt="" class="logo" />
  </div>
</template>

<script>
export default {
  name: "footer-bar",
};
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--secondary-bg-color);
  padding: 1em;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
}
.footer .logo {
  width: 2em;
  margin: auto;
}
</style>
