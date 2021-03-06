import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import BookList from '../views/BookList.vue'
import BookShow from '../views/BookShow.vue'
import Statistics from '../views/Statistics.vue'
import OrdersList from '../views/OrdersList.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import RetrievedBooks from '@/views/RetrievedBooks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'book-list',
    component: BookList
  },
  {
    path: '/book-show/:id',
    name: 'book-show',
    component: BookShow,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('book/fetchBook', routeTo.params.id).then(book => {
        routeTo.params.book = book
        next()
      })
    }
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/orders-list',
    name: 'orders',
    component: OrdersList
  },
  {
    path: '/retrieved-books',
    name: 'retrieved-books',
    component: RetrievedBooks
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('authUser')

  if (authRequired && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
