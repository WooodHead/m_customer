<style scoped>
	main .Payment {
		display: none;
	}
	
	.carImfromation {
		background-color: #ffffff;
		font-size: 0.346666rem;
		overflow: hidden;
		margin-top: 0.133333rem;
		margin-bottom: 0.133333rem;
		padding-left: 1.12rem;
		padding-top: 0.266666rem;
		padding-bottom: 0.24rem;
		color: #555555
	}
	
	.fontColor {
		color: #a5a5a5;
		margin-right: 0.533333rem;
	}
	
	.spacing {
		letter-spacing: 1px;
	}
	
	.plateNumber {
		color: #ff6600;
		border: 1px solid #ff6600;
		border-radius: 5px;
		padding-left: 0.133333rem;
		padding-right: 0.133333rem;
		float: left;
		margin-bottom: 0.24rem;
	}
	
	.engineNumber {
		clear: both;
		margin-bottom: 0.266666rem;
	}
	
	.form {
		background-color: #ffffff;
		font-size: 0.346666rem;
		overflow: hidden;
		color: #555555
	}
	
	.form> div {
		height: 0.986666rem;
		line-height: 0.986666rem;
		margin-left: 1.12rem;
		margin-right: 0.4rem;
		border-bottom: 1px solid #eff3f5
	}
	
	.form input {
		color: #a5a5a5;
		border: none;
		outline: none;
		font-size: 0.346666rem;
		width: 4.666666rem;
	}
	
	.form span {
		margin-right: 0.533333rem;
	}
	
	.drivePapersImg {
		background-color: #ffffff;
		font-size: 0.346666rem;
		color: #555555;
		overflow: hidden;
		/*margin-top: 0.1rem;*/
		/*border-bottom: 1px solid #e2e4e6;*/
		/*padding-left: 0.84rem*/
		text-align: center;
		width: 50%;
		float: left;
		padding: 0.266666rem 0;
	}
	
	.uploading {
		width: 1.84rem;
		height: 1.84rem;
		opacity: 0;
		position: relative;
	}
	
	.uploadimg {
		width: 1.84rem;
		height: 1.84rem;
		/*margin-top: 0.22rem;*/
		float: left;
		/*margin-bottom: 0.14rem;
    margin-right: 0.3rem*/
	}
	
	.upload {
		background: url(../../../static/images/img_photo.png);
		width: 1.84rem;
		height: 1.84rem;
		background-size: 100%;
		/*margin-top: 0.2rem;*/
		float: left;
		/*margin-bottom: 0.14rem;
    margin-right: 0.22rem*/
		margin-left: 1.6rem;
	}
	
	.uploadingExplain {
		clear: both;
		/*margin-bottom: 0.3rem*/
	}
	
	.illegalImfromation {
		background-color: #ffffff;
		color: #a5a5a5;
		font-size: 0.346666rem;
		overflow: hidden;
		margin-top: 0.133333rem;
		clear: both;
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
		width: 100%;
		border-bottom: 1px solid #EFF3F5;
		margin-right: 0.4rem;
		margin-left: 1.12rem;
	}
	
	.serviceTab {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		justify-content: flex-start;
		/*justify-content: space-between;*/
		margin-left: 1.12rem;
		margin-right: 0.4rem;
	}
	
	.rental {
		height: 0.986666rem;
		overflow: hidden;
		line-height: 0.986666rem;
		margin-right: 1.333333rem;
	}
	
	.icon_scroce {
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../../static/images/icon_score.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		float: left;
		margin-right: 0.133333rem;
	}
	
	.icon_scroce_1 {
		width: 0.32rem;
		height: 0.32rem;
		background: url(../../../static/images/icon_money.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		float: left;
		margin-right: 0.133333rem;
	}
	
	.number {
		float: left;
		font-size: 0.4rem;
		color: #555555;
	}
	
	.Payment {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}
	
	.servicePaymentNumber {
		color: #555555;
		font-size: 0.4rem
	}
	
	.footer {
		position: fixed;
		font-size: 0.346666rem;
		height: 1.2rem;
		padding-left: 1.12rem;
		background-color: #ffffff;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		line-height: 1.2rem;
		color: #555555;
		bottom: 0;
		left: 0;
		right: 0;
		border-top: 1px solid #ff6600;
	}
	
	.footer_1 {
		position: fixed;
		font-size: 0.346666rem;
		height: 1.2rem;
		padding-left: 1.12rem;
		background-color: #ffffff;
		display: flex;
		-ms-flex-pack: justify;
		justify-content: space-between;
		line-height: 1.2rem;
		color: #555555;
		bottom: 0;
		left: 0;
		right: 0;
		margin-top: 0.4rem;
		border-top: 1px solid #ff6600;
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
		padding-right: 0.373333rem;
	}
	
	.color_2 {
		width: 0.426666rem;
		height: 0.426666rem;
		background: url(../../../static/images/icon_score.png) no-repeat;
		background-size: 100%;
		margin-top: 0.333333rem;
		margin-right: 0.133333rem;
		margin-left: 0.306666rem;
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
		height: 1;
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
	<div class="" v-cloak>
		<x-header :leftOptions='{"showBack": true,"backText": "返回",}'>
			<div slot="default" class="header-title">提交订单</div>
		</x-header>
		<main style="margin-top: 1.28rem;margin-bottom: 1.35rem;">
			<div class="carImfromation">
				<div class="plateNumber">{{$route.query.carnum}}</div>
				<div class="engineNumber">
					<span class="fontColor spacing">发动机号</span><span>{{$route.query.engineNum}}</span>
				</div>
				<div class="frameNumber">
					<span class="fontColor">车&nbsp&nbsp架&nbsp&nbsp号</span><span>{{$route.query.frameNum}}</span>
				</div>
			</div>
			<div class="form">
				<!--<div class="carMaster">-->
				<!--<span>车主姓名</span><input v-model="carSelfImformation.carSelfName" placeholder="请填写您的姓名">-->
				<!--</div>-->
				<div class="carMasterPhone" v-show="ifShow(condition.carOwnerPhoneLen)">
					<span>车主电话</span><input placeholder="请填写主人号码" v-model="saveOrderDTO.phone">
				</div>
				<div class="carMasterPhone" v-show="ifShow(condition.verifyCodeLen)">
					<span>短信验证码</span><input placeholder="请填写短信验证码" v-model="saveOrderDTO.verifyCodeLen">
				</div>
				<div class="carMasterPhone" v-show="ifShow(condition.filePhoneLen)">
					<span>车管所登记电话</span><input v-model="saveOrderDTO.filePhone" placeholder="请填写车管所登记号码">
				</div>
				<div class="carMaterAdmin" v-show="ifShow(condition.carOwnerLen)">
					<span>身份证号</span><input v-model="saveOrderDTO.cardNo" placeholder="请填写您的身份证号">
				</div>
				<!--<div class="carMaterAdmin" v-show="res_show.carCodeLen==0?false:true">-->
				<!--<span>驾驶证号</span><input v-model="carSelfImformation.carSelfPhone" :placeholder="res_show.carCodeLen==99?'请填写您的全部驾驶证号':'请填写您的后'+res_show.carCodeLen+'位驾驶证号'">-->
				<!--&lt;!&ndash;<span>驾驶证号</span><input placeholder="请填写您的res.carCodeLen驾驶证号">&ndash;&gt;-->
				<!--</div>-->
				<div class="carMaterAdmin" v-show="ifShow(condition.jashiZhengHaoLen)">
					<span>办理人驾驶证号</span><input v-model="saveOrderDTO.driverLicenseNo" placeholder="请填写您的全部驾驶证号">
					<!--<span>办理驾驶证号</span><input placeholder="请填写办理人res.jashiZhengHaoLen驾驶证号">-->
				</div>
				<div class="carMaterAdmin" v-show="ifShow(condition.xingShiZhengHaoLen)">
					<span>行驶证档案编号</span><input v-model="saveOrderDTO.xingShiZhengHao" placeholder="请填写您的全部驾驶证号">
					<!--<span>行驶证档案编号</span><input placeholder="请填写res.xingShiZhengHaoLen行驶证档案号">-->
				</div>
				<div class="carMaterAdmin" v-show="ifShow(condition.danganBianHaoLen)">
					<span>驾驶证档案编号</span><input v-model="saveOrderDTO.fileNumber" placeholder="请填写您的全部驾驶证号">
					<!--<span>驾驶证档案编号</span><input placeholder="请填写res.danganBianHaoLen驾驶证档案编号">-->
				</div>
				<div class="carMaterAdmin" v-show="ifShow(condition.cheliangZhengShuLen)">
					<span>车辆登记证书</span><input v-model="saveOrderDTO.cheliangZhengShu" placeholder="请填写全部车辆登记证书号">
					<!--<span>车辆登记证书</span><input placeholder="请填写您的res.carCodeLen车辆登记证书号">-->
				</div>
				<div class="carMaterAdmin" v-show="ifShow(condition.tiaoXingMaLen)">
					<span>驾驶证条形二维码</span><input v-model="saveOrderDTO.qrCode" placeholder="驾驶证条形二维码">
				</div>
			</div>
			<div class="" style="background-color: #FFFFFF;float: left;width: 100%;margin-top: 0.1rem;">
				<div class="drivePapersImg" id="drivingLicense" v-show="ifShow(condition.drivingLicense)">
					<div class="upload" :style="{backgroundImage: 'url(' + driverUrl + ')'}">
						<input v-on:change="uploading('drivingLicense',$event)" class="uploading" type="file" />
					</div>
					<div class="uploadingExplain">请上传驾驶证的正面</div>
				</div>
				<div class="drivePapersImg" id="drivePapersImg" v-show="ifShow(condition.drivingSecondLicense)">
					<div class="upload" :style="{backgroundImage: 'url(' + drivingSecondUrl + ')'}">
						<input v-on:change="uploading('drivingSecondLicense',$event)" class="uploading" type="file">
					</div>
					<div class="uploadingExplain">请上传驾驶证的反面</div>
				</div>
			</div>
			<div class="" style="background-color: #FFFFFF;float: left;width: 100%;border-bottom: 1px solid #e2e4e6;margin-bottom: 0.1rem;">
				<div class="drivePapersImg" id="drivingSecondLicense" v-show="ifShow(condition.majorViolation)">
					<div class="upload" :style="{backgroundImage: 'url(' + drivingUrl + ')'}">
						<input v-on:change="uploading('majorViolation',$event)" class="uploading" type="file">
					</div>
					<div class="uploadingExplain">请上传行驶证的正面</div>
				</div>
				<div class="drivePapersImg" id="majorSecondViolation" v-show="ifShow(condition.majorSecondViolation)">
					<!-- <div v-for="item in imgUrl">
	          <img v-bind:src="item" class="uploadimg">
	        </div>-->
					<div class="upload" :style="{backgroundImage: 'url(' + driverSecondUrl + ')'}">
						<input v-on:change="uploading('majorSecondViolation',$event)" class="uploading" type="file">
					</div>
					<div class="uploadingExplain">请上传行驶证的反面</div>
				</div>
			</div>

			<div class="illegalImfromation" v-for="item in electIlleagl">
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_time.png);background-size: 100%;"></div>
					<div class="time_text">违章时间</div>
					<div class="time_detail">{{item.breakTime}}</div>
				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_ID.png);background-size: 100%;"></div>
					<div class="time_text">违章编号</div>
					<div class="time_detail">{{item.proofNum}}</div>
				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_neirong.png);background-size: 100%;"></div>
					<div class="time_text">违章内容</div>
					<div class="time_detail">{{item.breakrule}}</div>
				</div>
				<div class="border"></div>
				<div class="serviceTab">
					<div class="rental">
						<div class="icon_scroce"></div>
						<div class="number">{{item.points}}</div>
					</div>
					<div class="rental">
						<div class="icon_scroce_1"></div>
						<div class="number">{{item.capital}}</div>
					</div>
					<div class="Payment rental">
						<div class="servicePayment">服务费用：</div>
						<div class="servicePaymentNumber">￥{{item.charge}}:<span style="font-size:0.24rem">00</span></div>
					</div>
				</div>
			</div>

			<div class="illegalImfromation">
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_time.png);background-size: 100%;"></div>
					<div class="time_text">违章时间</div>
					<div class="time_detail">2017/01/01</div>
				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_ID.png);background-size: 100%;"></div>
					<div class="time_text">违章编号</div>
					<div class="time_detail">789456123</div>
				</div>
				<div class="border"></div>
				<div class="derail_table">
					<div class="icon_time" style="background:url(../../../static/images/icon_neirong.png);background-size: 100%;"></div>
					<div class="time_text">违章内容</div>
					<div class="time_detail">闯红灯</div>
				</div>
				<div class="border"></div>
				<div class="serviceTab">
					<div class="rental">
						<div class="icon_scroce"></div>
						<div class="number">2</div>
					</div>
					<div class="rental">
						<div class="icon_scroce_1"></div>
						<div class="number">4</div>
					</div>
					<div class="Payment rental">
						<div class="servicePayment">服务费用：</div>
						<div class="servicePaymentNumber">￥10:<span style="font-size:0.24rem">00</span></div>
					</div>
				</div>
			</div>

			<div v-bind:class="{footer:footer,footer_1:footer_1}">
				<div>共<span class="color_1">{{electIlleagl.length}}</span>单，合计：<span class="color_2"></span>
					<span class="color_3">{{totalPoint}}</span>
					<span class="color_4" style="font-size:0.26rem">￥</span><span class="color_5">{{totalCapital}}<span class="color_6" style="font-size:0.26rem">.00</span></span>
				</div>
				<div class="submit" v-on:click='doSaveOrder'>
					提交订单
				</div>
			</div>
		</main>
	</div>
