<template>
  <div id="app">
    <TheAppBar />
    <TheNavBar v-if="user" />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'
import TheNavBar from '@/components/TheNavBar.vue'
export default {
  components: {
    TheAppBar,
    TheNavBar
  },
  computed: {
    user() {
      return this.$store.state.auth.authUser
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/global';
</style>
