import Vue from 'vue'
import settings from './settings'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n   en   zh-CN
import components from './components'
import API from './api/index'

import '@/styles/index.scss' // global css
import Directives from './directive/index'
import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import './styles/basic-new.scss'
// import './core/style/theme/index.css'
import './styles/element-variables.scss'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.prototype.$API = API
// 全局注册自定义组件
Vue.use(components)
Vue.use(Directives)
// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$settings = settings
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
