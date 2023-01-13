const list = [3, 2, 6, 4, 1, 5]
/** 求和 **/
let sum = list.reduce((pre, cur, index, list) => {
  return pre + cur
}, 0)
console.log('和', sum)

/** 求最大值 **/
let max = list.reduce((pre, next) => {
  return pre > next ? pre : next
})
console.log('最大值', max)

/** 平均值 **/
let arg = list.reduce((pre, cur, index, list) => {
  return pre + cur / list.length
}, 0)
console.log('平均值', arg)

/** 逐步异或 **/
const array = [2, 3, 4, 5, 5, 4, 5, 5, 3, 2, 7, 7, 8, 7, 8]
let result = array.reduce((pre, cur) => {
  return pre ^ cur
}, 0)
console.log('异或结果', result)
/** 实现数组的扁平化**/
const flatArray = [[1,2,3],4,5,[7,8,9],[10,11],12,13,[14,15]]
let flatResult = flatArray.reduce((pre,cur,index,list)=>{
  return pre.concat(cur)
},[])
console.log('扁平化结果', flatResult)
/**实现map功能**/
let newList = list.reduce((pre, cur, index, list) => {
  pre.push(cur * 2)
  return pre
}, [])
console.log('map功能', newList)

/**实现map方法**/
Array.prototype.myMap = function (callback) {
  return this.reduce((pre, cur, index, list) => {
    pre.push(callback(cur, index, list))
    return pre
  }, [])
}
console.log('map方法', list.myMap((item, index) => {
  return {
    name: index + 1,
    count: item * 2
  }
}))
