import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueParticles from 'vue-particles'
import store from './components/store.js'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueParticles)

let Router = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
Vue.use(Router)
