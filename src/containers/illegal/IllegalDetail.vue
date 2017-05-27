<style lang="less" scoped>
	[v-cloak] {
		display: none;
	}
	
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, "Microsoft Yahei";
	}
	
	header,
	footer,
	main,
	article,
	aside,
	section,
	nav,
	form {
		display: block
	}
	
	li {
		list-style: none;
		overflow: hidden
	}
	
	html,
	body {
		background-color: #eff3f5;
	}
	
	.headTab {
		width: 13.333333rem;
		height: 2.133333rem;
		background-color: #ffffff;
		border-bottom: 1px solid #eff3f5;
		font-size: 0.266666rem;
		color: #ff5900;
		text-align: center;
		overflow: hidden;
		display: table-cell;
		vertical-align: middle;
	}
	
	.headTab li {
		float: left;
		overflow: hidden;
		width: 3.333333rem;
		text-align: center;
		display: inline-block;
		text-align: center;
	}
	
	.headTab li .iconLogo {
		float: left;
		position: absolute;
		margin-left: 0.7rem;
	}
	
	.headTab li p {
		color: #555555;
		font-size: 0.32rem;
		line-height: 0.32rem;
		float: left;
		width: 100%;
		clear: both;
	}
	
	.detailText {
		color: #555555;
		position: relative;
		overflow: hidden;
	}
	
	.detailText span {
		color: #ff6600
	}
	
	.scroce_1,
	.scroce_2 {
		color: #ff6600;
	}
	
	.tabTime {
		font-size: 0.32rem;
		color: #a5a5a5;
		height: 1.066666rem;
		line-height: 1.066666rem;
		background-color: #eff3f5;
		padding-left: 1.2rem;
		position: relative
	}
	
	.textTitle {
		font-size: 0.346666rem;
		color: #a5a5a5;
		float: left;
		padding-left: 0.626666rem;
	}
	
	.detailText p {
		font-size: 0.346666rem;
		color: #555555;
		padding-left: 0.133333rem;
		padding-bottom: 0.2rem;
		float: left;
		width: 5.333333rem;
	}
	
	.borderLine {
		height: 100%;
		position: absolute;
		top: 0.533333rem;
		left: 0.653333rem;
		border-right: 3px solid #e2e4e6;
	}
	
	.insideLine {
		margin-left: 1.2rem;
		overflow: hidden;
		border: 1px solid #e2e4e6;
		border-radius: 10px;
		float: left;
		margin-right: 0.4rem;
		background-color: #ffffff;
		width: 8.266666rem;
		padding-bottom: 0.2rem;
	}
	
	.deg {
		position: absolute;
		bottom: -1px;
		left: 1.92rem;
		background: url(../../../static/images/tucen-2@2x.png);
		background-size: 100%;
		width: 0.333333rem;
		height: 0.266666rem;
	}
	
	.turn {
		width: 0.506666rem;
		height: 0.506666rem;
		/*background: url(../../../static/images/garageInfo/icon_weixuanze.png) no-repeat;*/
		/*background: url(../../../static/images/garageInfo/icon_xuanzhe1@2x.jpg) no-repeat;*/
		background: url(../../../static/images/img_y.png) no-repeat;
		background-size: 90%;
		display: inline-block;
		position: absolute;
		top: 0.266666rem;
		left: 0.48rem;
		z-index: 3;
	}
	
	.liElect {
		width: 0.506666rem;
		height: 0.506666rem;
		background: url(../../../static/images/icon_xuanze.png) no-repeat;
		background-size: 90%;
		display: inline-block;
		position: absolute;
		top: 0.266666rem;
		left: 0.48rem;
		z-index: 3;
	}
	
	#times,
	#score,
	#money {
		font-size: 0.56rem;
	}
	
	a {
		font-weight: bold;
	}
	
	.detailMoney {
		height: 1.066666rem;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		font-size: 0.373333rem;
		background-color: #ffffff
	}
	
	.borderLine_r {
		border-top: 1px solid #e2e4e6;
		margin: 0 0.24rem;
		padding-bottom: 0.346666rem;
	}
	
	.address {
		font-size: 0.32rem;
		background-color: #ffffff;
		padding-bottom: 0.133333rem;
		float: right;
		margin-right: 0.28rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.iconLogo {
		height: 0.293333rem;
		width: 0.293333rem;
		float: left;
		margin-right: 0.013333rem;
	}
	
	.detailMoney>div {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flexbox: 1;
		flex: 1;
		margin-top: 0.333333rem;
		/*    text-align: center*/
	}
	
	.textDiscrebe {
		font-size: 0.4rem;
		color: #555555;
		text-align: center;
		display: block;
		position: absolute;
		margin-top: -1rem;
		top: 50%;
		width: 100%;
	}
	
	.textDiscrebeImg {
		background: url(../../../static/images/icon_biaoqing5@2x.png) no-repeat;
		width: 1rem;
		height: 1rem;
		background-size: 100%;
		margin: auto;
		margin-bottom: 0.4rem;
	}
	
	#footer {
		position: fixed;
		background-color: #ffffff;
		font-size: 0.346666rem;
		bottom: 0;
		height: 1.33333rem;
		width: 100%;
		/* display: none; */
	}
	
	.circle {
		background: url(../../../static/images/icon_yiwancheng.png) no-repeat;
		background-size: 90%;
		width: 0.506666rem;
		height: 0.506666rem;
		margin-left: 0.466666rem;
		margin-right: 0.133333rem;
		float: left;
	}
	
	.circle_1 {
		background: url(../../../static/images/icon_xuanze.png) no-repeat;
		background-size: 90%;
		width: 0.506666rem;
		height: 0.506666rem;
		margin-left: 0.466666rem;
		margin-right: 0.133333rem;
		float: left;
	}
	
	.selectText {
		float: left;
	}
	
	.allSelect {
		padding-top: 0.333333rem;
		float: left;
	}
	
	.illegalGrade {
		float: left;
		margin-left: 1.693333rem;
		padding-top: 0.24rem;
	}
	
	.illegalGrade p {
		float: left;
		margin-top: 0.013333rem;
		color: #ff6600;
	}
	
	.illegalMoney {
		float: left;
		margin-left: 0.6rem;
		padding-top: 0.24rem;
	}
	
	.illegalMoney p {
		float: left;
		margin-top: 0.013333rem;
		color: #ff6600;
	}
	
	.logo {
		margin-left: 0.4rem;
	}
	
	.explain {
		clear: both;
		color: #a5a5a5;
	}
	
	.illegalAccount {
		background-color: #9d9d9d;
		font-size: 0.426666rem;
		text-align: center;
		line-height: 1.333333rem;
		height: 1.333333rem;
		float: right;
		width: 2.666666rem;
		color: #ffffff;
	}
	
	.backgroundOrange {
		background-color: #ff6600;
	}
	
	.headTab .wzcs {
		background: url(../../../static/images/icon01@2x.png);
		background-size: 100%;
	}
	
	.headTab .ljkf {
		background: url(../../../static/images/icon02@2x.png);
		background-size: 100%;
	}
	
	.headTab .ljkkje {
		background: url(../../../static/images/icon03@2x.png);
		background-size: 100%;
	}
	
	.detailText .capital {
		background: url(../../../static/images/icon03@2x.png);
		margin-left: 0.47rem;
		background-size: 100%;
	}
	
	.detailText .points {
		background: url(../../../static/images/icon02@2x.png);
		margin-left: 0.47rem;
		background-size: 100%;
	}
