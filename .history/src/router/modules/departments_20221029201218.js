// 组织架构路由
import Layout from '@/layout'
export default {
  path: '/departments',
  name: 'departments',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/departments'),
      meta: {
        title: '员工管理'
      }
    }
  ]
}
