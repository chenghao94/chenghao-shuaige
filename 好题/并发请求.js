/**
 * urls: 待请求的urls数组
 * maxNum 最大并发数
 * 返回一个结果返回数组和urls数组保存一致
 * https://jsonplaceholder.typicode.com/todos/2
 * **/
// 解析
// 这个方法肯定是异步的，所以肯定要返回一个promise
function concurRequest(urls = [], maxNum) {
  return new Promise(resolve => {
    if(urls.length === 0) {
      resolve([])
      return
    }
    const results = []
    let index = 0 // 定义一个发请求的下标
    // 发送请求函数, 每次发送请求之后，下标加一
    async function request() {
      if(index === urls.length) {
        return
      }
      // 存储发请求的时候 对应的下标
      const current = index
      try {
        const res = await fetch(urls[current])
        results[current] = res
      } catch (err) {
        results[current] = err
      } finally {
        index++
        request()
      }
    }
  })
}