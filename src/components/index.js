import IQuery from './IQuery/IQuery.vue'
import ITable from './ITable/ITable.vue'
const components = {
    IQuery,
    ITable
};
const install = function (Vue, opts = {}) { 
    Object.keys(components).forEach((key) => { 
        Vue.component(key, components[key]); 
    }); 
};
export default install