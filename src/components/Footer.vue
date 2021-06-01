<template>
  <div class="footer">
    <img src="@/assets/logo.svg" alt="" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: var(--secondary-bg-color);
  padding: 1em;
}
.footer .logo {
  width: 2em;
  margin: auto;
}
</style>
