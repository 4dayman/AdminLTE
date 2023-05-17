import { createStore } from 'vuex'
import auth from './auth'
import banners from './banners'
import films from './films'
import news from './news'

export default createStore({
  state: {
    app: {
      name: 'AdminLTE'
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
    banners,
    films,
    news
  }
})
