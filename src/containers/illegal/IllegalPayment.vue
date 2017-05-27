<style scoped>
	.total {
		font-size: 0.4rem;
		color: #555555;
		float: right;
		margin-right: 0.4rem;
		margin-top: 0.266666rem;
	}
	
	.privilege {
		font-size: 0.32rem;
		color: #A5A5A5;
		text-decoration: line-through;
	}
	
	.doller {
		color: #FF6600
	}
	
	.smallPoint {
		color: #FF6600;
		font-size: 0.32rem;
	}
	
	.intruduce {
		color: #a5a5a5;
		font-size: 0.32rem;
		padding-top: 0rem
	}
	
	.intruduce> div {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		margin: 0 0.4rem
	}
	
	.illegalImfromation {
		background-color: #ffffff;
		color: #a5a5a5;
		font-size: 0.346666rem;
		overflow: hidden;
		margin-bottom: 0.266666rem;
	}
	
	.icon_time {
		width: 0.32rem;
		height: 0.32rem;
		background-size: 100%;
		float: left;
		margin-top: 0.32rem;
		margin-left: 0.4rem;
		margin-right: 0.4rem
	}
	
	.time_text {
		float: left;
		padding-top: 0.24rem;
		padding-right: 0.533333rem;
	}
	
	.time_detail {
		float: left;
		padding-top: 0.24rem;
		padding-bottom: 0.24rem;
		width: 6.666666rem;
	}
	
	.derail_table {
		width: 100%;
		overflow: hidden;
	}
	
	.border {
		border-bottom: 1px solid #EFF3F5;
		margin-right: 0.4rem;
		margin-left: 1.12rem;
	}
	
	.border_1 {
		border-bottom: 1px solid #E2E4E6;
		margin-right: 0.4rem;
		margin-left: 0.4rem;
		margin-top: 0.266666rem;
		position: relative;
	}
	
	.trigon {
		background: url(../../../static/images/icon_shangjiantou.jpg) no-repeat;
		height: 0.173333rem;
		width: 0.346666rem;
		background-size: 100%;
		position: absolute;
		top: -0.146666rem;
		right: 0.4rem;
		background-color: #eff3f5;
	}
	
	.serviceTab {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		margin-left: 1.12rem;
		margin-right: 0.4rem;
	}
	
	.rental {
		height: 0.986666rem;
		overflow: hidden;
		line-height: 0.986666rem;
	}
	
	.icon_scroce {
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../../static/images/icon_fen.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		float: left;
		margin-right: 0.133333rem;
	}
	
	.icon_scroce_1 {
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../../static/images/icon03@2x.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		float: left;
		margin-right: 0.133333rem;
	}
	
	.number {
		float: left;
		font-size: 0.4rem;
		color: #ff6600;
	}
	
	.Payment {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.servicePaymentNumber {
		color: #ff6600;
		font-size: 0.4rem
	}
	
	.footer {
		font-size: 0.346666rem;
		height: 1.2rem;
		padding-left: 1.12rem;
		background-color: #ffffff;
		position: fixed;
		left: 0;
		right: 0;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		bottom: 0;
		line-height: 1.2rem;
		color: #555555
	}
	
	.footer_1 {
		font-size: 0.346666rem;
		height: 1.2rem;
		padding-left: 1.12rem;
		background-color: #ffffff;
		position: relative;
		left: 0;
		right: 0;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		bottom: 0;
		line-height: 1.2rem;
		color: #555555;
		margin-top: 0.5rem;
	}
	
	.submit {
		height: 1.2rem;
		width: 2.666666rem;
		background-color: #ff6600;
		color: #ffffff;
		font-size: 0.4rem;
		text-align: center;
	}
	
	.footer span {
		color: #ff6600;
		font-size: 0.426666rem;
	}
	
	.color_1 {
		padding: 0 0.133333rem;
	}
	
	.color_3 {
		padding-right: 0.333333rem;
	}
	
	.color_2 {
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../../static/images/icon_score.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		margin-right: 0.133333rem;
		margin-left: 0.266666rem;
		display: inline-block;
	}
	
	.color_4,
	.color_6 {
		font-size: 0.346666rem;
	}
	
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, "Microsoft Yahei";
	}
	
	main {
		margin-top: 1.2rem;
	}
	
	header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 1.066666rem;
		font-size: 0.373333rem;
		background-color: #ff6600;
		color: #ffffff;
		display: flex;
		align-items: center;
		z-index: 3;
	}
	
	header .back_show {
		background: url(../../../static/images/icon_fanhui6@2x.png) no-repeat;
		background-position: center;
		background-size: 100%;
		width: 0.4rem;
		height: 1rem;
		float: left;
		margin-left: 0.266666rem;
		display: inline-block;
	}
	
	.detailName {
		text-align: center;
		margin-left: 0.973333rem;
		width: 4.48rem;
		height: 1.066666rem;
		line-height: 1.066666rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		float: left;
		display: inline-block;
	}
