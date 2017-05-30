import {AjaxPlugin} from 'vux';
import Common from "./common.js"
import Locate from './locate.js'
const Colin={
    tokenList:[],
    setLS (name, obj) {
        if (typeof obj === 'object') {
            obj = JSON.stringify(obj);
        }
        localStorage.setItem(name, obj)
    },
    getLS (key) {
        var data;
        try {
            var obj = localStorage.getItem(key);
            data = JSON.parse(obj)
        } catch (e) {
            data = obj;
        }
        return data
    },
    setSS (name, obj) {
        if (typeof obj === 'object') {
          obj = JSON.stringify(obj);
        }
        sessionStorage.setItem(name, obj)
    },
    getSS (key) {
        var data;
        try {
          var obj = sessionStorage.getItem(key);
          data = JSON.parse(obj)
        } catch (e) {
          data = obj;
        }
        return data
    },
    getToken(){
        return AjaxPlugin.$http.post(Common.domain+"/do/common/getToken")
    },
    setCookie:function(name,val,lifeCircle){
        //name传入的键名  val传入的键值  lifeCircle cookie生命周期(过期时间=cookie的设置时间+lifeCircle)
        var oDate = new Date();//时间对象
        oDate.setDate(new Date().getDate()+lifeCircle);
        document.cookie = name+"="+val+";expires="+oDate+";path=/;domain=.pingan.com.cn";
    },
    getCookie:function(name){
        //name 为想要取到的键值的键名
        var reg = /\s/g;
        var result = document.cookie.replace(reg,"");
        var resultArr = result.split(";");
        for(var i=0;i<resultArr.length;i++){
            var nameArr = resultArr[i].split("=");
            if(nameArr[0]==name){
                return nameArr[1];
            }
        }
    },
    removeCookie:function(name){
        //name为想要删除的Cookie的键名
        var oDate = new Date();//时间对象
        oDate.setDate(new Date().getDate()-1);
        document.cookie = name+"=123;expires="+oDate+";path=/;domain=.pingan.com.cn";
    },
    tokenPost(url,postData,callBack){
        var self=this;
        if(!this.tokenList.length){
            this.tokenList.push({url:url,postData:postData,callBack:callBack})
            run(url,postData,callBack)
        }else{
            this.tokenList.push({url:url,postData:postData,callBack:callBack})
        }

        function run(url,postData,callBack){
             self.getToken().then(data=>{
                AjaxPlugin.$http({
                    url:url,
                    method:'post',
                    data:postData,
                    headers:{'token':data.data.token}
                }).then(data=>{
                    if(callBack)callBack(data.data);
                    self.tokenList.shift();
                    if(self.tokenList.length){
                        var itemData=self.tokenList[0];
                        run(itemData.url,itemData.postData,itemData.callBack);
                    }
                })
             })
        }
    },
    getUrlParam(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },
    scriptLazyLoad(url){
      return new Promise((reslove,reject)=>{
          var script=document.createElement('script');
              script.src=url;
              document.getElementsByTagName('head')[0].appendChild(script);
              script.onload=()=>{
                 reslove()
              }
              script.onerror=()=>{
                 reslove('error')
              }      
      })
    },
    serializeData(obj, traditional) {
        function serialize(params, obj, traditional, scope) {
          var type, array = obj instanceof Array, hash = false
          for (var key in obj) {
            var value = obj[key]
            type = typeof value
            if (scope) key = traditional ? scope :
              scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
            // handle data in serializeArray() format
            if (!scope && array) params.add(value.name, value.value)
            // recurse into nested objects
            else if (type == "array" || (!traditional && type == "object"))
              serialize(params, value, traditional, key)
            else params.add(key, value)
          }
        }
        var params = []
        params.add = function (key, value) {
          if (typeof value == 'function') return
          if (value == null) value = ""
          this.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
        }
        serialize(params, obj, traditional)
        return params.join('&').replace(/%20/g, '+')
  },
  initWxConfig(_url, _jsApiList) {
      AjaxPlugin.$http.post(Common.domain+'/do/wx/generateJSSDKConfig',this.serializeData({url: _url, jsApiList: _jsApiList})).then(res=>{
          var res=res.data;
               if (res && res.resultCode && '0' == res.resultCode) {
                  var result = eval('(' + res.result + ')');
                  wx.config(result);
              }               
      });
   },
   getUrlNoHash() {
        //var hrefStr = document.location.href;
        var urlStr = location.href.split('#')[0];
        return urlStr;

   },
   getCurrentSessionInfo(vm){
      return  AjaxPlugin.$http.post(Common.domain+'/do/customer/common/getCurrentSessionInfo',null).then(data=>{
              return new Promise((reslove,reject)=>{
                var res=data.data;
               //alert(JSON.stringify(res))
                if (res) {
                    var login = Common.ua=='wx'?true:res.userInfo.login,
                          lng=res.locationInfo.gpsX,
                          lat=res.locationInfo.gpsY,
                          cityName = res.locationInfo.cityName,
                          cityCode=res.locationInfo.cityCode,
                          selectCityCode=res.locationInfo.selectCityCode,
                          SHOW_AUTOHOMESECOND=res.rulesMap.SHOW_AUTOHOMESECOND;  
                          vm.updateUserInfo({SHOW_AUTOHOMESECOND:SHOW_AUTOHOMESECOND});
                  
                    if (selectCityCode==null && cityCode == null) {  //返回定位信息为空
                            locate()
                    }else{
                       if(lng==null||lat==null){
                          updateUserInfo({login:login,cityName:cityName,selectCityCode:selectCityCode||cityCode,SHOW_AUTOHOMESECOND:SHOW_AUTOHOMESECOND})
                       }else{
                          updateUserInfo({login:login,cityName:cityName,selectCityCode:selectCityCode,cityCode:cityCode,lng:lng,lat:lat,SHOW_AUTOHOMESECOND:SHOW_AUTOHOMESECOND})
                       }
                       
                    }

                }
                function locate(){   //定位
                     Locate.sessionLocation(function(res,cityName,cityCode,lng,lat){
                        if(lat&&lng){
                            updateUserInfo({login:res.login,cityCode:cityCode,cityName:cityName,lng:lng,lat:lat})
                        }else{
                            updateUserInfo({login:res.login,cityName:cityName,selectCityCode:cityCode})
                        }
                        
                    });    
                }
                function updateUserInfo(options){
                     vm.updateUserInfo(Object.assign({located:true},options))   
                    //存储登陆状态
                    reslove(options)                 
                }                
              })
        })
   },
   setTitle(title){
        var mobile = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(mobile) && mobile.indexOf('safari') == -1) {
            var iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            iframe.setAttribute('src', Common.imgUrl+'menu/default.png');
            var iframeCallback = function() {
                setTimeout(function() {
                    iframe.removeEventListener('load', iframeCallback);
                    document.body.removeChild(iframe);
                }, 0);
            };
            iframe.addEventListener('load', iframeCallback);
            document.body.appendChild(iframe);
        }else{
           document.title=title;
        }
   },
   	exChangeUrl(url) {
//		url = "https://test-pamap-gr.pingan.com.cn:40956" + url;
//		url = "https://test-pamap-gr-stg2.pingan.com.cn" + url;
		return url;
	}

}
export default Colin;