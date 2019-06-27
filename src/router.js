import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topics from './components/Topics.vue'
import Projects from './components/Projects.vue'
import Projectindex from './components/Projectindex.vue'
import Collect from './components/Collect.vue'
import Search from './components/Search.vue'
import Todo from './components/Todo.vue'
// import TodoList from './components/TodoList.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Topics
        },
        {
          path: 'index',
          component: Topics
        },
        {
          path: 'pindex',
          component: Projects
        }
      ]
    },
    {
      path: '/projectindex',
      component: Projectindex
    },
    {
      path: '/lg/collect',
      component: Collect
    },
    {
      path: '/article/query',
      component: Search
    },
    {
      path: '/lg/todo/list/:type',
      component: Todo
      // children: [
      //   {
      //     path: '',
      //     component: TodoList
      //   }
      // ]
    }
  ],
  mode: 'history'
})
export default router
