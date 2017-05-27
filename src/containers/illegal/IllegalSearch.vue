<style lang="less" scoped>
	[v-cloak] {
		display: none;
	}
	
	main>p {
		width: 100%;
		padding-top: 0.8rem;
		padding-bottom: 0.3rem;
		font-size: 0.28rem;
		color: #9d9d9d;
		text-align: center;
	}
	
	.carInfo>div.submitButton {
		margin: 1.386666rem auto;
		background-color: #ff6600;
		display: block;
		width: 6.8rem;
		height: 1.066666rem;
		line-height: 1.066666rem;
		border-radius: 40px;
		color: #ffffff;
		font-size: 0.4rem;
		outline: none;
		border: none;
		text-align: center;
	}
	
	.cl {
		clear: both;
		padding-top: 0.133333rem;
	}
	
	.drivingInfo>div,
	.carInfo>div {
		background-color: #FFFFFF;
	}
	
	.carNum_1 {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.373333rem;
		text-align: center;
	}
	
	.relative_1 {
		position: relative;
		border-bottom: 1px solid #e2e4e6;
		margin: auto 0.4rem auto 1.12rem;
		height: 1.2rem;
	}
	
	.relative_1 .text_line {
		position: relative;
		top: 0;
		left: 0rem;
		line-height: 1.2rem;
		color: #333333;
		height: 1.2rem;
		overflow: hidden;
		width: 2.533333rem;
		text-align: left;
	}
	
	.carNum_1 #peccancyCityName {
		height: 0.746666rem;
		line-height: 0.746666rem;
		margin-top: 0.266666rem;
		border: 1px solid #e2e4e6;
		text-indent: 0.56rem;
		border-radius: 5px;
		outline: none;
		appearance: none;
		-webkit-appearance: none;
		font-size: 0.373333rem;
		position: absolute;
		top: 0px;
		left: 2.586666rem;
		color: #333333;
	}
	
	.boult {
		background: url(../../../static/images/icon_down_g@2x.png) no-repeat;
		background-size: 100%;
		width: 0.32rem;
		height: 0.32rem;
		margin-right: 0.266666rem;
		margin-left: 0.533333rem;
		display: inline-block;
	}
	
	.carNum {
		width: 100%;
		height: 0.986666rem;
		line-height: 0.986666rem;
		font-size: 0.373333rem;
		text-align: center;
	}
	
	.relative {
		position: relative;
		border-bottom: 1px solid #e2e4e6;
		margin: auto 0.4rem auto 1.12rem;
		height: 0.986666rem;
	}
	
	.opsti {
		position: absolute;
		top: 1px;
		left: 2.586666rem;
	}
	
	.relative p {
		position: absolute;
		top: 0;
		left: 0rem;
		line-height: 0.986666rem;
		color: #333333;
	}
	
	.cityShortName {
		height: 0.533333rem;
		line-height: 0.533333rem;
		font-size: 0.373333rem;
		color: #666;
	}
	
	#carId {
		width: 4.133333rem;
		height: 0.96rem;
		line-height: 1rem;
		outline: none;
		border: none;
		appearance: none;
		-webkit-appearance: none;
		font-size: 0.373333rem;
		color: #333333;
	}
	
	.frameImg {
		background: url(../../../static/images/icon_che_jia_hao.png) no-repeat;
		background-size: 100%;
		width: 0.32rem;
		height: 0.32rem;
		display: inline-block;
		margin-left: 0.08rem;
	}
	
	.carNum .input {
		width: 4.133333rem;
		height: 0.96rem;
		line-height: 1rem;
		outline: none;
		border: none;
		appearance: none;
		-webkit-appearance: none;
		font-size: 0.373333rem;
		color: #333333;
		position: absolute;
		top: 1px;
		left: 2.586666rem;
	}
	/*我的爱车列表*/
	
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, "Microsoft Yahei";
	}
	
	.cl {
		clear: both;
	}
	
	li {
		list-style: none;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		background-color: #eff3f5;
	}
	
	.dsn {
		display: none;
	}
	/*main*/
	
	main {
		width: 100%;
		height: 100%;
	}
	
	#main_s {
		display: none;
	}
	
	main>p {
		width: 100%;
		padding-top: 0.8rem;
		padding-bottom: 0.4rem;
		font-size: 0.373333rem;
		color: #9d9d9d;
		text-align: center;
	}
	
	.addCar {
		width: 100%;
		height: 1.2rem;
		line-height: 1.2rem;
		font-size: 0.426666rem;
		color: #ff6600;
		background-color: #FFFFFF;
	}
	
	.addCar_img {
		background: url("../../../static/images/icon_denglu_5@2x.png") no-repeat;
		background-position: center;
		background-size: 100%;
		width: 0.56rem;
		height: 0.56rem;
		float: left;
		margin-top: 0.333333rem;
		margin-left: 3.72rem;
	}
	
	.addCar>p {
		float: left;
		width: 2rem;
		text-align: center;
	}
	
	.carInfo {
		padding-top: 0.4rem;
	}
	
	.tap_li {
		margin-bottom: 0.4rem;
		width: 100%;
		background-color: #FFFFFF;
		position: relative;
		border-bottom: 1px solid #e2e4e6;
		overflow: hidden;
	}
	
	.img_div {
		width: 1.466666rem;
		height: 0.666666rem;
		margin-right: 0.266666rem;
		float: left;
	}
	
	.img_div img {
		width: 1.466666rem;
		height: 0.666666rem;
		position: absolute;
		top: 0.56rem;
		left: 0.4rem;
	}
	
	.detail {
		float: left;
		width: 7.066666rem;
		height: 1.066666rem;
		margin: 0.28rem 0 0.28rem 0.4rem;
		border-left: 1px solid #e2e4e6;
	}
	
	.detail p {
		padding-left: 0.4rem;
		width: 7.333333rem;
		height: 0.533333rem;
		line-height: 0.533333rem;
	}
	
	.carModel {
		font-size: 0.426666rem;
		color: #555555;
	}
	
	.carStyle {
		font-size: 0.373333rem;
		color: #9d9d9d;
	}
	
	.seats_span {
		display: block;
		margin-left: 0.266666rem;
		float: left;
	}
	
	.carModel_span {
		min-width: 0.666666rem;
		max-width: 6.133333rem;
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		float: left;
	}
	
	.defaultCar {
		font-size: 0.373333rem;
		width: 9.2rem;
		height: 1.066666rem;
		line-height: 1.066666rem;
		margin: 0 0.4rem;
		border-top: 1px solid #e2e4e6;
		color: #9d9d9d;
		position: relative;
	}
	
	.on {
		background: #ff6600;
		border: 2px solid #ff6600!important;
	}
	
	.onColor {
		color: #ff6600;
	}
	
	.defaultCar>span span:nth-child(1) {
		display: inline-block;
		width: 10px;
		height: 10px;
		border: 2px solid #9d9d9d;
		border-radius: 50%;
		margin-right: 0.1rem;
	}
	
	.defaultCar>span span:nth-child(2) {
		display: inline-block;
		width: 3.733333rem;
	}
	
	.edit {
		display: inline-block;
		width: 0.8rem;
		text-align: center;
		position: absolute;
		right: 1.6rem;
	}
	
	.del {
		display: inline-block;
		width: 0.8rem;
		text-align: center;
		position: absolute;
		right: 0rem;
	}
	
	.setCar {
		margin-left: 0.4rem;
		color: #ff6600
	}
	
	.no,
	.yes {
		width: 50%;
		float: left;
	}
	
	.peccancyCityTitle {
		height: 0.933333rem;
		border-bottom: 1px solid #e2e4e6;
		line-height: 0.933333rem;
		text-align: center;
	}
	
	.provincePicker {
		width: 50%;
		float: left;
	}
	
	.cityPicker {
		width: 50%;
		float: left;
	}
	
	.modelFrame {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1000;
	}
	
	.modelFrame img {
		width: 100%;
		margin-top: 4rem;
	}
	
	.weui-dialog__btn_primary {
		color: #ff6600;
	}