</style>
<template>
	<div v-scroll class="" v-cloak>
		<x-header :leftOptions='{"showBack": true,"backText": "返回",}'>
			<div slot="default" class="header-title">{{title}}</div>
		</x-header>
		<ul class="headTab" style="padding-top: 1.066666rem;">
			<li class="tabOne">
				<div id="times">{{listIllegal.length}}</div>
				<div style="display: inline-block;width: 100%;justify-content: center;align-items: baseline;">
					<div class="iconLogo wzcs"></div>
					<p style="color: #ff5900;">违章次数</p>
				</div>
			</li>
			<li class="tabTow">
				<div id="score">{{totalPoints}}</div>
				<div style="display: inline-block;width: 100%;justify-content: center;align-items: baseline;">
					<div class="iconLogo ljkf"></div>
					<p>累计扣分</p>
				</div>

			</li>
			<li class="tabThree">
				<div id="money">{{totalCapital}}</div>
				<div style="display: inline-block;width: 100%;jjustify-content: center;align-items: baseline;">
					<div class="iconLogo ljkkje" style="margin-left: 0.3rem;"></div>
					<p>累计扣款金额</p>
				</div>

			</li>
		</ul>
		<Scroller :lockX="true" ref="scroller">
			<main>
				<ul class="detailText">
					<div class="borderLine"></div>
					<li v-for="item in listIllegal">
						<div class="tabTime">
							<div class="turn" :class="{liElect:elect_tempID.indexOf(item.proofNum)>=0}" @click='ToggleElect(item.proofNum)'></div>
							{{item.breakTime}}
						</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo capital"></div>&nbsp-{{item.capital}}</div>
								<div class="scroce_2">
									<div class="iconLogo points"></div>&nbsp{{item.points}}</div>
								<div class="address">违章地：{{item.breakCity}}</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>{{item.breakrule}}</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>{{item.breakAddress}}</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<!--<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>
					<li>
						<div class="tabTime">
							<div class="turn"></div>2016-12-30&nbsp&nbsp10:00</div>
						<div class="insideLine">
							<div class="detailMoney">
								<div class="scroce_1">
									<div class="iconLogo" style="background: url(../../../static/images/icon03@2x.png); margin-left:0.47rem;background-size: 100%;"></div>&nbsp-600</div>
								<div class="scroce_2">
									<div class="iconLogo" style="background: url(../../../static/images/icon02@2x.png); margin-left: 0.47rem;background-size: 100%;"></div>&nbsp5</div>
								<div class="address">违章地：呼和浩特</div>
							</div>
							<div class="borderLine_r"></div>
							<div class="textTitle">违章内容：</div>
							<p>没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带没有安全带</p>
							<div class="borderLine"></div>
							<div class="textTitle">违章地点：</div>
							<p>呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里呼和浩特你家里</p>
							<div class="borderLine"></div>
						</div>
					</li>-->
				</ul>
			</main>
		</Scroller>

		<div class="footer" v-show="daijiaoFlag">
			<div class="allSelect">
				<div class="circle"></div>
				<p class="selectText">全选</p>
			</div>
			<div class="illegalGrade">
				<div class="iconLogo " style="background: url(../../../static/images/icon02@2x.png);background-size: 100%;">
				</div>
				<p class="totalNumber">0</p>
			</div>
			<div class="illegalMoney">
				<div class="iconLogo logo" style="background: url(../../../static/images/icon03@2x.png);background-size: 100%;">
				</div>
				<p class="totalMoney">0</p>
				<div class="explain">(不含手续费)</div>
			</div>
			<div class="illegalAccount" :class="{backgroundOrange:elect_tempID.length>0}" v-on:click="goSubmit">代缴({{electCount}})</div>
		</div>
		<div class="textDiscrebe" v-show="textDiscrebeFlag">
			<div class="textDiscrebeImg">
			</div>
			<div class="text">{{listIllegal.length==0?errorMsg:''}}</div>
		</div>
		<div id="medol" style="  height: 100%;
			  width: 100%;
			  position: fixed;
			  top: 0.8rem;display:none">
		</div>
	</div>
