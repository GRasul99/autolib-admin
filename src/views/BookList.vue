<template>
  <section class="home section">
    <form class="form form-search -shadow">
      <div class="form-content-input">
        <BaseIcon name="search" />
        <BaseInput type="serch" placeholder="Поиск..." v-model="search" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'BookList',
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
</style>
