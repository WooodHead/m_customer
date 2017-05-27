<template>
  <a href="javascript:;" class="weui-tabbar__item" :class="{'weui-bar__item_on': $parent.index === currentIndex, 'vux-tabbar-simple': simple}" @click="onItemClick(true)">
    <div class="border"></div>
    <div class="backwhite"></div>
    <div class="weui-tabbar__icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]" v-if="!simple">
      <slot name="icon"></slot>
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
    background:#fff
  } 
  .backwhite{
    position:absolute;
    top:-0.4rem;
    margin-top:1px;
    left:50%;
    transform:translateX(-50%);
    width:1.33rem;
    height:1.306667rem;   
    background:#fff;
    border-radius: 100%;  
  }
  .border{
    position:absolute;
    top:-0.45rem;
    left:50%;
    transform:translateX(-50%) scale(0.5);
    transform-origin:top center;
    width:2.666667rem;
    height:2.666667rem;   
    border:1px solid #C0BFC4;
    border-radius:50%;
    background:#fff;
    z-index:-1;
  }
  .weui-tabbar__icon{
    position:absolute;
    left:50%;
    top:-0.3rem;
    transform:translateX(-50%);
    width:1.066667rem;
    height:1.066667rem;
  }
  .weui-tabbar__label{
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    line-height: 1;
  }
</style>