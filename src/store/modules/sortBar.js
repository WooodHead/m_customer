

// initial state

const state = {
     text:{
         one:'',
         two:'全部',
         three:'智能排序'
     }
}

// getters
const getters = {
    text: state => state.text
}

// actions
const actions = {

}

// mutations
const mutations = {
    updateText(state,options){
          state.text=Object.assign(state,options)
   }   

}

export default {
  state,
  getters,
  actions,
  mutations
}
