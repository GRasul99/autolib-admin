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
      <BookCard v-for="book in filteredBook" :key="book.id" :book="book" />
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
    ...mapState(['books', 'book']),
    filteredBook() {
      return this.book.books.filter(data => {
        let author = data.author.toLowerCase().match(this.search.toLowerCase())
        let book_name = data.title
          .toLowerCase()
          .match(this.search.toLowerCase())
        return author || book_name
      })
    }
  }
}
</script>