</style>
<template>
	<div class="" v-cloak>
		<x-header :leftOptions='{"showBack": true,"backText": "返回","preventGoBack":true}' toLink="#/home">
			<div slot="default" class="header-title">违章查询</div>
		</x-header>
		<Scroller :lockX="true" ref="scroller">
			<main v-show="frameFlag" style="padding-top: 1.066666rem;">
				<div v-if="myLoveCars.length==0" class="cl carInfo">
					<div class="carNum_1">
						<div class="relative_1">
							<p class="text_line">选择城市</p>
							<div id="peccancyCityName" @click="seleCityFlag=true;">
								<span id="peccancyCityName_1">{{electRuleMap==null?'选择':electRuleMap.cityName}}</span>
								<span class="boult"></span>
							</div>
						</div>
					</div>
					<div class="carNum">
						<div class="relative">
							<p>车牌号</p>
							<div class="opsti">
								<span class="cityShortName">{{electRuleMap==null?'':electRuleMap.abbr+electRuleMap.shortCut}}</span>
								<input type="text" id="carId" name="form" v-model="queryInfo.carNo" placeholder="请填写车牌号" maxlength="7">
							</div>
						</div>
					</div>
					<div class="carNum" id="carNum">
						<div class="relative">

							<p class="text_line bigPic">发动机号<span class="frameImg" @click="modelFrame=true;"></span></p>
							<input class="input" type="text" name="form" v-model="queryInfo.engineNo" :placeholder="enginePlaceholder" maxlength="20">
						</div>
					</div>
					<div class="carNum">
						<div class="relative">
							<p class="bigPic">车架号<span class="frameImg" @click="modelFrame=true;"></span></p>
							<input class="input" type="text" name="form" v-model="queryInfo.frameNo" :placeholder="framePlaceholder" maxlength="17">
						</div>
					</div>
					<div class="submitButton" type="button" value="查违章" v-on:click='doQuery'>查违章</div>
				</div>
				<div v-else>
					<div class="carInfo" v-for="item in myLoveCars">
						<ul class="tab">
							<li class="tap_li" data-is_default="1">
								<div class="detailInfo">
									<div class="img_div">
										<img :src="'./static/images/carlogo/'+ item.trademarkId +'.png'">
									</div>
									<div class="detail">
										<p class="carStyle">{{item.brandChnName}}</p>
										<p class="carModel"><span class="carModel_span">{{item.autoModelChnName}}</span>&nbsp;&nbsp;<span class="seats_span">5座</span></p>
									</div>
								</div>
								<div class="defaultCar cl ">
									<span class="setCar onColor" v-on:click='doQueryIllegal(item)'>违章查询</span>
									<span class="edit" @click="doEditCar(item)">编辑</span><span class="del" @click="doDelCar(item)">删除</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="addCar" @click="doAddCar">
						<span class="addCar_img"></span>
						<p>添加爱车</p>
					</div>
				</div>
				<!--控件-->
				<div v-transfer-dom>
					<popup v-model="seleCityFlag">
						<div class="peccancyCityTitle">所在地区</div>
						<picker :data='cityRules' :fixed-columns="2" :columns=2 v-model='electRule'></picker>
					</popup>
				</div>
			</main>
		</Scroller>
		<!--控件-->
		<div class="modelFrame" v-show="modelFrame" v-on:click="modelFrame=false;">
			<img src="../../../static/images/frame.jpg" alt="">
		</div>
	</div>
