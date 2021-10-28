<script>
export default {
  props: ["itemData"],
  render(h) {
      let {name_en,name_cn,...args} = this.itemData
    console.log("this.$slots.default :>> ", this.$slots.default,this.itemData);
    return h(
      "el-table-column", // 参数1，tagname
      { attrs: { prop: name_en, label:name_cn,...args} }, // 参数2：{。。。}
      //this.$slots.default 为默认插槽
      //也可以定义具名插槽 this.$slots.名称 | 使用 v-slot:名称 插入
      this.$slots.default // 参数3，子节点VNode数组
    );
  },
};
</script>
