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
    // 没有token
    if (whiteList.indexOf(to.path) > -1) {
      // 如果找到了 表示在在名单里面
      next()
    } else {
      next('/login')
    }
  }
})
// 后置
router.afterEach()
