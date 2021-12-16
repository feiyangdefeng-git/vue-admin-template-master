import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout/layout-back-end'


/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
					{
						path: "/login",
						component: () => import("@/views/login/index"),
						hidden: true
					},
					{
						path: "/404",
						component: () => import("@/views/404"),
						hidden: true
					},
					{
						name: "dataview",
						path: "/dataview",
						component: () => import("@/views/example/page1.vue"),
						hidden: true
					},

					{
						path: "/",
						component: Layout,
						redirect: "/dashboard",
						children: [
							{
								path: "dashboard",
								name: "home",
								component: () => import("@/views/dashboard/index"),
								meta: { title: "首页", icon: "dashboard" }
							}
						]
					},

					{
						path: "/example",
						component: Layout,
						redirect: "/example/table",
						name: "Example",
						meta: { title: "例子", icon: "el-icon-s-help" },
						children: [
							{
								path: "table",
								name: "Table",
								component: () => import("@/views/table/index"),
								meta: { title: "表", icon: "table" }
							},
							{
								path: "tree",
								name: "Tree",
								component: () => import("@/views/tree/index"),
								meta: { title: "树", icon: "tree" }
							}
						]
					},

					{
						path: "/form",
						component: Layout,
						children: [
							{
								path: "index",
								name: "Form",
								component: () => import("@/views/form/index"),
								meta: { title: "表单", icon: "form" }
							}
						]
					},

					{
						path: "/nested",
						component: Layout,
						redirect: "/nested/menu1",
						name: "Nested",
						meta: {
							title: "节点",
							icon: "nested"
						},
						children: [
							{
								path: "menu1",
								component: () => import("@/views/nested/menu1/index"), // Parent router-view
								name: "Menu1",
								meta: { title: "Menu1" },
								children: [
									{
										path: "menu1-1",
										component: () => import("@/views/nested/menu1/menu1-1"),
										name: "Menu1-1",
										meta: { title: "Menu1-1" }
									},
									{
										path: "menu1-2",
										component: () => import("@/views/nested/menu1/menu1-2"),
										name: "Menu1-2",
										meta: { title: "Menu1-2" },
										children: [
											{
												path: "menu1-2-1",
												component: () =>
													import("@/views/nested/menu1/menu1-2/menu1-2-1"),
												name: "Menu1-2-1",
												meta: { title: "Menu1-2-1" }
											},
											{
												path: "menu1-2-2",
												component: () =>
													import("@/views/nested/menu1/menu1-2/menu1-2-2"),
												name: "Menu1-2-2",
												meta: { title: "Menu1-2-2" }
											}
										]
									},
									{
										path: "menu1-3",
										component: () => import("@/views/nested/menu1/menu1-3"),
										name: "Menu1-3",
										meta: { title: "Menu1-3" }
									}
								]
							},
							{
								path: "menu2",
								component: () => import("@/views/nested/menu2/index"),
								name: "Menu2",
								meta: { title: "menu2" }
							}
						]
					},

					{
						path: "/zh-CN/component",
						redirect: "/zh-CN/component/installation",
						component: () => import("@/examples/pages/zh-CN/component.vue"),
						meta: { title: "示例库", icon: "form" },
						children: [
							{
								path: "installation",
								meta: { title: "安装", lang: "zh-CN" },
								name: "component-zh-CN安装",
								component: () =>
									import("@/examples/docs/zh-CN/installation.vue")
							},
							{
								path: "quickstart",
								meta: { title: "快速上手", lang: "zh-CN" },
								name: "component-zh-CN快速上手",
								component: () => import("@/examples/docs/zh-CN/quickstart.vue")
							},
							{
								path: "i18n",
								meta: { title: "国际化", lang: "zh-CN" },
								name: "component-zh-CN国际化",
								component: () => import("@/examples/docs/zh-CN/i18n.vue")
							},
							{
								path: "custom-theme",
								meta: { title: "自定义主题", lang: "zh-CN" },
								name: "component-zh-CN自定义主题",
								component: () =>
									import("@/examples/docs/zh-CN/custom-theme.vue")
							},
							{
								path: "transition",
								meta: { title: "内置过渡动画", lang: "zh-CN" },
								name: "component-zh-CN内置过渡动画",
								component: () => import("@/examples/docs/zh-CN/transition.vue")
							},
							{
								path: "layout",
								meta: { title: "Layout 布局", lang: "zh-CN" },
								name: "component-zh-CNLayout 布局",
								component: () => import("@/examples/docs/zh-CN/layout.vue")
							},
							{
								path: "container",
								meta: { title: "Container 布局容器", lang: "zh-CN" },
								name: "component-zh-CNContainer 布局容器",
								component: () => import("@/examples/docs/zh-CN/container.vue")
							},
							{
								path: "color",
								meta: { title: "Color 色彩", lang: "zh-CN" },
								name: "component-zh-CNColor 色彩",
								component: () => import("@/examples/docs/zh-CN/color.vue")
							},
							{
								path: "typography",
								meta: { title: "Typography 字体", lang: "zh-CN" },
								name: "component-zh-CNTypography 字体",
								component: () => import("@/examples/docs/zh-CN/typography.vue")
							},
							{
								path: "border",
								meta: { title: "Border 边框", lang: "zh-CN" },
								name: "component-zh-CNBorder 边框",
								component: () => import("@/examples/docs/zh-CN/border.vue")
							},
							{
								path: "icon",
								meta: { title: "Icon 图标", lang: "zh-CN" },
								name: "component-zh-CNIcon 图标",
								component: () => import("@/examples/docs/zh-CN/icon.vue")
							},
							{
								path: "button",
								meta: { title: "Button 按钮", lang: "zh-CN" },
								name: "component-zh-CNButton 按钮",
								component: () => import("@/examples/docs/zh-CN/button.vue")
							},
							{
								path: "link",
								meta: { title: "Link 文字链接", lang: "zh-CN" },
								name: "component-zh-CNLink 文字链接",
								component: () => import("@/examples/docs/zh-CN/link.vue")
							},
							{
								path: "radio",
								meta: { title: "Radio 单选框", lang: "zh-CN" },
								name: "component-zh-CNRadio 单选框",
								component: () => import("@/examples/docs/zh-CN/radio.vue")
							},
							{
								path: "checkbox",
								meta: { title: "Checkbox 多选框", lang: "zh-CN" },
								name: "component-zh-CNCheckbox 多选框",
								component: () => import("@/examples/docs/zh-CN/checkbox.vue")
							},
							{
								path: "input",
								meta: { title: "Input 输入框", lang: "zh-CN" },
								name: "component-zh-CNInput 输入框",
								component: () => import("@/examples/docs/zh-CN/input.vue")
							},
							{
								path: "input-number",
								meta: { title: "InputNumber 计数器", lang: "zh-CN" },
								name: "component-zh-CNInputNumber 计数器",
								component: () =>
									import("@/examples/docs/zh-CN/input-number.vue")
							},
							{
								path: "select",
								meta: { title: "Select 选择器", lang: "zh-CN" },
								name: "component-zh-CNSelect 选择器",
								component: () => import("@/examples/docs/zh-CN/select.vue")
							},
							{
								path: "cascader",
								meta: { title: "Cascader 级联选择器", lang: "zh-CN" },
								name: "component-zh-CNCascader 级联选择器",
								component: () => import("@/examples/docs/zh-CN/cascader.vue")
							},
							{
								path: "switch",
								meta: { title: "Switch 开关", lang: "zh-CN" },
								name: "component-zh-CNSwitch 开关",
								component: () => import("@/examples/docs/zh-CN/switch.vue")
							},
							{
								path: "slider",
								meta: { title: "Slider 滑块", lang: "zh-CN" },
								name: "component-zh-CNSlider 滑块",
								component: () => import("@/examples/docs/zh-CN/slider.vue")
							},
							{
								path: "time-picker",
								meta: { title: "TimePicker 时间选择器", lang: "zh-CN" },
								name: "component-zh-CNTimePicker 时间选择器",
								component: () => import("@/examples/docs/zh-CN/time-picker.vue")
							},
							{
								path: "date-picker",
								meta: { title: "DatePicker 日期选择器", lang: "zh-CN" },
								name: "component-zh-CNDatePicker 日期选择器",
								component: () => import("@/examples/docs/zh-CN/date-picker.vue")
							},
							{
								path: "datetime-picker",
								meta: { title: "DateTimePicker 日期时间选择器", lang: "zh-CN" },
								name: "component-zh-CNDateTimePicker 日期时间选择器",
								component: () =>
									import("@/examples/docs/zh-CN/datetime-picker.vue")
							},
							{
								path: "upload",
								meta: { title: "Upload 上传", lang: "zh-CN" },
								name: "component-zh-CNUpload 上传",
								component: () => import("@/examples/docs/zh-CN/upload.vue")
							},
							{
								path: "rate",
								meta: { title: "Rate 评分", lang: "zh-CN" },
								name: "component-zh-CNRate 评分",
								component: () => import("@/examples/docs/zh-CN/rate.vue")
							},
							{
								path: "color-picker",
								meta: { title: "ColorPicker 颜色选择器", lang: "zh-CN" },
								name: "component-zh-CNColorPicker 颜色选择器",
								component: () =>
									import("@/examples/docs/zh-CN/color-picker.vue")
							},
							{
								path: "transfer",
								meta: { title: "Transfer 穿梭框", lang: "zh-CN" },
								name: "component-zh-CNTransfer 穿梭框",
								component: () => import("@/examples/docs/zh-CN/transfer.vue")
							},
							{
								path: "form",
								meta: { title: "Form 表单", lang: "zh-CN" },
								name: "component-zh-CNForm 表单",
								component: () => import("@/examples/docs/zh-CN/form.vue")
							},
							{
								path: "table",
								meta: { title: "Table 表格", lang: "zh-CN" },
								name: "component-zh-CNTable 表格",
								component: () => import("@/examples/docs/zh-CN/table.vue")
							},
							{
								path: "tag",
								meta: { title: "Tag 标签", lang: "zh-CN" },
								name: "component-zh-CNTag 标签",
								component: () => import("@/examples/docs/zh-CN/tag.vue")
							},
							{
								path: "progress",
								meta: { title: "Progress 进度条", lang: "zh-CN" },
								name: "component-zh-CNProgress 进度条",
								component: () => import("@/examples/docs/zh-CN/progress.vue")
							},
							{
								path: "tree",
								meta: { title: "Tree 树形控件", lang: "zh-CN" },
								name: "component-zh-CNTree 树形控件",
								component: () => import("@/examples/docs/zh-CN/tree.vue")
							},
							{
								path: "pagination",
								meta: { title: "Pagination 分页", lang: "zh-CN" },
								name: "component-zh-CNPagination 分页",
								component: () => import("@/examples/docs/zh-CN/pagination.vue")
							},
							{
								path: "badge",
								meta: { title: "Badge 标记", lang: "zh-CN" },
								name: "component-zh-CNBadge 标记",
								component: () => import("@/examples/docs/zh-CN/badge.vue")
							},
							{
								path: "avatar",
								meta: { title: "Avatar 头像", lang: "zh-CN" },
								name: "component-zh-CNAvatar 头像",
								component: () => import("@/examples/docs/zh-CN/avatar.vue")
							},
							{
								path: "skeleton",
								meta: { title: "Skeleton 骨架屏", lang: "zh-CN" },
								name: "component-zh-CNSkeleton 骨架屏",
								component: () => import("@/examples/docs/zh-CN/skeleton.vue")
							},
							{
								path: "empty",
								meta: { title: "Empty 空状态", lang: "zh-CN" },
								name: "component-zh-CNEmpty 空状态",
								component: () => import("@/examples/docs/zh-CN/empty.vue")
							},
							{
								path: "descriptions",
								meta: { title: "Descriptions 描述列表", lang: "zh-CN" },
								name: "component-zh-CNDescriptions 描述列表",
								component: () =>
									import("@/examples/docs/zh-CN/descriptions.vue")
							},
							{
								path: "result",
								meta: { title: "Result结果", lang: "zh-CN" },
								name: "component-zh-CNResult 结果",
								component: () => import("@/examples/docs/zh-CN/result.vue")
							},
							{
								path: "alert",
								meta: { title: "Alert 警告", lang: "zh-CN" },
								name: "component-zh-CNAlert 警告",
								component: () => import("@/examples/docs/zh-CN/alert.vue")
							},
							{
								path: "loading",
								meta: { title: "Loading 加载", lang: "zh-CN" },
								name: "component-zh-CNLoading 加载",
								component: () => import("@/examples/docs/zh-CN/loading.vue")
							},
							{
								path: "message",
								meta: { title: "Message 消息提示", lang: "zh-CN" },
								name: "component-zh-CNMessage 消息提示",
								component: () => import("@/examples/docs/zh-CN/message.vue")
							},
							{
								path: "message-box",
								meta: { title: "MessageBox 弹框", lang: "zh-CN" },
								name: "component-zh-CNMessageBox 弹框",
								component: () => import("@/examples/docs/zh-CN/message-box.vue")
							},
							{
								path: "notification",
								meta: { title: "Notification 通知", lang: "zh-CN" },
								name: "component-zh-CNNotification 通知",
								component: () =>
									import("@/examples/docs/zh-CN/notification.vue")
							},
							{
								path: "menu",
								meta: { title: "NavMenu 导航菜单", lang: "zh-CN" },
								name: "component-zh-CNNavMenu 导航菜单",
								component: () => import("@/examples/docs/zh-CN/menu.vue")
							},
							{
								path: "tabs",
								meta: { title: "Tabs 标签页", lang: "zh-CN" },
								name: "component-zh-CNTabs 标签页",
								component: () => import("@/examples/docs/zh-CN/tabs.vue")
							},
							{
								path: "breadcrumb",
								meta: { title: "Breadcrumb 面包屑", lang: "zh-CN" },
								name: "component-zh-CNBreadcrumb 面包屑",
								component: () => import("@/examples/docs/zh-CN/breadcrumb.vue")
							},
							{
								path: "page-header",
								meta: { title: "PageHeader 页头", lang: "zh-CN" },
								name: "component-zh-CNPageHeader 页头",
								component: () => import("@/examples/docs/zh-CN/page-header.vue")
							},
							{
								path: "dropdown",
								meta: { title: "Dropdown 下拉菜单", lang: "zh-CN" },
								name: "component-zh-CNDropdown 下拉菜单",
								component: () => import("@/examples/docs/zh-CN/dropdown.vue")
							},
							{
								path: "steps",
								meta: { title: "Steps 步骤条", lang: "zh-CN" },
								name: "component-zh-CNSteps 步骤条",
								component: () => import("@/examples/docs/zh-CN/steps.vue")
							},
							{
								path: "dialog",
								meta: { title: "Dialog 对话框", lang: "zh-CN" },
								name: "component-zh-CNDialog 对话框",
								component: () => import("@/examples/docs/zh-CN/dialog.vue")
							},
							{
								path: "tooltip",
								meta: { title: "Tooltip 文字提示", lang: "zh-CN" },
								name: "component-zh-CNTooltip 文字提示",
								component: () => import("@/examples/docs/zh-CN/tooltip.vue")
							},
							{
								path: "popover",
								meta: { title: "Popover 弹出框", lang: "zh-CN" },
								name: "component-zh-CNPopover 弹出框",
								component: () => import("@/examples/docs/zh-CN/popover.vue")
							},
							{
								path: "popconfirm",
								meta: { title: "Popconfirm 气泡确认框", lang: "zh-CN" },
								name: "component-zh-CNPopconfirm 气泡确认框",
								component: () => import("@/examples/docs/zh-CN/popconfirm.vue")
							},
							{
								path: "card",
								meta: { title: "Card 卡片", lang: "zh-CN" },
								name: "component-zh-CNCard 卡片",
								component: () => import("@/examples/docs/zh-CN/card.vue")
							},
							{
								path: "carousel",
								meta: { title: "Carousel 走马灯", lang: "zh-CN" },
								name: "component-zh-CNCarousel 走马灯",
								component: () => import("@/examples/docs/zh-CN/carousel.vue")
							},
							{
								path: "collapse",
								meta: { title: "Collapse 折叠面板", lang: "zh-CN" },
								name: "component-zh-CNCollapse 折叠面板",
								component: () => import("@/examples/docs/zh-CN/collapse.vue")
							},
							{
								path: "timeline",
								meta: { title: "Timeline 时间线", lang: "zh-CN" },
								name: "component-zh-CNTimeline 时间线",
								component: () => import("@/examples/docs/zh-CN/timeline.vue")
							},
							{
								path: "divider",
								meta: { title: "Divider 分割线", lang: "zh-CN" },
								name: "component-zh-CNDivider 分割线",
								component: () => import("@/examples/docs/zh-CN/divider.vue")
							},
							{
								path: "calendar",
								meta: { title: "Calendar 日历", lang: "zh-CN" },
								name: "component-zh-CNCalendar 日历",
								component: () => import("@/examples/docs/zh-CN/calendar.vue")
							},
							{
								path: "image",
								meta: { title: "Image 图片", lang: "zh-CN" },
								name: "component-zh-CNImage 图片",
								component: () => import("@/examples/docs/zh-CN/image.vue")
							},
							{
								path: "backtop",
								meta: { title: "Backtop 回到顶部", lang: "zh-CN" },
								name: "component-zh-CNBacktop 回到顶部",
								component: () => import("@/examples/docs/zh-CN/backtop.vue")
							},
							{
								path: "infiniteScroll",
								meta: { title: "InfiniteScroll 无限滚动", lang: "zh-CN" },
								name: "component-zh-CNInfiniteScroll 无限滚动",
								component: () =>
									import("@/examples/docs/zh-CN/infiniteScroll.vue")
							},
							{
								path: "drawer",
								meta: { title: "Drawer 抽屉", lang: "zh-CN" },
								name: "component-zh-CNDrawer 抽屉",
								component: () => import("@/examples/docs/zh-CN/drawer.vue")
							}
						]
					},

					// 404 page must be placed at the end !!!
					{ path: "*", redirect: "/404", hidden: true }
				]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
