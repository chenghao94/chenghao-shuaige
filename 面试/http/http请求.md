http://www.ruanyifeng.com/blog/2016/08/http.html

get请求会产生一个tcp数据包：
浏览器会把http header和data一并发送出去，服务器响应200(返回数据);
post请求会产生两个tcp数据包：
浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok(返回数据)。

http1.1与http1.0相比：持久化链接，一个链接里面支持多个请求但是会造成队头阻塞。
还有安全性因素的缺陷，开销大的缺陷

http2与http1.1相比：多路复用；头信息压缩；二进制传输；服务器推送。
https://developer.51cto.com/art/201910/604255.htm

HTTP/2协议缺点:多个数据流使用同一个TCP 连接，遵守同一个流量状态控制和拥塞控制。
只要一个数据流遭遇到拥塞，剩下的数据流就没法发出去，这样就导致了后面的所有数据都会被阻塞
