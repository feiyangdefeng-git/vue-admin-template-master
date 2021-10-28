<template>
  <div>
    <el-table :key="tableKey_" :data="tableData_" v-bind="$attrs" v-on="$listeners" >
      <!-- <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column> -->
      <!-- <el-table-column
        :key="`el-table-column-${index}`"
        v-for="(item, index) in columnList_"
        :prop="item['name_en']"
        :label="item['name_cn']"
        :width="item['width'] && item['width'] ? item['width'] : ''"
        :class-name="
          item['className'] && item['className'] ? item['className'] : ''
        "
        :label-class-name="
          item['labelClassName'] && item['labelClassName']
            ? item['labelClassName']
            : ''
        "
      >
      </el-table-column> -->
      <IColumn
        :key="`el-table-column-${index}`"
        v-for="(item, index) in columnList_"
        :itemData="item"
      >
      </IColumn>
    </el-table>
  </div>
</template>

<script>
import IColumn from "./IColumn.vue";
export default {
  name: "ITable",
  components: { IColumn },
  inheritAttrs:false,
  props: {
    columnList: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
    },
    tableProp: { type: Object },
  },
  data() {
    return {
      title: "这是由render函数渲染的标签。",
      level: "1",

      tableKey_: 0,
      columnList_: [],
      tableData_: [],
    };
  },
  computed: {},
  watch: {
    columnList: {
      handler: function (val, oldVal) {
        this.columnList_ = val;
        this.tableKey_ = this.tableKey_ + 1; // 用于保证每次数据更新时组件一定能渲染
      },
      deep: true,
      immediate: true,
    },
    tableData: {
      handler: function (val, oldVal) {
        this.tableData_ = val;
        this.tableKey_ = this.tableKey_ + 1; // 用于保证每次数据更新时组件一定能渲染
      },
      deep: true,
      immediate: true,
    },
  },
  created() {},
  mounted() {
    console.log("iTable=>", this);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
