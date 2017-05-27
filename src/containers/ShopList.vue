<template>
    <div class="contain">
        <x-header :leftOptions="leftOptions">
            <div slot="default" class="header-title">商户列表</div>
            <span class="header-button map-button mr10" v-if="!showMap" @click="handleLink('#/shopList/map',()=>{showMap=true})" slot="right"></span>
            <span class="header-button shopList-button mr10" v-if="showMap" @click="$router.back()" slot="right"></span>
            <span slot="right" @click="handleLink('#/search')" class="header-button search-button mr10"></span></x-header>
        <SortBar ref="sortBar" v-model="selectedVal" :userInfo="userInfo" @inited='sortBarInited'></SortBar>
        <Scroller v-show="garageList.length" :height='height' ref="scroller" :lockX="true" v-model="status" @on-pullup-loading="handleLoadMore" :usePullup="true">
            <div class="scroll-contain">
                <GarageItem class="bw" :class="{'no-mb':index==garageList.length-1}" v-for="(item,index) in garageList" :key="index" :itemData="item" :linkTo="'/mobile/html/garageInfo/detail.html?route=shopList&id='+item.idGarage"></GarageItem>
                <div class="load-tip" v-show="!hasMoreLoad">
                    <span>已加载完毕</span>
                </div>
            </div>
        </Scroller>
        <loading v-model="showLoading"></loading>
        <div v-show="!garageList.length" class="no-data v-center">
            <img src="../../static/images/img/laugh.png" alt="" />
            <p class="mt30">{{showNoData?'没有搜索结果':'搜索中'}}</p>
        </div>
        <keep-alive>
            <router-view ref='child'></router-view>
        </keep-alive>
    </div>
