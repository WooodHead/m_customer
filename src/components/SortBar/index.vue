<template>
<div class="sort-bar">
     <ul class="sort-menu space-between" >
         <li class="center" @click="handleSelect(1)" :class="{'active':selectedItem==1}"><span>{{oneText}}</span><i></i></li>
         <li class="center" @click="handleSelect(2)" :class="{'active':selectedItem==2}"><span>{{twoText}}</span><i></i></li>
         <li class="center" @click="handleSelect(3)" :class="{'active':selectedItem==3}"><span>{{threeText}}</span><i></i></li>
         <li class="center" @click="handleSelect(4)" :class="{'active':selectedItem==4}"><span>筛选</span><i></i></li>
     </ul>
     <keep-alive>
         <SortCaseOne v-show="selectedItem==1" :userInfo="userInfo" :fisrtLevelList="oneSortData.fisrtLevelList" :secondLevelList="oneSortData.secondLevelList" @first-change="handleOneChange" v-model="selectVal1" @on-change="handleOneChangeText"></SortCaseOne>
         </keep-alive>
     <keep-alive>
         <SortCaseTwo v-show="selectedItem==2" ref="sortCaseTwo" :fisrtLevelList="twoSortData.fisrtLevelList" :secondLevelList="twoSortData.secondLevelList" @first-change="handleTwoChange" v-model="selectVal2" @on-change="handleTwoChangeText">
           <keep-alive><CarType v-if="isShowCarType" v-model='carTypeVal'></CarType></keep-alive>
         </SortCaseTwo>
     </keep-alive>
     <keep-alive>
         <SortCaseThree v-show="selectedItem==3" ref="sortCaseThree" v-model="selectVal3" :list="threeSortData" @on-change="handleThreeChangeText"></SortCaseThree>
     </keep-alive>
     <keep-alive>
         <SortCaseFour v-show="selectedItem==4" ref="sortCaseFour" v-model="selectVal4" :list="fourSortData"></SortCaseFour>
     </keep-alive>
