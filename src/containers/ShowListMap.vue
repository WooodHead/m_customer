<template>
    <div class="map-contain">
        <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :map-manager="amapManager" :plugin="plugin" :events="events">
            <el-amap-marker v-for="(marker,index) in markers" :key="'m'+index" :position="marker.position" :events="marker.events" :icon="marker.icon" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
            <el-amap-circle v-for="(circle,index) in circles" :key="'c'+index" :center="circle.center" :radius="circle.radius" :fillOpacity="circle.fillOpacity" :strokeColor="circle.strokeColor" :fillColor="circle.fillColor" :events="circle.events"></el-amap-circle>
             <el-amap-marker v-for="(marker,index) in markersArea" :key="'a'+index" :position="marker.position" :events="marker.events" :content="marker.content" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>           
            <el-amap-marker :position="markerPosition.position" :icon="markerPosition.icon" :visible="markerPosition.visible" :draggable="markerPosition.draggable" :zIndex='markerPosition.zIndex'></el-amap-marker>
			<el-amap-marker :position="markerDirection.position" :icon="markerDirection.icon" :visible="markerDirection.visible" :draggable="markerDirection.draggable"></el-amap-marker>

        </el-amap>
        <dl class="info-pannel" :class="{'active':infoPannelShow}">
            <dt @click="infoPannelShow=!infoPannelShow">{{userInfo.selectCityCode?'推荐':'附近'}}"修理厂/4S店" {{garageList.length}} 家<i class="arrow-down" :class="{'active':infoPannelShow}"></i></dt>
            <dd>
                <ul v-scroll>
                    <li v-for="item in garageList" @click="markerClick(null,item)">
                        <div class="space-between mb5">
                            <p class="title"><span v-if="item.garageTypeName">【{{item.garageTypeName}}】</span>{{item.garageName}}</p>
                            <p class="label" v-if="item.adminAppointActivityList">优惠</p>
                        </div>
                        <div class="space-between">
                            <p class="address">{{item.address}}</p>
                            <p class="distance" v-if="Number(item.distanceMeter)!==NaN &&item.distanceMeter!=null">{{item.distanceMeter | distance}}</p>
                        </div>
                    </li>
                </ul>
            </dd>
        </dl>
        <div class="garage-pannel" v-if="garagePannelShow">
            <div class="garageitem fs32">
                <div class="rel" @click="handleLink('/mobile/html/garageInfo/detail.html?id='+garageInfo.idGarage)">
                    <div class="img" v-lazy:background-image="garageInfo.photoThumbUrl!==null?garageInfo.photoThumbUrl:'https://test-pamap-gr.pingan.com.cn:40956/mobile/images/garageInfo/icon_shanhhutouxiang@2x.jpg'"></div>
                    <div class="detail">
                        <p class="text fs42 space-between">
                             
                            <span class="garageName middle"><span class="label" v-if="garageInfo.qualityPromise"></span>{{garageInfo.garageName}}</span>
                            <span class="status" :class="[serviceStatus=='休息中'?'out':'']">{{serviceStatus}}</span>
                        </p>
                        <p class="comments center">
                            <Star :level="garageInfo.scoreAverage>5?garageInfo.scoreAverage/2:garageInfo.scoreAverage"></Star>
                            <span class="num ml10 h-center"><i></i>{{garageInfo.countTotal}}</span>
                        </p>
                        <p class="space-between">
                            <span class="dress">{{garageInfo.countyName}}<span v-if="garageInfo.countyName!=null">/</span>{{garageInfo.garageTypeName}}</span>
                            <span class="distance" v-if="Number(garageInfo.distanceMeter)!==NaN &&garageInfo.distanceMeter!=null">{{garageInfo.distanceMeter | distance}}</span>
                        </p>
                    </div>
                    <p class="tip h-center" v-if="carHoderdShow"><i></i><span>{{carHoderdShow}}</span></p>
                </div>
                <ul class="actions flex">
                    <li class="phone" @click="handleCall"><span>电话</span></li>
                    <li class="nav" @click="handleNavigate"><span>导航</span></li>
                    <li class="appoint" @click="handleAppoint"><span>预约</span></li>
                </ul>
            </div>
        </div>
        <div class="locate-button" @click="handleLocate" v-if="!this.userInfo.selectCityCode"></div>
        <loading v-model="showLoading"></loading>
    </div>
