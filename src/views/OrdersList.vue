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
        <!--        <tr v-for="(searchedOrder, index) in searchedOrders" :key="index">-->
        <!--          <td>-->
        <!--            <div class="order-id">{{ index + 1 }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="user-avatar">-->
        <!--              <img-->
        <!--                :src="-->
        <!--                  `https://libro.pythonanywhere.com/` + searchedOrder.Аватар-->
        <!--                "-->
        <!--                alt="Avatar"-->
        <!--              />-->
        <!--            </div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="user-info">-->
        <!--              <div>-->
        <!--                {{ $t('orders.body.id') }} :-->
        <!--                <span>{{ searchedOrder.qr_number }}</span>-->
        <!--              </div>-->
        <!--              <div>-->
        <!--                {{ $t('orders.body.name') }}:-->
        <!--                <span>{{ searchedOrder.full_name }}</span>-->
        <!--              </div>-->
        <!--              <div>-->
        <!--                {{ $t('orders.body.faculty') }}:-->
        <!--                <span>{{ searchedOrder.faculty }}</span>-->
        <!--              </div>-->
        <!--              <div>-->
        <!--                {{ $t('orders.body.course') }}:-->
        <!--                <span>{{ searchedOrder.course }}</span>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-books">-->
        <!--              <img-->
        <!--                :src="`https://libro.pythonanywhere.com/` + searchedOrder.img"-->
        <!--                alt="Order books"-->
        <!--              />-->
        <!--            </div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-name">{{ searchedOrder.title }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-book-isbn">{{ searchedOrder.isbn }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-date_pub">{{ searchedOrder.date_pub }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-author">{{ searchedOrder.author }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-udc">{{ searchedOrder.udc }}</div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div class="order-remained_time">-->
        <!--              {{ searchedOrder.remained_time }}-->
        <!--            </div>-->
        <!--          </td>-->
        <!--          <td>-->
        <!--            <div></div>-->
        <!--          </td>-->
        <!--        </tr>-->
      </tbody>
    </table>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'

export default {
  name: 'Orders',
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
      search: '',
      timeout: null
    }
  },
  computed: {
    ...mapState(['book', 'books', 'user', 'users', 'order', 'orders']),
    filledOrders() {
      return this.order.orders.map(order => {
        const book = this.book.books.find(book => order.book_id === book.id)
        const user = this.user.users.find(user => order.user === user.id)
        const remained_time =
          ((Math.round(Date.parse(order.time_of_order) - Date.now()) %
            86400000) %
            3600000) /
          60000
        return { ...order, ...book, ...user, remained_time }
      })
    },
    searchedOrders() {
      return this.filledOrders.filter(data => {
        return data.full_name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  mounted() {
    this.timeout = setInterval(
      () => this.$store.dispatch('book/fetchBooks'),
      5000
    )
    this.timeout = setInterval(
      () => this.$store.dispatch('user/fetchUsers'),
      5000
    )
    this.timeout = setInterval(
      () => this.$store.dispatch('order/fetchOrders'),
      5000
    )
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      next()
    })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    store.dispatch('book/fetchBooks')
    store.dispatch('user/fetchUsers')
    store.dispatch('order/fetchOrders').then(() => {
      next()
    })
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  }
}
</script>

<style lang="scss" scoped></style>
