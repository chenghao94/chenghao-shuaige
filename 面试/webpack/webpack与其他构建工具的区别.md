https://www.cnblogs.com/gaoht/p/11310365.html

webpack的构建方式是基于入口的，webpack会自动的递归解析入口所依赖的全部资源文件，
通过loader来处理不同的文件，通过插件来扩展webpack的功能。

gulp的构建方式是基于任务和流的，
一个任务：找到并对一个或者一类文件进行链式操作。
多个任务就构成了web的构建流程