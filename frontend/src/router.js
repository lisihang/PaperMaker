import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import menu from './components/menu.vue'
import hi from './components/hi.vue'
import paper_make from './views/paper_make'
import upload from './views/up-load'

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
        },
        {
          path: '/paper_make',
          name:'paper_make',
          component: paper_make,
        },
        {
          path: '/upload',
          name:'upload',
          component: upload,
        }
        ]
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
