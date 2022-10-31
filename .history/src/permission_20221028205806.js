// 权限拦截 导航守卫 路由守卫
import router from '@/router'
import store from '@/store'
// 前置
const whiteList = ['/login', '/404'] // 定义白名单  所有不受权限控制的页面

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (token.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
      if(whiteList.indexOf())
  }
})
// 后置
router.afterEach()