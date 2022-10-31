import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getTimeStamp } from '@/utils/auth'
const timeout = 3600
const request = axios.create({
  // 如果执行 npm run dev  值为 /api 正确  /api 这个代理只是给开发环境配置的代理
  // 如果执行 npm run build 值为 /prod-api 运维在上线的时候给你配置上/prod-api的代理
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(config => {
  // 注入token
  if (store.getters.token) {
    // 检查时间戳

    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  const { success, message, data } = response.data
  //   要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    Message.error(message) // 提示错误

    return Promise.reject(new Error(message)) // 返回错误
  }
}, error => {
  Message.error(error.message) // 提示错误
  return Promise.reject(error) // 返回错误
})

// token 时间戳是否超时
function IsCheckTimeOut() {
  let currenTime = Date.now() // 当前时间戳
  let timeOut = getTimeStamp() // 缓存时间戳
  (currenTime - timeOut)
}
export default request
