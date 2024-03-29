import IQuery from './IQuery/IQuery.vue'
import ITable from './ITable/ITable.vue'
import IEcharts from './IEcharts/IEcharts.vue'
import ICard from './ICard/ICard.vue'
import DiffTable from './DiffTable/index.vue'
const components = {
  IQuery,
  ITable,
  IEcharts,
  ICard,
  DiffTable
}
const install = function(Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}
export default install
