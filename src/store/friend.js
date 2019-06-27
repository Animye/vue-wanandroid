import axios from 'axios'
const friend = {
  state: {
    friend: []
  },
  mutations: {
    getFriend(state, friend) {
      state.friend = friend
    }
  },
  actions: {
    getFriend({ commit }) {
      axios.get('/api/friend/json').then(res => {
        commit('getFriend', res.data.data)
      })
    }
  }
}
export default friend
