webpackJsonp([14],{186:function(e,t,r){var c=r(10)(r(286),r(427),null,null);e.exports=c.exports},286:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{coLock:!1,currentVal:"",myValue:[]}},props:{value:"",brand:"",placeholder:{type:String,default:""},id:"",clearType:{type:String,default:"clearNoNum"}},methods:{clear:function(){"clearNoNum"==this.clearType?this.clearNoNum():"clearNum"==this.clearType?this.clearNum():"clearSpecial"==this.clearType&&this.clearSpecial()},onFocus:function(){this.$refs.input.style.borderColor="#FF6600"},onBlur:function(){this.$refs.input.style.borderColor="#e2e4e6"},compositionstart:function(){alert(1),this.coLock=!0},compositionend:function(){console.log(2),this.coLock=!1},clearNoNum:function(){if(!this.coLock){var e=this.currentVal+"";e=e.replace(/[^\d.]/g,""),e=e.replace(/^\./g,""),e=e.replace(/\.{2,}/g,"."),e=e.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e=e.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),e.indexOf(".")<0&&""!=e&&(e=parseFloat(e)),this.currentVal=e,this.$emit("input",e)}},clearNum:function(){if(!this.coLock){var e=this.currentVal+"";e=e.replace(/[^\d]/gi,""),e=e.replace(/(^\s+)|\s+$/g,""),this.currentVal=e,this.$emit("input",e)}},clearSpecial:function(){if(!this.coLock){var e=this.currentVal+"";e=e.replace(/<\/?[^>]*>/g,""),this.currentVal=e,this.$emit("input",e)}}},mounted:function(){this.currentVal=this.brand},watch:{brand:{handler:function(e,t){""==e&&(this.$refs.input.value="")},deep:!0},currentVal:function(e){this.myValue.push(e),e&&this.clear()}}}},427:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.currentVal,expression:"currentVal"}],ref:"input",staticStyle:{"margin-top":"50px"},attrs:{id:e.id,type:"text",name:"",placeholder:e.placeholder},domProps:{value:e.currentVal},on:{blur:e.onBlur,compositionstart:e.compositionstart,compositionend:e.compositionend,focus:e.onFocus,input:function(t){t.target.composing||(e.currentVal=t.target.value)}}})},staticRenderFns:[]}}});
//# sourceMappingURL=14.b6ec6e6e1212520e7618.js.map