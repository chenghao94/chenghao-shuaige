#####
为promise实例添加的回调函数的主要方法，接收两个参数，都是函数
fn1和fn2,,如果不是函数的参数会被忽略
Promise.prototype.then(fn1, fn2)
这两个函数是互斥的，只会执行一个
Promise.prototype.catch其实是语法糖 就是 Promise.prototype.then(null, function(){})

then方法会返回一个新的promise，


