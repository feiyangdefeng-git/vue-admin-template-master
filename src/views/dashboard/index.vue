<template>
  <div class="dashboard-container h-100 d-flex jc-start ai-center flex-column">
    <div class="row-item flex-1 w-100 d-flex jc-start ai-center my-10 p-10">
      <div class="dashboard-text">name: {{ name }}</div>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-button class="mx-30" :plain="true" @click="open">测试按钮</el-button>
      <el-button type="text" @click="open1">点击打开 Message Box</el-button>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <IQuery :_formData="formData"></IQuery>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <DiffTable :data-group="[oldData, newData]" :columns="tableColumns"></DiffTable>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <div
        class="
          flex-1
          cw-40
          ch-30
          bg-c1
          d-flex
          jc-start
          ai-center
          flex-column
          of-y-s
        "
      >
        <p
          :key="index"
          class="fs-20 text-c3 w-100 flex-1 my-10 top-0 bg-c7 p-20"
          v-for="(item, index) in new Array(25).fill('这是测试数据')"
        >
          {{ index + 1 + item }}
        </p>
      </div>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>

      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-link href="https://element.eleme.io" target="_blank"
        >默认链接</el-link
      >
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-input-number
        v-model="num"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></el-input-number>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"
      ></el-cascader>

      <el-slider v-model="value1" class="cw-20 ch-5"></el-slider>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <div class="w-100 ch-50">
        <IEcharts :option="option" bgcolor="rgba(149, 127, 98,0.5)"></IEcharts>
      </div>
    </div>
    <div class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          >
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
    </div>
    <div
      class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"
    >
    
    <!-- <alert></alert> -->
     <!-- <el-skeleton-item
          variant="image"
          style="width: 240px; height: 240px;"
        /> -->

        <el-empty :image-size="200"></el-empty>
    </div>
    <div
      class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"
    ></div>
    <div
      class="row-item flex-1 w-100 d-flex jc-center ai-center my-10 p-10"
    ></div>
    <!-- <el-button v-longpress="longpress">长按</el-button> -->
    <el-dialog
      v-dialogDrag
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <i-table
        :_columnList="tempTableColumnList"
        :_tableData="tempTableData"
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
// import echarts from 'echarts'
const echarts = require('echarts')
import { mapGetters } from 'vuex'
// import ITable from './../../components/ITable/ITable.vue';

// import IQuery from './../../components/IQuery/IQuery.vue';
// import alert from './../../examples/docs/zh-CN/alert.vue'

