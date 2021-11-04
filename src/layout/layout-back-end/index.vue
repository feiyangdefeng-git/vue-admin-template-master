<template>
  <div :class="classObj" class="app-wrapper global-skin">
    <!-- 菜单打开关闭开关 -->
    <div
      v-if="device === 'mobile' && sidebar.opened"
      class="drawer-bg gs-1"
      @click="handleClickOutside"
    />
    <!-- 左侧导航 -->
    <sidebar class="sidebar-container gs-menu-log-con" />
    <div class="main-container gs-header-main-con">
      <!-- 右上角用户导航 -->
      <div :class="{ 'fixed-header': fixedHeader }" class="gs-header">
        <navbar />
      </div>
      <!-- 右侧内容区域 -->
      <app-main class="gs-main"></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
<style lang="scss" >
 #app{
  .global-skin1{
    // 左侧菜单和左侧顶部log
    div.gs-menu-log-con{
      background-color: wheat; // 整个左侧菜单背景色
      // 顶部log
      .sidebar-logo-container{
        background-color: yellowgreen; // 背景色
        border: 1px solid #f80707; // 边框
        a{
          // 图标
          img{}
          // 标题
          h1.sidebar-title{
            color: violet; // 字体颜色
          }
        }
      }
      // 下部导航
      .el-scrollbar{
        .scrollbar-wrapper{
          .el-scrollbar__view{
            // 最外层
            ul.el-menu{
              background-color: aquamarine !important;
              // 一级菜单设置
              li.el-menu-item{
                border: 1px solid #f80707; // 边框
                background-color: aquamarine !important;
                color: #ffffff !important;
              }
              // 二级菜单设置
              li.el-submenu{
                border: 1px solid #f80707; // 边框
                // 二级菜单名称
                .el-submenu__title{
                  background-color: aquamarine !important;
                  color: #ffffff !important;
                  // 箭头颜色
                  i{
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 右侧内容  顶部header 和 main
    .gs-header-main-con{
      .gs-header{
        // 顶部设置
        .navbar{
          background: rgb(165, 115, 115);
          color: blanchedalmond;
          .hamburger-container{
            color: blanchedalmond;
          }
          .el-breadcrumb{
            span{
              color: blue;
            }
          }
          .right-menu{
            .avatar-container{
              // 图标
              .el-dropdown-selfdefine{
                img{}
                // 最右侧三角
                i{
                  color: antiquewhite;
                }
              }
              //
              .el-dropdown-menu{

              }

            }
          }
        }
      }
      .gs-main{}
    }
  }
 }
</style>
