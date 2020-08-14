<template>
  <div class="app-bar -shadow">
    <img src="@/assets/logo.png" alt="Logo" class="app-bar__img" />
    <div class="app-bar-auth">
      <router-link :to="{ name: 'login' }" class="app-bar-auth__login">Login</router-link>
      <router-link :to="{ name: 'register' }" class="app-bar-auth__register">Register</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>