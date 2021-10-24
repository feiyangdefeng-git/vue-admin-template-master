import drag from './drag'

// 自定义指令
const directives = {

  'dialogDrag': drag
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}