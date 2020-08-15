<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    title: {
      type: String,
      default: 'Tab'
    }
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped>
.tab {
  font-size: 1.5rem;
}
</style>
