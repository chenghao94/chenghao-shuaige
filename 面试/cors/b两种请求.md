http://www.ruanyifeng.com/blog/2016/04/cors.html

CORS需要浏览器和服务器同时支持 IE>=10
浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

###### 简单请求
1：请求方法是三者之一：head，get，post
2：请求的头信息限制在某几个字段之内，其中之一Content-Type在3个之内
##### 非简单请求
非简单请求的同时又跨域的请求会先发送一个预检请求OPTIONS：
浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。
服务器需要确认预检请求的三个字段之后，才会允许跨域请求：

客户端发送：请求源，请求方法，额外头信息字段
origin: http://api.bob.com
Access-Control-Request-Method:PUT 
Access-Control-Request-Headers:X-Custom-Header

服务器响应
Access-Control-Allow-Origin: http://api.bob.com / *
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header

代表跨域可以正常请求


