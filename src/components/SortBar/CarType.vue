<template>
        <div class="chooseCarType-contain">
             <div class="scroll-contain" v-scroll>
                  <div class="hot-area clearfix" id="fixed-hot" >
                     <p>热门</p>
                     <ul>
                         <li class="v-center" v-for="item in hotBrand" @click="handleSelect(item.pid,item.carName)">
                              <img :src="imgUrl+item.img"/>
                              <span>{{item.carName}}</span>
                         </li>

                     </ul>
                 </div>
                 <dl class="total-area" v-for="item in allCarList" :id="'fixed-'+item.pid">
                     <dt>{{item.pid}}</dt>
                     <dd class="flex h-center" v-for="_item in item.list" @click="handleSelect(_item.pid,_item.carName)">
                         <img :src="imgUrl+_item.img" alt=""/>
                         <span>{{_item.carName}}</span>
                     </dd>
                 </dl>                

             </div>
             <ul class='index-area v-center'  v-scroll-to>
                 <li data-id="hot">热门</li>
                 <li :data-id="item.pid" v-for="item in allCarList" :id="item.pid">{{item.pid}}</li>
             </ul>
         </div>
</template>
<script>
import Common from '../../assets/js/common.js';
    export default{
       data(){
          return{
                imgUrl:Common.imgUrl,
                hotBrand:[
                    {'carName':'大众','img':'carlogo/DZA.png','pid':'DZA'},
                    {'carName':'福特','img':'carlogo/FTB.png','pid':'FTB'},
                    {'carName':'丰田','img':'carlogo/FTA.png','pid':'FTA'},
                    {'carName':'本田','img':'carlogo/BTA.png','pid':'BTA'},
                    {'carName':'路虎','img':'carlogo/LHB.png','pid':'LHB'},
                    {'carName':'奥迪','img':'carlogo/ADA.png','pid':'ADA'},
                    {'carName':'奔驰','img':'carlogo/MSB.png','pid':'MSB'},
                    {'carName':'宝马','img':'carlogo/BMA.png','pid':'BMA'},
                    {'carName':'别克','img':'carlogo/BKA.png','pid':'BKA'},
                    {'carName':'现代','img':'carlogo/XDA.png','pid':'XDA'},
                    {'carName':'雪佛兰','img':'carlogo/XFA.png','pid':'XFA'},
                    {'carName':'起亚','img':'carlogo/QYA.png','pid':'QYA'},
                    {'carName':'比亚迪','img':'carlogo/BYA.png','pid':'BYA'},
                    {'carName':'长城','img':'carlogo/CCA.png','pid':'CCA'},
                    {'carName':'吉利','img':'carlogo/JLA.png','pid':'JLA'},
                    {'carName':'长安','img':'carlogo/CAA.png','pid':'CAA'},
                ],
                allCarList:[],
                selectedCar:{},
          }
       },
       props:{
        value:[String,Object]
       },
       directives:{
          scrollTo:{
            bind(el,binding,vnode){
                el.addEventListener('click', function(e){
                    if(e.target.tagName=='LI'){
                        var id='fixed-'+e.target.dataset.id,
                       dom=document.getElementById(id),
                       scrollTop=dom.offsetTop,
                       container=document.getElementsByClassName('scroll-contain')[0];
                       container.scrollTop=scrollTop;                     
                    }

                }, false)
            }
          }
       },
       mounted(){

       },
       created(){
         this.handleInit()
       },
       methods:{
           handleInit(){
              var arr = ["安驰|ACA|anchi|ac","奥迪|ADA|aodi|ad","阿尔法.罗米欧|AEA|aerfaluomiou|aeflmo","阿库拉|AKA|akula|akl","奥克斯|AKD|aokesi|aks","奥路卡|ALC|aoluka|alk","阿斯顿马丁|ASA|asidunmading|asdmd","奥斯莫比尔|ASB|aosimobier|asmbe","比德文|BDJ|bidewen|bdw","北方|BFA|beifang|bf","保斐利|BFG|baofeili|bfl","北京|BJA|beijing|bj","北极星|BJC|beijixing|bjx","布加迪|BJF|bujiadi|bjd","宝骏|BJG|baojun|bj","别克|BKA|bieke|bk","宝龙|BLA|baolong|bl","北旅|BLB|beilv|bl","宾利|BLC|binli|bl","波罗乃兹|BLD|boluonaizi|blnz","宝马|BMA|baoma|bm","百年世纪|BNA|bainianshiji|bnsj","保时捷|BSA|baoshijie|bsj","本田|BTA|bentian|bt","宝沃|BWB|baowo|bw","比亚迪|BYA|biyadi|byd","标致|BZA|biaozhi|bz","长安|CAA|changan|ca","长城|CCA|changcheng|cc","猎豹|CFA|liebao|lb","昌河|CHA|changhe|ch","昌佳|CJL|changjia|cj","大迪|DDA|dadi|dd","大地|DDB|dadi|dd","大发|DFA|dafa|df","东风|DFC|dongfeng|df","东风风神|DFM|dongfengfengshen|dffs","东风小康|DFO|dongfengxiaokang|dfxk","东方曼|DFR|dongfangman|dfm","东风雷诺|DFU|dongfengleinuo|dfln","大马|DMC|dama|dm","东铭|DME|dongming|dm","东南|DNA|dongnan|dn","达契亚|DQA|daqiya|dqy","道奇|DQB|daoqi|dq","大通|DTB|datong|dt","大宇|DYA|dayu|dy","典悦|DYN|dianyue|dy","大众|DZA|dazhong|dz","泰汽|FCF|taiqi|tq","福达|FDA|fuda|fd","富迪|FDB|fudi|fd","飞碟|FDC|feidie|fd","伏尔加|FEA|fuerjia|fej","飞鹤|FHG|feihe|fh","法拉利|FLA|falali|fll","飞球|FQA|feiqiu|fq","法瑞德|FRA|faruide|frd","菲斯科|FSJ|feisike|fsk","丰田|FTA|fengtian|ft","福特|FTB|fute|ft","福田|FTC|futian|ft","菲亚特|FYB|feiyate|fyt","光冈|GGA|guanggang|gg","广汽|GQB|guangqi|gq","广生|GSC|guangsheng|gs","广通|GTD|guangtong|gt","广通客车|GTL|guangtongkeche|gtkc","贵州航天|GZA|guizhouhangtian|gzht","观致|GZF|guanzhi|gz","中兴|HBA|zhongxing|zx","黑豹|HBB|heibao|hb","华北|HBE|huabei|hb","华川|HCE|huachuan|hc","哈飞|HFA|hafei|hf","皇冠|HGA|huangguan|hg","黄海|HHA|huanghai|hh","汉江|HJA|hanjiang|hj","悍马|HMA|hanma|hm","海马|HME|haima|hm","华普|HPA|huapu|hp","红旗|HQA|hongqi|hq","华骐|HQF|huaqi|hq","华颂|HSQ|huasong|hs","华泰元田|HTE|huataiyuantian|htyt","航天|HTJ|hangtian|ht","华泰|HTP|huatai|ht","华翔富奇|HXB|huaxiangfuqi|hxfq","红星|HXF|hongxing|hx","宏远|HYP|hongyuan|hy","吉奥|JAA|jiao|ja","捷豹|JBA|jiebao|jb","金杯|JBB|jinbei|jb","金程|JCE|jincheng|jc","解放|JFA|jiefang|jf","俊风|JFJ|junfeng|jf","金冠|JGA|jinguan|jg","江淮|JHA|jianghuai|jh","江环|JHF|jianghuan|jh","吉利|JLA|jili|jl","江铃|JLD|jiangling|jl","金龙|JLF|jinlong|jl","金旅|JLG|jinlv|jl","吉姆西|JMA|jimuxi|jmx","江南|JNA|jiangnan|jn","吉普|JPA|jipu|jp","金沙田|JSL|jinshatian|jst","江西钧天|JXH|jiangxijuntian|jxjt","江西五十铃|JXL|jiangxiwushiling|jxwsl","凯迪拉克|KDA|kaidilake|kdlk","康迪|KDE|kangdi|kd","克莱斯勒|KLA|kelaisile|klsl","科尼赛克|KNC|kenisaike|knsk","开瑞|KRC|kairui|kr","蝰蛇|KSB|kuishe|ks","凯特|KTA|kaite|kt","卡威|KWE|kawei|kw","凯翼|KYE|kaiyi|ky","兰博基尼|LBA|lanbojini|lbjn","拉达|LDA|lada|ld","陆地方舟|LDL|ludifangzhou|ldfz","力帆|LFA|lifan|lf","陆风|LFB|lufeng|lf","罗孚|LFC|luofu|lf","路特斯(莲花)|LHA|lutesilianhua|ltslh","路虎|LHB|luhu|lh","雷克萨斯|LKA|leikesasi|lkss","林肯|LKB|linken|lk","铃木|LMA|lingmu|lm","雷诺|LNA|leinuo|ln","理念|LNC|linian|ln","劳斯莱斯|LSA|laosilaisi|lsls","庐山|LSD|lushan|ls","朗世|LSR|langshi|ls","凌扬|LYO|lingyang|ly","绿野|LZN|lvye|ly","领志|LZO|lingzhi|lz","迈巴赫|MBA|maibahe|mbh","迈迪|MDI|maidi|md","摩根|MGA|mogen|mg","名爵|MJB|mingjue|mj","迈凯轮|MKF|maikailun|mkl","迷你|MNA|mini|mn","玛莎拉蒂|MSA|mashaladi|msld","奔驰|MSB|benchi|bc","美亚|MYA|meiya|my","梅亿|MYC|meiyi|my","马自达|MZA|mazida|mzd","南汽|NQA|nanqi|nq","纳智捷|NZA|nazhijie|nzj","欧宝|OBA|oubao|ob","欧铃|OLB|ouling|ol","旁迪克|PDA|pangdike|pdk","帕格尼|PGA|pageni|pgn","启辰|QCB|qichen|qc","庆铃|QLA|qingling|ql","青年莲花|QNA|qingnianlianhua|qnlh","全球鹰|QQF|quanqiuying|qqy","奇瑞|QRA|qirui|qr","起亚|QYA|qiya|qy","日产|RCA|richan|rc","润长|RCE|runzhang|rz","如虎|RHB|ruhu|rh","瑞麒|RQA|ruiqi|rq","荣威|RWA|rongwei|rw","赛昂|SAB|saiang|sa","绅宝|SBA|shenbao|sb","斯巴鲁|SBB|sibalu|sbl","沈飞|SFB|shenfei|sf","时风|SFC|shifeng|sf","曙光|SGA|shuguang|sg","双环|SHA|shuanghuan|sh","上海|SHJ|shanghai|sh","世爵|SJU|shijue|sj","斯柯达|SKA|sikeda|skd","三菱|SLA|sanling|sl","少林|SLB|shaolin|sl","双龙|SLD|shuanglong|sl","松辽|SLE|songliao|sl","圣路|SLI|shenglu|sl","思铭|SMG|siming|sm","赛欧SPRINGO|SOA|saiou|so","赛帕|SPC|saipa|sp","思派朗|SPE|sipailang|spl","舜泰|STQ|shuntai|st","首望|SWK|shouwang|sw","三星|SXB|sanxing|sx","水星|SXI|shuixing|sx","通宝|TBA|tongbao|tb","泰卡特|TKB|taikate|tkt","天马|TMA|tianma|tm","特斯拉|TSH|tesila|tsl","腾势|TSI|tengshi|ts","通田|TTB|tongtian|tt","土星|TXE|tuxing|tx","五菱|TYB|wuling|wl","天越|TYR|tianyue|ty","潍柴汽车|WCD|weichaiqiche|wcqc","沃尔沃|WEA|woerwo|wew","万丰|WFA|wanfeng|wf","威麟|WLG|weilin|wl","五十铃|WSA|wushiling|wsl","英菲尼迪|WXA|yingfeinidi|yfnd","威兹曼|WZF|weiziman|wzm","现代|XDA|xiandai|xd","仙达|XDG|xianda|xd","雪佛兰|XFA|xuefolan|xfl","新凯|XKA|xinkai|xk","夏利|XLA|xiali|xl","星锐|XRC|xingrui|xr","雪铁龙|XTA|xuetielong|xtl","西亚特|XYA|xiyate|xyt","羊城|YCA|yangcheng|yc","元创|YCO|yuanchuang|yc","跃迪|YDT|yuedi|yd","跃进|YJC|yuejin|yj","御捷|YJK|yujie|yj","英克莱|YKF|yingkelai|ykl","英伦|YLK|yinglun|yl","延龙方舟|YLR|yanlongfangzhou|ylfz","野马|YMB|yema|ym","云雀|YQA|yunque|yq","依维柯|YWA|yiweike|ywk","扬子|YZA|yangzi|yz","知豆|ZDD|zhidou|zd","中华|ZHA|zhonghua|zh","中顺|ZHC|zhongshun|zs","中联|ZLC|zhonglian|zl","之诺|ZNE|zhinuo|zn","众泰|ZTK|zhongtai|zt","中意|ZYA|zhongyi|zy","中誉|ZYI|zhongyu|zy"];            
               var allCarList=[],_allCarList=[],
                   regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d\.\-\(\)\w]+)\|(\w+)\|(\w)+\|(\w)\w*$/;
                 for (var i = 0,len=arr.length; i < len; i++) {
                   var match = regEx.exec(arr[i]),
                       letter = match[4].toUpperCase(),
                       data={'carName':match[1],'img':'carlogo/'+match[2]+'.png','id':match[2]};
                    if(allCarList[letter]){
                        allCarList[letter].push(data)
                    }else{
                        allCarList[letter]=[];
                        allCarList[letter].push(data);
                    }
                }
                var sortKeys=Object.keys(allCarList).sort();
                this.locateSelectList2=sortKeys;
                for(var key in sortKeys){
                   _allCarList.push({pid:sortKeys[key],list:allCarList[sortKeys[key]]})
                }
                this.allCarList=_allCarList;
           },
           handleSelect(id,name){
                var trademarkId=id||'',
                    carName=name;

                this.selectedCar.trademarkId==trademarkId?trademarkId='repeat'+Math.random():this.selectedCar={trademarkId:trademarkId,carName:carName};
                this.$emit('input',{trademarkId:trademarkId,carName:carName})
           }
       },
       watch:{
         value(newVal){
            if(newVal.trademarkId.indexOf('repeat')==-1){
               this.selectedCar=newVal;              
            }

         },
       }
    }
