<template>
   <div class="garageitem vux-1px-b fs32" @click="handleLink(linkTo,fn)" :style="{'paddingBottom':carHoderdShow?'0':'0.3rem'}">
      <div class="rel" :class="{'no-img':type==='noImg'}">
          <div class="img" v-if="type!=='noImg'" v-lazy:background-image="typeof itemData.photoThumbUrl==='string'?itemData.photoThumbUrl:'https://test-pamap-gr.pingan.com.cn:40956/mobile/images/garageInfo/icon_shanhhutouxiang@2x.jpg'"></div>
          <div class="detail ">
              <p class="text h-center">
                <span class="label" v-if="itemData.qualityPromise"></span>
                <span>{{itemData.garageName}}</span>
              </p>
              <p class="comments center">
                <Star :level="itemData.scoreAverage>5?itemData.scoreAverage/2:itemData.scoreAverage"></Star> 
                <span class="num ml10 h-center"><i></i>{{itemData.countTotal}}</span>
              </p>
              <p class="space-between">
                    <span class="dress">{{itemData.countyName}}<span v-if="itemData.countyName!=undefined">/</span>{{itemData.garageTypeName}}</span>
                    <span class="distance" v-if="Number(itemData.distanceMeter)!==NaN &&itemData.distanceMeter!=null">{{itemData.distanceMeter | distance}}</span>
              </p>
          </div>
          <p class="tip vux-1px-t h-center" v-if="carHoderdShow"><i></i><span>{{carHoderdShow}}</span></p>
          <!-- <div class="speical-state"><img src="../assets/images/active.png" alt="" /></div> -->
      </div>
<!--       <div class="active h-center">
          <img src="../assets/images/icon_youhuiquan.png" alt="" />
          <p class="active-content h-center">!</p>
      </div> -->
  </div>
</template>
<script>
import Star from './Star.vue';
import {filter_distance} from '../assets/js/filter.js';
import {link} from '../assets/js/mixin/index.js';
export default {
  mixins:[link],
  props:['itemData','type','linkTo','fn'],
  components:{Star},
  data(){
    return{
      carHoderdShow:''
    }
  },
  computed:{

  },
  mounted(){
    this.tipText()
  },
  methods:{
      tipText(){
        var carHoderdShow='';
        var list=this.itemData&&this.itemData.adminAppointActivityList || [];
        var reg=/['折扣'|'代金券'|'免费'|'常设活动之']/g;
        for(var i=0,len=list.length-1;i<len;i++){
            switch(list[i].activityType){
                case '0':
                carHoderdShow += ' ' + list[i].activityName.replace(reg,'') + list[i].discountMax / 10 + '折';
                break;
                case '1':
                carHoderdShow += ' 满' + list[i].priceMax + '元减' + list[i].discountMax + '元';
                break;
                case '2':
                carHoderdShow += ' 免费' + list[i].activityName.replace(reg,'');
                break;
                case '3':
                carHoderdShow += ' ' + list[i].activityName.replace(reg,'') + '代金券' + list[i].discountMax + '元';
                break;
                             
            } 
       }
       this.carHoderdShow=carHoderdShow;
     }
  },
  filters:{
    distance:filter_distance
  },
  watch:{
    itemData(newVal){
        if(newVal!=''){
            this.tipText()
        }
    }
  }
}    
</script>
<style lang="less">
@import "../../static/css/variable.less";
.garageitem{
  padding-top:0.3rem;
  margin-top:0.1rem;
  line-height: normal;
  .img{
    width: 2.586rem;
    height: 2.426rem;
    margin-left:0.3rem;
    background-size:cover;
  }
  .no-img .detail{
     position:static;
     padding-left:0.3rem;
     left:0;
  }
  .detail{
    position:absolute;
    height:2.426rem;
    top:0;
    left:3.286rem;
    right:0;
    justify-content:space-between;
    padding-bottom:0.2rem;
    padding-top:0.2rem;
    box-sizing: border-box;
    p{
        box-sizing: border-box;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width:100%;
        padding-right:0.3rem;
    }
  }
  .text{
    .fs32;
    .label{
      display: inline-block;
      width: 0.45rem;
      height: 0.4rem;
      margin-right:3px;
      background-image: url(../../static/images/icon/icon-quality.png);
      background-position: center center;
      background-size:100% 100%;
    }
    span{
      display: inline-block;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    span:last-child{
      flex:1;
    }
  }
  .active{
      padding-bottom:0.2rem;
      img{
          width: 1.41rem;
          height: 0.613rem;
          margin-left: 0.4rem;
          margin-right: 0.267rem;

      }
  }
  .active-content{
      line-height: 1rem;
  }
  .num{
      color:#ffa542;
      font-size:0.32rem;
      i{
        display: inline-block;
        margin-right:3px;
        width:0.32rem;
        height:0.32rem;
        background:url(../../static/images/icon/icon-comment.png) center center no-repeat;
        background-size:contain;
      }
  }
  .dress{
      color:#9d9d9d;
      font-size:0.32rem;
  }
  .tip{
      margin-left:3.3rem;

      padding-right:0.3rem;
      line-height: 0.8rem;
      color:@c3;
      font-size:0.32rem;
      i{
        display: inline-block;
        margin-right:3px;
        width:0.35rem;
        height:0.35rem;
        background:url(../../static/images/icon/icon-hui.png) center center no-repeat;
        background-size:contain;     
      }
      span{
        display: inline-block;
        flex:1;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
  }
  .comments{
      justify-content:flex-start;
      font-size:0.24rem;
      padding:0.25rem 0.3rem 0.25rem 0;
  }
  .speical-state{flex:1;width:0.96rem;position:absolute;top:-0.4rem;right:1rem;}
  .distance{
    font-size:0.32rem;
    color:#9d9d9d;
  }
}


</style>