</template>
<script>
import Colin from '../assets/js/public';
import Common from '../assets/js/common';
import {
    scroll,
    link
} from '../assets/js/mixin/index'
import GarageItem from '../components/GarageItem.vue'
import Scroller from '../components/vux/src/components/scroller/index.vue'
import SortBar from '../components/SortBar'
import {
    mapGetters,
    mapMutations
} from 'vuex';
export default {
    components: {
        Scroller,
        SortBar,
        GarageItem
    },
    mixins: [scroll, link],
    data() {
        return {
            isFirst: true,
            showMap: false,
            leftOptions: {
                showBack: true,
                backText: '返回'
            },
            status: {
                pullupStatus: 'default',
            },
            showNoData: false,
            showLoading: true,
            sortStatus:false,
            selectedVal: '',
            defaultCityCode: '',
            postData: {
                areaCode: "",
                areaMeter: "",
                areaType: "",
                countyCode: "",
                filterCompany: "",
                filterCooperate: "",
                filterFacility: "",
                filterShop: "",
                garageServiceCode: "",
                garageServiceItemCode: "",
                page: 1,
                sortType: "01",
                trademarkId: "",
            },
            garageList: [],
        }
    },
    computed: {
        ...mapGetters(['userInfo']),
        height() {
            return -Common.fs * 3.466667 + '';
        }
    },
    mounted() {
        this.showMap=this.$route.name==='shopListMap'?true:false;
        if(this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
            this.postData.areaType="02"
        }else{
            this.postData.areaMeter="5000"
        }
        this.$on('inited', () => {   //筛选列表加载完毕
            //console.log(3)
            let garageServiceCode=this.$route.query.id;
            if(this.isFirst){
                //console.log(4)
                this.handleInit();
            }else{         
                let postData={
                        areaCode: "",
                        areaMeter: "",
                        areaType: "",
                        countyCode: "",
                        filterCompany: "",
                        filterCooperate: "",
                        filterFacility: "",
                        filterShop: "",
                        garageServiceCode: "",
                        garageServiceItemCode: "",
                        page: 1,
                        sortType: "01",
                        trademarkId: "",
                }
                if(garageServiceCode){
                     postData.garageServiceCode=garageServiceCode; 
                 }            


                if(this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
                    
                    postData.areaType="02"
                }else{
                    
                    postData.areaMeter="5000"
                }
                this.postData=postData;
                this.handleInit('reset');
            }
            this.isFirst ? this.isFirst = false : '';
        })
        this.$on('areaClick',(data)=>{
            this.$refs.sortBar.$emit('change',data)
        })
    },
    beforeRouteUpdate(to,from,next){
       this.$refs.sortBar.$emit('hide',true)
       if(to.name==='shopListMap'){
           this.showMap=true;
       }else{
         this.showMap=false
       }
       if(from.name==='shopListMap'){
            if(this.sortStatus){
              this.sortStatus=false;
              this.showLoading = true;
              this.handleLoadMore('reset')          
           }       
       }

       next()
    },
    activated() {
        let garageServiceCode=this.$route.query.id;
        let flag=false;
        let cityCode=this.userInfo.selectCityCode || this.userInfo.cityCode;        
        if(this.isFirst && !cityCode){
        
            this.$on('getCurrentSessionInfo', (res) => {  
                                
                this.defaultCityCode = res.cityCode;
                this.$refs.sortBar.$emit('init', true);
                if(garageServiceCode)this.postData.garageServiceCode=garageServiceCode;
                this.showMap?this.$refs.child.$emit('init', true):'';
            })
        }else{           
            if(garageServiceCode && this.postData.garageServiceCode!=garageServiceCode){
                this.postData.garageServiceCode=garageServiceCode;
                flag=true;    
                   
            }
            if (this.userInfo instanceof Object && this.userInfo.selectCityCode) {
                if (this.userInfo.selectCityCode != this.defaultCityCode) {
          
                    this.defaultCityCode = this.userInfo.selectCityCode;   
                    flag=true;     
                }
            } else if (this.userInfo instanceof Object && this.userInfo.cityCode) {

                if (this.userInfo.cityCode != this.defaultCityCode) {
          
                    this.defaultCityCode = this.userInfo.cityCode;   
                    flag=true;
                }
                
            }

            if(flag)reset();
       }
                
                          

            
       
        this.$refs.sortBar.$emit('hide',true)
        this.updateTabIndex('shopList')
        this.$refs.scroller.reset()
        
    },

    methods: {
        ...mapMutations(['updateTabIndex','updateAreaReset']),
        handleInit(type) {
            this.handleLoadMore(type)
        },
        sortBarInited() {
            this.handleInit();
        },
        reset(){
                this.garageList=[]
                this.showLoading = true;
                this.showNoData=false;
                this.$refs.sortBar.$emit('init', true)

                switch(garageServiceCode) {
                    case '01':
                        this.$refs.sortBar.$emit('changeText',[garageServiceCode,'维修'])
                        break;
                    case '02':
                        this.$refs.sortBar.$emit('changeText',[garageServiceCode,'保养'])
                        break;
                    case '03':
                        this.$refs.sortBar.$emit('changeText',[garageServiceCode,'美容'])
                        break;
                    case '04':
                        this.$refs.sortBar.$emit('changeText',[garageServiceCode,'洗车'])
                        break;
                }            
                
        },
        handleLoadMore(flag) {
   
            if (flag == 'reset') {
                this.scrollReset(this.garageList, this.postData)
            }
            Colin.tokenPost(Common.domain + '/do/customer/search/searchGarageList', this.postData, res => {
                //获取商家列表
                res.garageList ? this.garageList = this.garageList.concat(res.garageList) : [];
                if(!this.garageList.length){
                    this.showNoData=true;
                }
                if (!res.garageList || res.garageList.length < 10) {
                    this.scrollEnd()
                } else {
                    this.scrollNext()
                }
                
                this.postData.page++;
            })
        }

    },
    watch: {
        selectedVal(newVal) {
            this.postData = Object.assign({}, this.postData, newVal)

            if(this.showMap){
                this.sortStatus=true;
                this.$refs.child.$emit('sort',newVal)
            }else{
                if(newVal.hasOwnProperty('areaType') && newVal.areaType=='02' && this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
                    this.updateAreaReset()
                }
                this.showLoading = true;
                this.handleLoadMore('reset')              
            };    
                
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../static/css/variable.less";
.contain {
    position: absolute;
    top: 2.133333rem;
    bottom: 0;
    left: 0;
    right: 0;
    background: @c4;
}

.header-button {
    width: 0.613333rem;
    height: 0.613333rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
}

.map-button {
    background-image: url(../../static/images/icon/icon-locate.png);
}

.search-button {
    background-image: url(../../static/images/icon/icon-search-white.png);
}

.shopList-button {
    margin-right:0.5rem;
    background-image: url(../../static/images/icon/icon-shopList.png);
}

.anydoor {
    .map-button {
        background-image: url(../../static/images/icon/icon-locate-black.png);
    }
    .search-button {
        background-image: url(../../static/images/icon/icon-search-black.png);
    }
    .shopList-button {
    background-image: url(../../static/images/icon/icon-shopList-black.png);
    }
}
</style>
