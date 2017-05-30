import Vue from 'vue'
import Vuex from 'vuex'
import {state}  from './state'
import {mutations} from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import sortBar from './modules/sortBar.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
  	sortBar
  }
});