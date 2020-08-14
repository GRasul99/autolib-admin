import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://whispering-fortress-52261.herokuapp.com/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  login(credentials) {
    return apiService.post('/api/token/', credentials)
  },
  register(credentials) {
    return apiService.post('/auth/users/', credentials)
  },
  getCategories() {
    return apiService.get('/category/')
  },
  getCategory(id) {
    return apiService.get('/category/' + id)
  },
  getOrders() {
    return apiService.get('/orders')
  },
  getOrder(id) {
    return apiService.get('/orders/' + id)
  },
  getUsers() {
    return apiService.get('/user')
  },
  getUser(id) {
    return apiService.get('/user/' + id)
  }
}
