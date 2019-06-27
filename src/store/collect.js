import axios from 'axios'
const collect = {
  state: {
    collect: []
  },
  mutations: {
    getCollect(state, collect) {
      state.collect = collect
    }
  },
  actions: {
    getCollect({ commit }) {
      axios.get('/api/lg/collect/list/0/json').then(res => {
        commit('getCollect', res.data.data.datas)
      })
    }
  }
}
export default collect
