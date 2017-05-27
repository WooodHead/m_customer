import Common from "./common.js"
import Colin from './public';
import { AjaxPlugin } from 'vux';

const Locate = {
    //微信获取地理位置经纬度
    getCurrentLocation(resultBack, errorBack) {
        var self = this;
        //如果需要调用微信的js-sdk方法，则调用此方法进行初始化
        Colin.initWxConfig(Colin.getUrlNoHash(), ['getLocation']);
        wx.ready(function() {
            //如果需要在页面加载时就调用相关接口，则在此处调用，该方法会在wx.config成功后调用
            getCurrentLocation();

        });
        wx.error(function(res) {

        });
        //二、获取用户微信信息
        function getWXUserinfoByCode() {
            var v_code = Colin.getUrlParam('code');
            AjaxPlugin.$http({
                url: Common.domain + '/do/wx/getWXUserinfoByCode',
                data: { code: v_code },
                method: 'POST',
            }).then(data => {

            });
        }
        //三、获取用户当前地理位置
        function getCurrentLocation() {
            wx.getLocation({
                type: "gcj02",
                success: function(res) {
                    res.code = Colin.getUrlParam('code');
                    resultBack(res)
                },
                // complete:function(res){
                //     if(window.weixFlag ==false){
                //         errorBack(res);
                //     } 
                // }
                // cancel: function (res) {
                //     alert('用户拒绝授权获取地理位置');
                //     errorBack(res);
                //     //alert('用户拒绝授权获取地理位置');
                // }
                // error:function(){
                //     alert('error')
                // },
                fail: function(res) {
                    errorBack(res);
                }
            });
        }
    },
    //高德地图逆向编码
    niGaoLocation(lnglatXY, backFn) {
        var map, geolocation;
        map = new AMap.Map("container", {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true, //是否使用高精度定位，默认:true
                timeout: 10000, //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition: 'RB'
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
            AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
            var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
            });
            geocoder.getAddress(lnglatXY, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    geocoder_CallBack(result, backFn);
                }
            });
        };

        function geocoder_CallBack(data, backFn) {
            backFn(data);
        }
        //解析定位错误信息
        function onError(data) {

        }
    },
    //高德定位
    geoLocation() {
        var map, geolocation, self = this;
        map = new AMap.Map("container", {
            resizeEnable: true
        });
        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true, //是否使用高精度定位，默认:true
                timeout: 10000, //超过10秒后停止定位，默认：无穷大
                buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition: 'RB'
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete); //返回定位信息
            AMap.event.addListener(geolocation, 'error', onError); //返回定位出错信息
        });
        //解析定位结果
        function onComplete(data) {
            var lnglatXY_1 = [data.position.getLng(), data.position.getLat()]; //已知点坐标
            var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
            });

            geocoder.getAddress(lnglatXY_1, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    geocoder_CallBack(result, lnglatXY_1);
                }
            });
        }

        function geocoder_CallBack(data, lnglatXY_1) {
            var city = data.regeocode.addressComponent.city, //返回地址描述
                dress = data.regeocode.formattedAddress,
                adcode = data.regeocode.addressComponent.adcode,
                longitude = lnglatXY_1[0], //经度
                latitude = lnglatXY_1[1], //纬度  
                selectJump = Colin.getUrlParam('state'),
                data_1 = {
                    latitude: latitude,
                    longitude: longitude,
                    code: Colin.getUrlParam('code'),
                    address: dress,
                    cityCode: adcode,
                    state: selectJump
                };
            Colin.setLS('city', city);
            Colin.setLS("index", data_1);
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/toIndexPageWX', data_1).then(res => {
                var res = res.data;
                Colin.setLS(res.hasShow, 'hasShow');
                if (res.resultObject == 0) {
                    location.href = 'https://pamap-gr.pingan.com.cn/mobile/html/activity/activity_chezhu.html'
                } else {
                    if (Colin.getUrlParam('shareId') != null) {
                        location.href = 'detail.html?id=' + Colin.getUrlParam('shareId') + '&flag=true';
                    } else {
                        switch (selectJump) {
                            case 'index':
                                location.href = 'index_1.html';
                                break;
                            case 'shop':
                                location.href = 'shopList.html?id=';
                                break;
                            case 'message':
                                location.href = '../garage/chatList.html?role=user';
                                break;
                            case 'individual':
                                location.href = 'userCenter.html';
                            default:
                                location.href = 'index_1.html';
                                break;
                        }
                    }
                }
            })
        }
        //解析定位错误信息
        function onError(data) {
            //common.setData("city", "定位失败")
        }
    },
    anyDoorLocation(type, successFuc, errorFuc) {
        var self = this;
        
        App.call(["getCurrentPosition"], function(data_rym) {
           
            var result = JSON.parse(data_rym),
                latitude = result.latitude,
                longitude = result.longitude,
                data = {
                    latitude: latitude, // 纬度
                    longitude: longitude, // 经度
                    needGeo: true,
                    cityCode: ''
                };
                
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation', data).then(res => {
                successFuc(type, res.data, data);
            })
        }, function(error) {
            Colin.setLS('hasLocation', 'show');
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation').then(res => {
                errorFuc(type, res.data)
            })
        })
    },
    wxLocation(type, successFuc, errorFuc) {
        var self = this;
        this.getCurrentLocation(function(res_wx) {
            var latitude = res_wx.latitude,
                longitude = res_wx.longitude,
                data = {
                    latitude: latitude, // 纬度
                    longitude: longitude, // 经度
                    needGeo: true,
                    cityCode: ''
                };
            if(latitude && longitude){
                AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation', data).then(res => {
                    successFuc(type, res.data, data)
                })
            }else{
                AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation').then(res => {
                    errorFuc(type, res.data)
                })               
            }
        }, function() {
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation').then(res => {
                errorFuc(type, res.data)
            })
        })
    },
    H5Location(type, successFuc, errorFuc) {
        var map, geolocation, self = this;
        map = new AMap.Map("container", {
            resizeEnable: true
        });

        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({
                enableHighAccuracy: true, // 是否使用高精度定位，默认:true
                timeout: 10000, // 超过10秒后停止定位，默认：无穷大
                // buttonOffset: new AMap.Pixel(10,
                // 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                // zoomToAccuracy: true,
                // //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                buttonPosition: 'RB'
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete); // 返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);
        });

        // 解析定位结果
        function onComplete(data) {
            var data_h5 = {
                latitude: data.position.getLat(),
                longitude: data.position.getLng(),
                needGeo: true,
                cityCode: ''
            };
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation', data_h5).then(res => {
                successFuc(type, res.data, data_h5);
            })
        }
        // 解析定位错误信息
        function onError(data) {
            AjaxPlugin.$http.post(Common.domain + '/do/customer/personalInfo/getGeoLocation').then(res => {
                errorFuc(type, res.data)
            })
        }
    },
    sessionLocation(Func) {
        var self = this,
            successFuc = function(type, res, data) {
            
                var cityName = res.cityName,
                    cityCode = res.cityCode,
                    lat = data && data.latitude || '',
                    lng = data && data.longitude || '';
                    //alert('lat:'+lat+',lng:'+lng)
                self.indexPage(type, Func, cityName, cityCode, lng, lat);
            },
            errorFuc = function(type, res, data) {
                //alert(JSON.stringify(res))
                var cityName = res.cityName,
                    cityCode = res.cityCode,
                    lat = data && data.latitude || '',
                    lng = data && data.longitude || '';
                self.indexPage(type, Func, cityName, cityCode, lng, lat);
            };

            if (window.AMap && AMap.Map) {
                init()
            } else {
                var circle = window.setInterval(function() {
                    if (window.AMap && AMap.Map) {
                        clearInterval(circle)
                        init();
                    }
                }, 100)
            }

        function init() {

            switch (Common.ua) {

                case 'anydoor':
                    self.anyDoorLocation('anyDoor', successFuc, errorFuc);
                    break;
                case 'wx':
                    self.wxLocation('Wx', successFuc, errorFuc);
                    break;
                case 'autohomeapp':
                    self.H5Location('autohomeapp', successFuc, errorFuc);
                    break;
                default:
                    self.H5Location('H5', successFuc, errorFuc);
                    break;
            }
        }
    },
    indexPage(index, Func, cityName, cityCode, lng, lat) {
       
        var data = {};
        if (Colin.getUrlParam('currentCityCode')) {
            data.cityCode = Colin.getUrlParam('currentCityCode');
        }
        var url = '';
        if (index == "anyDoor") {
            url = Common.domain + '/do/customer/personalInfo/toIndexPageAnydoor';
 
            App.call(["sendMessage"], function(data_sso) {
                var result_sso = JSON.parse(data_sso);
                var SSOTicket = result_sso.SSOTicket;
                var signature = result_sso.signature;
                var timestamp = result_sso.timestamp;
                SSOTicket = encodeURIComponent(SSOTicket);
                signature = encodeURIComponent(signature);
                timestamp = encodeURIComponent(timestamp);
                data.ssoTicket = SSOTicket;
                data.signature = signature;
                data.timestamp = timestamp;
            }, function(error) {
               //alert("定位失败")
            }, ["getSSOTicket"])
        } else if (index == "Wx") {
            url = Common.domain + '/do/customer/personalInfo/toIndexPageWx'
        } else if (index == "H5") {
            url = Common.domain + '/do/customer/personalInfo/toIndexH5Page'
        } else {
            url = Common.domain + '/do/customer/personalInfo/toIndexPage';
        }
        AjaxPlugin.$http.post(url, data).then(res => {
       
            Func(res.data, cityName, cityCode, lng, lat);
        })
    }
}
export default Locate;
