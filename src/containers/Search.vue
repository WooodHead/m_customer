<template>
    <div class="contain">
        <x-header :leftOptions="leftOptions">
            <slot name="default">
               <Search v-model="searchVal" ref="search" placeholder="请输入商户名、地点"  @clear="clear" @blur="blur"></Search>
               <span class="cancel-button" @click='back'>取消</span>
            </slot>
        </x-header>
        <div v-show="!triggerSearch">
              <ul class="list-tip space-between" @click="firstSearch">
                <li data-keyword="4s店">4s店</li>
                <li data-keyword="修理厂">修理厂</li>
                <li data-keyword="汽车美容">汽车美容</li>
                <li data-keyword="汽车维修">汽车维修</li>
              </ul>
              <dl class="search-history">
                  <dt>搜索历史</dt>
                  <dd v-for="item in historyList" @click="handleChooseHistory(item)">{{item}}</dd>
              </dl>          
        </div>
        <div v-show="triggerSearch">
            <Scroller v-show="garageList.length" :height='autoHeight' ref="scroller" lock-x scrollbar-y v-model="status" @on-pullup-loading="handleSearch" @on-scroll="handleScroll" :usePullup="true" >
                <div class="scroll-contain">
                <GarageItem class="bw" :class="{'no-mb':index==garageList.length-1}" v-for="(item,index) in garageList" type="noImg" :key="index" :itemData="item" :linkTo="'/mobile/html/garageInfo/detail.html?id='+item.idGarage" :fn="handleClick.bind(this,item.garageName,item.idGarage)"></GarageItem>
                <div class="load-tip" v-show="!hasMoreLoad">
                    <span>已加载完毕</span>
                </div>
                </div>
      
            </Scroller>
            <div v-show="showNoData" class="no-data v-center">
                 <img src="../../static/images/img/laugh.png" alt="" />
                 <p class="mt30">没有搜索结果</p>
            </div>
        </div>  
        <loading v-model="showLoading" ></loading>
    </div>
</template>
<script>
import Colin from '../assets/js/public';
import Common from '../assets/js/common';
import {scroll,link} from '../assets/js/mixin/index'
import GarageItem from '../components/GarageItem.vue'
import Search from '../components/formCell/Search.vue';
import Scroller from '../components/vux/src/components/scroller/index.vue'
export default{
    components:{Search,Scroller,GarageItem},
    mixins:[scroll,link],
    data(){
        return{
           leftOptions:{
               backText:''
           },
           searchVal:'',
           triggerSearch:false,
           historyList:[],
           postData:{
              keyword:'',
              page:1
           },
           status:{
              pullupStatus:'default',
           }, 
           garageList:[],
           showLoading:false,
           showNoData:false,
           searching:0,  //查询请求步骤 1获取token 2开始查询
           cancel:'',
           autoHeight:''
        }
    },
    mounted(){
        let self=this;
        this.autoHeight=Common.vh-Common.fs * 1.066667 + 'px';
        Common.resize(()=>{
            self.autoHeight=Common.vh-Common.fs * 1.066667 + 'px';
            self.$nextTick(()=>{
                setTimeout(()=>{
                   self.$refs.scroller.reset()
                },300)   //需要延时300ms，scroller才能重新适应高度
            })
        })
    },
    activated(){
       this.$refs.scroller.reset()
       this.historyList=Colin.getLS('searchHistory')||[];
    },
    methods:{
        firstSearch(e){
           var keyword=e.target.dataset.keyword;
           this.postData.keyword=keyword;
           this.postData.page=1;
           this.searchVal=keyword;
           
        },
        clear(){
           this.triggerSearch=false;
           this.searchVal=''
        },
        blur(){
           if(this.searchVal=='')this.triggerSearch=false;
        },
        back(){
          window.history.back()
        },
        handleSearch(){
            this.searching=1;
            Colin.getToken().then((res)=>{   //非常完美
               this.searching=2;
               this.$http({
                url:Common.domain+'/do/customer/search/searchGarageListByKeyword',
                method:'post',
                data:this.postData,
                headers:{'token':res.data.token},
                cancelToken:new this.$http.CancelToken((c)=>{
                   this.cancel=c;
                }) 
               }).then((res)=>{
                  var _res=res.data;
                  _res.garageList?this.garageList=this.garageList.concat(_res.garageList):'';
                  if(!_res.garageList||_res.garageList.length<10){
                     this.scrollEnd()
                  }else{
                     this.scrollNext()
                  }  //首页只加载两页
                  this.postData.page++;
                  this.showLoading?this.showLoading=false:'';
                  this.garageList.length?'':this.showNoData=true;
                  this.searching=0;
               }).catch((thrown)=>{
                   console.log('cancel')
               })
            })
        },
        handleScroll(position){
           this.$refs.search.$emit('scrolling',position)
        },
        handleClick(garageName,idGarage){
           let historyList=Colin.getLS('searchHistory')||[];
           for(name of historyList){
              if(name===garageName){
                return false  //如果名字重复，返回
              }
           }
           historyList.unshift(garageName)
           if(historyList.length>20)historyList.pop();
           Colin.setLS('searchHistory',historyList)
        },
        handleChooseHistory(garageName){
           this.searchVal=garageName
        }
    },
    watch:{
        searchVal(newVal){
            if(newVal){
                this.triggerSearch?'':this.triggerSearch=true;
                this.postData.keyword=newVal;
                this.scrollReset(this.garageList,this.postData)
                this.showNoData?this.showNoData=false:'';
                this.showLoading=true;
                if(this.searching==0){
                   this.handleSearch()
                }
                else if(this.searching==2){
                   this.cancel();
                   this.handleSearch()
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../static/css/variable.less";
.contain{
    position:absolute;
    top:1.066667rem;
    bottom:0;
    left:0;
    right:0;
    background:@c4;
    cursor:pointer;
}
.cancel-button{
  .fs32;
  width:1.6rem;
} 
.list-tip{
    padding:0.4rem;
    background:#fff;
    li{
       line-height: 0.6rem;
       width:1.946667rem;
       border:1px solid @c5;
       text-align: center;
       border-radius:0.266667rem;
       .c3;
    }
}
.search-history{
    line-height:0.9rem;
    text-indent:0.4rem;
    dt,dd{
        border-bottom:1px solid @c5;
        padding-right:0.3rem;
        .c3;
    }
    dd{
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
      background:#fff
    }
}

</style>