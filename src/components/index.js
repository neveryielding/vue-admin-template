// 全局组件 服务 对象等
import Vue from 'vue'
import MLoading from './MLoading/index'
const components = []
const install = (Vue, opts) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$mloading = MLoading.service
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Vue.use(install)
