let p1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 'p1'));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 1000, 'p2'));

let p1then = p1.then(function () {
  console.log('p1, resolve')
  return '111'
}, function (){
  console.log('p1, reject')
  return 'e111'
})
p1then.then(function (res) {
  console.log('p1then, resolve', res)
}, function (rej) {
  console.log('p1then, reject', rej)
})

let p2then = p2.then(function (res) {
  console.log('p2, resolve', res)
  return '222'
}, function (rej){
  console.log('p2, reject', rej)
  let a = b + 1
  return 'e222'
})

p2then.then(function (res) {
  console.log('p2then, resolve', res)
}, function (rej) {
  console.log('p2then, reject', rej)
})

// console.log('p1', p1)
// console.log('p1then', p1then)
// console.log('p2', p2)
// console.log('p2then', p2then)
