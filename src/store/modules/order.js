import apiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  orders: [],
  order: {}
}
export const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders
  },
  SET_ORDER(state, order) {
    state.order = order
  }
}
export const actions = {
  fetchOrders({ commit }) {
    return apiService
      .getOrders()
      .then(response => {
        commit('SET_ORDERS', response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },
  fetchOrder({ commit, getters }, id) {
    let order = getters.getOrderById(id)

    if (order) {
      commit('SET_ORDER', order)
      return order
    } else {
      return apiService.getOrder(id).then(response => {
        commit('SET_ORDER', response.data)
        return response.data
      })
    }
  }
}
export const getters = {
  getOrderById: state => id => {
    return state.orders.find(order => order.id === id)
  }
}
