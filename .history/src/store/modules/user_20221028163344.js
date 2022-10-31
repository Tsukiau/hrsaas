import { getToken, setToken, removeToken} from '@/utils/auth'
// 状态
const state = {
  token: getToken()
}
// 修改状态
const mutations = {
  setToken(state,token){

  }
}
// 执行异步
const actions = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}
