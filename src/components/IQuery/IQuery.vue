<template>
  <el-form :inline="true"  class="demo-form-inline">

    <el-form-item :key="'form-item-'+index " :label="item.type == 'btn'? '' : item.lable" v-for="(item,index) in  formData">

        <el-input v-if="item.type == 'inputarea' " type="textarea" v-model="item.vmodel"></el-input>
        <el-input v-if="item.type == 'input' " v-model="item.vmodel" :placeholder="item.placeholder"></el-input>
        <el-select v-if="item.type == 'select' " v-model="item.vmodel" :placeholder="item.placeholder">
            <el-option :key="'option-'+index_" v-for="(itemOption, index_) in  item.options" :label="itemOption.label" :value="itemOption.value"></el-option>
        </el-select>
        <el-switch v-if="item.type == 'switch' " v-model="item.vmodel"></el-switch>

        <el-checkbox-group v-if="item.type == 'checkbox' " v-model="item.vmodel">
            <el-checkbox :key="'check-box-'+checkItem.label+'-'+index_" v-for="(checkItem,index_) in item.groupData" :label="checkItem.label"  ></el-checkbox>
        </el-checkbox-group>

        <el-radio-group v-if="item.type == 'radio' " v-model="item.vmodel">
            <el-radio :key="'radio-'+checkItem.label+'-'+index_" v-for="(checkItem,index_) in item.groupData" :label="checkItem.label" ></el-radio>
        </el-radio-group>

        <!-- <el-button  v-if="item.type == 'btn' " :type="item.btnType" @click="()=>{item.callback(onSubmit())}">{{ item.lable}}</el-button> -->
        <template v-if="item.type == 'btn'">
            <el-button :key="index_"    v-for="(btnItem,index_) in item.btnGroup"  :type="btnItem.btnType" @click="()=>{btnItem.callback(onSubmit())}">{{ btnItem.lable}}</el-button>
        </template>
  </el-form-item>
  </el-form>
</template>

<script>
// import tt from "./test.vue";
// import formitem from "./formItem.vue";
export default {
  props: {
    formData: {
        type: Array,
        required: true,
    },
  },
//   components: { tt, formitem },
  data() {
    return {
      // input 、 inputarea  、 select 、 checkbox 、 radio 、switch 、datepicker  、 timepicker  button
      formData_: [
        // {lable: "审批人",name_en: "spr",vmodel: "",type: "input", placeholder: "审批人", },
        // {lable: "活动区域",name_en: "hdqy",vmodel: "",type: "select",placeholder: "活动区域",options: [{ label: "区域一", value: "shanghai" },{ label: "区域二", value: "beijing" },], },
        // {lable: "即时配送", name_en: "jsps", vmodel: "", type: "switch" },
        // {lable: "活动性质",name_en: "hdxz",vmodel: [],type: "checkbox",group: true,groupData: [{ label: "美食/餐厅线上活动"},{ label: "地推活动"},{ label: "线下主题活动" },],},
        // {lable: "特殊资源",name_en: "tszy",vmodel: "",type: "radio", group: true,groupData: [{ label: "线上品牌商赞助" }, { label: "线下场地免费" }], },
        // {lable:'活动形式', name_en:'hdxs', vmodel:'', type:'inputarea' },
        // {lable:'', name_en:'cx',  type:'btn', btnType:'primary', callback: (data)=>{ console.log('&&&&&&&&&&&&&&&=>',data);}},
        // {lable:'', name_en:'',  type:'btn', btnGroup:[{lable:'查询',btnType:'primary',callback:(formData)=>{}},{lable:'重置',btnType:'primary',callback:(formData)=>{}}]},
      ],
     
    };
  },
  computed: {},
  watch: {
    formData: {
      handler: function (val, oldVal) {
        this.formData_ = val;
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    onSubmit() {
      let res = {}
      this.formData_.forEach(item=>{
          if(item.name_en != ''){
              res[item.name_en] = item.vmodel
          }
      })
      return {oldData:this.formData_,newData:res}
    },

  },
};
</script>

