try {
  throw new Error('foo');
} catch(e) {
  console.log(e); // Error: foo
}

try {
  let p = new Promise((resolve, reject)=>{
    console.log(123)
    let c = b + '11'
    reject(new Error('my-error'))
  })
  p.catch(e=>console.log('catch', e))
} catch (e) {
  console.log('1', e)
}
/**
 * 第一个 try/catch 抛出并捕获了错误，第二个 try/catch 抛出错误却没有捕获到。
 * 乍一看这可能 有点违反直觉，因为代码中确实是同步创建了一个拒绝的期约实例，而这个实例也抛出了包含拒绝理由的错误。
 * 这里的同步代码之所以没有捕获期约抛出的错误，是因为它没有通过异步模式捕获错误
 * **/