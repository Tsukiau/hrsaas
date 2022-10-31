import axios from 'axios'

const request = axios.create({
  baseURL: ''
})
// 请求
request.interceptors.request.use()
// 响应
request.interceptors.response.use()

export default request
