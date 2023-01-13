/**
 * 防抖
 * 应用场景：连续频繁地触发事件，只关心“最后一次”操作后的结果
 *
 * 使用方式：let debounceFunc = debounce(fun);
 *          debounceFunc();
 * @param fun           要执行的函数
 * @param delay         延时，默认500毫秒
 * @param immediate     是否先立即执行一次
 * @returns {Function}
 */
export function debounce(fun, delay = 500, immediate=true) {
  let timer = null;
  return function(args) {
    let that = this;
    let _args = args;
    if (timer) clearTimeout(timer);
    if (immediate) { // 立即执行
      if (!timer) fun.call(that, _args); // 如果定时器不存在,则说明延时已过,可以立即执行函数
      timer = setTimeout(function() {
        timer = null; // 到时间后,定时器自动设为null,不仅方便判断定时器状态还能避免内存泄露
      }, delay);
    } else { // 非立即执行,则重新设定定时器,并将回调函数放入其中
      timer = setTimeout(function(){
        fun.call(that, _args);
      }, delay);
    }
  }
}


/**
 * 节流
 * 时间戳+定时器 实现第一次触发可以立即响应,结束触发后也能有响应 (该版才是最符合实际工作需求)
 * 该版主体思路还是时间戳版,定时器的作用仅仅是执行最后一次回调
 * 应用场景：连续频繁地触发事件，关心操作过程中持续的反馈
 * @param fun           要执行的函数
 * @param delay         延时，默认500毫秒
 * @returns {Function}
 */
export function throttle(fun, delay = 500) {
  let timer = null;
  let prev = 0;
  return function(args) {
    let now = Date.now();
    let remaining = delay - (now-prev); // 距离规定时间,还剩多少时间
    let that = this;
    let _args = args;
    clearTimeout(timer);//清除之前设置的定时器
    console.log(remaining);
    if (remaining <= 0) {
      fun.call(that, _args);
      prev = Date.now();
    } else {
      timer = setTimeout(function() {
        fun.call(that, _args);
      }, remaining);//因为上面添加的clearTimeout.实际这个定时器只有最后一次才会执行
    }
  }
}


// 时间戳
function throttleTimestamp(fun, delay=500) {
  let prev = 0;
  return function(args) {
    let now = Date.now();
    let that = this;
    let _args = args;
    if(now - prev > delay) {
      fun.apply(that, _args);
      prev = now;
    }
  }
}
// 定时器
function throttleTimer(fun, delay=500) {
  let timer;
  return function(args) {
    let that = this;
    let _args = args;
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        fun.apply(that, _args);
      }, delay);
    }
  }
}