</template>
<script>
	import Scroller from '../../components/vux/src/components/scroller/index.vue';
	import {
		AjaxPlugin,
		TransferDom,
		Popup,
		Picker,
		Alert
	} from 'vux';
	import Colin from '../../assets/js/public.js';

	export default {
		components: {
			Scroller,
			Popup,
			Picker,
			Alert
		},
		mixins: [],
		data() {
			return {
				//数据用变量
				queryInfo: {},
				myLoveCars: [],
				ruleMaps: {},
				electRuleMap: null,
				cityRules: [],
				electRule: [],
				enginePlaceholder: '请填写发动机号',
				framePlaceholder: '请填写车架号',
				//控件用变量
				seleCityFlag: false,
				modelFrame: false,
				frameFlag: false
			}
		},
		computed: {

		},
		directives: {
			TransferDom
		},
		mounted() {
			Colin.scriptLazyLoad(Colin.exChangeUrl("/web/js/search/cityRules.js")).then(() => {
				var provinces = [];
				var rules = [];
				var rulesData = [];
				//全局变量
				var originalRules = JSON.parse(JSON.stringify(cityrules));
				originalRules.forEach(rule => {
					this.ruleMaps[rule.abbr + rule.shortCut] = rule;
					//添加省
					if(provinces.indexOf(rule.abbr) == -1) {
						provinces.push(rule.abbr);
						this.cityRules.push({
							name: rule.province.trim(),
							value: rule.abbr,
							parent: 0
						});
					}
					//添加市,直辖市直接显示京A,京B,京C...
					if(rules.indexOf(rule.abbr + rule.shortCut) == -1) {
						rules.push(rule.abbr + rule.shortCut);
						if(rule.abbr == "京" || rule.abbr == "沪" || rule.abbr == "渝" || rule.abbr == "津") {
							this.cityRules.push({
								name: rule.abbr + rule.shortCut,
								value: rule.abbr + rule.shortCut,
								parent: rule.abbr
							});
						} else {
							this.cityRules.push({
								name: rule.cityName,
								value: rule.abbr + rule.shortCut,
								parent: rule.abbr
							});
						}
					}
				});
			});
		},
		activated() {
			//查询爱车
			this.queryMyLoveCars();
		},
		watch: {
			seleCityFlag: function(val, oldVal) {
				if(val == false) {
					//选择框关闭时候赋值
					this.electRuleMap = this.ruleMaps[this.electRule[1]];
				}
			},
			electRuleMap: function(val, oldVal) {
				if(typeof(val) != "undefined") {
					//根据规则渲染表单
					this.renderForm(val);
				}
			}

		},
		methods: {
			queryMyLoveCars() {
				AjaxPlugin.$http({
					url: Colin.exChangeUrl("/do/customer/personalCenter/queryMyBrandAuto"),
					method: 'post',
					data: {},
				}).then(data => {
					var data = data.data;
					if(data.resultCode == "1") {
						this.myLoveCars = data.resultObject;
					}
					this.frameFlag = true;
					this.$nextTick(() => {
						this.$refs.scroller.reset();
					})
				});
			},
			renderForm(ruleMap) {
				if(ruleMap.engine == 0) {
					this.enginePlaceholder = '发动机号可选填';
				} else {
					if(ruleMap.engineno == 0) {
						this.enginePlaceholder = '请输入完整发动机号';
					} else {
						this.enginePlaceholder = '请输入发动机号后' + ruleMap.engineno + '位';
					}
				}
				if(ruleMap.isframenum == 0) {
					this.framePlaceholder = '车架号可选填';
				} else {
					if(ruleMap.frameno == 0) {
						this.framePlaceholder = '请输入完整车架号';
					} else {
						this.framePlaceholder = '请输入车架号后' + ruleMap.frameno + '位';
					}
				}
			},
			doQueryIllegal(item) {
				//爱车入口查询
				//判断是否有车牌号
				if(item.vehicleLicenceCode) {
					//根据车牌号查找相应的城市规则
					var ruleMap = this.ruleMaps[item.vehicleLicenceCode.substring(0, 2)];
					if(typeof(ruleMap) != "undefined" && ruleMap != null) {
						if(ruleMap.engine == 1) {
							//判断发动机号
							if(item.engineNo) {
								//
							} else {
								this.showPlugin("请补充发动机号！");
								return;
							}
						}
						if(ruleMap.isframenum == 1) {
							//判断车架号
							if(item.vehicleFrameNo) {
								//
							} else {
								this.showPlugin("请补充车架号！");
								return;
							}
						}
					} else {
						//没有相应的ruleMap就要求全部填写
						//判断发动机号
						if(item.engineNo) {
							//
						} else {
							this.showPlugin("请补充发动机号！");
							return;
						}
						//判断车架号
						if(item.vehicleFrameNo) {
							//
						} else {
							this.showPlugin("请补充车架号！");
							return;
						}
					}
				} else {
					this.showPlugin("请填补充车牌号!");
					return
				}
				var href = "#/illegal/illegalDetail?";
				if(item.vehicleLicenceCode) {
					href += "&carNo=" + item.vehicleLicenceCode.toUpperCase();
				}
				if(item.frameNo) {
					href += "&frameNo=" + item.vehicleFrameNo.toUpperCase();
				}
				if(item.engineNo) {
					href += "&engineNo=" + item.engineNo.toUpperCase();
				}
				window.location.href = href;
			},
			doQuery() {
				//表单入口查询
				//校验然后赋值跳转
				if(this.checkDTO()) {
					var href = "#/illegal/illegalDetail?";
					if(this.queryInfo.carNo) {
						href += "&carNo=" + (this.electRuleMap.abbr + this.electRuleMap.shortCut + this.queryInfo.carNo).toUpperCase();
					}
					if(this.queryInfo.frameNo) {
						href += "&frameNo=" + (this.queryInfo.frameNo).toUpperCase();
					}
					if(this.queryInfo.engineNo) {
						href += "&engineNo=" + (this.queryInfo.engineNo).toUpperCase();
					}
					window.location.href = href;
				}
			},
			checkDTO() {
				if(typeof(this.electRuleMap) != "undefined" && this.electRuleMap != null) {
					//校验车牌
					if(this.queryInfo.carNo) {
						var patt = /^[0-9A-z]{4,5}$/i;
						if(patt.test(this.queryInfo.carNo.toUpperCase()) == false) {
							this.showPlugin("车牌号格式不正确,请重新填写!");
							return false;
						}
					} else {
						this.showPlugin("请填写车牌号");
						return false;
					}
					//校验发动机号
					if(this.electRuleMap.engine == 1) {
						var patt = /^[0-9A-z]{0,20}$/i;
						if(this.queryInfo.engineNo) {
							if(patt.test(this.queryInfo.engineNo.toUpperCase()) == false) {
								this.showPlugin("发动机号格式不正确,请重新填写!");
								return false;
							}
						} else {
							this.showPlugin("请填写发动机号");
							return false;
						}
					}
					//校验车架号
					if(this.electRuleMap.isframenum == 1) {
						var patt = /^[0-9A-z]{0,17}$/i;
						if(this.queryInfo.frameNo) {
							if(patt.test(this.queryInfo.frameNo.toUpperCase()) == false) {
								this.showPlugin("车架号格式不正确,请重新填写!");
								return false;
							}
						} else {
							this.showPlugin("请填写车架号");
							return false;
						}
					}
				} else {
					this.showPlugin("违章城市不能为空,请选择!");
					return false;
				}
				//造数据
				//				this.queryInfo.carNo = "沪ASQ067";
				//				this.queryInfo.frameNo = "LE4GG8BB2FL357561";
				//				this.queryInfo.engineNo = "80421145";
				return true;
			},
			doDelCar(item) {
				var self = this;
				this.$vux.confirm.show({
					title: '提示',
					content: '确认删除此爱车么？',
					onConfirm() {
						//查询爱车
						AjaxPlugin.$http({
							url: Colin.exChangeUrl("/do/customer/personalCenter/delMyBrandAuto"),
							method: 'post',
							data: {
								id: item.id,
								isDefault: item.isDefault
							},
						}).then(data => {
							var data = data.data;
							if(data.resultCode == "1") {
								self.queryMyLoveCars();
							}
						});
					}
				});
				//				var data = {};
				//              data = {
				//                  id: id,
				//                  isDefault: self.isDefault
				//              };
				//              common.ajax('/do/customer/personalCenter/delMyBrandAuto', data, function (result) {
				//                  if (result.resultCode == "1") {
				//                      var len = $(".tab li").length;
				//                      if (len == 0) {
				//                          sessionStorage.carid = 'flag';
				//                          sessionStorage.reback = true;
				//                          location.href="illegal_1.html";
				//                          // $('.addCarText').show();
				//                      } else {
				//                          $('.addCarText').hide();
				//                      }
				//                  }
				//              });
			},
			doEditCar(item) {
				//跳回来用
				sessionStorage.setItem("carid", "flag");
				location.href = "../../html/garageInfo/myCarEdit.html?myCarId=" + item.id;
			},
			doAddCar() { //跳回来用
				sessionStorage.setItem("carid", "flag");
				location.href = "../../html/garageInfo/selectCarBrand.html";
			},
			doClickBack() {
				console.log("dddd");
			},
			showPlugin(msg) {
				this.$vux.alert.show({
					title: '提示',
					content: msg
				})
			}
		}
	}
</script>