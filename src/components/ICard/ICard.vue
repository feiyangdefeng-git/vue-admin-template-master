<template>
	<!-- <el-card class="box-card border-box w-100 h-100 text-c5">
		<div slot="header" class="clearfix">
			<span>卡片名称</span>
			<el-button style="float: right; padding: 3px 0" type="text"
				>操作按钮</el-button
			>
		</div>
		<div v-for="o in 6" :key="o" class="text item">
			{{ "列表内容 " + o }}
		</div>
	</el-card> -->
    <div class="ICard-con w-100 h-100 d-flex jc-start ai-center flex-column">
        <div v-if="$slots.header" class="ICard-header w-100 d-flex jc-center ai-center p-5">
            <slot name="header"></slot>
        </div>
        <div v-if="$slots.body" class="ICard-body w-100 d-flex jc-center ai-center flex-1"><slot name="body"></slot></div>
        <div v-if="$slots.footer" class="ICard-footer w-100 d-flex jc-center ai-center p-5"><slot name="footer"></slot></div>
    </div>
</template>

<script>
export default {
	props: {},
	components: {},
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {
        console.log(this);
    },
	mounted() {},
	methods: {}
}
</script>

<style scoped lang="scss">
.ICard-con{
    .ICard-header{
        background: linear-gradient(to bottom, #040D34, #153C99, #153C99, #061131);
        border-color: #95B8E7;
    }
    .ICard-body{
        // background-color: blue;
        overflow: auto;
    }
    .ICard-footer{
        background: linear-gradient(to bottom, #040D34, #153C99, #153C99, #061131);
        border-color: #95B8E7;
    }
}

</style>
