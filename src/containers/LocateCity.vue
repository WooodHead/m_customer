<template>
<div class="wrapper" >
    <x-header :leftOptions='leftOptions'>
            <slot name="default">
               <Search v-model="searchVal" @focus='triggerSearch=!triggerSearch' @blur='blur'></Search>
            </slot>
    </x-header>
    <ul class="firstLetter cl" v-if="!triggerSearch"  v-scrollTo>
        <li v-for='item in locateSelectList1' :data-id="item.id">{{item.text}}</li>
        <li v-for="item in locateSelectList2" :data-id="item">{{item}}</li>
    </ul>
    <div class="searchResult" v-if="triggerSearch">
         <ul class="searchList" @click="handleSelectedCity($event)">
             <li v-for="item in searchedList" :data-id="item[2]">{{item[1]}}</li>
         </ul>
    </div>
    <div class="scroll-contain" v-scroll v-else>
        <div  class="localCity_div cl" id="fixed-return">
             <p class="localCity_p">当前城市：<span id="localCity">{{cityName}}</span></p>
        </div>
        <div class="recentVisited_div"  id="fixed-recentVisited" v-if="recentList.length">
             <p class="title">最近访问城市</p>
             <ul class="recentVisited clearfix" @click="handleSelectedCity($event)">
                 <li v-for="item in recentList"><span :data-id="item.cityCode">{{item.cityName}}</span></li>
             </ul>
        </div>
        <div class="hotCity_div"  id="fixed-hotCity">
            <div  class="cl title" ><p>热门城市</p></div>
            <ul class="hotCity clearfix" @click="handleSelectedCity($event)">
                <li class="hotCity_firstRow"><span data-id="310100">上海</span></li>
                <li class="hotCity_firstRow"><span  data-id="110100">北京</span></li>
                <li class="hotCity_firstRow"><span  data-id="440100">广州</span></li>
                <li class="hotCity_firstRow"><span data-id="440300">深圳</span></li>
                <li><span data-id="510100">成都</span></li>
                <li><span data-id="500100">重庆</span></li>
                <li><span data-id="120100">天津</span></li>
                <li><span data-id="330100">杭州</span></li>
                <li class="hotCity_LastRow"><span data-id="320100">南京</span></li>
                <li class="hotCity_LastRow"><span data-id="320500">苏州</span></li>
                <li class="hotCity_LastRow"><span data-id="420100">武汉</span></li>
                <li class="hotCity_LastRow"><span data-id="610100">西安</span></li>
            </ul>
        </div>
        <div class="allCityList_div">
            <dl v-for="item in allCityList" @click="handleSelectedCity($event)">
                <dt class="cl title" :id="'fixed-'+item.pid">{{item.pid}}</dt>
                <dd v-for="_item in item.list" :data-id="_item[2]">
                    {{_item[1]}}
                </dd>
            </dl>
        </div>

    <div class="selectYesOrNo" style="display:none">
        <div class="selectbor">
            <div class="selectDisc">当前城市为:</div>
            <div class="locCityName"></div>
            <div class="float">是否切换</div>
            <div id="no">取消</div><div id="yes">确定</div>
        </div>
    </div>
    </div>
