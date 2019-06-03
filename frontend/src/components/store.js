import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
  shoppingcart: [],
  paper: '',
  collections: [],
  uphistory: '',
  model: 1
}
const mutations = {
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  LOG_OUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  },
  AddShoppingCart (state, data) {
    state.shoppingcart.push(data)
  },
  SetPaper (state, data) {
    state.paper = data
  },
  AddCollections (state, data) {
    state.collections.push(data)
    console.log(state.collections)
    console.log(state.paper)
  },
  SetUphistory (state, data) {
    state.uphistory = data
    console.log(state.uphistory)
  },
  SetModel(state, data) {
    state.model = data
    console.log(state.model)
  }
}

const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
