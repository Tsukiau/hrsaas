import axios from 'axios'

const request = axios.create({
})
// 请求
request.interceptors.request.use()
request.interceptors.response.use()
export default request
