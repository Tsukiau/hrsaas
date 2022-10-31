// 快捷访问
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.userInfo.username,
  userId: state => state.userinfo.userId

}
export default getters
