<template>
	<div class="sort-area">
	    <div class="sort-contain" v-scroll>
			<dl v-for="(item,index) in list" class="clearfix">
				<dt>{{item.title}}</dt>
				<dd v-for="(_item,_index) in item.list" class="mt10" :class="{'is-select':selectVal[item.type][_index]}" @click="choose(item.type,_index,_item.val)">
					<img v-if="item.img" :src="imgUrl+'insuranceCompany/'+(_index+1)+'.png'" alt=""/>
	        <span class="mt5">{{_item.text}}</span>
				</dd>
			</dl>
		</div>
		<div class="operate-area flex">
			<button class="reset" @click="reset">重置</button>
			<button class="certain" @click="certain">确认</button>
		</div>
	</div>
</template>
<script>
import Common from '../../assets/js/common.js';
	export default{
		props:{
           list:Array
		},
		data(){
			return{
             imgUrl:Common.imgUrl,
             selectVal:{
                filterShop:{},
                filterFacility:{},
                filterCompany:{},
                filterCooperate:{}              
             },
	           selectedVal:{
                filterShop:'',
                filterFacility:'',
                filterCompany:'',
                filterCooperate:''  
	           },

			}
		},
    mounted(){
        this.$on('reset',()=>{
           this.reset();
        })
    },
		methods:{
			choose(type,_index,val){
				this.selectVal[type][_index]? this.$set(this.selectVal[type],[_index],false):this.$set(this.selectVal[type],[_index],val+'');
			},
      reset(){
         for(var item in this.selectVal){
            for(var _item in this.selectVal[item]){
                this.selectVal[item][_item]=false;
            }
         }
         this.$set(this.selectVal.filterShop,0,false)
      },
      certain(type){
         var selectedVal={
                filterShop:'',
                filterFacility:'',
                filterCompany:'',
                filterCooperate:''         
         };
         for(var item in this.selectVal){
            for(var _item in this.selectVal[item]){
                if(this.selectVal[item][_item]){  //如果选中
                    selectedVal[item]+=selectedVal[item]?','+this.selectVal[item][_item]:this.selectVal[item][_item];
                }
            }
         }
         this.selectedVal===selectedVal?selectedVal='repeat'+Math.random():this.selectedVal=selectedVal;
         if(type!='reset')this.$emit('input',selectedVal);
      }
		}
	}
</script>
<style lang="less" scoped>
@import "../../../static/css/variable.less";
.sort-area{
  position:fixed;
  top:2.106667rem;
  bottom:0;
  left:0;
  right:0;
  border-top:1px solid #e2e4e6; 
  background:#fff;
  .sort-contain{
  	  position:absolute;
  	  top:0;
  	  left:0;
  	  right:0;
  	  bottom:1.333333rem;
  	  padding:0 0.266667rem;
  	  overflow-y: scroll;
      -webkit-overflow-scrolling:touch;
  }
  dl{
  	width:100%;
  	margin-left:-1.5%;
  	padding:0.266667rem 0;
  	background:#fff;
  	border-bottom:1px solid @c5;
  	dt{
      margin-left:3%;
  	}
  	dd{
  	   float:left;
       width:22%;
       margin-left:3%;     
       text-align: center;
       span{
       	   display: inline-block;;
	       line-height: 0.6rem;
	       width:100%;
	       border:1px solid @c5;
	       text-align: center;
	       border-radius:0.266667rem;
	       .borderbox;
       .c3;
       }
  	}
  }
  .is-select span{
      border-color:@c1;
  }
}	
.operate-area{
   position:fixed;
   bottom:0;
   height:1.333333rem;
   width:100%;
   button{
   	  border:none;
      width:50%;
      .fs28;
   }
   .reset{
   	  background:#fff;
   	  border-top:1px solid @c5;
   	  .borderbox;
   }
   .certain{
   	color:#fff;
   	background:@c1;
   }
}
</style>