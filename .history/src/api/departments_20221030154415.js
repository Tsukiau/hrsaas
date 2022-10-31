import request from '@/utils/request'

// 查询企业的部门列表
export function getDepartments() {
  return request({
    method: 'GET',
    url: '/company/department'
  })
}

// 删除接口
export function (){
   
}