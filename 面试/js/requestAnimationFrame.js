/**
 * setTimeout会造成卡顿，因为是当主线程执行完成后，才会执行异步代码，
 * 时间把握不准确，而且与屏幕刷新时间往往不一定相同
 *
 * requestAnimationFrame是由浏览器来决定回调函数的执行时间，
 * 每次帧刷新(重新渲染)的时候会执行一次
 *
 * 还有一种区别是cpu节能：当页面最小化的时候，setTimeout还是会执行，但是requestAnimationFrame会停止
 * **/