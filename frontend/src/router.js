import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import Home from './views/Home.vue'
import SignUp from './views/SignUp.vue'
import Info from './views/Info.vue'
import paper_make from './views/paper_make'
import upload from './views/up-load'
import store from './components/store.js'

Vue.use(Router)

const router = new Router({
  routes: [
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
          path: '/paper_make',
          name: 'paper_make',
          component: paper_make,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/upload',
          name: 'upload',
          component: upload,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/signup',
          name: 'signup',
          component: SignUp
        },
        {
          path: '/info',
          name: 'info',
          component: Info,
          meta: {
            requireAuth: true
          }
        }
      ]
    }
    // },
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: SignIn
    // },
    // {
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignUp
    // },
    // {
    //   path: '/info',
    //   name: 'info',
    //   component: Info
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/signin'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