</style>
<template>
	<div id="main">
		<x-header :leftOptions='{"showBack": true,"backText": "返回",}'>
			<div slot="default" class="header-title">提交订单</div>
		</x-header>
		<main>
			<div class="illegalImfromation" v-for="item in details">
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_time.png) no-repeat;background-size: 100%;"></div>
					<div class="time_text">违章时间</div>
					<div class="time_detail">{{item.occurTime}}</div>
				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_ID.png) no-repeat;background-size: 100%;"></div>
					<div class="time_text">违章编号</div>
					<div class="time_detail">{{item.violationId}}</div>

				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_neirong.png) no-repeat;background-size: 100%;"></div>
					<div class="time_text">违章内容</div>
					<div class="time_detail">{{item.reason}}</div>
				</div>
				<div class="border"></div>
				<div class="serviceTab">
					<div class="rental">
						<div class="icon_scroce"></div>
						<div class="number">{{item.degree}}</div>
					</div>
					<div class="rental">
						<div class="icon_scroce_1"></div>
						<div class="number">{{item.fine}}</div>
					</div>
					<div class="Payment rental">
						<div class="servicePayment">服务费用：</div>
						<div class="servicePaymentNumber">￥{{item.poundage}}:<span style="font-size:0.24rem">00</span></div>
					</div>
				</div>
			</div>
			<div class="intruduce">
				<div>
					<div>共违章</div>
					<div>{{details.length}}次</div>
				</div>
				<div>
					<div>共违章扣款</div>
					<div>￥500.00</div>
				</div>
				<div>
					<div>总服务费</div>
					<div>￥20</div>
				</div>
				<div style="font-size:0.3rem;color:#555555">
					<div class="totalPrice">订单总价</div>
					<div>￥{{saveOrderData.orderTotal}}<span style="font-size:0.24rem;">.00</span></div>
				</div>

			</div>
			<div class="border_1">
				<div class="trigon">

				</div>
			</div>
			<div class="total">
				合计：<span class="privilege">￥2000</span><span class="doller">￥1000</span><span class="smallPoint">.00</span>
			</div>
			<div class="footer">
				<div>共<span class="color_1">2</span>单，合计：<span class="color_2"></span><span class="color_3">5</span><span class="color_4" style="font-size:0.26rem">￥</span><span class="color_5">1000<span class="color_6" style="font-size:0.26rem">.00</span></span>
				</div>
				<!--<router-link to="/illegalStatus" class="submit">提交订单</router-link>-->
				<div class="submit" v-on:click="doPay">支付</div>
			</div>
		</main>
		<div id="payUrl" v-html="payUrlRepalce"></div>

	</div>
</template>
<script>
	export default {
		name: 'illegalPayment',
		data() {
			return {
				//数据用
				saveOrderData: {},
				details: [],
				//控件用
				payUrlRepalce: "",
			}
		},
		components: {},
		mounted() {
			this.saveOrderData = JSON.parse(sessionStorage.getItem("illegal_saveOrderData"));
			this.details = this.saveOrderData.details;
		},
		computed: {},
		methods: {
			doPay() {
				//去掉自动触发表单js代码以免不同设备产生BUG
				this.payUrlRepalce = this.saveOrderData.payUrl.replace("document.forms['alipaysubmit'].submit();","");
				//触发表单
				this.$nextTick(function() {
					document.forms['alipaysubmit'].submit()
				});
			}
		},
	}
</script>