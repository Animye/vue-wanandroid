import axios from 'axios'
const login = {
  state: {
    userInfo: null
  },
  mutations: {
    getUserInfo(state, userInfo) {
      state.userInfo = userInfo.username
    },

    logout(state, userInfo1) {
      state.userInfo = userInfo1
    }
  },
  actions: {
    getUserInfo({ commit }, { a, b }) {
      let qs = require('qs')
      let data = qs.stringify({
        username: a,
        password: b
      })
      axios.post('/api/user/login', data).then(res => {
        sessionStorage.username = res.data.data.username
        commit('getUserInfo', res.data.data)
      })
    },
    logout({ commit }) {
      commit('logout', null)
    }
  }
}
export default login
