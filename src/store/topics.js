import axios from 'axios'
import Vue from 'vue'
const topics = {
  state: {
    topics: null
  },
  mutations: {
    getTopics(state, topics) {
      state.topics = topics
    },
    collect(state, ind) {
      Vue.set(state.topics[ind], 'collect', true)
    },
    unCollect(state, ind) {
      Vue.set(state.topics[ind], 'collect', false)
    }
  },
  actions: {
    getTopics({ commit }) {
      axios.get('api/article/list/0/json').then(res => {
        commit('getTopics', res.data.data.datas)
      })
    },
    collect({ commit }, { id, index }) {
      axios.post(`api/lg/collect/${id}/json`).then(() => {
        commit('collect', index)
      })
    },
    unCollect({ commit }, { id, index }) {
      axios.post(`api/lg/uncollect_originId/${id}/json`).then(() => {
        commit('unCollect', index)
      })
    }
  }
}
export default topics
