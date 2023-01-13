/**
 *
 * 把接受多个参数的函数，转化成接受单一参数的函数
 * 并且每次返回一个新函数，一个接一个的调用剩余的参数
 *
 * **/

const curry = (fn, ...args) =>
  args.length < fn.length
  ? (...arguments) => curry(fn, ...args, ...arguments)
  : fn(...args);

function sumFn(a,) {
}
const sum = curry(sumFn)

console.log(sum(1,3))
console.log(sum(1)(2)(3))
console.log(sum(1,2)(3,4)(5))

// 函数柯里化的作用
// 参数复用，提前返回，延时执行