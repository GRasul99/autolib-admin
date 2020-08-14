<template>
  <section class="section login">
    <div class="-shadow">
      <form class="form" @submit.prevent="login">
        <div class="form-header">
          Login
        </div>
        <div class="form-content">
          <BaseInput type="text" />
          <BaseInput type="password" />
        </div>
        <div class="form-buttons">
          <BaseButton>Login</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {}
  }
}
</script>

<style lang="scss">
.login {
  display: grid;
  margin-top: 2rem;
  justify-content: center;
}
</style>
