class Common{
    constructor(){
        this.domain=process.env.NODE_ENV==="production"?"":"https://test-pamap-gr-stg2.pingan.com.cn";
        this.fs=document.getElementsByTagName('html')[0].style.fontSize.replace('px','');
        this.vh=document.documentElement.clientHeight;
        this.vw=document.documentElement.clientWidth;
        this.imgUrl=process.env.NODE_ENV==='production'?'/mobile/customer/dist/static/images/':"/static/images/";
        this.init();
        this.resize=this.resize();

    }
    init(){
        var userAgent = window.navigator.userAgent,
           ua = navigator.userAgent.toLowerCase(),
           match= ua.match(/(anyDoor|micromessenger|autohomeapp)/i)||['H5'];
           switch(match[0].toLowerCase()){
              case 'anydoor':
              this.ua='anydoor';
              break;
              case 'micromessenger':
              this.ua='wx';
              break;
              case 'autohomeapp':
              this.ua='autohomeapp';
              break;
              default:
              this.ua='H5';
              break;
         }
         Date.prototype.format = function(fmt) { //author: meizz 
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "h+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
        document.body.addEventListener('touchmove', function(evt) { 
            if(!evt._isScroller){ 
              evt.preventDefault(); 
            } 
        })
    }
    resize(){
        this.resizeCb=[];
        window.addEventListener('resize',()=>{
            this.vh=document.documentElement.clientHeight;
            this.vw=document.documentElement.clientWidth; 
            this.fs=this.vw/750*75;
            for(var fn of this.resizeCb){
               if(fn)fn()
            }                   
        })
        return (fn)=>{
            this.resizeCb.push(fn)
        }
    }    

}

export default new Common()