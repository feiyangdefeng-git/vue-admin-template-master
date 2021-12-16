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

// 实例库需要的引用=========================
import demoBlock from "./examples/components/demo-block"
import MainFooter from "./examples/components/footer"
import MainHeader from "./examples/components/header"
import SideNav from "./examples/components/side-nav"
import FooterNav from "./examples/components/footer-nav"
import './examples/theme-chalk/src/index.scss'
import "./examples/demo-styles/index.scss"
import "./examples/assets/styles/common.css"
import "./examples/assets/styles/fonts/style.css"
import icon from "./examples/icon.json"
// 实例库需要的引用=========================

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

// 实例库需要的引用=========================
Vue.prototype.$icon = icon; // Icon 列表页用
Vue.component("demo-block", demoBlock)
Vue.component("main-footer", MainFooter)
Vue.component("main-header", MainHeader)
Vue.component("side-nav", SideNav)
Vue.component("footer-nav", FooterNav)
// 实例库需要的引用=========================

Vue.config.productionTip = false
Vue.prototype.$settings = settings
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
