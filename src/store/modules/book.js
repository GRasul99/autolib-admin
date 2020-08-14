import apiService from '@/services/ApiService.js'

export const namespaced = true

export const state = {
  books: [],
  book: {}
}

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books
  },
  SET_BOOK(state, book) {
    state.book = book
  }
}

export const actions = {
  fetchBooks({ commit }) {
    return apiService
      .getBooks()
      .then(response => {
        commit('SET_BOOKS', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchBook({ commit, getters }, id) {
    let book = getters.getBookById(id)

    if (book) {
      commit('SET_BOOK', book)
      return book
    } else {
      return ApiService.getBook(id).then(response => {
        commit('SET_BOOK', response.data)
        return response.data
      })
    }
  }
}

export const getters = {
  getBookById: state => id => {
    return state.books.find(book => book.id === id)
  }
}
