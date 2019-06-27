import axios from 'axios'
const search = {
  state: {
    search: []
  },
  mutations: {
    getSearch(state, search) {
      state.search = search
    }
  },
  actions: {
    getSearch({ commit }, c) {
      let qs = require('qs')
      let data = qs.stringify({
        k: c
      })
      axios.post('/api/article/query/0/json', data).then(res => {
        commit('getSearch', res.data.data.datas)
      })
    }
  }
}
export default search
