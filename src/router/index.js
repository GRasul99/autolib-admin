import Vue from 'vue'
import VueRouter from 'vue-router'
import BookList from '../views/BookList.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'book-list',
    component: BookList
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

export default router
