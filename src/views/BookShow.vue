<template>
  <section class="section book-show -shadow">Book Show {{ book.id }}</section>
</template>

<script>
export default {
  name: 'BookShow',
  props: {
    book: {
      type: Object,
      required: true
    }
  }
}
</script>
