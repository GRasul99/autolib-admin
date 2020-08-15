<template>
  <section class="section login">
    <div class="-shadow">
      <form class="form" @submit.prevent="login">
        <div class="form-header">
          Вход
        </div>
        <hr />
        <div class="form-content">
          <div class="form-content-input">
            <BaseIcon name="user" />
            <BaseInput type="text" placeholder="Логин" v-model="username" />
          </div>
          <div class="form-content-input">
            <BaseIcon name="lock" />
            <BaseInput
              type="password"
              placeholder="Пароль"
              v-model="password"
            />
          </div>
        </div>
        <div class="form-buttons">
          <BaseButton>Войти</BaseButton>
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
    login() {
      this.$store
        .dispatch('auth/login', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: 'book-list' })
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }
}
</script>

<style lang="scss"></style>
