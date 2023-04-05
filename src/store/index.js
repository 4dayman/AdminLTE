import { createStore } from 'vuex'
import auth from './auth'
import banners from './banners'

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
    auth,
    banners
  }
})
