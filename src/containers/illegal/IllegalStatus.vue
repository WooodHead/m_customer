<template>
  <div id="main">
    <header>
      <div class="returnBack">
        <span class="back_show"></span>
        <span class="deText" @click="goBack">返回</span>
      </div>
      <span class="detailName">提交订单</span>
    </header>
    <main>
      <div class="all" v-for="item in listObject">
        <router-link to="/myPayment" class="illegalTitle">
          <div class="line"></div>
          <div class="time_a">
            <!--<div class="time_1">2017-11-11</div>-->
            <div class="time_2">{{item.data.createTime}}</div>
          </div>

          <div class="plateNumber">{{item.data.carNo}}</div>
          <div class="state_1">
            <div>{{item.data.payType}}</div>
            <div class="icon_back"></div>
          </div>
        </router-link>
        <div class="illegalImfromation" v-for="items in item.data.orderDetails">
          <router-link to="/illegalDetail" class="status_s">
            <div class="icon_back_1"></div>
            <div class="sta">{{items.preorderstatus}}</div>
          </router-link>
          <div class="derail_table">
            <div class="icon_time"
                 style="background:url(../../../static/images/icon_time.png);background-size: 100%;"></div>
            <div class="time_text">违章时间</div>
            <div class="time_detail">{{items.occurTime}}</div>

          </div>
          <div class="border"></div>
          <div class="derail_table">
            <div class="icon_time" style="background:url(../../../static/images/icon_ID.png);background-size: 100%;"></div>
            <div class="time_text">违章编号</div>
            <div class="time_detail">{{items.tempId}}</div>
          </div>
          <div class="border"></div>
          <div class="derail_table">
            <div class="icon_time"
                 style="background:url(../../../static/images/icon_neirong.png);background-size: 100%;"></div>
            <div class="time_text">违章内容</div>
            <div class="time_detail">{{items.reason}}</div>
          </div>
          <div class="border"></div>
          <div class="serviceTab">
            <div class="rental">
              <div class="icon_scroce"></div>
              <div class="number">{{Number(items.degree)*(-1)}}</div>
            </div>
            <div class="rental">
              <div class="icon_scroce_1"></div>
              <div class="number">{{items.fine}}</div>
            </div>
            <div class="Payment rental">
              <div class="servicePayment">服务费用：</div>
              <div class="servicePaymentNumber">￥{{items.poundage}}:<span style="font-size:0.24rem">00</span></div>
            </div>
          </div>
        </div>
        <div class="botTitel">
          <!--<div class="servicePaymentNumber">￥{{items.poundage}}:<span style="font-size:0.24rem">00</span></div>-->
          <div class="servicePaymentNumber_1">
            共<span style="font-size:0.32rem">{{item.data.orderDetails.length}}</span>次违章&nbsp;&nbsp;合计：<span style="font-size:0.24rem">￥</span><span style="font-size:0.32rem">{{item.data.amount}}</span>:<span style="font-size:0.24rem">00</span><span style="color:#a5a5a5">(包含服务费)</span>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>
<script>
  //    import illegalTable from 'components/smallComponents/illegalTable'
  import axios from "axios"
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
  export default{
    data(){
      return {
        msg: 'Welcome to Your Vue.js App',
        list: [],
        listObject: []
      }
    },
    mounted(){
      var self = this;
      axios.post(
        'https://test-pamap-gr.pingan.com.cn:40956/do/customer/checkillegal/setCustomerUserId',
        {
//          customerUserId:'ssss'
          customerUserId: '805911461834876868'
        }).then(function () {
        axios.post(
//            'https://test-pamap-gr.pingan.com.cn:40956/do/customer/checkillegal/getOrderDetails',
          'https://test-pamap-gr.pingan.com.cn:40956/do/customer/checkillegal/queryOrderDetailList',
          {

//            orderId:'Test1706458257467',
//            orderId:'Test1705501126404'
          })
          .then(function (res) {
            console.log(res.data.resultObject);
            self.listObject = res.data.resultObject;
//              self.list = res.data.resultObject.orderDetails;
            console.log(self.listObject)
          })
      });
    },
    components: {
//			illegalTable
    },
    methods: {
        goBack:function(){
            this.$router.go(-1)
        }
    }
  }


