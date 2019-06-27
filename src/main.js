import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ss from 'shortid'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(ss)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
