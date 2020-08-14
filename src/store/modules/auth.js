import apiService from '@/services/ApiService.js'

export const namespcaed = true

export const state = {
  authUser: null
}
export const mutations = {
  SET_AUTH_USER_DATA(state, userData) {
    localStorage.setItem('authUser', JSON.stringify(userData))
    apiService.apiService.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${userData.access}`
    state.authUser = userData
  },
  LOG_OUT() {
    localStorage.removeItem('authUser')
    location.reload()
  }
}
export const actions = {
  register({ commit }, credentials) {
    return apiService.register(credentials).then(({ data }) => {
      commit('SET_AUTH_USER_DATA', data)
    })
  },
  login({ commit }, credentials) {
    return apiService.login(credentials).then(({ data }) => {
      commit('SET_AUTH_USER_DATA', data)
    })
  },
  logout({ commit }) {
    commit('LOG_OUT')
  }
}
export const getters = {}
