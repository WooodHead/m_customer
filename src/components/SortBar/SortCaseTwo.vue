<template>
<div class="sort-area flex">
    <ul class="list list-level-one" @click="handleSelectOne" v-scroll><li v-for="(item,index) in fisrtLevelList" :data-firstCode="index" :class="{'active':index==selectedOne}">{{item.text}}</li></ul>
    <ul class="list list-level-two" v-scroll><li v-for="item in secondLevelList" @click="handleSelectTwo(item.text,item.val)" :class="{'active':JSON.stringify(item.val)==JSON.stringify(selectedTwo)}">{{item.text}}</li></ul>

    <slot></slot>
</div>
</template>
<script>
export default {
  props:{
    value:[String,Object],
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
    }    
  },
  data(){
    return{
        selectedOne:0,
        selectedTwo:{}
    }
  },
  mounted(){


     this.$nextTick(()=>{
        this.selectedTwo=this.secondLevelList.length&&this.secondLevelList[0].val||'';
     })      
    this.$on('reset',()=>{
         if(this.secondLevelList.length){
              this.selectedTwo={};
              this.selectedOne='';
         }      
     })    
     this.$on('changeSelected',(data)=>{
         if(Object.prototype.toString.call(data)==='[object Object]'){
          this.$nextTick(()=>{
             this.selectedTwo=data;
             this.selectedOne=Number(data.garageServiceCode)
          })
          
         }
     })

  },
  created(){

              
  },
  methods:{
    handleSelectOne(e){
      if(e.target.tagName=='LI'){
        var firstCode=e.target.dataset.firstcode;
        this.selectedOne=firstCode;
        this.$emit('first-change',firstCode)
       }
    },
    handleSelectTwo(tex,val){
           var secondCode=val;

           if(secondCode.trademarkId=="chooseServicers"){
               secondCode='chooseServicers'+Math.random();
           }else if(JSON.stringify(this.selectedTwo)==JSON.stringify(secondCode)){
               secondCode='repeat'+Math.random();
           }else{             
               this.selectedTwo=secondCode;  
           }
           this.$emit('input',secondCode);
           let text=['全部','维修','保养','美容','洗车'];
           this.$emit('on-change',text[this.selectedOne])

      }
  },
  watch:{
     value(newVal){
        if(Object.prototype.toString.call(newVal)==='[object Object]'){
           this.$nextTick(()=>{
                  this.selectedTwo=newVal
           })
        }
     },
     fisrtLevelList(newVal){      

  

     },
     secondLevelList(newVal){
    

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
