var obj = {
  name: '123',
  sex: 12
}
var arr = [1,2,3]
console.log(obj.valueOf())
console.log(arr.valueOf())
console.log(obj.valueOf())
console.log(arr.toString())

console.log(++[[]][+[]] + [+[]])
console.log({}+[])

function a() {
  console.log(1)
  Promise.resolve().then(()=>{
    console.log(2)
  })
}

setTimeout(()=>{
  console.log(3)
  Promise.resolve().then(a)
},0)

Promise.resolve().then(()=>{
  console.log(4)
})
console.log(5)