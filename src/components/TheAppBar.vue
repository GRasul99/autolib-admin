<template>
  <div class="app-bar">
    <img src="@/assets/logo.png" alt="Logo" />
    <div class="app-bar-auth">
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'register' }">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
</style>