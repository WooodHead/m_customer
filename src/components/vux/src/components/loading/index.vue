<template>
  <div class="weui-loading_toast" v-show="show">
    <div class="weui-mask_transparent" :style="{opacity:transparent?'0':'1'}" @touchmove.prevent></div>
    <div class="weui-toast" :style="{ position: position }">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{ text || '加载中' }}<slot></slot></p>
    </div>
  </div>
</template>

<i18n>
loading:
  en: loading
  zh-CN: 加载中
</i18n>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type:String,
      default:''
    },
    transparent:{
      type:Boolean,
      default:true
    },
    position: String
  },
  created () {

    this.show = this.value
  },
  data () {
    return {
      show: false
    }
  },
  methods:{

  },
  watch: {
    value (val) {
      this.show = val;

    },
    show (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_toast';
@import '../../styles/weui/widget/weui-loading/weui-loading.less';
.weui-mask_transparent{
  background:#fff
}
.weui-icon_toast.weui-loading {
  margin: 30px 0 0;
  width: 38px;
  height: 38px;
  vertical-align: baseline;
  display: inline-block;
}
</style>
