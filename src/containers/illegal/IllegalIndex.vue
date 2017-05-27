<style lang="less" scoped>
	.vux-header .vux-header-title,
	.vux-header h1 {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.main {
		background-color: #eff3f5;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		-webkit-transition: all 2s;
		transition: all 2s;
	}
</style>
<template>
	<div class="main">
		<keep-alive>
			<router-view ref="child"></router-view>
		</keep-alive>
	</div>
</template>
<script>
	//import Colin from '../../assets/js/public.js'
	export default {
		components: {

		},
		data() {
			return {

			}
		},
		mounted() {
			//      Colin.getCurrentSessionInfo(this).then((res)=>{
			//         console.log(this.$refs.child)
			//         this.$refs.child.$emit('getCurrentSessionInfo',res)
			//      })
		},
		methods: {

		}

	}
</script>