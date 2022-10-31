// 管理所有的自定义指令
export const imageerror = {
  // inserted会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // 报错 会触发图片的一个事件 onerror
    dom.onerror = function() {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom可以注册error事件
      dom.src = options.value // 这里不能写死
    }
  }
}
