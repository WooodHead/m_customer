<template>
    <div class="wrapper" v-cloak :class="{'anydoor':ua=='anydoor'}">
        <x-header :leftOptions="leftOptions" leftType='2' toLink="#/locateCity" ref="fade">
            <slot name="default">
                <div class="search-box middle" @click="handleLink('#/search')"><span>请输入商品名、地点</span></div>
            </slot>
        </x-header>
        <Scroller :height='height' ref="scroller" :lockX="true" v-model="status" @on-pullup-loading="handleloadMore" :usePullup="true" v-fade>
            <div class="scroll-contain">
                <Swiper :list="swiperList" height="4.4rem"></Swiper>
                <ul class="menu-contain vux-1px-b bw">
                    <li class="menu-item v-center" v-if="item.show" v-for="item in menuList" @click="handleLink(item.url,item.fn)">
                        <span class="rel"><img :src="item.img" alt=""/><label v-if="item.labelImg" :style="{backgroundImage:'url('+item.labelImg+')'}"></label></span>
                        <span>{{item.text}}</span>
                    </li>
                </ul>
                <div class="recommend h-center clearfix">
                    <div class="recommendImg"></div>
                    <div class="recommendText">
                        <div>汽修点评网累计修理厂驻量<span>98367</span>家</div>
                        <div>汽修点评网投放渠道<span>17</span>个，覆盖用户<span>2.8</span>亿</div>
                    </div>
                </div>
                <div class="introduce bw mt10">
                    <div class="serviceTitle vux-1px-b center">
                        优惠专区<strong style="color:#ff6600">HOT</strong>
                        <div class="moreRight" @click="handleLink('/mobile/html/garageInfo/preferentialZone.html')"><span>更多</span><span class="arrow-right"></span></div>
                    </div>
                    <div class="introduce-area vux-1px-b flex">
                        <div class="introduce-item v-center" :class="{'vux-1px-r':index!=discountList.length-1}" v-for="(item,index) in discountList" @click="handleLink('/mobile/html/garageInfo/preferentialList.html?typeid='+item.id+'&preferentialReturn=index_1')">
                            <h3>{{item.title}}</h3>
                            <p :style="{color:item.color}">{{item.tip}}</p>
                            <img v-lazy="item.img" alt="" />
                        </div>
                    </div>
                </div>
                <div class="introduce mt10">
                    <div class="serviceTitle bw vux-1px-b center">
                        推荐商户<strong style="color:#ff6600">BEST</strong>
                    </div>
                    <div class="introduce-area">
                        <GarageItem class="bw" :class="{'no-mb':index==garageList.length-1}" v-for="(item,index) in garageList" :key="index" :itemData="item" :linkTo="'/mobile/html/garageInfo/detail.html?route=index&id='+item.idGarage"></GarageItem>
                    </div>
                    <div class="load-tip" v-show="!hasMoreLoad">
                        <span @click="handleLink('#/shopList')">点击查看更多</span>
                    </div>
                </div>
            </div>
        </Scroller>
        <div class='locationTip' v-if="showLocationTip">我们建议您开启定位，获取更精准地理位置<i @click="showLocationTip=false"></i></div>
        <loading v-model="showLoading"></loading>
    </div>