</div>    
</template>
<script>
import Search from '../components/formCell/Search.vue';
import Colin from '../assets/js/public';
import Common from '../assets/js/common';
import {mapGetters,mapMutations} from 'vuex';
export default{
   components:{Search},
   data(){
        return{
           leftOptions:{
               showBack:true,
               backText:'',
           },
           cityCode:'',
           cityName:'',
           locateSelectList1:[{id:'return',text:'定位'},{id:'recentVisited',text:'最近'},{id:'hotCity',text:'热门'}],
           locateSelectList2:[],
           searchVal:'',
           allCityList:[],
           searchedList:[],
           recentList:[],
           triggerSearch:false,
        }
   },
   mounted(){

   },
   activated(){
      this.cityName=this.userInfo.cityName;
      let recentList=Colin.getLS('recentVisitedCityArr')||[];
      let _recentList=[];
      for(var i=0;i<recentList.length;){
          if(typeof recentList[i]!='object'){
            _recentList.push({cityCode:recentList[i],cityName:recentList[i+1]})
            i=i+2;
          }else{
            recentList.splice(i,1);
            i++;
          }
      }
      Colin.setLS('recentVisitedCityArr',recentList)
      this.recentList=_recentList;
   },
   computed:{
      ...mapGetters(['userInfo'])
   },
   created(){
    Colin.scriptLazyLoad(Common.domain+'/web/js/search/cityListInfo.js').then((res)=>{
       this.queryList()
    })
   },
   directives:{
      scrollTo:{
        bind(el,binding,vnode){
            var fs=document.getElementsByTagName('html')[0].style.fontSize.replace('px','');
            el.addEventListener('click', function(e){
                 var id='fixed-'+e.target.dataset.id,
                 dom=document.getElementById(id),
                 scrollTop=dom.offsetTop,
                 container=document.getElementsByClassName('scroll-contain')[0];
           
                 vnode.context.$nextTick(()=>{
                    container.scrollTop=scrollTop;
                 })
                 
            }, false)
        }
      }
   },
   methods:{
      ...mapMutations(['updateUserInfo']),
      handleSelectedCity(e){
        var cityCode=e.target.dataset.id||'',
            cityName=e.target.innerText,
            recentVisitedCityArr = [];
            if(!cityCode){
                return false;
            }
            if (recentVisitedCityArr = Colin.getLS('recentVisitedCityArr') ||[]) {
                        var arrLen = recentVisitedCityArr.length;
                        var index=hasCode();
                        if (index==='none') {
                            if (arrLen < 8) {
                                recentVisitedCityArr.push(cityCode)
                                recentVisitedCityArr.push(cityName)
                            } else {
                                recentVisitedCityArr.splice(index,2);
                                recentVisitedCityArr.push(cityCode)
                                recentVisitedCityArr.push(cityName)
                            }
                        } else {
                                recentVisitedCityArr.splice(index,2);
                                recentVisitedCityArr.push(cityCode)
                                recentVisitedCityArr.push(cityName)
                        }
                    } else {

                                recentVisitedCityArr.push(cityCode)
                                recentVisitedCityArr.push(cityName)
                    }  
                    Colin.setLS("recentVisitedCityArr",recentVisitedCityArr);  
                    this.$http.post(Common.domain+'/do/customer/personalInfo/saveSelectCityCode',{selectCityCode:cityCode}).then(res=>{
                            this.cityCode=cityCode;
                            this.cityName=cityName;
                            this.updateUserInfo({selectCityCode:cityCode,cityName:cityName})                       
                            window.history.back();                       
                    })
            function hasCode(){
                for(var i=0,len=recentVisitedCityArr.length;i<len;i++){
                    if(recentVisitedCityArr[i]==cityCode){
                        return i;
                        break;
                    }
                }
                return 'none';
            }

      },
      queryList(){
            var allCityList={},_allCityList=[],
                regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w+)\|(\w)\w*$/;
            for (var i = 0,len=arr.length; i < len; i++) {                
                var match = regEx.exec(arr[i]);
                var letter = match[4].toUpperCase();
                if(allCityList[letter]){
                    allCityList[letter].push(match)
                }else{
                    allCityList[letter]=[];
                    allCityList[letter].push(match);
                }
            }
            this.locateSelectList2=Object.keys(allCityList).sort().map(key=>{
                _allCityList.push({pid:key,list:allCityList[key]})
                return key;
            });
            this.allCityList=_allCityList;
       },
       handleSearch(val){
          var text=val.toLowerCase();
          var searchedList=[];
            if (text != "") {
                var reg = new RegExp("^" + text+ "|\\\|" + text);
                var regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w+)\|(\w)\w*$/;
                for (var i = 0; i < arr.length; i++) {
                    if (reg.test(arr[i])) {
                        var match = regEx.exec(arr[i]);
                        searchedList.push(match)
                    }
                }
                if (!searchedList.length) {
                  console.log(12)
                    searchedList.push([null,'没有搜索到对应的城市',null])
                }
                this.searchedList=searchedList;
            } 
       },
       blur(){
        console.log(1)
           this.triggerSearch=!this.triggerSearch;
           this.searchVal='';
       }
   },
   watch:{
    searchVal(newVal){
       this.handleSearch(newVal);
    }
   }
}   
</script>
<style lang="less" scoped>
@import "../../static/css/variable.less";
.wrapper{
background:#fff;
}
.scroll-contain{
    position: absolute;
    top:1.066667rem;
    bottom:0;
    width:100%;
    height:100%;
    overflow-y:scroll;
    -webkit-overflow-scrolling:touch;
}
.localCity_div{
    width:100%;
    height: 1.07rem;
}
.localCity_p {
    font-size: 0.37rem;
    padding-top:0.1rem;
    padding-left: 0.45rem;
    color: #555555;
    height: 100%;
    line-height: 0.9333rem;
}
#localCity{
    display: inline-block;
}
.recentVisited_div{
    width:100%;
}
.title {
    height: 1.12rem;
    line-height: 0.96rem;
    border-top: 1px solid #e2e4e6;
    padding-top:0.133333rem;
    font-size: 0.32rem;
    color: #555555;
    background-color: #eff3f5;

}
.hotCity_div .title,.recentVisited_div .title{
    padding-left: 0.45rem;
}
.allCityList_div .title{
    padding-left: 0.45rem;
}
.recentVisited{
    width:100%;
    padding-bottom:0.4rem;
}
.hotCity > li, .recentVisited > li {
    height:0.666667rem;
    width: 1.94666rem;
    float: left;
    margin-left:0.4rem;
    font-size: 0.32rem;
    color: #555555;
    text-align:center;
    border:2px solid #eff3f5;
    border-radius: 23px;
    display:flex;
    align-items:center;
    justify-items:center;
}

