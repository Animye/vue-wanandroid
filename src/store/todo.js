import axios from 'axios'
import Vue from 'vue'
const todo = {
  state: {
    todo: []
  },
  mutations: {
    getTodo(state, todo) {
      state.todo = todo
    },
    addTodo(state, add) {
      state.todo.push(add)
    },
    delTodo(state, id) {
      state.todo = state.todo.filter(e => e.id !== id)
    },
    done(state, id) {
      Vue.set(state.todo.find(e => e.id === id), 'status', 1)
    },
    unDone(state, id) {
      Vue.set(state.todo.find(e => e.id === id), 'status', 0)
    }
  },
  actions: {
    getTodo({ commit }, type) {
      axios.get(`/api/lg/todo/v2/list/1/json?type=${type}`).then(res => {
        commit('getTodo', res.data.data.datas)
      })
    },
    done({ commit }, id) {
      let qs = require('qs')
      let data = qs.stringify({
        status: 1
      })
      console.log(id)

      axios.post(`/api/lg/todo/done/${id}/json`, data).then(res => {
        commit('done', id)
      })
    },
    unDone({ commit }, id) {
      let qs = require('qs')
      let data = qs.stringify({
        status: 0
      })
      axios.post(`/api/lg/todo/done/${id}/json`, data).then(res => {
        commit('unDone', id)
      })
    },
    addTodo({ commit }, { a, b, c, type, d }) {
      let qs = require('qs')
      let data = qs.stringify({
        title: a,
        content: b,
        date: c,
        type: type,
        status: d
      })
      axios.post('/api/lg/todo/add/json', data).then(res => {
        commit('addTodo', res.data.data)
      })
    },
    delTodo({ commit }, id) {
      axios.post(`/api/lg/todo/delete/${id}/json`).then(() => {
        commit('delTodo', id)
      })
    }
  }
}
export default todo
