import { createStore } from 'vuex'
import auth from './auth'

export default createStore({
  state: {
    app: {
      name: 'AdminLTE',
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
