import Common from '../common.js';
export const scroll={
    data(){
       return{
          hasMoreLoad:true
       }
    },
    computed:{
        height(){
           return -Common.fs*1.33333+'';
        }
    },
    methods:{
        scrollReset(list,pageData){
            //list=[];无效
            list.length=0;
            pageData.page=1;
            this.hasMoreLoad=true;
            this.status.pullupStatus='enabled';
            this.$refs.scroller.reset({top:0})
        },
        scrollNext(){
            this.$nextTick(()=>{
               this.$refs.scroller.reset()
               this.status.pullupStatus='default'
               setTimeout(()=>{
                  this.showLoading?this.showLoading=false:'';
               })
            })
        },
        scrollEnd(){
            this.hasMoreLoad=false;
            this.$nextTick(()=>{
               this.status.pullupStatus='disabled';
               setTimeout(()=>{
                  this.showLoading?this.showLoading=false:'';
               })
               this.$refs.scroller.reset()
            })

            
        }
    }
}
export const link={
   methods:{
       handleLink(url,fn){
          if(fn)fn();
          if(url)window.location.href=url;
       },
       replaceLink(url,fn){
          if(fn)fn();
          if(url)window.location.replace(url);        
       }
   }
}