<template>
    <div class="contain">
    <div class="back-button" @touchstart="routeBack"></div>
	<iframe class="iframe" :src="
'https://uri.amap.com/navigation?from='+fromPoint+',startpoint&to='+toPoint+',endpoint&mode=car&policy=1&src=mypage&coordinate=gaode&callnative=0'">
	</iframe>
	</div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex';
	export default{
		data(){
			return{
                fromPoint:'',
                toPoint:''
			}
		},
		computed:{
			...mapGetters(['userInfo'])
		},
		methods:{
			routeBack(e){
				e.preventDefault;
				setTimeout(()=>{
					this.$router.back()
				},300)
				
			}
           
		},
		activated(){
           this.fromPoint=`${this.userInfo.lng},${this.userInfo.lat}`;
           this.toPoint=`${this.$route.query.gpsX},${this.$route.query.gpsY}`;
		}
	}
</script>
<style lang="less" scoped>
.contain{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
}
.back-button{
	position:absolute;
	top:0;
	left:0;
	height:44px;
	width:1.6rem;
	background:#f1f1f1;
	z-index:99;
}
.back-button::after{
	content:'';
	display: block;
	width:45px;
	height:44px;
	background:url(../../static/images/icon/icon-leftArrow.png) center center no-repeat;
	background-size:70% 70%;
}
iframe{
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	border:none;
}
</style>