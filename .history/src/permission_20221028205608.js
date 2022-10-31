// 权限拦截 导航守卫 路由守卫
import router from '@/router'
import store from '@/store'
// 前置
router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (token.path === '/login') {
      next('/')
    }else {
       
    }
  }
})
// 后置
router.afterEach()