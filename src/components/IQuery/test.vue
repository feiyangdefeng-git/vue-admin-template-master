
<script>
export default {
  props: {

  },
  render: (h, params) => {
    console.log('99999999999999999=>',params);
    return h('div', [
        h('a',{class: {'a-font-size': true}}, "params.row.name"),
        h('p',{ class: {'p-margintb': true}}, '从 ' + "params.row.gmtModified" + ' 到 ' + "params.row.endDate" ),
        h('p',{class: {'p-marginb': true}},'负责人：'+ "params.row.users.name")
    ])
    }
};
</script>

<style scoped lang="scss">

</style>
