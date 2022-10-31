import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    method: 'POST',
    url: '/sys/login',
    data
  })
}

// 获取用户基本资料
export function getUserInfo() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}

// 获取员工基本信息
export function logout() {
  return request({
    method: 'POST',
    url: '/sys/profile'
  })
}
