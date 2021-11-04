<template>
	<div class="w-100 h-100">
		<dataview>
			<div slot="header" class="w-100 h-100 d-flex jc-center ai-center text-c5 fw-600 fs-30">
				这是标题
			</div>
			<div
				slot="body"
				class="w-100 h-100 d-flex jc-start ai-center flex-column"
			>
				<div class="w-100 flex-1 d-flex jc-center ai-center">
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard class="ddd">
							<!-- <div slot="header" class="text-c5 fw-600 fs-20 p-10 d-flex jc-center ai-center w-100 h-100">这是标题</div> -->
							<div slot="body" class="w-100 h-100 border-box">
								<IEcharts _key="ech1" :option="Option_('radar')"></IEcharts>
							</div>
							<!-- <div slot="footer">这书数据</div> -->
						</ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard>
							<div slot="body" class="border-box w-100 h-100 text-c5">
								sdfgdfg
							</div>
						</ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard class="border-box">
							<div
								slot="header"
								class="text-c5 fw-600  p-10 d-flex jc-start ai-center w-100 h-100"
							>
								这是标题
							</div>
							<div slot="body" class="w-100 h-100 "></div>
							<div slot="footer">这书数据</div>
						</ICard>
					</div>
				</div>
				<div class="w-100 flex-1 d-flex jc-center ai-center">
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard class="border-box">
							<div
								slot="header"
								class="text-c5 fw-600  p-10 d-flex jc-start ai-center w-100 h-100"
							>
								这是标题
							</div>
							<div slot="body" class="w-100 h-100 ">
								<IEcharts _key="ech2" :option="Option_('line')"></IEcharts>
							</div>
							<!-- <div slot="footer">这书数据</div> -->
						</ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
				</div>
				<div class="w-100 flex-1 d-flex jc-center ai-center">
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
				</div>
				<div class="w-100 flex-1 d-flex jc-center ai-center">
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
					<div class="flex-1 d-flex jc-center ai-center h-100 p-5">
						<ICard></ICard>
					</div>
				</div>
			</div>
		</dataview>
	</div>
</template>

<script>
import Option from './../../components/IEcharts/options'
import dataview from './../../layout/layout-data-view/index.vue'
export default {
	props: {},
	components: {
		dataview
	},
	data() {
		return {
			Option_: Option,
			tempTableColumnList: [
				{ name_cn: '日期', name_en: 'date', width: '100', sortable: true },
				{ name_cn: '姓名', name_en: 'name', width: '110' },
				{ name_cn: '地址', name_en: 'address', 'class-name': 'ceshiClass' }
			],
			tempTableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
}
</script>

<style scoped lang="scss"></style>
