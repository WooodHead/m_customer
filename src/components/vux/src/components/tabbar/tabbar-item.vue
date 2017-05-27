<template>
  <a href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on': $parent.index === currentIndex, 'vux-tabbar-simple': simple}" @click="onItemClick(true)">
    <div class="weui-tabbar__icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]" v-if="!simple">
      <slot name="icon-active" v-if="$parent.index === currentIndex"></slot> 
      <slot name="icon" v-else></slot>
      <sup><badge v-if="badge" :text="badge"></badge></sup>
    </div>
    <p class="weui-tabbar__label">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
import { childMixin } from '../../mixins/multi-items'
import Badge from '../badge'

export default {
  components: {
    Badge
  },
  created () {
    if (!this.$slots.icon) {
      this.simple = true
    }
  },
  mixins: [childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  data () {
    return {
      simple: false
    }
  }
}
</script>
<style lang="less" scoped>
 .weui-tabbar__item{

 }
 .weui-tabbar__label{
   line-height: 0.56rem;
 }
  .weui-tabbar__icon{
    width:0.56rem!important;
    height:0.56rem!important;
  }

</style>