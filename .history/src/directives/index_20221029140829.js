// 管理所有的自定义指令
export const imageerror = {
  // inserted会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // 报错 会触发图片的一个事件 onerror
    dom.onerror = function () {

    }
  }
}
