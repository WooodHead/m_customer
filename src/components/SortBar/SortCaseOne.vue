<template>
<div class="sort-area flex">
    <ul class="list list-level-one" @click="handleSelectOne" v-scroll><li v-for="(item,index) in fisrtLevelList" :data-firstCode="index" :class="{'active':index==selectedOne}">{{item.text}}</li></ul>
    <ul class="list list-level-two" v-scroll><li v-for="(item,index) in secondLevelList" @click="handleSelectTwo(item.text,item.val)"  :class="{'active':JSON.stringify(item.val)==JSON.stringify(selectedTwo)}">{{item.text}}</li></ul>
    <slot></slot>
</div>
</template>
<script>
import {
    mapGetters,
    mapMutations
} from 'vuex';
export default {
  props:{
    value:[String,Number,Object],
    fisrtLevelList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    secondLevelList:{
      type:Array,
      default:()=>{
        return []
      }
    },
    userInfo:[Object]    
  },
  data(){
    return{
        selectedOne:0,
        selectedTwo:'',
    }
  },
  mounted(){

  },
  created(){

  },
  methods:{
    ...mapMutations(['updateText']),
    handleSelectOne(e){
      if(e.target.tagName=='LI'){
        var firstCode=e.target.dataset.firstcode;
        this.selectedOne=firstCode;
        this.$emit('first-change',firstCode)
        
       }
    },
    handleSelectTwo(text,val){
          var secondCode=val;
           JSON.stringify(this.selectedTwo)==JSON.stringify(secondCode)?secondCode='repeat'+Math.random():secondCode===''?secondCode='empty'+Math.random():this.selectedTwo=secondCode;  //此处做了些SB判断，早知道写两个组件了
           
           this.$emit('input',secondCode)
           this.updateText('one',text)
           
    }
  },
  watch:{
     fisrtLevelList(newVal){
        if(Array.isArray(newVal)){
          if(this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
             this.selectedTwo=this.secondLevelList.length&&this.secondLevelList[0].val||'';
          }else{
             this.selectedTwo=this.secondLevelList.length&&this.secondLevelList[this.secondLevelList.length-1].val||'';
          }    
          this.selectedOne=0;     
        }

     },
     secondLevelList(newVal){
        //this.selectedTwo=this.secondLevelList.length&&this.secondLevelList[0].val||'';

     },
     value(newVal){
        if(Object.prototype.toString.call(newVal)==='[object Object]'){
          this.selectedTwo=newVal;
        }        
     }
  }

    

}    
</script>
<style lang="less" scoped>
@import '../../../static/css/variable.less';
.sort-area{
  position:fixed;
  top:2.106667rem;
  bottom:0;
  left:0;
  right:0;
  border-top:1px solid #e2e4e6; 
  background:rgba(0,0,0,0.7)
}
.list{
  flex:1;
  height:7.466667rem;
  overflow-y:scroll;
  -webkit-overflow-scrolling:touch;
  .c3;
  li{
     line-height: 1.066667rem;
     font-size:12px;
     padding:0 0.4rem;
  }
  .active{
    .c1;
    background:#fff;

  }
}
.list-level-one{
  background:@c4;
}
.list-level-two{
  background:#fff;
  li{
      margin-left:0.4rem;
      padding-left:0;
      .borderbox;
      border-bottom:1px solid @c5;
  }
}
</style>
