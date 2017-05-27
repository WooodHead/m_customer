<template>
  <div class="vux-header h-center" :class="{'_vux-header':leftType=='2','anydoor':ua=='anydoor'}">
    <div class="vux-header-left middle">
      <a v-if="leftType=='2'" class="vux-header-back"  @click.preventDefault v-show="leftOptions.showBack" :transition="transition" @click="onClickBack">{{leftOptions.backText | cityName}}</a>
      <div class="left-arrow"  @click="onClickBack" v-show="leftOptions.showBack" :transition="transition"></div>
      <a v-if="leftType=='1'" class="vux-header-back"  @click.preventDefault v-show="leftOptions.showBack" :transition="transition" @click="onClickBack">{{leftOptions.backText}}</a>

      <slot name="left"></slot>
    </div>
    <div class="_vux-header-title center"><slot name="title"></slot></div>
    <h1 class="vux-header-title h-center" @click="$emit('on-click-title')"><span v-show="title" :transition="transition">{{title}}</span><slot></slot></h1>
    <div class="vux-header-right middle">
      <a class="vux-header-more" @click.preventDefault @click="$emit('on-click-more')" v-if="rightOptions.showMore"></a>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import Common from '../../../../../assets/js/common.js';
export default {
  props: {
    leftOptions: {
      type: Object,
      default () {
        return {
          showBack: true,
          backText: 'Back',
          preventGoBack: false
        }
      }
    },
    leftType:{
       type:String,
       default:'1'
    },
    toLink:{
      type:String,
      default:''
    },
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default () {
        return {
          showMore: false
        }
      }
    }
  },
  data(){
     return{
        ua:Common.ua
     }
  },
  mounted(){

  },
  filters:{
     cityName(val){
        return val!=''&&val!=null&&val!=undefined ? val.replace(/(市|市市辖区)$/g,''):''
     }
  },
  methods: {
    onClickBack () {
      if (this.leftOptions.preventGoBack && this.toLink) {
        window.location.href=this.toLink;
        //this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vux-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: #ff6600;
  color:#fff;
  z-index:999;
}
.vux-header{position:fixed;top:0;left:0;width:100%;z-index:2}
.vux-header .vux-header-title,.vux-header h1 {
  line-height: 1.066667rem;
  text-align: center;
  height: 1.066667rem;
  font-size: 0.48rem;
  font-weight: 400;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vux-header .vux-header-title > span {
  display: inline-block;
}
.vux-header .vux-header-left{
  font-size: 0.373333rem;
  line-height: 0.56rem;
  padding-left:0.4rem;
  font-size:0;
}
.vux-header .vux-header-left a{
  display: block;
  margin-right:0.2em;
  max-width: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  float:none;
  font-size:0.373333rem;
}
.vux-header .vux-header-right {
  position: absolute;
  z-index:9;
  top: 0;
  height:100%;
  display: block;
  font-size: 0.373333rem;
  line-height: 0.56rem;
  span{
    display:inline-block;
    vertical-align: middle;
  }
}
.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  float: left;
}
.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active {
  opacity: .5
}
.vux-header .vux-header-left {
  top:0;
  left:0;
  height:1.066667rem;
}
.vux-header .vux-header-left .vux-header-back {
  display: inline-block;
  line-height: 1.2;
  vertical-align: top;
  float:none;
  margin-top:0.33rem;
}
.vux-header .vux-header-left .left-arrow {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  &:before {
    content: "";
    display:block;
    position:absolute;
    top:50%;
    left:50%;
    width: 12px;
    height: 12px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform-origin:center center;
    transform:translate(-50%,-50%) rotate(315deg);
 }
}
.vux-header .vux-header-right {
  right: 0
}
.vux-header .vux-header-right a,.vux-header .vux-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.vux-header .vux-header-right .vux-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.vux-header-fade-in-right-enter {
  animation: fadeinR .5s;
}
.vux-header-fade-in-left-enter {
  animation: fadeinL .5s;
}
._vux-header .vux-header-left .left-arrow{
    margin-right:0.4rem;

}

._vux-header .vux-header-left .left-arrow:before{
    width: 10px;
    height: 10px;
    margin-top:-4px;
    transform:translate(-50%,-50%) rotate(225deg);
}
._vux-header .vux-header-left a{
  min-width:0.56rem;
}
.header-title{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  font-size:0.426667rem;
  z-index:-1;
}
@keyframes fadeinR{
  0%{opacity:0;transform:translateX(80px);}
  100%{opacity:1;transform:translateX(0);}
}
@keyframes fadeinL{
  0%{opacity:0;transform:translateX(-80px);}
  100%{opacity:1;transform:translateX(0);}
}

.anydoor.vux-header{
   background-color:#fff;
   color:#000;
   border-width:1px;
   border-style:none none solid none;
   border-color:rgba(238,238,238,1);
   z-index:993;
   .vux-header-left .left-arrow:before{
      border-color:#000;
   }
   .vux-header-right{
      margin-right:1.2rem;
   }
}
</style>