</script>
<style lang='less' scoped>
@import '../../../static/css/variable.less';
  .chooseCarType-contain{   
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background:#fff;
  padding-right:36px;
  font-size:16px;
  line-height: 1.2;
  z-index:9999;
  .scroll-contain{
    height:100%;
    overflow: scroll;
    -webkit-overflow-scrolling:touch;
  }
  .hot-area{
    font-size:12px;
    p{padding:10px;background:#fafafa};
    ul{
       padding:0 0.4rem 0.4rem;
       overflow:hidden;
       background:#f0f3f5;
       li{
          .borderbox;
          margin:0.266667rem 0 0;
          padding:0 0.066667rem;
          float:left;
          width:25%;
          span{
             display: block;
             width:100%;
             margin-top:0.133333rem;
             text-align: center;
             border: 1px solid #e2e4e6;
             border-radius: 15px;
             line-height: 0.64rem;
          }
       }
    }
    
  }
  .total-area{
    dt{
      font-size:12px;
      background:#fafafa;
      padding:10px;
      border-bottom:1px solid @c5;
    }    
    dd{
       height:1.28rem;
       border-bottom:1px solid @c5;
       margin-left:10px;
       img{
        width:1.466667rem;
        margin-right:0.133333rem;
        height:auto;
       }
       span{
        line-height: 1;
       }
    }

  }
  .index-area{
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      width:36px;
      border-left:1px solid @c5;
      font-size:12px;
      z-index:9999;
      li{
        width:100%;
        text-align: center;
        padding:2px 0;
      }
  }

}  
</style>