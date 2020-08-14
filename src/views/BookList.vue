<template>
  <section class="section home">
    <form class="form form-search -shadow">
      <div class="form-content">
        <div class="form-content-input">
          <BaseIcon name="search" />
          <BaseInput type="text" placeholder="Поиск . . ." v-model="search" />
        </div>
      </div>
    </form>
    <div class="book-list">
      <BookCard v-for="book in book.books" :key="book.id" :book="book" />
    </div>
  </section>
</template>

<script>
import BookCard from '@/components/BookCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'BookList',
  data() {
    return {
      search: ''
    }
  },
  components: {
    BookCard
  },
  created() {
    this.$store.dispatch('book/fetchBooks')
  },
  computed: {
    ...mapState(['book', 'books'])
  }
}
</script>

<style lang="scss">
</style>
