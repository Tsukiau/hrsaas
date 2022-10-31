import request from '@/utils/request'

// 查询企业的部门列表
export function login() {
  return request({
    method: 'GET',
    url: '/company/department'
  })
}
