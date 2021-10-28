import drag from './drag' // 只用于el-dialog中，直接添加属性【v-dialogDrag】即可
// 自定义指令
const directives = {
  'dialogDrag': drag
}
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
