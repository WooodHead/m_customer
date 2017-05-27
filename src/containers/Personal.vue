<template>
    <div class="contain">
        <Scroller ref="scroller" :height="height" :lockX="true">
        <div class="scroll-contain">
        <div class="banner">
            <img v-if="day" src="../../static/images/img/banner-personal-sun.png">
            <img v-else src="../../static/images/img/banner-personal.png">
            <div class="headImg" :style="{backgroundImage:'url('+headImg+')',backgroundSize:'100% 100%',
    backgroundPosition:'center center'}"><span class="edit-button" @click="handleLink('/mobile/html/garageInfo/editUser.html')"></span></div>
        </div>
        <div class="mb20">
            <ul class="list-horizontal space-between menu_1">
                <li class="fs34" @click="handleLink('/mobile/html/garageInfo/myCarCenterNew.html')">爱车<span>（{{userVehicle}}）</span></li>
                <li class="fs34" @click="handleLink('/mobile/html/garageInfo/myAppointment.html')">预约<span>（{{order}}）</span></li>
                <li class="fs34" @click="handleLink('/mobile/html/garageInfo/discount.html')">优惠券<span>（{{validCoupons}}）</span></li>
            </ul>
        </div>
        <div class="mb20">
            <ul class="list-vertical">
                <li class="vux-1px-b" @click="handleLink('/mobile/vue/customer/index/dist/index.html#/carRequire?tab=1')">
                    <p class="left">轻修比价</p>
                    <p class="right h-center"><i class="arrow-right"></i></p>
                </li>
            </ul>
            <ul class="list-horizontal qxbj space-between">
                <li @click="handleLink('/mobile/vue/customer/index/dist/index.html#/carRequire?tab=1')">
                    <div class="responsing">
                        <label v-if="needResponses">{{needResponses}}</label>
                    </div><span>待回应</span></li>
                <li @click="handleLink('/mobile/vue/customer/index/dist/index.html#/carRequire?tab=2')">
                    <div class="choosing">
                        <label v-if="needChoose">{{needChoose}}</label>
                    </div><span>待选择</span></li>
                <li @click="handleLink('/mobile/vue/customer/index/dist/index.html#/carRequire?tab=3')">
                    <div class="choosed">
                        <label v-if="selected">{{selected}}</label>
                    </div><span>已选择</span></li>
                <li @click="handleLink('/mobile/html/garageInfo/myAppointment.html?tab=3')">
                    <div class="commenting">
                        <label v-if="needReview">{{needReview}}</label>
                    </div><span>待评价</span></li>
            </ul>
        </div>
        <div class="mb20">
            <ul class="list-vertical">
                <li class="vux-1px-b" @click="handleLink('/mobile/html/garageInfo/userComment.html')">
                    <p class="left">我的评论</p>
                    <p class="right h-center">
                        <i class="arrow-right"></i></p>
                </li>
                <li class="vux-1px-b" @click="handleLink('/mobile/html/garage/chatList.html?role=user')">
                    <p class="left">我的消息</p>
                    <p class="right h-center">
                        <label v-if="hasNews"></label><i class="arrow-right"></i></p>
                </li>
                <li  @click="handleLink('/mobile/html/garageInfo/myTrack.html?route=userCenter')">
                    <p class="left">我的足迹</p>
                    <p class="right h-center"><i class="arrow-right"></i></p>
                </li>
            </ul>
        </div>
        <div>
            <ul class="list-vertical">
                <li class="vux-1px-b">
                    <p class="left">联系我们</p>
                    <p class="right h-center" @click="telCall"><span>上午9:00-12:00 下午14:00-18:00</span><i class="arrow-right"></i></p>
                </li>
                <li  @click="handleLink('/mobile/html/garageInfo/feedback.html')">
                    <p class="left">意见反馈</p>
                    <p class="right h-center"><i class="arrow-right"></i></p>
                </li>
            </ul>
        </div>
        </div>
        </Scroller>
        <loading v-model="showLoading"></loading>
    </div>
