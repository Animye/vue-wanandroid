import axios from 'axios'
const banner = {
  state: {
    banner: []
  },
  mutations: {
    getBanner(state, banner) {
      state.banner = banner
    }
  },
  actions: {
    getBanner({ commit }) {
      axios.get('/api/banner/json').then(res => {
        commit('getBanner', res.data.data)
      })
    }
  }
}
export default banner
