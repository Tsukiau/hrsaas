import axios from 'axios'

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
})
// 请求
request.interceptors.request.use()
// 响应
request.interceptors.response.use()

export default request
