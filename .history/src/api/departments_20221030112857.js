import request from '@/utils/request'

// 登录
export function login() {
  return request({
    method: 'GET',
    url: '/company/department'
  })
}
