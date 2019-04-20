import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import menu from './components/menu.vue'
import hi from './components/hi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: 'hi', name: 'hi', component: hi },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/signin',
          name: 'signin',
          component: SignIn
        },
        {
          path: '/hi',
          name: 'hi',
          component: hi
        }]
    },
    {
      path: 'signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: 'signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: 'menu',
      name: 'menu',
      component: menu
    }
  ]
})
