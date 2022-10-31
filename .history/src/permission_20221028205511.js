// 权限拦截 导航守卫 路由守卫
import router from '@/router'
import store from '@/store'
// 前置
router.beforeEach((to, from, next) => {
  const token = store.get
  if( token )
})
// 后置
router.afterEach()