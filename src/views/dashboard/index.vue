<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <el-button :plain="true" @click="open">测试按钮</el-button>
    <el-button type="text" @click="open1">点击打开 Message Box</el-button>
    <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    >
    <!-- <el-button v-longpress="longpress">长按</el-button> -->

    <el-dialog
      v-dialogDrag
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
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

export default {
  name: "Dashboard",
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
  methods: {
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
