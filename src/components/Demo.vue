<template>
    <div class="fenye" style="background: #F3F5FA;">
		<div class="header"></div>
		<div class="middle"></div>
		<div class="footer">
<div>goingdata.cric.com</div>
<div>
	<span>解锁报告企业</span>
	<span>易居企业（中国）集团有限公司</span>
</div>
<div>
	<span>解锁账号</span>
	<span>XXXXXXXXXX</span>
</div>
<div>
	<span>订单编号</span>
	<span>XXXXXXXXX</span>
</div>
<div>
	<span>解锁时间</span>
	<span>XXXXXX</span>
</div>
</div>
</div>
</template>
<script>
export default {
		name: "demo",
		// 数据
		data() {
			return {
			}
		},
		// 计算属性
		computed: {

		},
		// 创建
		created() {

		},
		mounted() {

		},
		// 方法
		methods: {
			goHome () {
				window.location.href = '/'
			}
		},
		// 子组件
		components: {
		}
	}
</script>
<style >
.fenye{
	display: flex;
	flex-direction: column;
    display: -webkit-box; /* wkhtmltopdf uses this one */
    -webkit-box-orient:vertical ;
	margin:auto;
	width: 1123px;
	min-height: 792px;
	background: #F3F5FA;
	page-break-inside:avoid;
}
.header{
	height: 100px;
    flex: 1;
    -webkit-box-flex:1;
    background: #f7ba15;
}

.middle{
	flex: 1;
     -webkit-box-flex:1;
	display: flex;

}
.footer{
    height: 50px;
	display: flex;
    display: -webkit-box; /* wkhtmltopdf uses this one */
	flex-direction: row;
	text-align: center;
	align-items: center;
	justify-content: space-around;
    -webkit-box-pack: center; /* wkhtmltopdf uses this one */
	background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(1px);
}
</style>