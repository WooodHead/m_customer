<template>
    <div class="search flex" :class="{'anydoor':ua==='anydoor'}">
        <input type="text" class="search_1 search_selectItem" ref="input" v-model="inputVal" :placeholder="placeholder" @focus="handlefoucs" @blur="handleblur">
        <span v-show="hasInput" class="icon-delete" @click="clearVal" ref='close'></span>
    </div>
</template>
<script>
import Common from '../../assets/js/common.js';
export default{
    data(){
        return{
              ua:Common.ua,
              hasInput:false,
              inputVal:'',
              top:0,
              isFocus:false
        }
    },
    props:{
      value:[String,Number],
      placeholder:{
         type:[String],
         default:'请输入城市名'
      }
    },
    created(){
        this.inputVal=this.value;
        this.$on('scrolling',(position)=>{
           !this.top?this.top=position.top:0;
           if(Math.abs((Math.abs(position.top)-Math.abs(this.top)))>10 && this.isFocus){
               this.$refs.input.blur();
               this.top=0;
           }
        })
    },
    methods:{
        clearVal(){
           this.$refs.input.value='';
           this.inputVal=''
           this.$emit('clear',true)
        },
        handlefoucs(){
          this.isFocus=true;
          this.$emit('focus',true)
        },
        handleblur(){
          this.isFocus=false;  
          this.$emit('blur',true)
        }
    },
    watch:{
        value(newVal){
            this.inputVal=this.value;
        },
        inputVal(newVal){
          if(newVal!=''){
              this.hasInput=true;
          }
          this.$emit('input',newVal)
        },

    }
}
</script>
<style lang='less'>
@import '../../../static/css/variable.less';

.search{
    width:8.0rem;
    font-size:0;
    height:0.8rem;
    .borderbox;
    position:relative;
    input{
        height:1.6rem;
        width:16rem;
        border:none;
        font-size:0.7rem;
        vertical-align:middle;
        padding-left:1.8rem;
        border-radius:10px;
        padding-right:1.2rem;
        line-height: normal;
        position:absolute;
        top:0;
        left:0;
        transform: scale(0.5);
        transform-origin: top left;
        .borderbox;
    }
    .icon-delete{
        position:absolute;
        top:0;
        right:0.066667rem;
        width:0.533333rem;
        height:100%;
        background:url('../../../static/images/icon/icon-clear-input.png') center center no-repeat;
        background-size:100% auto;
        z-index:1;
    }
}
.search::before{
    content:'';
    display:block;
    background:url('../../../static/images/icon/icon-search.png') center center no-repeat;
    width:0.426667rem;
    height:0.426667rem;
    background-size:cover;
    position:absolute;
    top:0.186667rem;
    left:0.4rem;
    z-index:1;
}
.search.anydoor{
  width:7rem;
  input{
    width:14rem;
  }
}
.anydoor .search_selectItem{
    border:1px solid #eee;
}
</style>