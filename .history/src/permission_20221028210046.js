// 权限拦截 导航守卫 路由守卫
import router from '@/router'
import store from '@/store'
import NProgress from 'nprogress' // 引入进度条插件
import 'nprogress/nprogress.css' // 引入进度条样式
// 前置
const whiteList = ['/login', '/404'] // 定义白名单  所有不受权限控制的页面

router.beforeEach((to, from, next) => {
  NProgress.st
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
  NProgress.done()
})
// 后置
router.afterEach()
