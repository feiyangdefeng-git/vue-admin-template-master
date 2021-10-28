<template>
  <div class="dashboard-container h-100 d-flex jc-start ai-center flex-column">

    <div class="row-item flex-1 w-100 d-flex jc-start ai-center my-10 p-10"><div class="dashboard-text">name: {{ name }}</div></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-button class="mx-30" :plain="true" @click="open">测试按钮</el-button>
      <el-button type="text" @click="open1">点击打开 Message Box</el-button>
      <el-button type="text" @click="dialogVisible = true" >点击打开 Dialog</el-button>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <IQuery :formData="formData"></IQuery>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <div class="flex-1 cw-40 ch-30 bg-c1 d-flex jc-start ai-center flex-column of-y-s">
        <p :key="index" class="fs-20 text-c3 w-100 flex-1 my-10 top-0 bg-c7 p-20" v-for="(item,index) in  (new Array(25).fill('这是测试数据'))">{{ (index + 1) + item }}</p>
        
      </div>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"></div>

    
    

    

    

    <!-- <el-button v-longpress="longpress">长按</el-button> -->
    <el-dialog
      v-dialogDrag
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <i-table
        :columnList="tempTableColumnList"
        :tableData="tempTableData"
        :span-method="arraySpanMethod"
        style="width: 100%"
        border
      />
      <span slot="footer" class="dialog-footer p-20">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ITable from "./../../components/ITable/ITable.vue";

import IQuery from "./../../components/IQuery/IQuery.vue";

export default {
  name: "Dashboard",
  components: { ITable, IQuery },
  data() {
    return {
      dialogVisible: false,
      tempTableColumnList: [
        { name_cn: "日期", name_en: "date", width: "100", sortable: true },
        { name_cn: "姓名", name_en: "name", width: "110" },
        { name_cn: "地址", name_en: "address", "class-name": "ceshiClass" },
      ],
      tempTableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      formData:[
        {lable: "审批人",name_en: "spr",vmodel: "",type: "input", placeholder: "审批人", },
        {lable: "活动区域",name_en: "hdqy",vmodel: "",type: "select",placeholder: "活动区域",options: [{ label: "区域一", value: "shanghai" },{ label: "区域二", value: "beijing" },], },
        {lable: "即时配送", name_en: "jsps", vmodel: "", type: "switch" },
        {lable: "活动性质",name_en: "hdxz",vmodel: [],type: "checkbox",group: true,groupData: [{ label: "美食/餐厅线上活动"},{ label: "地推活动"},{ label: "线下主题活动" },],},
        {lable: "特殊资源",name_en: "tszy",vmodel: "",type: "radio", group: true,groupData: [{ label: "线上品牌商赞助" }, { label: "线下场地免费" }], },
        {lable:'活动形式', name_en:'hdxs', vmodel:'', type:'inputarea' },
        // {lable:'查询', name_en:'cx',  type:'btn', btnType:'primary', callback: this.getformData},
        // {lable:'重置', name_en:'cz',  type:'btn', btnType:'success', callback: this.formReset},
        {lable:'', name_en:'',  type:'btn', btnGroup:[{lable:'查询',btnType:'primary',callback:this.getformData},{lable:'重置',btnType:'success',callback:this.formReset}]},
      ]
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
    formReset(data){
      console.log('formReset=>',data);
    },
    getformData(data){
      console.log('getformData=>',data);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    open() {
      this.$message("这是一条消息提示");
    },
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