</template>
<script>
	import {
		AjaxPlugin
	} from 'vux';
	import Colin from '../../assets/js/public.js';
	
	export default {
		name: 'IllegalSubmit',
		data() {
			return {
				//数据用变量
				condition: {},
				electIlleagl: [],
				totalPoint: 0,
				totalCapital: 0,
				saveOrderDTO: {
					//必传信息
					carNo: null,
					frameNo: null,
					engineNo: null,
					tempID: null,
					//补充信息
					name: null,
					phone: "18938644966",
					address: null,
					cardNo: null,
					driverLicenseNo: null,
					fileNumber: null,
					filePhone: null,
					cheliangZhengShu: null,
					qrCode: null,
					xingShiZhengHao: null,
					drivingUrl: null,
					driverSecondUrl: null,
					driverUrl: null,
					drivingSecondUrl: null,
					verifyCodeLen: null
				},
				//控件用变量
				footer: true,
				footer_1: true,

			}
		},
		components: {
			AjaxPlugin
		},
		computed: {
			drivingUrl: {
				get() {
					if(this.saveOrderDTO.drivingUrl != null) {
						return this.saveOrderDTO.drivingUrl;
					} else {
						return "../../../static/images/img_photo.png"
					}
				},
				set(value) {
					this.saveOrderDTO.drivingUrl = value;
				}
			},
			driverSecondUrl: {
				get() {
					if(this.saveOrderDTO.driverSecondUrl != null) {
						return this.saveOrderDTO.driverSecondUrl;
					} else {
						return "../../../static/images/img_photo.png"
					}
				},
				set(value) {
					this.saveOrderDTO.driverSecondUrl = value;
				}
			},
			driverUrl: {
				get() {
					if(this.saveOrderDTO.driverUrl != null) {
						return this.saveOrderDTO.driverUrl;
					} else {
						return "../../../static/images/img_photo.png"
					}
				},
				set(value) {
					this.saveOrderDTO.driverUrl = value;
				}
			},
			drivingSecondUrl: {
				get() {
					if(this.saveOrderDTO.drivingSecondUrl != null) {
						return this.saveOrderDTO.drivingSecondUrl;
					} else {
						return "../../../static/images/img_photo.png"
					}
				},
				set(value) {
					this.saveOrderDTO.drivingSecondUrl = value;
				}
			}
		},
		created() {

		},
		mounted() {
			//渲染选中的违章信息
			this.electIlleagl = JSON.parse(sessionStorage.getItem("illegal_electIlleagl"));
			this.totalPoint = sessionStorage.getItem("illegal_totalPoint");
			this.totalCapital = sessionStorage.getItem("illegal_totalCapital");
			//			console.log(this.electIlleagl);
			//赋值saveOrderDTO
			this.saveOrderDTO.carNo = this.$route.query.carnum;
			this.saveOrderDTO.engineNo = this.$route.query.engineNum;
			this.saveOrderDTO.frameNo = this.$route.query.frameNum;
			this.saveOrderDTO.tempID = this.$route.query.tempID;
			
			//			console.log(this.$route.query);
			AjaxPlugin.$http({
				url: Colin.exChangeUrl("/do/customer/checkillegal/getPayOrderCondition"),
				method: 'post',
				data: this.$route.query,
			}).then(data => {
				var data = data.data;
				if(data.resultCode == 1) {
					var resultObject = data.resultObject;
					this.condition = resultObject.data;
				} else {
					console.log("访问失败!");
				}
			});
		},
		methods: {
			ifShow(value) {
				return true;
				if(value == 0) {
					return false;
				} else {
					return true;
				}
			},
			doSaveOrder() {
				//组装数据
//				console.log(JSON.stringify(this.saveOrderDTO));
				AjaxPlugin.$http({
						url: Colin.exChangeUrl("/do/customer/checkillegal/saveOrder"),
						method: 'post',
						data: this.saveOrderDTO,
					}).then(data => {
						var data = data.data;
						if(data.resultCode == 1) {
							var resultObject = data.resultObject;
							var data = resultObject.data;
							//保存结果，下个页面用
							sessionStorage.setItem("illegal_saveOrderData",JSON.stringify(data));
							window.location.href = "#/illegal/illegalPayment";
						} else {
							console.log("访问失败!");
						}
					})
			}
		},

	}
</script>