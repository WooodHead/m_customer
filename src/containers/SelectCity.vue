<template>

	<input :id="id" style="margin-top:50px" ref='input' v-model="currentVal" @blur="onBlur" @compositionstart="compositionstart" @compositionend='compositionend'  @focus="onFocus" type="text" name=""   :placeholder="placeholder" />

</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				coLock:false,
				currentVal:'',
				myValue:[]
			}
		},
		props: {
			value: '',
			brand:'',
			placeholder: {
				type: String,
				default: ''
			},
			id:'',
			clearType: {
				type: String,
				default: 'clearNoNum'
			}
		},
		methods: {
			clear() {

				if(this.clearType == 'clearNoNum') {
					this.clearNoNum()
				} else if(this.clearType == 'clearNum') {
					this.clearNum()
				} else if(this.clearType == 'clearSpecial') {
					this.clearSpecial()
				}
			},
			onFocus(){
				this.$refs.input.style.borderColor = '#FF6600';
			},
			onBlur(){
				this.$refs.input.style.borderColor = '#e2e4e6';

			},
			compositionstart(){
				alert(1)
				this.coLock=true
			},
			compositionend(){
				console.log(2)
				this.coLock=false
			},
			clearNoNum() {
       
				if(!this.coLock){
       
					let value = this.currentVal+'';
					value = value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符  
					
					value = value.replace(/^\./g, ""); //验证第一个字符是数字而不是
	
					value = value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的     
	
					value = value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
	
					value = value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数   
	
					if(value.indexOf(".") < 0 && value != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额  
	
						value = parseFloat(value);
					}
					this.currentVal = value;
					this.$emit('input', value)
				}	
			},
			clearNum() {
				if(!this.coLock){	
					let value = this.currentVal+'';
					value=value.replace(/[^\d]/ig,'');
					value=value.replace(/(^\s+)|\s+$/g,'');
					this.currentVal = value;
					this.$emit('input', value)
				}	
			},
			clearSpecial() {
				if(!this.coLock){	
					let value = this.currentVal+'';
					
					value=value.replace(/<\/?[^>]*>/g,'');
					this.currentVal = value;
					this.$emit('input', value)
				}	
			},
		},
		mounted(){
			this.currentVal=this.brand;
		},
		watch:{
			brand:{
				handler(newValue,oldValue){
					if(newValue==""){
						this.$refs.input.value=""
					}
				},
				deep:true
			},
			currentVal(newVal){

				this.myValue.push(newVal)
				if(newVal){
					this.clear()
				}
				
			}
			
		}
	}
</script>