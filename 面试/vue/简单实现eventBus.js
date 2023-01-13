class EventBus {
  constructor() {
    this.events = this.events || new Map()   // 储存事件
    this.maxListeners = this.maxListeners || 10  // 设置最大监听数量
  }

  on(name, fn) {
    const handler = this.events.get(name)
    if(!handler) {
      this.events.set(name, fn)
      // 如果handler是函数说明只有一个监听者
    } else if(handler && typeof handler === 'function') {
      this.events.set(name, [handler, fn])  // 多个监听者我们需要用数组储存
    } else {
      handler.push(fn)  // 已经有多个监听者,那么直接往数组里push函数即可
    }
  }

  emit(name, ...args) {
    const handler = this.events.get(name)
    if(Array.isArray(handler)) {
      for(let i = 0; i<handler.length; i++){
        if(args.length >0) {
          handler[i].apply(this, args)
        } else {
          handler[i].call(this)
        }
      }
    } else {
      if (args.length > 0) {
        handler.apply(this, args)
      } else {
        handler.call(this)
      }
    }
  }
}
