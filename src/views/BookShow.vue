<template>
  <section class="section book-show -shadow">
    <div class="book-show-content">
      <img
        src="https://s25.postimg.cc/frbd9towf/cta-2.png"
        alt="Book"
        class="book-show-content__img"
      />
      <div class="book-show-content-text">
        <p><strong>Название книги: </strong>{{ book.title }}</p>
        <p><strong>Автор книги: </strong>{{ book.author }}</p>
        <p><strong>Автор книги: </strong>{{ book.date_pub }}</p>
        <p><strong>ИСБН: </strong>{{ book.isbn }}</p>
        <p><strong>Количество: </strong>{{ book.quantity }}</p>
        <p><strong>Цена: </strong>{{ book.price }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import apiService from '@/services/ApiService'
export default {
  name: 'BookShow',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  created() {
    apiService.getBook(this.book.id)
  }
}
</script>