.recentVisited > li{
    margin-top:0.4rem;
    width: 1.94666rem;
    padding: 0 2px;
    box-sizing: border-box;
}
.hotCity_firstRow{
    margin-top:0.4rem;
    margin-bottom:0.2667rem;
}
.hotCity_LastRow{
    margin-top:0.2667rem;
    margin-bottom:0.4rem;
}

.searchList li,.allCityList_div dd{
    height: 1.05rem;
    line-height: 1.05rem;
    border-bottom: 1px solid #e2e4e6;
    font-size: 0.32rem;
    color: #555555;
    margin:0rem 0.4rem 0rem 0.4rem;
}
.hotCity span,.searchList span,.recentVisited span{
    display:inline-block;
    vertical-align: middle;
    width:100%;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.allCityList_div dd:last-child {
    border: none;
}
.firstLetter {
    font-size: 0.32rem;
    position: fixed;
    top: 1.333rem;
    right: 0rem;
    bottom:0.4rem;
    width: 0.8rem;
    text-align: center;
    z-index: 111;
}
.firstLetter li{
    width: 0.8rem;
    height: 4%;
    line-height: 0.4rem;
    text-align: center;
    color: #ff6600;
}


.firstLetter_bg{
    background-color: #e5e5e5;
}
.selectYesOrNo{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.3);
    z-index:9999;
    text-align: center;
    font-size:0.4rem;
}
.selectbor{
    width: 5.1rem;
    font-size: 0.32rem;
    overflow:hidden;
    background-color:#ffffff;
    margin:auto;
    margin-top:4rem;
    color:#555555;
    border-radius: 10px;
}
.selectDisc{
    margin-top:0.6rem;
    margin-left:0.8rem;
    margin-bottom:0.2rem;
    float:left;
}
.locCityName{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width:6em;
    margin-top:0.6rem;
    margin-bottom:0.2rem;
    margin-left:0.1rem;
    float:left;
    text-align: left;
}

</style>
