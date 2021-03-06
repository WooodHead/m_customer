import Colin from '../assets/js/public.js'

export const mutations={
    updateUserInfo(state,options){
        state.userInfo=Object.assign({},state.userInfo,options);
        Colin.setSS('userInfo',state.userInfo)
    },
    updateTabIndex(state,options){
    	state.tabIndex=options;
    },
    updateAreaReset(state,options){
    	state.areaReset=!state.areaReset;
    }
}