</template>
<script>
	import Scroller from '../../components/vux/src/components/scroller/index.vue';
	import {
		AjaxPlugin
	} from 'vux';
	import Colin from '../../assets/js/public.js';

	export default {
		components: {
			AjaxPlugin,
			Scroller
		},
		mixins: [],
		data() {
			return {
				//数据用变量
				title: '',
				listIllegal: [],
				electCount: 0,
				elect_tempID: "",
				totalCapital: 0,
				totalPoints: 0,
				errorMsg: '',
				//控件用变量
				daijiaoFlag: false,
				textDiscrebeFlag: false
			}
		},
		computed: {

		},
		directives: {

		},
		mounted() {

		},
		activated() {
			//根据URL参数查违章
			var postData = {
				carNo: this.$route.query.carNo,
				frameNo: this.$route.query.frameNo,
				engineNo: this.$route.query.engineNo
			};
			this.title = this.$route.query.carNo;
			this.totalCapital = 0;
			this.totalPoints = 0;
			this.listIllegal = [];
			this.textDiscrebeFlag = false;
			//			console.log(this.$route.query);
			AjaxPlugin.$http({
				url: Colin.exChangeUrl("/do/customer/checkillegal/queryBreakInfo"),
				method: 'post',
				data: this.$route.query,
			}).then(data => {
				var data = data.data;
				if(data.resultCode == 1) {
					//初始化
					this.totalCapital = 0;
					this.totalPoints = 0;
					this.listIllegal = [];
					this.textDiscrebeFlag = false;
					var resultObject = JSON.parse(data.resultObject);
					var code = resultObject.code;
					var msg = resultObject.msg;
					if(code == '200') {
						this.listIllegal = resultObject.listIllegal;
						//累计算分
						this.totalCapital = 0;
						this.totalPoints = 0;
						this.listIllegal.forEach((illegal) => {
							this.totalCapital += parseInt(illegal.capital);
							this.totalPoints += parseInt(illegal.points);
						});
						//长度为也显示信息
						if(this.listIllegal.length == 0) {
							this.textDiscrebeFlag = true;
							this.errorMsg = msg;
						}
					} else {
						this.renderErrorMsg(code);
					}
				} else {
					console.log("访问失败!");
				}
				this.$nextTick(() => {
					this.$refs.scroller.reset();
				})
			})
		},
		methods: {
			ToggleElect(proofNum) {
				return;
				var proofNum = proofNum + ",";
				if(this.elect_tempID.indexOf(proofNum) == -1) {
					this.elect_tempID += proofNum;
				} else {
					this.elect_tempID = this.elect_tempID.replace(proofNum, "");
				}
				//选中的数量因为结尾有逗号，所以要-1
				this.electCount = this.elect_tempID.split(',').length - 1;
			},
			goSubmit() {
				if(this.elect_tempID.length > 0) {
					this.elect_tempID = this.elect_tempID.substring(0, this.elect_tempID.length - 1);
					//获取选中的违章信息保存到session
					var electIlleagl = [];
					var totalPoint = 0;
					var totalCapital = 0;
					this.listIllegal.forEach(illegal => {
						var proofNum = illegal.proofNum;
						this.elect_tempID.split(',').forEach(tempID => {
							if(tempID == proofNum) {
								electIlleagl.push({
									proofNum: illegal.proofNum,
									breakTime: illegal.breakTime,
									breakrule: illegal.breakrule,
									points: illegal.points,
									capital: illegal.capital,
									charge: illegal.charge,
									lateFee: illegal.lateFee
								});
								totalPoint += parseInt(illegal.points);
								totalCapital += parseInt(illegal.capital);
							}
						});
					});
					sessionStorage.setItem("illegal_electIlleagl", JSON.stringify(electIlleagl));
					sessionStorage.setItem("illegal_totalPoint", totalPoint);
					sessionStorage.setItem("illegal_totalCapital", totalCapital);
					//this.listIllegal肯定有值获取车牌号，车架号，发动机号
					//					console.log(this.listIllegal[0]);
					var carnum = this.listIllegal[0].carnum;
					var engineNum = this.listIllegal[0].engineNum;
					var frameNum = this.listIllegal[0].frameNum;
					//跳转
					var href = "#/illegal/illegalSubmit?";
					href += "&tempID=" + this.elect_tempID;
					href += "&carnum=" + carnum;
					href += "&engineNum=" + engineNum;
					href += "&frameNum=" + frameNum;
					window.location.href = href;
				} else {
					return;
				}

			},
			renderErrorMsg(code) {
				console.log(code);
				var errorMsg = "";
				if(code == '399') {
					errorMsg = '您的车辆当前无违章记录，请继续保持！';
				} else if(code == '211') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '203') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '236') {
					errorMsg = '该城市暂不支持违章查询功能，请谅解！';
				} else if(code == '297') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '299') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '801') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '206') {
					errorMsg = '对不起，你查询车辆的信息错误，请核对后再试';
				} else if(code == '207') {
					errorMsg = '因交管局网络原因暂时无法查询，请谅解！';
				} else if(code == '208') {
					errorMsg = '您所查询的城市正在维护或未开通查询，请稍后再试！';
				} else if(code == '996') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '997') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '998') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else if(code == '999') {
					errorMsg = '当前网络繁忙，请稍后再试！';
				} else {
					errorMsg = '当前网络繁忙，请稍后再试！';
				}
				//显示错误信息
				this.textDiscrebeFlag = true;
				console.log(errorMsg);
				this.errorMsg = errorMsg
			}
		}

	}
</script>