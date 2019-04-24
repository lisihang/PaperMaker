import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

let Router = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.use(Router)
