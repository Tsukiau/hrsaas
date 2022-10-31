import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
// 状态
// 初始化的时候从缓存中读取状态 并赋值到初始化的状态上
const state = {
  token: getToken(), // 读取缓存
  userinfo: {} // 用户资料
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
  },
  // 设置用户信息
  setUserInfo(state, result) {
    state.userinfo = result
  }
}
// 执行异步
const actions = {
  async login(context, data) {
    const token = await login(data) // 拿到token
    context.commit('setToken', token) // 给mutations
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}
