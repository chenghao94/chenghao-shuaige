一面问了首屏优化、缓存、跨域，vue双向绑定原理，vue3的proxy，网页监测、编写通用组件

先性能优化，然后url到页面渲染的过程，这个过程中每一步可以怎么优化

谈谈你的项目，项目职责，技术难题，平常怎么学习的，对神策的了解，对大数据感兴趣吗之类的

vue首屏优化：最好的方案是首页加载的时候只请求与首页有关的资源。
1.路由懒加载  2.第三方库按需加载  3.Nginx开启gzip压缩  4.webpack打包开启gzip压缩，关闭sourceMap  5.ssr
6. 旧页面的方案：css，js懒加载，textarea标签。 类似于图片懒加载
可以用performance这个性能探针来检测耗时时间

浏览器缓存

vue3和vue2
vue2是递归的去遍历对象的属性，给每个属性添加getter和setter，这也是浪费性能的地方
对于新增的属性监听不到，除非使用Vue.set方法
对于数组，只能当调用数组的某些方法的时候才能触发更新，对于里面的值改变了监听不到
vue3的proxy，意为代理，是在语言层面，对目标对象设置了拦截操作，可以解决2的问题



如下表格，点击 `#data .date` 后使表格按日期排序，当前是正序则改为倒序，当前是倒序则改为正序，要求以原生 JavaScript 实现。

```html
<table id="data">
    <thead>
        <tr>
            <th class="date">日期</th>
            <th class="total">总次数</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2017年10月23日</td>
            <td>68,112</td>
        </tr>
        <tr>
            <td>2017年8月6日</td>
            <td>68,020</td>
        </tr>
        <tr>
            <td>2017年11月11日</td>
            <td>69,433</td>
        </tr>
        <tr>
            <td>2016年5月12日</td>
            <td>69,699</td>
        </tr>
        <tr>
            <td>2017年1月18日</td>
            <td>42,565</td>
        </tr>
    </tbody>
</table>
















```
实现一个 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。

```javascript
/**
 * @param {number} n 乘积
 * @return {Array} 拆解后的乘数
 * 实现一个 `calc` 方法，可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数
 */
function calc(n) {

}

console.log(calc(2));
// [2]

console.log(calc(8));
// [2, 2, 2]

console.log(calc(24));
// [2, 2, 2, 3]

console.log(calc(30));
// [2, 3, 5]
```


2017年10月23日，2017年8月6日，2017年11月11日，2016年5月12日，2016年11月11日