</template>
<script>
import Common from "../assets/js/common.js";
import Colin from "../assets/js/public.js";
import {mapGetters,mapMutations} from 'vuex';
import {link} from '../assets/js/mixin/index.js';
import Scroller from '../components/vux/src/components/scroller/index.vue';
export default {
	mixins:[link],
    components:{Scroller},
    data() {
            return {
                headImg:Common.imgUrl+'img/headImg-default.png',
                userVehicle:'',
                order:'',
                validCoupons:'',
                needResponses:'',
                needChoose:'',
                selected:'',
                needReview:'',
                hasNews:false,
                showLoading:false,
                day:true
            }
        },
        computed:{
             ...mapGetters(['userInfo']),
             height(){
                 return -Common.fs*1.33333+'';
             }
        },
        mounted() {
           setTimeout(()=>{
            this.$refs.scroller.reset();
           },200)
           
        },
        activated(){
              this.showLoading=true;
              let time=new Date().getHours();
              if(time<6 || time>18){
                  this.day=false;
              }
               let cityCode=this.userInfo.selectCityCode ||this.userInfo.cityCode;
               if(this.userInfo instanceof Object && cityCode){
                    this.handleInit()
               }
               this.$on('getCurrentSessionInfo',()=>{
                   this.handleInit()
               })              
        },
        methods: {
            handleInit() {
                this.$http.post(Common.domain + '/do/common/message/hasNewMessage').then((res) => {
                    let _res = res.data;
                    if(_res.resultCode=='1'){
                        if(_res.resultObject==0){
                            this.hasNews=true;
                        }
                    }

                })
                this.$http.post(Common.domain + '/do/customer/personalInfo/getPersonalInfo').then((res) => {
                    let _res = res.data;
                    if(_res.resultCode=='1'){
                        let nickName=_res.resultObject.nickname;
                        _res.resultObject.url?this.headImg=_res.resultObject.url:'';
                        Colin.setTitle(nickName)
                        this.userVehicle=_res.countUserVehicle || '0';
                        this.order=_res.countOrder || '0';
                        this.validCoupons=_res.countValidCoupons || '0';
                        this.needResponses=_res.countNeedResponse;
                        this.needChoose=_res.countNeedChoose;
                        this.selected=_res.countSelected;
                        this.needReview=_res.countNeedReview;                  
                    }else if(_res.resultCode=='2'){
                        if(Common.ua!='wx'){
                            Colin.setSS('vt','userCenter');
                            location.href='/do/customer/oneh5login';
                        }
                    }
                    this.showLoading=false;
                    this.$refs.scroller.reset();
                })
            },
            telCall() {
                window.location.href = "tel:13066839863";
            }
        }
}
</script>
<style lang="less" scoped>
@import "../../static/css/variable.less";
.contain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: @c4;
    overflow-y: scroll;
    -webkit-overflow-scrolling:touch;
}
.scroll-contain{
    padding-bottom: 0.4rem;
}
.scroll-contain>div{
    background: #fff;
}
.banner{
    position:relative;
}
.headImg{
    position: absolute;
    bottom:0.64rem;
    right:0.866667rem;
    width:1.866667rem;
    height:1.866667rem;
    border-radius: 100%;

    box-shadow: 0 0 14px 0 #ffd5b9;
    .edit-button{
        position: absolute;
        bottom:0;
        right:0;
        width:0.573333rem;
        height:0.573333rem;
        transform:translate(0.05rem,0.05rem);
        background:url(../../static/images/icon/icon-edit.png);
        background-size:cover;

    }
}
.arrow-right {
    width: 0.16rem;
    height: 0.306667rem;
    background-image: url(../../static/images/icon/icon-rightArrow-personal.png)
}

.scroll-contain div {
    background: #fff;
}

.menu_1 {
    height: 1.52rem;
    li span {
        font-size: 0.32rem;
        color: @c2;
    }
    li {
        position: relative;
    }
    li::after {
        content: '';
        display: block;
        position: absolute;
        width: 1px;
        height: 0.426667rem;
        background: #555;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background: #e2e4e6;
    }
    li:last-child::after {
        display: none;
    }
}

.left {
    font-size: 0.4rem;
    color: @c3;
}

.right {
    span {
        margin-right: 0.213333rem;
        color: @c2;
    }
    label {
        display: block;
        margin-right: 0.213333rem;
        width: 10px;
        height:10px;
        line-height: normal;
        text-align: center;
        border-radius: 100%;
        background: #ff1111;
        color: #fff;
    }
}

.list-horizontal {
    li {
        .center;
        flex: 1;
        background: #fff;
    }
}


.list-vertical {
    li {
        .space-between;
        margin: 0 0.4rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
}
.f34{
    font-size: 0.453333rem;
}
.qxbj {
    padding: 0.373333rem 0;
    background: #fff;
    color: @c2;
    li {
        .v-center;
    }
    li div {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background-size: 100% 100%;
        background-position: center center;
        position: relative;
        label {
            display: table-cell;
            position: absolute;
            top: -0.2rem;
            left: 0.4rem;
            padding:0 2px;
            min-width: 0.506667rem;
            height: 0.506667rem;
            border-radius: 100%;
            border: 1px solid @c1;
            line-height: inherit;
            font-family: 'Arial';
            text-align: center;
            vertical-align: middle;
            color: @c1;
            background:#fff;
            .borderbox;
        }
    }
    .responsing {
        background-image: url(../../static/images/menu/responsing.png);
    }
    .choosing {
        background-image: url(../../static/images/menu/choosing.png);
    }
    .choosed {
        background-image: url(../../static/images/menu/choosed.png);
    }
    .commenting {
        background-image: url(../../static/images/menu/commenting.png);
    }
    li span {
        font-size: 0.32rem;
        margin-top: 0.266667rem;
        line-height: 1;
    }
}
</style>
