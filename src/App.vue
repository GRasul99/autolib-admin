<template>
  <div id="app">
    <TheAppBar />
    <router-view />
  </div>
</template>

<script>
import TheAppBar from '@/components/TheAppBar.vue'
export default {
  components: {
    TheAppBar
  }
}
</script>  

<style lang="scss">
@import '@/assets/scss/global.scss';
</style>
