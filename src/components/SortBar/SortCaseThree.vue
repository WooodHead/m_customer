<template>
<div class="sort-area">
    <ul class="list" @click="handleSelect" v-scroll><li v-for="(item,index) in list" :data-id="item.val" :data-text="item.text" :class="{'active':item.val==selectedVal}">{{item.text}}</li></ul>
</div>    

</template>
<script>
import {
    mapGetters,
    mapMutations
} from 'vuex';
    export default{
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
               selectedVal:''
            }
        },
        mounted(){
           this.$on('reset',()=>{
               this.selectedVal=this.list[0].val
           })
        },
        created(){
          this.selectedVal=this.list[0].val
        },
        methods:{
            ...mapMutations(['updateText']),
            handleSelect(e){
                var id=e.target.dataset.id||'';
                var text=e.target.dataset.text || '';
                this.selectedVal==id?id='repeat'+Math.random():this.selectedVal=id;
                this.$emit('input',id);
                this.updateText('three',text)           
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
  background:rgba(0,0,0,0.7);
}
.list{
  flex:1;
  overflow-y:scroll;
  -webkit-overflow-scrolling:touch;
  background:#fff;
  .c3;
  li{
     line-height: 1.066667rem;
     font-size:12px;
     padding:0 0.4rem;
     border-bottom: 1px solid @c5;
     .borderbox;
  }
  .active{
    .c1;
  }
}   
</style>