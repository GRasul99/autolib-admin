<template>
  <div class="book-card">
    <div class="book-card-front">
      <img
        src="https://dictionary.cambridge.org/ru/images/thumb/book_noun_001_01679.jpg?version=5.0.109"
        alt="Book"
      />
    </div>
    <div class="book-card-back">
      {{ book.title }}
      {{ book.author }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: ['book']
}
</script>

<style lang="scss" scoped>
</style>