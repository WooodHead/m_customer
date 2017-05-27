<template>
	<div>
		<Tabbar>
			<TabbarItem @on-item-click="handleLink('#/home')" :selected="tabIndex=='home'">
				<img slot="icon" src="../../static/images/menu/home.png" alt="" />
				<img slot="icon-active" src="../../static/images/menu/home-active.png" alt="" />
				<span slot="label">首页</span>
			</TabbarItem>
			<TabbarItem @on-item-click="handleLink('#shopList')" :selected="tabIndex=='shopList'">
				<img slot="icon" src="../../static/images/menu/shop.png" alt="" />
				<img slot="icon-active" src="../../static/images/menu/shop-active.png" alt="" />
				<span slot="label">商家</span>
			</TabbarItem>
			<TabbarMiddle @on-item-click="handleClick">
				<img slot="icon" src="../../static/images/menu/bottom-menu3.png" alt="" />
				<span slot="label">轻修比价</span>
			</TabbarMiddle>
			<TabbarItem @on-item-click="handleLink('/mobile/html/garageInfo/newsList.html?role=user')">
				<img slot="icon" src="../../static/images/menu/news.png" alt="" />
				<img slot="icon-active" src="../../static/images/menu/news-active.png" alt="" />
				<span slot="label">头条</span>
			</TabbarItem>
			<TabbarItem @on-item-click="handlePersonal" :selected="tabIndex=='personal'">
				<img slot="icon" src="../../static/images/menu/personal.png" alt="" />
				<img slot="icon-active" src="../../static/images/menu/personal-active.png" alt="" />
				<span slot="label">我的</span>
			</TabbarItem>
		</Tabbar>
	</div>
</template>
<script>
	import Tabbar from './vux/src/components/Tabbar/tabbar.vue';
	import TabbarItem from './vux/src/components/Tabbar/tabbar-item.vue';
	import TabbarMiddle from './vux/src/components/Tabbar/tabbar-middle.vue';
	import Common from '../assets/js/common.js'
	import Colin from '../assets/js/public.js'
	import {
		mapGetters,
		mapMutations
	} from 'vuex';
	import {
		link
	} from '../assets/js/mixin/index.js';
	export default {
		components: {
			Tabbar,
			TabbarItem,
			TabbarMiddle
		},
		mixins: [link],
		data() {
			return {

			}
		},
		computed: {
			...mapGetters(['tabIndex', 'userInfo'])
		},
		created() {
			this.updateTabIndex(this.$router.history.current.name)
		},
		methods: {
			...mapMutations(['updateTabIndex']),
			handleClick() {
				if(this.userInfo.login === true) {
					if(Common.ua == "wx" || Common.ua == "anydoor") {
						location.href = "/mobile/html/garageInfo/drawPlan.html"
					} else {
						location.href = "/mobile/html/garageInfo/compare_h5.html"
					}
				} else {

					if(Common.ua == "anydoor") {
						//                        alert("anydoor");
						App.call(["sendMessage"], function(data) {
							// alert(data);
							var result = JSON.parse(data);
							var SSOTicket = result.SSOTicket;
							var signature = result.signature;
							var timestamp = result.timestamp;
							//                            alert(SSOTicket + ":" + signature + ":" + timestamp);
							SSOTicket = encodeURIComponent(SSOTicket);
							signature = encodeURIComponent(signature);
							timestamp = encodeURIComponent(timestamp);

							Colin.setLS("vt", "drawPlan", 1);
                        	Colin.setLS("drawPlanRouter", "index", 1);
							// alert(SSOTicket);
							if(!SSOTicket) {
								App.call(["getSSOLogin"],
									function(e) {
										// document.write(e)
									},
									function(e) {
										// document.write(e)
									}, {
										"redirectURL": window.location.origin + "/mobile/html/garageInfo/jump_rym.html"
									});
							} else {
								//                              alert("oneh5login")
								window.location.href = '/do/customer/oneh5login?returnPage=jump_rym.html&ssoTicket=' + SSOTicket + '&signature=' + signature + '&timestamp=' + timestamp;
							}
						}, function(error) {

						}, ["getSSOTicket"]);
					} else {
						Colin.setCookie("vt", "drawPlan", 1);
                        Colin.setCookie("drawPlanRouter", "index", 1);
						location.href = '/do/customer/oneh5login';
					}

				}

			},
			handlePersonal() {
				if(this.userInfo.login === true) {
					location.href = "#/personal?state='individual'";
				} else {

					if(Common.ua == "anydoor") {
						//                        alert("anydoor");
						App.call(["sendMessage"], function(data) {
							// alert(data);
							var result = JSON.parse(data);
							var SSOTicket = result.SSOTicket;
							var signature = result.signature;
							var timestamp = result.timestamp;
							//                            alert(SSOTicket + ":" + signature + ":" + timestamp);
							SSOTicket = encodeURIComponent(SSOTicket);
							signature = encodeURIComponent(signature);
							timestamp = encodeURIComponent(timestamp);
							
							Colin.setLS("vt", "userCenter", 1);
							// alert(SSOTicket);
							if(!SSOTicket) {
								App.call(["getSSOLogin"],
									function(e) {
										// document.write(e)
									},
									function(e) {
										// document.write(e)
									}, {
										"redirectURL": window.location.origin + "/mobile/html/garageInfo/jump_rym.html"
									});
							} else {
								//                              alert("oneh5login")
								window.location.href = '/do/customer/oneh5login?returnPage=jump_rym.html&ssoTicket=' + SSOTicket + '&signature=' + signature + '&timestamp=' + timestamp;
							}
						}, function(error) {

						}, ["getSSOTicket"]);
					} else {

						Colin.setCookie("vt", "userCenter", 1);
						location.href = '/do/customer/oneh5login';
					}

				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.weui-tabbar {
		background: #fff
	}
	
	.menu-middle {
		width: 1rem;
	}
</style>