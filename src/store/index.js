import Vue from 'vue'
import Vuex from 'vuex'
import banner from './banner'
import topics from './topics'
import projects from './projects'
import login from './login'
import collect from './collect'
import friend from './friend'
import search from './search'
import todo from './todo'
import { a, c } from './ceshi'
import wwww from './ceshi'
console.log(a, c)
console.log(wwww)
const shortid = require('shortid')
console.log(shortid())
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: { banner, topics, projects, login, collect, friend, search, todo }
})
export default store