</script>
<style scoped>
  .botTitel {
    height: 0.74rem;
    color: #555555;
    line-height: 0.74rem;
    background-color: #ffffff
  }

  .botTitel .servicePaymentNumber_1 {
    float: right;
    margin-right: 0.3rem;
    font-size: 0.28rem;
  }
  .fontStl{
    font-size:.28rem;
  }
  .illegalTitle {
    background-color: #ffffff;
    font-size: 0.26rem;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0.3rem;
    padding-left: 0.84rem;
    height: 0.74rem;
    position: relative;
    color: #a5a5a5;
    border-bottom: 1px solid #EFF3F5;
    text-decoration: none;
    margin-bottom: -5px;
  }

  .line {
    height: 0.3rem;
    border-left: 4px solid #FF6600;
    position: absolute;
    top: 0.2rem;
    left: 0;
  }

  .all {
    background-color: #F9FBFC;
    margin-top: 0.1rem;

  }

  .plateNumber {
    color: #ff6600;
    border: 1px solid #ff6600;
    border-radius: 5px;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    float: left;
    font-size: 0.26rem;
    background-color: #ffffff;
  }

  .time_a > div {
    float: left
  }

  .time_1 {
    margin-right: 0.1rem;
  }

  .state_1 {
    color: #555555
  }

  .state_1 > div {
    float: left
  }

  .icon_back {
    background: url(../../../static/images/icon_jiantou.png) no-repeat;
    background-size: 100%;
    width: 0.15rem;
    height: .28rem;
    margin-top: 0.06rem;
    margin-left: 0.15rem;
  }

  .border_2 {
    border-bottom: 1px solid #E2E4E6;
    margin-right: 0.3rem;
    margin-left: 0.84rem
  }

  .status_s {
    font-size: 0.26rem;
    color: #ff6600;
    background-color: #F9FBFC;
    border-bottom: 1px solid #EFF3F5;
    margin-left: 0.84rem;
    overflow: hidden;
    margin-right: 0.3rem;
    display: block;
    height: 0.74rem;
  }

  .color_1 {
    padding: 0 0.1rem
  }

  .color_3 {
    padding-right: 0.28rem
  }

  .color_2 {
    width: 0.24rem;
    height: 0.24rem;
    background: url(../../../static/images/icon_score.png) no-repeat;
    background-size: 100%;
    margin-top: 0.25rem;
    margin-right: 0.1rem;
    margin-left: 0.23rem;
    display: inline-block;
  }

  .color_4, .color_6 {
    font-size: 0.26rem
  }

  main .status {
    background-color: #f9fbfc;
    border-bottom: 5px solid #E2E4E6;
  }

  main .status .number, main .status .servicePaymentNumber {
    color: #555555;

  }

  main .status .icon_scroce_1 {
    background: url(../../../static/images/icon_money.png);
    background-size: 100%;
    width: 0.24rem;
    height: 0.24rem;
  }

  main .status .icon_scroce {
    background: url(../../../static/images/icon_score.png);
    background-size: 100%;
    width: 0.24rem;
    height: 0.24rem;
  }

  main .status .border {
    border-bottom-color: #E2E4E6;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Arial, "Microsoft Yahei";
  }

  main {
    margin-top: 0.9rem;
    overflow: hidden;
  }

  header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.8rem;
    font-size: 0.28rem;
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
    width: 0.3rem;
    height: 0.75rem;
    float: left;
    margin-left: 0.2rem;
    display: inline-block;
  }

  header .deText {
    width: 0.86rem;
    height: 0.8rem;
    line-height: 0.8rem;
    float: left;
    display: inline-block;
  }

  .detailName {
    text-align: center;
    margin-left: 0.73rem;
    width: 3.36rem;
    height: 0.8rem;
    line-height: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    float: left;
    display: inline-block;
  }

  header .close {
    position: absolute;
    top: 0rem;
    right: 0.32rem;
    width: 0.6rem;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  header .logo_1 {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }

  .visit {
    margin-right: 0.32rem;
  }

  .form_1, .form_1_1 {
    width: 6.1rem;
    height: 0.6rem;
    background-color: #ffffff;
    margin-left: 0.2rem;
    border-radius: 5px;
    position: relative;
    float: left;
    margin-top: 0.1rem;
  }

  header .search {
    width: 5.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-left: 0.7rem;
    font-size: 0.28rem;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #555555;
    position: absolute;
    left: 0.2rem;

  }

  header .deleteLog {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    left: 5.6rem;
    top: 0.1rem;
  }

  .title .back_show_1 {
    /*background-image: url("../../../images/garageInfo/icon_fanhui6@2x.png");*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 0.3rem;
    height: 0.8rem;
    color: #555;
    float: left;
    display: block;
    margin-left: 0.2rem;
  }

  .searchShop {
    /*background-image: url("../../../images/garageInfo/icon_shou_w@2x.png");*/
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: 100%;
    margin-right: 0.3rem;
    margin-left: 0.54rem;
    width: 0.42rem;
    height: 0.42rem;
    margin-top: 0.18rem;
    float: right;
  }

  header .back_1 {
    /*background-image: url("../../../images/garageInfo/icon_xiala2.png");*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    width: 0.3rem;
    height: 0.3rem;
    margin-left: 0.2rem;
    color: #555;
  }

  header .search_1 {
    width: 5.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin-left: 0.7rem;
    font-size: 0.28rem;
    border-radius: 5px;
    border: none;
    outline: none;
    position: absolute;
    left: 0.2rem;
    color: #555555;
  }

  header .position {
    margin-left: 0.3rem;
    color: #ffffff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /*   width: 3em;*/
    float: left;
    height: 0.8rem;
    line-height: 0.8rem;
  }

  header .back {
    /*background-image: url("../../../images/garageInfo/loin.png");*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: 65%;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.05rem;
    color: #ffffff;
    float: left;
    margin-top: 0.1rem;
  }

  .block_1 {
    width: 100%;
    height: 100%;
    position: relative;
  }

  header .search_index {
    width: 3.96rem;
    height: 0.6rem;
    line-height: 0.65rem;
    margin-left: 0.7rem;
    font-size: 0.28rem;
    text-align: left;
    border-radius: 5px;
    color: #999999;
  }

  .searchShow {
    width: 100%;
    height: 0.8rem;
    background-color: #ff6600;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #ffffff;
    z-index: 110;
    display: none;
  }

  header .special .form_1 {
    width: 4.6rem;
  }

  header .special .search {
    width: 3.8rem;
  }

  .icon_back_1 {
    background: url(../../../static/images/icon_chulizhong.png) no-repeat;
    background-size: 100%;
    width: 0.24rem;
    height: .24rem;
    margin-top: 0.26rem;
    margin-right: 0.15rem;
    float: right;
  }

  .sta {
    float: right;
    line-height: 0.74rem;

  }

  .status_s {
    text-decoration: none
  }

  .sta_1 {
    color: #ff6600
  }

  .total {
    font-size: 0.3rem;
    color: #555555;
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.2rem
  }

  .privilege {
    font-size: 0.24rem;
    color: #A5A5A5;
    text-decoration: line-through;
  }

  .doller {
    color: #FF6600
  }

  .smallPoint {
    color: #FF6600;
    font-size: 0.24rem;
  }

  .intruduce {
    color: #a5a5a5;
    font-size: 0.24rem;
    padding-top: 0.2rem
  }

  .intruduce > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    margin: 0 0.3rem
  }

  .illegalImfromation {
    color: #a5a5a5;
    font-size: 0.26rem;
    overflow: hidden;
    clear: both;
    border-top: 5px solid #E2E4E6;
  }

  .icon_time {
    width: 0.24rem;
    height: 0.24rem;
    background-size: 100%;
    float: left;
    margin-top: 0.24rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem
  }

  .time_text {
    float: left;
    /*padding-top: 0.23rem;*/
    padding-right: 0.4rem;
    line-height: 0.74rem;
  }

  .time_detail {
    float: left;
    padding-top: 0.23rem;
    padding-bottom: 0.23rem;
    width: 5rem;
  }

  .derail_table {
    width: 100%;
    overflow: hidden;
  }

  .border {
    border-bottom: 1px solid #EFF3F5;
    margin-right: 0.3rem;
    margin-left: 0.84rem;
  }

  .border_1 {
    border-bottom: 1px solid #E2E4E6;
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    margin-top: 0.2rem
  }

  .serviceTab {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    margin-left: 0.84rem;
    margin-right: 0.3rem;
  }

  .rental {
    height: .74rem;
    overflow: hidden;
    line-height: .74rem;
  }

  .icon_scroce {
    width: 0.24rem;
    height: 0.24rem;
    background: url(../../../static/images/icon_fen.png) no-repeat;
    background-size: 100%;
    margin-top: 0.25rem;
    float: left;
    margin-right: 0.1rem
  }

  .icon_scroce_1 {
    width: 0.24rem;
    height: 0.24rem;
    background: url(../../../static/images/icon03@2x.png) no-repeat;
    background-size: 100%;
    margin-top: 0.25rem;
    float: left;
    margin-right: 0.1rem
  }

  .number {
    float: left;
    font-size: 0.3rem;
    color: #ff6600;
    font-size: 0.30rem
  }

  .Payment {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .servicePaymentNumber {
    color: #ff6600;
    font-size: 0.30rem
  }

  .footer {
    font-size: 0.26rem;
    height: 0.9rem;
    padding-left: 0.84rem;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    bottom: 0;
    line-height: 0.9rem;
    color: #555555
  }

  .submit {
    height: 0.9rem;
    width: 2rem;
    background-color: #ff6600;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;

  }

  .footer span {
    color: #ff6600;
    font-size: 0.32rem
  }

  .color_1 {
    padding: 0 0.1rem
  }

  .color_3 {
    padding-right: 0.25rem
  }

  .color_2 {
    width: 0.24rem;
    height: 0.24rem;
    background: url(../../../static/images/icon_score.png) no-repeat;
    background-size: 100%;
    margin-top: 0.25rem;
    margin-right: 0.1rem;
    margin-left: 0.2rem;
    display: inline-block;
  }

  .color_4, .color_6 {
    font-size: 0.26rem
  }

</style>
