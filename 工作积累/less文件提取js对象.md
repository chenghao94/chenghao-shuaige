第一步：安装依赖 less-vars-to-js

第二步：创建文件 utils/less-var-loader.js, 内容如下
        const lessToJs = require('less-vars-to-js')
        module.exports = function (content) {
          return `module.exports = ${JSON.stringify(lessToJs(content))}`
        }

第三步：使用文件
import * as style from '!!./utils/less-var-loader!./style/page-var.less'
style对象即为对象


