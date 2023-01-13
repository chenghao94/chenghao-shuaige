class Observer {
  constructor(data) {
    this.data = data;
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let val = data[key];
        if (typeof data[key] === "object") {
          // 如果值不为原始类型，则继续递归
          new Observer(val);
        } else {
          this.convert(key, val);
        }
      }
    }
  }
  convert(key, val) {
    console.log('convert')
    Object.defineProperty(this.data, key, {
      enumerable: true,
      configurable: true,
      get () {
        console.log(key + "被访问了")
        return val
      },
      set(newVal) {
        console.log(key + "被设置了新值" + newVal)
        val = newVal
      }
    })
  }
}
let obj = {
  name: 'john'
}
let vue  = new Observer(obj)
vue.data.name = '123'
console.log(vue.data.name)
vue.data.name = '456'
console.log(vue.data.name)