import Common from './common.js';
import Vue from "vue"
export const fade = {
    bind(el, binding, vnode) {
        var fs = document.getElementsByTagName('html')[0].style.fontSize.replace('px', ''),
            dom = vnode.context.$refs.fade.$el;
        dom.style.backgroundColor = 'rgba(255,102,0,0)';
        if (Common.ua === 'anydoor') {
            dom.style.borderColor = 'rgba(238,238,238,0)';
        }
        vnode.context.$refs.scroller.$on('on-scroll', (position) => {

            var top = position.top,
                opacity = top / (fs * 3.33);
            if (top < 0){
                 dom.style.visibility="hidden"
            }
            else {
                dom.style.visibility==="hidden"?dom.style.visibility="visible":''
                if (Common.ua === 'anydoor') {
                    dom.style.backgroundColor = 'rgba(255,255,255,' + opacity + ')';
                    dom.style.borderColor = 'rgba(238,238,238,' + opacity + ')';
                } else {
                    dom.style.backgroundColor = 'rgba(255,102,0,' + opacity + ')'; //255,102,0
                }
            }
        })
    }
};

export const scroll=Vue.directive('scroll',{
    bind(el,binding,vnode){
            el.addEventListener('touchstart', function(){ 
              var top = el.scrollTop; 
              var totalScroll = el.scrollHeight; 
              var currentScroll = top + el.offsetHeight; 
              if(top === 0) { 
                el.scrollTop = 1; 
              }else if(currentScroll === totalScroll){ 
                el.scrollTop = top - 1; 
              } 
            }); 
            el.addEventListener('touchmove', function(evt){ 
                var top=el.scrollTop;
                var height=el.offsetHeight;
                
                evt._isScroller = true; 
      
            }); 
    }
})
