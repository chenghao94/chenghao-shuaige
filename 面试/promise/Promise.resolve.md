#####
Promise.resolve()静态方法，可以实例化一个完成状态的promise

下面 p1和p2的效果是一样的
let p1 = new Promise((resolve, reject) => resolve(123)); 
let p2 = Promise.resolve(123);
如果参数是一个promise 则会原样返回这个promise，此时Promise.resolve()是幂等性的，相当于一个空包装
Promise.resolve(promise)  === promise

#####
Promise.reject()静态方法，可以实例化一个拒绝状态的promise；并且会抛出一个异步错误，
这个错误不能通过try/catch捕获，只能通过p.catch方法去捕获
下面 p3和p4的效果是一样的
let p3 = new Promise((resolve,reject) => reject(456))
let p4 = Promise.reject(456)
如果参数是一个promise 则不是幂等性的，这个参数便是reason
