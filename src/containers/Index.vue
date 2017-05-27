<style lang="less" scoped>
   .vux-header .vux-header-title, .vux-header h1{
       display:flex;
       align-items:center;
       justify-content:center;
   }
</style>
<template>
    <div>
        <keep-alive v-if="!$route.meta.notKeepAlive">
        <router-view ref="child"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.notKeepAlive"></router-view>
        <BottomTab></BottomTab>
    </div>
</template>
<script>
import BottomTab from "../components/BottomTab.vue"
import Colin from '../assets/js/public.js'
import Common from '../assets/js/common.js'
import {mapMutations} from 'vuex';
export default {
   components:{BottomTab},
   data(){
      return{

      }
   },
   mounted(){
        if (Common.ua == "anydoor") {
           Colin.scriptLazyLoad("/mobile/js/garageInfo/libs/native_RYM.js").then(()=>{
               Colin.getCurrentSessionInfo(this).then((res)=>{
                   this.$refs.child.$emit('getCurrentSessionInfo',res)
               })           
           })
        }else{
               Colin.getCurrentSessionInfo(this).then((res)=>{
                   this.$refs.child.$emit('getCurrentSessionInfo',res)
               })                    
        }

   },
   methods:{
    ...mapMutations(['updateUserInfo']),

   },

}    
</script>