export default {
  name: 'Dashboard',
  // components: { alert },
  data() {
    return {
      oldData: [
        { id: 1, name: 'zhangsan1', address: 'zxczxczxc', age: 23 },
        { id: 2, name: 'zhangsan2', age: 23.5, address: 'zxczxczxc' },
        { id: 3, name: 'zhangsan34', age: 23, address: 'zxczxczxc' },
        { id: 4, name: 'zhangsan4', age: 23, address: 'zxczxczxc' },
        { id: 5, name: 'zhangsan5', age: 23, address: 'zxczxczxc' },
        { id: 6, name: 'zhangsan5', age: 23, address: 'zxczxczxc' }
      ],
      newData: [
        { id: 1, name: 'zhangsan1', age: 23, address: 'zxczxczxc' },
        { id: 2, name: 'zhangsan2', age: 23, address: 'zxczxczxc' },
        { id: 4, name: 'zhangsan4', age: 23, address: '地址地址地址' },
        { id: 3, name: 'zhangsan3', age: 23, address: 'zxczxczxc' },
        { id: 5, name: 'zhangsan5', age: 23, address: 'zxczxczxc' },
        { id: 7, name: 'zhangsan5', age: 23, address: 'zxczxczxc' },
        { id: 8, name: 'zhangsan5', age: 23, address: 'zxczxczxc' }
      ],
      tableColumns: [
        { label: '唯一id', prop: 'id' },
        { label: '名称', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '地址', prop: 'address' }
      ],
      num: 0,
      option: {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: 'Gradient Stacked Area Chart'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              // this.$echarts.graphic.LinearGradient
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(128, 255, 165)',
                },
                {
                  offset: 1,
                  color: 'rgba(1, 191, 236)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [140, 232, 101, 264, 90, 340, 250],
          },
          {
            name: 'Line 2',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(0, 221, 255)',
                },
                {
                  offset: 1,
                  color: 'rgba(77, 119, 255)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [120, 282, 111, 234, 220, 340, 310],
          },
          {
            name: 'Line 3',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(55, 162, 255)',
                },
                {
                  offset: 1,
                  color: 'rgba(116, 21, 219)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [320, 132, 201, 334, 190, 130, 220],
          },
          {
            name: 'Line 4',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 0, 135)',
                },
                {
                  offset: 1,
                  color: 'rgba(135, 0, 157)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [220, 402, 231, 134, 190, 230, 120],
          },
          {
            name: 'Line 5',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            label: {
              show: true,
              position: 'top',
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(255, 191, 0)',
                },
                {
                  offset: 1,
                  color: 'rgba(224, 62, 76)',
                },
              ]),
            },
            emphasis: {
              focus: 'series',
            },
            data: [220, 302, 181, 234, 210, 290, 150],
          },
        ],
      },
      value1: 10,
      value: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        }
      ],
      dialogVisible: false,
      tempTableColumnList: [
        { name_cn: '日期', name_en: 'date', width: '100', sortable: true },
        { name_cn: '姓名', name_en: 'name', width: '110' },
        { name_cn: '地址', name_en: 'address', 'class-name': 'ceshiClass' },
      ],
      tempTableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      formData: [
        {
          lable: '审批人',
          name_en: 'spr',
          vmodel: '',
          type: 'input',
          placeholder: '审批人',
        },
        {
          lable: '活动区域',
          name_en: 'hdqy',
          vmodel: '',
          type: 'select',
          placeholder: '活动区域',
          options: [
            { label: '区域一', value: 'shanghai' },
            { label: '区域二', value: 'beijing' },
          ],
        },
        { lable: '即时配送', name_en: 'jsps', vmodel: '', type: 'switch' },
        {
          lable: '活动性质',
          name_en: 'hdxz',
          vmodel: [],
          type: 'checkbox',
          group: true,
          groupData: [{ label: '美食/餐厅线上活动' },{ label: '地推活动' },{ label: '线下主题活动' }],
        },
        {
          lable: '特殊资源',
          name_en: 'tszy',
          vmodel: '',
          type: 'radio',
          group: true,
          groupData: [{ label: '线上品牌商赞助' }, { label: '线下场地免费' }],
        },
        // {lable:'活动形式', name_en:'hdxs', vmodel:'', type:'inputarea' },
        // {lable:'查询', name_en:'cx',  type:'btn', btnType:'primary', callback: this.getformData},
        // {lable:'重置', name_en:'cz',  type:'btn', btnType:'success', callback: this.formReset},
        {
          lable: '',
          name_en: '',
          type: 'btn',
          btnGroup: [
            { lable: '查询', btnType: 'primary', callback: this.getformData },
            { lable: '重置', btnType: 'success', callback: this.formReset },
          ],
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['name']),
  },
  mounted() {
    console.log('API=>',this.$API);
  },
  methods: {
    formReset(data) {
      console.log('formReset=>', data)
    },
    getformData(data) {
      console.log('getformData=>', data)
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2]
        } else if (columnIndex === 1) {
          return [0, 0]
        }
      }
    },
    handleChange(value) {
      console.log(value)
    },
    open() {
      this.$message('这是一条消息提示')
      let routeData = this.$router.resolve({
      name: 'dataview',
      path: "/dataview"
      // query: {
      //   id: row.id,
      // },
    })
    window.open(routeData.href, '_blank')
    },
    open1() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: (action) => {
          this.$message({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
  },
}
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
