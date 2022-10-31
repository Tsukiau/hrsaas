import { getToken, setToken, removeToken } from '@/utils/auth'
// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
const state = {
  token: getToken() // 读取缓存
}
// 修改状态
const mutations = {
  setToken(state, token) {
    state.token = token // 把token 给state.token
    setToken(token) // 添加缓存
  },
  removeToken(state) {
    state.token = null // 删除 vuex
    removeToken() // 删除 缓存
  }
}
// 执行异步
const actions = {
  login
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}
