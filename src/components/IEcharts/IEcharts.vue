<template>
  <div class="echart w-100 h-100" :ref="_key" :id="_key" :style="{backgroundColor:bgcolor_}"></div>
</template>

<script>
// import echarts from "echarts"
let echarts = require('echarts');
export default {
  name: "IEcharts",
  props: {
    _key:{
      type: String,
      require: true
    },
    _option: {
      type: Object,
      required: false,
    },
    _bgcolor:{
      type: String,
      required: false,
    }
  },
  components: {},
  data() {
    return {
      key_:'',
      bgcolor_:'',
      option_: {},
    };
  },
  computed: {},
  watch: {
    _key: {
      handler: function (val, oldVal) {
        this.key_ = val;
      },
      deep: true,
      immediate: true,
    },
    _option: {
      handler: function (val, oldVal) {
        this.option_ = val;
        this.$nextTick().then(function () {
          console.log('nextTick=>',this, this.option_,echarts);
          this.initChart(this.option_);
        }.bind(this));
      },
      deep: true,
      immediate: true,
    },
    _bgcolor: {
       handler: function (val, oldVal) {
        this.bgcolor_ = val;
        
      },
      deep: true,
      immediate: true,
    }
  },
  created() {console.log('IEcharts=>',this);},
  mounted() {},
  methods: {
    initChart(option) {
      // console.log('initChart 1=>',echarts);
      let getchart = echarts.init(document.getElementById(this._key));
      getchart.setOption(option);
      // console.log('initChart=>',option,getchart);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        getchart.resize();
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
