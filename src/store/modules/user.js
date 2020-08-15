import apiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  users: [],
  user: {}
}
export const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_USER(state, user) {
    state.user = user
  }
}
export const actions = {
  fetchUsers({ commit }) {
    return apiService
      .getUsers()
      .then(response => {
        commit('SET_USERS', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchUser({ commit, getters }, id) {
    let user = getters.getUserById(id)

    if (user) {
      commit('SET_USER', user)
      return user
    } else {
      return apiService.getUser(id).then(response => {
        commit('SET_USER', response.data)
        return response.data
      })
    }
  }
}
export const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id === id)
  }
}
