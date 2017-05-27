<template>
  <div id="app">
        <keep-alive v-if="!$route.meta.notKeepAlive">
        <router-view></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.notKeepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
	components: {
	
	}
}

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '../static/css/common.less';
@import '../static/css/vuxReset.less';


</style>
