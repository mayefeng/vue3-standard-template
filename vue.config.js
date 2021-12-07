const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      
    ],
  },
  devServer:{
    open: false,//是否自动弹出浏览器页面
    host: '0.0.0.0',
    port:'8084',//端口号
    https:false,//是否使用https协议
    hot: true,
    hotOnly: true,//是否开启热更新
    proxy:{
      //关键词
      [process.env.VUE_APP_BASE_API]:{
        target: process.env.VUE_APP_SERVICE,//API服务器的地址
        changeOrigin:true,//虚拟的站点需要更换origin
        pathRewrite: {
          //重写路径 比如'/api/aaa/bbb'重写为'/aaa/bbb'
          ['^' + process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  }
}