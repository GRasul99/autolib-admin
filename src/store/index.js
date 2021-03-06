import Vue from 'vue'
import Vuex from 'vuex'
import * as book from '@/store/modules/book'
import * as auth from '@/store/modules/auth'
import * as order from '@/store/modules/order'
import * as user from '@/store/modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    book,
    auth,
    order,
    user
  }
})
