const sidebarLogoIco = '@/assets/public/htmltitleico.png'

module.exports = {
  title: '后台模板平台 ',
  /**
   * 系统启动时使用的端口号 默认值：9528
   */
  port: 3066,
  /**
   * 项目使用的后台接口的代理 默认值：mock数据
   */
  devServer: {
    //   port: port,
    //   open: true, //配置自动启动浏览器
    //   proxy: {
    //     '/api': {
    //       target: 'http://10.32.226.135:9090/', //后端ip地址及端口
    //       ws: true, //是否跨域
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/api': ''
    //       }
    //     },
    //     '/log': {
    //       target: 'http://10.32.226.136:9090/', //后端ip地址及端口
    //       ws: true, //是否跨域
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/log': ''
    //       }
    //     }
    //   }
  },
  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,
  /**
   * @type {boolean} true | false
   * @description 设置系统左上角的log是否显示
   */
  sidebarLogo: true,
  /**
   * 设置系统左上角的log
   */
  sidebarLogoUrl: sidebarLogoIco,
  /**
   * 设置系统左上角的显示文本
   */
  sidebarLogoLable: '后台模板平台 '
}
