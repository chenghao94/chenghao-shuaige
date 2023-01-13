keep-alive是Vue中内置的一个抽象组件 include, exclude, max

这个组件created之后内部有一个cache对象，用来保存vNode即所有组件实例
组件名称或者组件tag为key，vNode为值

设置了max属性之后会有LRU（Least recently used，最近最少使用）算法
将新数据从尾部插入到this.keys中
每当缓存命中（即缓存数据被访问），则将数据移到this.keys的尾部
当this.keys满的时候，将头部的数据丢弃