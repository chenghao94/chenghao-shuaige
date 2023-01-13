同源：1.协议 2.域名 3.端口号

非同源的限制：
1.cookie和LocalStorage无法读取
2.DOM无法获得
3.AJAX不能请求

与iframe的交互
http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html
iframe跨域：
1.window.name  2.document.domain   3.location.hash


postMessage：允许跨窗口通信，不论这两个窗口是否同源。

AJAX：
1：JSONP
老式浏览器全部支持，服务器改造非常小。
2：WebSocket
3：CORS