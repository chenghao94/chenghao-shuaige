class MyPromise {
  // 不支持链式调用
  constructor(fn) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.successCallback = [];
    this.errorCallback = [];
    let resolve = value => {
      if (this.status === 'pending') {
        this.status = 'resolved';
        this.value = value;
        console.log('执行回调');
        this.successCallback.forEach(item => item());
      }
    };
    let reject = reason => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.reason = reason;
        this.errorCallback.forEach(item => item());
      }
    };
    try {
      console.log('立即执行函数');
      fn(resolve, reject); // 立即执行函数！
    } catch (e) {
      // 如果有异常这个异常作为失败的原因
      reject(e);
    }
  }

  then(fn1, fn2) {
    console.log('执行then函数', this.status);
    if (this.status === 'resolved') {
      fn1(this.value);
    }
    if (this.status === 'rejected') {
      fn2(this.reason);
    }
    if (this.status === 'pending') {
      console.log('放回调');
      this.successCallback.push(() => {
        fn1(this.value);
      });
      this.errorCallback.push(() => {
        fn2(this.reason);
      });
    }
  }
}
new MyPromise(resolve => {
  setTimeout(() => {
    resolve(123);
  }, 2000);
}).then(res => {
  console.log('res', res);
});
