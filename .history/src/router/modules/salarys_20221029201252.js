// 工资路由
import Layout from '@/layout'
export default {
  path: '/salarys',
  name: 'salarys',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/employees'),
      meta: {
        title: '工资'
      }
    }
  ]
}