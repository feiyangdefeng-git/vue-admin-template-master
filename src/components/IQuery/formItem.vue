
<script>
// <el-form-item label="审批人">
//       <el-input v-model="formInline.user" placeholder="审批人"></el-input>
//     </el-form-item>
//     <el-form-item label="活动区域">
//       <el-select v-model="formInline.region" placeholder="活动区域">
//         <el-option label="区域一" value="shanghai"></el-option>
//         <el-option label="区域二" value="beijing"></el-option>
//       </el-select>
//     </el-form-item>
//     <el-form-item label="即时配送">
//     <el-switch v-model="form.delivery"></el-switch>
//   </el-form-item>
//  <el-form-item label="活动性质">
//     <el-checkbox-group v-model="form.type">
//       <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
//       <el-checkbox label="地推活动" name="type"></el-checkbox>
//       <el-checkbox label="线下主题活动" name="type"></el-checkbox>
//       <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
//     </el-checkbox-group>
//   </el-form-item>
//   <el-form-item label="特殊资源">
//     <el-radio-group v-model="form.resource">
//       <el-radio label="线上品牌商赞助"></el-radio>
//       <el-radio label="线下场地免费"></el-radio>
//     </el-radio-group>
//   </el-form-item>
//   <el-form-item label="活动形式">
//     <el-input type="textarea" v-model="form.desc"></el-input>
//   </el-form-item>

// {lable:'审批人', name_en:'spr', vmodel:'', type:'input', placeholder: '审批人'},
//           {lable:'活动区域', name_en:'hdqy', vmodel:'', type:'select', placeholder: '审批人', options:[{label:'区域一',value:'shanghai'},{label:'区域二',value:'beijing'},]},
//           {lable:'即时配送', name_en:'jsps', vmodel:'', type:'switch' },
//           {lable:'活动性质', name_en:'hdxz', vmodel:'', type:'checkbox', group:true, groupData:[{label:'美食/餐厅线上活动',value:'type'},{label:'地推活动',value:'type'},{label:'线下主题活动',value:'type'}] },
//           {lable:'特殊资源', name_en:'tszy', vmodel:'', type:'radio', group:true, groupData:[{label:'线上品牌商赞助'},{label:'线下场地免费'}]},
//           {lable:'活动形式', name_en:'hdxs', vmodel:'', type:'inputarea' },

//  <el-input v-if="item.type == 'inputarea' " type="textarea" v-model="item.vmodel"></el-input>
//     <el-input v-if="item.type == 'input' " v-model="item.vmodel" :placeholder="item.placeholder"></el-input>

const labelList = {
    "input": 'el-input',
    "select": {"groupName":"el-select","itemName":"el-option"},
    "switch": 'el-switch',
    "checkbox": {"groupName":"el-checkbox-group","itemName":"el-checkbox"},
    "radio": {"groupName":"el-radio-group","itemName":"el-radio"},
    // "inputarea": 'el-input',
}

export default {
  props: ["itemData"],
  render(h) {
      let {lable,name_en,type,vmodel,...args} = this.itemData
      let childNode = this.$slots.default
    return h(
      labelList[type], // 参数1，tagname
      { attrs: {"v-model":"item.vmodel",...args} },
      childNode // 参数3，子节点VNode数组
    );
  },
};
</script>

