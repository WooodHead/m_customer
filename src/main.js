// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import { AjaxPlugin, AlertPlugin } from 'vux'
import XHeader from './components/vux/src/components/x-header'
import Loading from './components/vux/src/components/loading'
import AMap from 'vue-amap'
import App from './App'
import router from './router'
import Common from './assets/js/common.js'
import Colin from './assets/js/public.js'

// for Vue 2.0
import VueLazyload from 'vue-lazyload'
import store from './store'
import {
    scroll
} from './assets/js/directives.js'

import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

Vue.use(VueLazyload, {
    error: '../static/images/menu/default.png',
    loading: '../static/images/menu/default.png',
    try: 1 // default 1
})
Vue.use(AjaxPlugin);
Vue.use(AlertPlugin);
//Vue.use(new Common(AjaxPlugin))
Vue.component('x-header', XHeader)
Vue.component('loading', Loading)


Vue.use(AMap);
AMap.initAMapApiLoader({
    key: '7523b947f98adf1f471a809086e094c4',
    plugin: ['CircleEditor']
});
FastClick.attach(document.body)




/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
