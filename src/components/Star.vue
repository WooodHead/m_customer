<template>
    <ul class="star clearfix">
        
        <li id="star1" class="allStar mr5" v-for="n in allStar"></li>
        <li id="star4" class="halfStar mr5" v-for="n in halfStar"></li>
        <li id="star5" class="blackStar mr5" v-for="n in balckStar"></li>
    </ul>
</template>
<script>
export default {
  props:['level'],
  data(){
    return{
  
    }
  },
  mounted(){

  },
  computed:{
    allStar(){
        return Math.floor(this.level)
    },
    halfStar(){
        return (this.level+'').indexOf('.')==-1?false:1;
    },
    balckStar(){
        return this.level<5?Math.floor(5-this.level):0;
    }
  }
    

}    
</script>
<style lang="less" scoped>

.allStar {
    background: url("../../static/images/icon/full-star.png") no-repeat;

}
.blackStar {
    background: url("../../static/images/icon/empty-star.png") no-repeat;

}
.halfStar {
    background: url("../../static/images/icon/half-star.png") no-repeat;
}
.star li{
    width: 0.3333rem;
    height: 0.3333rem;
    float: left;
    background-size:cover;
}
</style>