</div>
</template>
<script>
import SortCaseOne from './SortCaseOne.vue';
import SortCaseTwo from './SortCaseTwo.vue';
import SortCaseThree from './SortCaseThree.vue';
import SortCaseFour from './SortCaseFour.vue';
import Colin from '../../assets/js/public.js';
import Common from '../../assets/js/common.js';
import CarType from './CarType.vue';
export default {
  props:['userInfo'],
  components:{SortCaseOne,SortCaseTwo,SortCaseThree,SortCaseFour,CarType},
  data(){
    return{
       selectedItem:'',
       isShowCarType:false,
       oneData:[{
          cityName:'全部区域',cityCode:'',
       }],
       oneDataDefault:{
          cityName:'附近',cityCode:'',
          list:[{areaName:'500米',areaMeter:'500'},{areaName:'1000米',areaMeter:'1000'},{areaName:'2000米',areaMeter:'2000'},{areaName:'5000米',areaMeter:'5000'}]
       },
       oneSortData:{
          fisrtLevelList:[],
          secondLevelList:[]
       },
       twoData:[{
          text:'全部',val:''
         },{
          text:'维修',val:'01',
          list:[{text:'请选择服务品牌',val:'chooseServicers'}]
         },{
          text:'保养',val:'02',
          list:[{text:'小保养',val:'02'},{text:'大保养',val:'05'}]
         },{
          text:'美容',val:'03',
          list:[{text:'全车打蜡',val:'0301'},{text:'全车抛光',val:'0302'},{text:'内饰清洗',val:'0303'},{text:'内饰消毒',val:'0304'},{text:'底盘装甲',val:'0305'},{text:'空调清洗',val:'0306'},{text:'发动机清洗',val:'0307'},{text:'玻璃贴膜',val:'0308'},{text:'座椅包真皮',val:'0309'},{text:'镀膜镀晶',val:'0310'},{text:'前风挡镀膜',val:'0311'}]
         },{
          text:'洗车',val:'04',
          list:[{text:'快速洗车',val:'0401'},{text:'精洗',val:'0402'}]  
       }],
       twoSortData:{
          fisrtLevelList:[{text:'全部',val:'qb'},{text:'维修',val:'wx'},{text:'保养',val:'by'},{text:'美容',val:'mr'},{text:'洗车',val:'xc'}],
          secondLevelList:[]
       },
       threeSortData:[
         {text:"智能排序",val:"01"},        
         {text:"评价最好",val:"03"},
         {text:"人气最高",val:"04"},
         {text:"优惠最多",val:"05"}
       ],
       threeDataDefault:{text:"离我最近",val:"02"},
       fourSortData:[{
              title:'商户类型',
              type:'filterShop',
              list:[{text:'修理厂',val:'01'},{text:'4s店',val:'02'}]
            },{
              title:'配套设施',
              type:'filterFacility',
              list:[{text:'WiFi',val:'01'},{text:'休息区',val:'02'},{text:'可停车',val:'03'},{text:'营业中',val:'04'}]

            },{
              title:'合作保险公司',
              type:'filterCompany',
              img:true,
              list:[]
            },{
              title:'合作方式',
              type:'filterCooperate',
              list:[{text:'保单销售',val:'01'},{text:'代理销售',val:'02'},{text:'代收资料',val:'03'},{text:'自助定损',val:'04'},{text:'透明维修',val:'05'}]
            }],  
       selectVal1:'',
       selectVal2:'',
       selectVal3:'',
       selectVal4:'',
       oneText:'全部区域',
       twoText:'全部',
       threeText:'智能排序',
       carTypeVal:'',
       garageList:[],
       garageServiceCode:''
    }
  },
  mounted(){
     this.$on('init',()=>{
       this.twoText='全部';
       this.handleTwoChange(0) 
       this.init();   
     })
     this.$on('hide',()=>{
        this.selectedItem=''
     })
     this.$on('change',(data)=>{
        let _data=data.data;
        this.oneText=_data.cityName;
        this.selectVal1={areaType:'03',countyCode:_data.cityCode,areaCode:''};
     })
     this.$on('changeText',(data)=>{
        this.twoText=data[1];
        this.$refs.sortCaseTwo.$emit('changeSelected',{garageServiceCode:data[0]})
        this.handleTwoChange(Number(data[0]))
     })
  },
  activated(){
    
  },
  methods:{
     init(){
      //切换城市或初始化
        this.oneSortData=[]; //oneSortData依赖请求更新，需先清除
        this.oneData=[{
          cityName:'全部区域',cityCode:'',
         }];
        this.oneText="全部区域";
        this.threeText='智能排序';
        this.$refs.sortCaseTwo.$emit('reset',true)
        this.$refs.sortCaseThree.$emit('reset',true)
        this.$refs.sortCaseFour.$emit('reset',true)
        Colin.tokenPost(Common.domain+'/do/customer/search/searchGarageListFirst',null,(res)=>{
            var oneSortData={
                fisrtLevelList:[],
                secondLevelList:[]
            };
            var insuranceCompanyList=[];
            if(!this.userInfo.selectCityCode || this.userInfo.selectCityCode===this.userInfo.cityCode){
              this.oneText="附近";
              this.oneData.unshift(this.oneDataDefault)
              if(this.threeSortData.length<5)this.threeSortData.splice(1,0,this.threeDataDefault);          
            }else{
              if(this.threeSortData[1].val=='02')this.threeSortData.splice(1,1)
            }

           res.cityDefineList?this.oneData=this.oneData.concat(res.cityDefineList):'';
               
               for (var val of this.oneData){
                   oneSortData.fisrtLevelList.push({text:val.cityName,val:val.cityCode})
               }
               if(!this.userInfo.selectCityCode || this.userInfo.selectCityCode===this.userInfo.cityCode){ 
                 for(var val of this.oneData[0].list){
                     oneSortData.secondLevelList.push({text:val.areaName,val:{areaType:'01',areaMeter:val.areaMeter}})
                 }
               }else{
                   oneSortData.secondLevelList.push({text:this.oneData[0].cityName,val:{areaType:'02'}})
               }
              
           
           if(res.insuranceCompanyList){
               for(var val of res.insuranceCompanyList){
                   insuranceCompanyList.push({text:val.name,val:val.id})
               }
           }
     
           this.fourSortData[2].list=insuranceCompanyList; //筛选列表中的公司列表
           this.oneSortData=oneSortData;
           this.$parent.$emit('inited',true)
        })
     },
     handleSelect(id){
         this.selectedItem==id?this.selectedItem='':this.selectedItem=id;
     },
     handleOneChange(index){
         var  secondLevelList=[];
         let start=[0,1];
         if(this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
            start=[-1,0]
         }
         if(index==start[0]){
               for(var val of this.oneData[0].list){
                   secondLevelList.push({text:val.areaName,val:{areaType:'01',areaMeter:val.areaMeter}})
               } 
         }
         else if(index==start[1]){
           secondLevelList.push({text:this.oneData[index].cityName,val:{areaType:'02'}})
         }
         else if(index>start[1]){
           secondLevelList.push({text:(index>start[1]?"全":'')+this.oneData[index].cityName,val:{areaType:'03',countyCode:this.oneData[index].cityCode,areaCode:''}})
             if(this.oneData[index].bizAreaDefineDTOs){
                 for(var val of this.oneData[index].bizAreaDefineDTOs){
                     secondLevelList.push({text:val.areaName,val:{areaType:'04',countyCode:this.oneData[index].cityCode,areaCode:val.areaCode}})
                 }
             }           
         }

         this.oneSortData.secondLevelList=secondLevelList;
     },
    handleTwoChange(index){
         var  secondLevelList=[];
   
         if(this.twoData[index].text=='全部'){
              secondLevelList.push({text:'全部',val:{garageServiceCode:this.twoData[index].val}})         
         }else if(this.twoData[index].text=='维修'){
          secondLevelList.push({text:'全部'+this.twoData[index].text,val:{garageServiceCode:this.twoData[index].val}})    
             if(this.twoData[index].list){
                 for(var val of this.twoData[index].list){
                     secondLevelList.push({text:val.text,val:{garageServiceCode:this.twoData[index].val,trademarkId:val.val}})
                 }
             }     
         }else{
            secondLevelList.push({text:'全部'+this.twoData[index].text,val:{garageServiceCode:this.twoData[index].val}})   
            if(this.twoData[index].list){
                 for(var val of this.twoData[index].list){
                     secondLevelList.push({text:val.text,val:{garageServiceCode:this.twoData[index].val,garageServiceItemCode:val.val}})
                 }
            }       
         }



         this.twoSortData.secondLevelList=secondLevelList;        
    },
    handleOneChangeText(text){
       this.oneText=text;
    },
    handleTwoChangeText(text){
      if(this.text!=="请选择服务品牌")this.twoText=text;
    },
    handleThreeChangeText(text){
       this.threeText=text;
      
    }
  },
  watch:{
    selectVal1(newVal){ //区域
       if(Object.prototype.toString.call(newVal)==='[object Object]'){
         this.$emit('input',Object.assign({areaType:'',areaCode:'',areaMeter:'',countyCode:'',sortType:'01'},newVal));
       }
       this.selectedItem='';
    },
    selectVal2(newVal){ // 类型
       if(Object.prototype.toString.call(newVal)==='[object Object]'){

          this.$emit('input',Object.assign({garageServiceCode:'',trademarkId:'',garageServiceItemCode:''},newVal));
       }else if(newVal.indexOf('chooseServicers')!=-1){
          this.isShowCarType=true;
          return false
       }
       this.selectedItem='';
    },
    carTypeVal(newVal){  //车型
       var flag=true;
       if(newVal.trademarkId.indexOf('repeat')==-1){
          this.selectVal2={garageServiceCode:'01',trademarkId:newVal.trademarkId};
          this.twoText='维修';
          for(var item of this.twoData[1].list){
              if(newVal.trademarkId==item.val){                 
                  flag=false;
              } 
          }
          if(flag){
              this.twoData[1].list=this.twoData[1].list.concat([{text:newVal.carName,val:{garageServiceCode:'01',trademarkId:newVal.trademarkId}}])
              this.twoSortData.secondLevelList.push({text:newVal.carName,val:{garageServiceCode:'01',trademarkId:newVal.trademarkId}})            
          }  
       }
       this.isShowCarType=false;
       this.selectedItem='';
    },
    selectVal3(newVal){
       if(newVal.indexOf('repeat')==-1){
           this.$emit('input',{sortType:newVal})
       } 
        this.selectedItem='';
    },
    selectVal4(newVal){
        if(Object.prototype.toString.call(newVal)==='[object Object]'){
           this.$emit('input',newVal)
        }
        this.selectedItem='';
    }
  }

    

}    
</script>
<style lang="less" scoped>
@import '../../../static/css/variable.less';
.sort-bar{
  position:fixed;
  top:1.066667rem;
  width:100%;
  height:1.066667rem;
  background:#fff;
  border-bottom:1px solid @c5;
  z-index:992;
  .sort-menu{
     height:100%;
     li{
        position:relative;
        height:100%;
        flex:1;
        .fs28;
        .c3;
        >span{
          max-width: 1.6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
         }
        i{
           display:inline-block;
           width:8px;
           height:8px;
           margin-left:5px;
         }
         i::after{
            content:'';
            display: block;
            width:8px;
            height:8px;
            .borderbox;
            border:1px solid @c5;
            border-style: solid solid none none;
            transform:translateY(-0.06rem) rotate(135deg);
         }
     }
     li.active{
         background:#fff;
        i::after{
           transform:translateY(0.04rem) rotate(-45deg);
        }
     }
     li::after{
        content:'';
        display:block;
        position:absolute;
        width:1px;
        height:0.373333rem;
        background:#555;
        right:0;
        top:50%;
        transform:translateY(-50%);
        background:@c5;
     }
     li:last-child::after{
        display: none;
     }

  }
}

</style>
