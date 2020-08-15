<template>
  <section class="section-fluid orders">
    <form class="form form-search -shadow">
      <div class="form-content">
        <div class="form-content-input">
          <BaseIcon name="search" />
          <BaseInput type="text" placeholder="Поиск . . ." v-model="search" />
        </div>
      </div>
    </form>
    <table class="table -shadow">
      <thead>
        <th v-for="head in headers" :key="head.id">{{ head.name }}</th>
      </thead>
      <hr />
      <tbody>
        <tr>
          <td>body</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: 'Oders',
  data() {
    return {
      headers: [
        { id: 0, name: '№' },
        { id: 1, name: 'Фото' },
        { id: 2, name: 'Информация о студенте' },
        { id: 3, name: 'Название книги' },
        { id: 4, name: 'ISBN' },
        { id: 5, name: 'Дата публикации' },
        { id: 6, name: 'Автор' },
        { id: 7, name: 'УДК' },
        { id: 8, name: 'Оставщиейся время' },
        { id: 9, name: 'Забрал' }
      ],
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
