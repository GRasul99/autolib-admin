<template>
  <div class="app-bar -shadow">
    <router-link to="/">
      <img src="@/assets/logo.png" alt="Logo" class="app-bar__img" />
    </router-link>
    <div class="app-bar-auth">
      <router-link
        v-if="!user"
        :to="{ name: 'login' }"
        class="app-bar-auth__login"
        >Логин</router-link
      >
      <router-link
        v-if="!user"
        :to="{ name: 'register' }"
        class="app-bar-auth__register"
        >Регистрация</router-link
      >
      <BaseButton v-if="user" @click="logout">Logout</BaseButton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAppBar',
  computed: {
    user() {
      return this.$store.state.auth.authUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>
