import axios from 'axios'
const projects = {
  state: {
    projects: []
  },
  mutations: {
    getProjects(state, projects) {
      state.projects = projects
    }
  },
  actions: {
    getProjects({ commit }) {
      axios.get('api/article/listproject/0/json').then(res => {
        commit('getProjects', res.data.data.datas)
      })
    }
  }
}
export default projects
