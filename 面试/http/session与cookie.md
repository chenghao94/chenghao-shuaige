cookie是存放在客户浏览器端的，
主要分为2种：
1.会话cookie：浏览器关闭cookie就消失，存储在内存里
2.持久cookie：浏览器就会把cookie保存到硬盘上，直到过期

session是存放在服务器端的，
服务器为客户端分配sessionId之后，每次请求时候，
浏览器就会自动的把sessionId放在cookie里面传给服务端。
###如果浏览器禁用了cookie，
###那么就需要人为的把sessionId添加为接口的参数

考虑到安全应当用session，
单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
可以考虑将登陆信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中。

为什么cookie是不安全的？
最大的原因是因为它存储在浏览器端，容易被截取，就算加密了，也会被截取拿去身份验证

如何解决安全性问题呢？
1：有效期设置短一点  通过设置max-age和Expires属性，前者优先级高
2：设置HttpOnly属性为true，防止js脚本读取
3：使用sesssion
4：使用https