</template>
<script>
import Swiper from '../components/vux/src/components/swiper/swiper.vue';
import Scroller from '../components/vux/src/components/scroller/index.vue';
import GarageItem from '../components/GarageItem.vue';
import Common from '../assets/js/common.js';
import Colin from '../assets/js/public.js';
import Locate from '../assets/js/locate.js';
import {
    mapGetters,
    mapMutations
} from 'vuex';
import {
    scroll,
    link
} from '../assets/js/mixin/index';
import {
    fade
} from '../assets/js/directives.js';
export default {
    components: {
        Swiper,
        Scroller,
        GarageItem
    },
    mixins: [scroll, link],
    data() {
        return {
            ua: Common.ua,
            isFirst: true,
            leftOptions: {
                showBack: true,
                backText: '',
                preventGoBack: true,
            },
            defaultCityCode: '',
            showLoading: true,
            showLocationTip: false,
            swiperList: [],
            menuList: [{
                    img: './static/images/menu/index-menu1.png',
                    text: "维修",
                    url: '#/shopList?id=01',
                    show: true
                }, {
                    img: './static/images/menu/index-menu2.png',
                    text: "保养",
                    url: '#/shopList?id=02',
                    show: true
                }, {
                    img: './static/images/menu/index-menu3.png',
                    text: "美容",
                    url: '#/shopList?id=03',
                    show: true
                }, {
                    img: './static/images/menu/index-menu4.png',
                    text: "洗车",
                    url: '#/shopList?id=04',
                    show: true
                },
                {
                    img: './static/images/menu/index-menu5.png',
                    labelImg: './static/images/icon/label-free.png',
                    text: "查违章",
                    fn: this.handleIllegal,
                    show: true
                }, {
                    img: './static/images/menu/index-menu6.png',
                    text: "新车",
                    url: '/mobile/html/garageInfo/car/index.html#/newCar',
                    show: false
                }, {
                    img: './static/images/menu/index-menu7.png',
                    text: "二手车",
                    url: '/mobile/html/garageInfo/car/index.html#/secondHandCar',
                    show: false
                }, {
                    img: './static/images/menu/index-menu8.png',
                    text: "敬请期待",
                    url: '',
                    show: true
                },
            ],
            discountList: [{
                color: '#4295e7'
            }, {
                color: '#fa6552'
            }, {
                color: '#3dcbd8'
            }],
            searchGarageListPostData: {
                indexFlag: 1,
                page: 1
            },
            status: {
                pullupStatus: 'default',
            }, //阻止连续加载更多
            garageList: []
        }
    },
    computed: {
        ...mapGetters(['userInfo']),
    },
    directives: {
        fade: fade
    },
    mounted() {
        this.handlefirstInit();
    },
    activated() {
        let cityCode = this.userInfo.selectCityCode || this.userInfo.cityCode; //selectCityCode比cityCode优先
        if (this.userInfo instanceof Object && cityCode && !this.isFirst) {

            if (cityCode != this.defaultCityCode) {
                this.scrollReset(this.garageList, this.searchGarageListPostData)
                this.showLoading = true;
                this.defaultCityCode = cityCode;
                this.handleCurrentSessionInfo()
                return false;
            }
        } else if (this.userInfo instanceof Object && cityCode && this.isFirst) {
            this.handleInit(this.userInfo)
        } else if (this.isFirst) {
            this.$on('getCurrentSessionInfo', (res) => {
                this.handleInit(res)
            })
        }
        this.updateTabIndex('home');
        this.$refs.scroller.reset()
        this.isFirst ? this.isFirst = false : '';
    },
    methods: {
        ...mapMutations(['updateUserInfo', 'updateTabIndex']),
        handlefirstInit() {
            Colin.tokenPost(Common.domain + '/do/customer/information/wxBannerType', {
                typeId: '0'
            }, data => {
                var _data = data.resultObject,
                    swiperList = [];
                for (var i = 0, len = _data.length; i < len; i++) {
                    swiperList.push({
                        url: '/mobile/html/garageInfo/' + _data[i].photoLink,
                        img: _data[i].idPhotUrl
                    })
                }
                this.swiperList = swiperList;
            })
        },
        handleInit(res) {
            if (Common.ua == 'wx') { //菜单隐藏控制
                this.menuList[5].show = true;
                this.menuList[6].show = true;
            }
            this.$set(this.leftOptions, 'backText', res.cityName);
            this.defaultCityCode = res.selectCityCode || res.cityCode;
            this.handleNewsGroup()
            this.showLocationTip = !this.userInfo.cityCode;
        },
        handleCurrentSessionInfo() {

            Colin.getCurrentSessionInfo(this).then((res) => {
                if (Common.ua == 'wx') { //菜单隐藏控制
                    this.menuList[5].show = true;
                    this.menuList[6].show = true;
                }
                this.$set(this.leftOptions, 'backText', res.cityName);
                this.handleNewsGroup()
            })
        },
        handleNewsGroup() {
            Colin.tokenPost(Common.domain + '/do/customer/information/selectNewsGroup', null, data => { //获取优惠列表
                var res = data.resultObject || [],
                    obj = {},
                    _discountList = [];
                for (var i = 0, length = res.length; i < 3 && i < length - 1; i++) {
                    obj.img = res[i].groupCover,
                        obj.title = res[i].groupTitle,
                        obj.tip = res[i].groupAnnotation,
                        obj.id = res[i].id;

                    _discountList[i] = Object.assign({}, this.discountList[i], obj)
                }
                this.discountList = _discountList;
            })
            this.handleloadMore();
        },
        handleloadMore() {
            Colin.tokenPost(Common.domain + '/do/customer/search/searchGarageList', this.searchGarageListPostData, data => {
                //获取商家列表
                data.garageList ? this.garageList = this.garageList.concat(data.garageList) : '';

                if (this.searchGarageListPostData.page == 2 || (data.garageList && data.garageList.length < 10)) {
                    this.scrollEnd()
                } else {
                    this.scrollNext()
                } //首页只加载两页
                this.searchGarageListPostData.page++;
            })
        },
        handleIllegal() {
            if (this.userInfo.login === true) {
                location.href = '#/illegal/illegalSearch';
            } else {
    
                if (Common.ua == "anydoor") {
                    
                    // common.trackingEvent_Anydoor('01-首页1',
                    // '0106-点击列表项“写点评”按钮')
                    App.call(["sendMessage"], function(data) {
                        var result = JSON.parse(data);
                        var SSOTicket = result.SSOTicket;
                        var signature = result.signature;
                        var timestamp = result.timestamp;
                        SSOTicket = encodeURIComponent(SSOTicket);
                        signature = encodeURIComponent(signature);
                        timestamp = encodeURIComponent(timestamp);
//                      Colin.setSS('vt', 'illegal');
                        Colin.setLS("vt", "illegal", 1);
                        if (!SSOTicket) {
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
                            window.location.href = '/do/customer/oneh5login?returnPage=jump_rym.html&ssoTicket=' + SSOTicket + '&signature=' + signature + '&timestamp=' + timestamp;
                        }
                    }, function(error) {}, ["getSSOTicket"]);
                } else {
                    Colin.setCookie("vt", "illegal", 1);
                    location.href = '/do/customer/oneh5login'
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
[v-cloak] {
    display: none;
}

.vux-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2
}

.menu-contain {
    overflow: hidden;
    padding-bottom: 0.533333rem;
}

.menu-item {
    float: left;
    width: 25%;
    text-align: center;
    img {
        width: 1.2rem;
        margin-top: 0.453333rem;
        margin-bottom: 0.213333rem
    }
    label {
        display: block;
        position: absolute;
        width: 0.813333rem;
        height: 0.44rem;
        top: 0.3rem;
        right: -0.2rem;
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
}

.recommend {
    height: 1.16rem;
    background-color: #ffffff;
}

.recommendImg {
    background: url(../../static/images/img_6@2x.png);
    background-size: 100%;
    width: 0.706667rem;
    height: 0.8rem;
    float: left;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
}

.recommendText {
    font-size: 0.32rem;
    float: left;
    padding-left: 0.4rem;
    border-left: 1px solid #f0f3f5;
}

.serviceTitle {
    font-size: 0.4266rem;
    color: #555555;
    text-align: center;
    line-height: 1.2rem;
    font-weight: bold;
    position: relative;
}

.introduce-item {
    padding: 0.4rem 0;
    flex: 1;
}

.locationTip {
    position: fixed;
    top: 1.066667rem;
    width: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background: #000;
    i {
        display: inline-block;
        float: right;
        margin-top: 3px;
        margin-right: 3px;
        width: 14px;
        height: 14px;
        background: url(../../static/images/icon/icon-locationTipClose.png);
        background-size: 100%;
    }
}
</style>