</template>
<script>
import Colin from '../assets/js/public.js';
import Common from '../assets/js/common.js';
import Locate from '../assets/js/locate.js';
import {
    AMapManager
} from 'vue-amap';
import {
    mapGetters,
    mapMutations
} from 'vuex';
import {
    filter_distance
} from '../assets/js/filter.js'

import Star from '../components/Star.vue';
import {link} from "../assets/js/mixin/index.js";
let icon_4s,icon_garage,icon_position,icon_direction;
let amapManager = new AMapManager(); //创建一个对象用来获取地图信息
export default {
    name: 'amap-page',
    components: {
        Star
    },
    mixins:[link],
    data() {
        return {
            isFirst:true,
            showLoading: false,
            infoPannelShow: false,
            garagePannelShow: false,
            searchGarage:false,
            resetArea:true,
            preventDragged:false,
            defaultCityCode:'',
            postData: {
                areaCode: "",
                areaMeter: "5000",
                areaType: "01",
                countyCode: "",
                garageServiceCode: "",
                gpsX: '',
                gpsY: '',
                page: 1,
                pageSize: 200,
                showType: "map"
            },
            garageList: [],
            garageInfo: {},
            distance:[0,0],
            vid: 'amap-vue-1',
            zoom: 14,
            center: [0, 0], //地图中心点
            map: '',
            events: {
                'init': (map) => {
					icon_4s=new AMap.Icon({
					     image:Common.imgUrl+"icon/icon-4s.png",
					     size:new AMap.Size(29,34),
					     imageSize:new AMap.Size(29,34)
					})
					icon_garage=new AMap.Icon({
					     image:Common.imgUrl+"icon/icon-garage.png",
					     size:new AMap.Size(29,34),
					     imageSize:new AMap.Size(29,34)
					})
				    icon_position=new AMap.Icon({
					     image:Common.imgUrl+"icon/icon-position.png",
					     size:new AMap.Size(29,34),
					     imageSize:new AMap.Size(29,34)
					})
			        icon_direction=new AMap.Icon({
					     image:Common.imgUrl+"icon/icon-direction.png",
					     size:new AMap.Size(40,40),
					     imageSize:new AMap.Size(40,40)
					})
					this.markerPosition.icon=icon_position;
					this.markerDirection.icon=icon_direction;
                    this.distance=[this.center[0],this.center[1]]
                },
                'dragend': () => { //拖动停止时，获取地图的中心点的经纬度传入this.center
                    
                    let mapCenter = this.amapManager.getMap().getCenter(); //获取地图中心点对象
                    let mapLng=mapCenter.getLng();
                    let mapLat=mapCenter.getLat();                 
                        if(this.searchGarage && !this.preventDragged){    
                            let disX=this.distance[0]-mapLng;  //x平移
                            let disY=this.distance[1]-mapLat;  //y平移
                            
                            if(Math.abs(disX)>(14-this.zoom)*0.008 || Math.abs(disY)>(14-this.zoom)*0.008){
        	                    this.postData.gpsX = mapLng;
        	                    this.postData.gpsY = mapLat;
        	                    this.distance=[mapLng,mapLat]
        	                    this.garagePannelShow=false;
        	                    this.handleMapSearch();
                            }else{
                            	this.distance[0]+=disX;
                            	this.distance[1]+=disY;
                            }                   
                        }
                    
                    this.center = [mapLng, mapLat];
                },
                'click': (e) => {
                    this.garagePannelShow=false
                },
                'zoomchange': () => {
                    this.zoom = this.amapManager.getMap().getZoom();
                },
            },
            plugin: [],
            amapManager: amapManager,
            markers: [
                // {
                //   position: [116.397428,39.90923],
                //   events: {
                //     click: (e) => {
                //          this.markerClick(e,'这是第二个')
                //     }
                //   },
                //   visible: true,
                //   draggable: false
                // }
            ],
            markersArea:[

            ],
            circles: [
		        // {
		        //   center: [121.5273285, 31.21515044],
		        //   radius: 200,
		        //   fillOpacity: 0.5,
		        //   events: {
		        //     click: () => {
		        //       alert('click polygon');
		        //     }
		        //   }
		        // }
		    ],
            markerPosition:
                {
                  position: [0,0],
                  visible: false,
                  draggable: false,
                  icon:'',
                  zIndex:101
                },
	        markerDirection:
	            {
	              position: [0,0],
	              visible: false,
	              draggable: false,
	              icon:''
	            }           
        }
    },
    computed: {
        ...mapGetters(['userInfo','areaReset']),
        carHoderdShow() {
            var carHoderdShow = '';
            var list = this.garageInfo.adminAppointActivityList || [];
            var reg = /['折扣'|'代金券'|'免费'|'常设活动之']/g;
            for (var i = 0, len = list.length - 1; i < len; i++) {
                switch (list[i].activityType) {
                    case '0':
                        carHoderdShow += ' ' + list[i].activityName.replace(reg, '') + list[i].discountMax / 10 + '折';
                        break;
                    case '1':
                        carHoderdShow += ' 满' + list[i].priceMax + '元减' + list[i].discountMax + '元';
                        break;
                    case '2':
                        carHoderdShow += ' 免费' + list[i].activityName.replace(reg, '');
                        break;
                    case '3':
                        carHoderdShow += ' ' + list[i].activityName.replace(reg, '') + '代金券' + list[i].discountMax + '元';
                        break;
                }
            }
            return carHoderdShow;
        },
        serviceStatus() {
            var startTime = this.garageInfo.serviceHoursStart&&this.garageInfo.serviceHoursStart.replace(/\:/g, '') || '',
                endTime = this.garageInfo.serviceHoursStart&&this.garageInfo.serviceHoursEnd.replace(/\:/g, '') || '',
                nowTime = new Date().format('yyyy-MM-dd hh:mm:ss').split(' ')[1].replace(/\:/g, '');
            return nowTime - startTime > 0 && endTime - nowTime > 0 ? '营业中' : '休息中';
        }
    },
    filters: {
        distance: filter_distance,
    },
    mounted(){
       this.$on('sort',(newVal)=>{
            this.handleReset()
           if(newVal.areaType=='02' && this.userInfo.selectCityCode && this.userInfo.selectCityCode!=this.userInfo.cityCode){
               this.markerPosition.visible=false;
               this.$set(this.markerDirection,'visible',false);
               this.handleSelectArea();
               this.resetArea=false;
           }else{

               this.postData = Object.assign({}, this.postData, newVal);
               if(newVal.areaType=='01' || newVal.sortType=='02'){
                    this.postData.gpsX = this.userInfo.lng;
                    this.postData.gpsY = this.userInfo.lat;
               }
               this.$set(this.markerPosition,'visible',true);
               this.handleMapSearch().then(()=>{
                   if(this.garageList.length){
                       this.zoom=14;
                       this.searchGarage=true;
                       if(newVal.areaType=='01' || newVal.sortType=='02'){
                           this.$set(this.markerDirection,'visible',true)
                           this.center = [this.userInfo.lng, this.userInfo.lat]; 
                       }else{
                           this.center=[this.garageList[0].latitude,this.garageList[0].longitude]
                       }
                       
                   }
               });           
           }

           this.garagePannelShow=false;
       })
       this.$on('init',()=>{           
           this.handleInit()
       })
    },
    deactivated(){
       this.garagePannelShow=false;
    },
    activated() {
        this.handleInit();     
        this.isFirst ? this.isFirst = false : '';
    },
    methods: {
    	...mapMutations(['updateUserInfo','updateAreaReset']),
    	handleInit(){
 
    		if(this.userInfo instanceof Object && this.userInfo.selectCityCode){
    			if(this.defaultCityCode!=this.userInfo.selectCityCode){
                    this.resetArea=false;
    				this.defaultCityCode=this.userInfo.selectCityCode;
                    if(this.userInfo.selectCityCode==this.userInfo.cityCode){
                        this.handleLocated()
                    }else{
    				    this.handleSelectArea();
                    }
    			}
               
	        }else if(this.userInfo instanceof Object && this.userInfo.cityCode){
	        	if(this.defaultCityCode!=this.userInfo.cityCode){
                    this.resetArea=false;
	        		this.defaultCityCode=this.userInfo.cityCode;
	        		this.handleLocated()
	        	}
	           
	        }

            if(this.areaReset && this.resetArea){
               this.markerPosition.visible=false;
               this.$set(this.markerDirection,'visible',false);
               this.handleSelectArea();
               this.resetArea=false;
               this.updateAreaReset()
            }
            this.resetArea=true;
    	},
        handleReset(){
           this.garageList=[];
           this.markersArea=[];
           this.markers=[];
           this.circles=[];
           this.infoPannelShow=false;
           this.garagePannelShow=false;
           this.searchGarage=false;

        },
    	handleLocated(){
            this.handleReset();
            this.zoom=14;
	        this.center = [this.userInfo.lng, this.userInfo.lat];
	        this.markerDirection.visible=true;
	        this.markerPosition.visible=true;
	        this.$set(this.markerDirection,'position',[this.userInfo.lng, this.userInfo.lat]);
	        this.postData.gpsX = this.userInfo.lng;
	        this.postData.gpsY = this.userInfo.lat;
	        this.searchGarage=true;
	        this.handleMapSearch();
    	},
    	handleSelectArea(){   //选择城市的情况下
            this.showLoading = true;
            this.handleReset();
            this.zoom=10;
            Colin.tokenPost(Common.domain + '/do/customer/search/searchGarageCount', {type:'area'}, res => {
                let markersArea=[],circles=[];
                this.markersArea=res.resultObject; 
                this.center=[this.markersArea[0].gpsX, this.markersArea[0].gpsY];
                for (let i in this.markersArea){

                	markersArea.push({
                        position: [this.markersArea[i].gpsX, this.markersArea[i].gpsY],
                        visible: true,
                        draggable: false,
                        events: {
						    click: (e) => {
						        this.areaMarkerClick(e, this.markersArea[i]);
						    }
						},  
                        content:'<div class="areaMarker"><p>'+this.markersArea[i].garageCount+'</p><p>'+this.markersArea[i].cityName+'</p></div>', 
                        data: this.markersArea[i]            		
                	})
                	circles.push({
						center: [this.markersArea[i].gpsX, this.markersArea[i].gpsY],
						radius: 14000-1000*this.zoom,
						strokeColor:'#ff6600',
						fillColor:'#ff6600',
						fillOpacity: 0.5,           		
                	})
                }
                this.circles=circles;
                this.markersArea=markersArea;
                this.showLoading = false;

            })
    	},
        areaMarkerClick(e,options){
           this.postData.gpsX=e.lnglat.lng;
           this.postData.gpsY=e.lnglat.lat;
           this.distance=[e.lnglat.lng,e.lnglat.lat]
           this.$parent.$emit('areaClick',options)
        },
        markerClick(e, options){
            this.preventDragged=true;
            this.center = [options.latitude, options.longitude];
            this.garageInfo = options;
            this.infoPannelShow=false;
            this.garagePannelShow = true;
            this.$set(this.markerPosition,'position',[options.latitude, options.longitude]);
            setTimeout(()=>{

               this.preventDragged=false;
            },200)
        },
        handleMapSearch() {
            this.showLoading = true;
            return new Promise((resolve,reject)=>{
                 Colin.tokenPost(Common.domain + '/do/customer/search/searchGarageList', this.postData, res => {
                    //获取商家列表
                    var markerList = [];
                    res.garageList ? this.garageList = res.garageList : [];
                    for (var marker in this.garageList) {
                        if(this.garageList[marker].latitude && this.garageList[marker].longitude){
                            let i = marker;
                            let icon=this.garageList[marker].garageTypeName=='4S店'?icon_4s:icon_garage;

                            markerList.push({
                                position: [this.garageList[marker].latitude, this.garageList[marker].longitude],
                                events: {
                                    click: (e) => {
                                        this.markerClick(e, this.garageList[i]);
                                    }
                                },
                                visible: true,
                                draggable: false,
                                icon:icon
                            })                      
                        }

                    }
                    resolve()
                    this.markers = markerList;
                    this.$nextTick(()=>{
                        this.showLoading ? this.showLoading = false : '';
                    })
                    


                })               
            })


        },
        handleNavigate(){
        	if(!this.userInfo.lng && !this.userInfo.lat){
                this.$vux.alert.show({
				  title: '',
				  content: '请先开启手机定位功能',
				})
        	}else{
        		this.$router.push('/navigation?gpsX='+this.garageInfo.latitude+'&gpsY='+this.garageInfo.longitude)
        	}
        },
        handleLocate(){
            this.showLoading=true;
			Locate.sessionLocation((res,cityName,cityCode,lng,lat)=>{
                if(lat&&lng){
                    this.updateUserInfo({login:res.login,navigation:true,cityCode:cityCode,cityName:cityName,lng:lng,lat:lat})
                    this.markerDirection.visible=true;
                    this.markerDirection.position=[lng,lat];
                    this.center=[lng,lat];
                    this.handleMapSearch();
                }else{
                    this.updateUserInfo({login:res.login,cityName:cityName,selectCityCode:cityCode,navigation:false})
                    this.$vux.alert.show({
                      title: '',
                      content: '定位失败，请先开启手机定位功能',
                    })
                }
                this.showLoading=false;
			}); 
        },
        handleAppoint(){
          if (this.userInfo.login) {
              window.location.href = '/mobile/html/garageInfo/order.html?idGarage=' + this.garageInfo.idGarage;

            } else {
              if (Common.ua == "anydoor") {
                App.call(["sendMessage"], function (data) {
                  var result = JSON.parse(data);
                  var SSOTicket = result.SSOTicket;
                  var signature = result.signature;
                  var timestamp = result.timestamp;
                  SSOTicket = encodeURIComponent(SSOTicket);
                  signature = encodeURIComponent(signature);
                  common.setData('vt', 'detail');
                  common.setData('receiverId', i.idGarage);
                  if (!SSOTicket) {
                    App.call(["getSSOLogin"],
                      function (e) {
                                           document.write(e)
                      },
                      function (e) {
    //                                      document.write(e)
                      }, {
                        "redirectURL": window.location.origin + "/mobile/html/garageInfo/jump_rym.html"
                      });
                  } else {
                    window.location.href = '/do/customer/oneh5login?returnPage=jump_rym.html&ssoTicket=' + SSOTicket + '&signature=' + signature + '&timestamp=' + timestamp;
                  }
                }, function (error) {
                }, ["getSSOTicket"]);
              } else {
                Colin.setCookie('detailId', this.garageInfo.idGarage, 1);
                Colin.setCookie('vt', 'detail', 1);
                window.location.href = '/do/customer/oneh5login';
              }
            }
        },
        handleCall(){
            if(this.garageInfo.contactMobile){
        	    window.location.href="tel:"+this.garageInfo.contactMobile;
            }else{
                this.$vux.alert.show({
                  title: '',
                  content: '对不起，该修理厂没有提供联系电话',
                })
            }
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../static/css/variable.less";
.map-contain {
    position: absolute;
    top: 1px;
    bottom: 0;
    width: 100%;
    z-index: 991;
    background: #fff;
    overflow: hidden;
}

.info-pannel {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: -7.466667rem;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 10px 0 #666;
    overflow: hidden;
    transition: all .5s;
    dt {
        height: 1.2rem;
        line-height: 1.2rem;
        .fs28;
        color: #fff;
        text-align: center;
        background: @c1;
        vertical-align: middle;
    }
    dd {
        height: 7.466667rem;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        background: #fff;
        ul {
            li {
                padding: 0.4rem;
                .fs28;
                border-bottom: 1px solid @c5;
                .borderbox;
                .title {
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    .fs32;
                    text-indent: -0.213333rem;
                }
                .label {
                    margin-left: 5px;
                    padding: 0 5px;
                    color: #fff;
                    background: #ff9500;
                    font-size: 12px;
                    line-height: 16px;
                }
                .address {
                    width: 6.4rem;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: @c6;
                }
                .distance {
                    color: @c6;
                }
            }
        }
    }
}

.info-pannel.active {
    transform:translateY(-7.466667rem)
}

.garage-pannel {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 10px 0 #666;
    background: #fff;
    overflow: hidden;
    .garageitem {
        padding-bottom: 0;
        margin-bottom: 0;
        .img {
            width: 2.24rem;
            height: 2.10rem;
        }
        .distance {
            color: @c6;
        }
        .detail {
            height: 2.10rem;
            left: 2.8rem;
            padding:0.1rem 0;
            border-bottom: 1px solid @c5;
            .text {
                padding-right: 0;
                position: relative;
            }
            .garageName {
                width: 5.5rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .status {
                right: 0.3rem;
                top:0;
                padding: 0.133333rem 0.266667rem;
                border: 5px;
                .fs24;
                color: #fff;
                background: #32d744;
                border-radius: 5px;
                transform-origin: center top;

            }
            .status.out {
                background: rgb(82, 82, 82)
            }
            .comments{
                justify-content:flex-start;
                padding:0.1rem 0.3rem 0.1rem 0;
            }
        }
    }
    .actions {
        li {
            flex: 1;
            text-align: center;
            font-size: 0.346667rem;
            color: @c3;
            margin: 0.3rem 0;
            line-height: 1;
            span{
                display: inline-block;
                vertical-align: middle;

            }
        }
        li:before{
            content:'';
            display: inline-block;
            margin-right:2px;
            width:0.4rem;
            height:0.4rem;
            background-size:cover;
            background-repeat: no-repeat;
            vertical-align: middle;
        }
        .phone:before{
            background-image:url(../../static/images/icon/icon-pho.png)
        }
        .nav:before{
           background-image:url(../../static/images/icon/icon-nav.png)
        }
        .appoint:before{
           background-image:url(../../static/images/icon/icon-clo.png)
        }
        li:nth-child(2) {
            border: 1px solid @c5;
            border-style: none solid none solid;
        }
    }
}
.locate-button{
	position:absolute;
	bottom:1.466667rem;
	left:15px;
	width:32px;
	height:32px;
	background:#eee;
	border-radius: 3px;
	border:1px solid #d9d9d9;
    box-shadow: 0 0 3px  #555;
}
.locate-button::before{
	content:'';
	position:absolute;
	top:50%;
	left:50%;
	margin-top:-11px;
	margin-left:-11px;
	display: block;
	width:22px;
	height:22px;
    border-radius:100%;
    border:1px solid #d9d9d9;
    .borderbox;
}
.locate-button::after{
	content:'';
	position:absolute;
	top:50%;
	left:50%;
	margin-top:-8px;
	margin-left:-8px;
	display: block;
	width:16px;
	height:16px;
    border-radius:100%;
    background:#808080;
}	

.distance{
    font-size:0.32rem;
}
.garageitem .tip{
    padding-left:2.8rem;
    margin-left:0;
    border-bottom:1px solid #eee;
    span{
        display: inline-block;
        flex:1;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
}
</style>
