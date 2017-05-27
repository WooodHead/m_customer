import Vue from 'vue'
import Router from 'vue-router'
import Colin from '../assets/js/public.js'

Vue.use(Router)

const router=new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: function(reslove) {
            require(['../containers/Index.vue'], reslove)
        },
        redirect:'/home',
        children: [{
            path: '/home',
            name: 'home',
            component: function(reslove) {
                require(['../containers/Home.vue'], reslove)
            },
            meta:{title:"汽车服务"}
            
        }, {
            path: '/shopList',
            name: 'shopList',
            component: function(reslove) {
                require(['../containers/ShopList.vue'], reslove)
            },
            meta:{title:"商户列表"},
            children: [{
                path: 'map',
                name: 'shopListMap',
                component: function(reslove) {
                    require(['../containers/ShowListMap.vue'], reslove)
                },
            }]
        },{
            path: '/personal',
            name: 'personal',
            component: function(reslove) {
                require(['../containers/Personal.vue'], reslove)
            },
            meta:{title:"个人中心"}
        }]
    }, {
        path: '/navigation',
        name: 'navigation',
        component: function(reslove) {
            require(['../containers/Navigation.vue'], reslove)
        }
    }, {
        path: '/locateCity',
        name: 'locateCity',
        component: function(reslove) {
            require(['../containers/LocateCity.vue'], reslove)
        }
    }, {
        path: '/search',
        name: 'search',
        component: function(reslove) {
            require(['../containers/Search.vue'], reslove)
        },
        meta:{title:"商户列表"}
    },{
        path: '/test',
        name: 'search',
        component: function(reslove) {
            require(['../containers/SelectCity.vue'], reslove)
        }
    },{
		path: '/illegal',
		name: 'IllegalIndex',
		component: function(reslove) {
			require(['../containers/illegal/IllegalIndex.vue'], reslove)
		},
		children: [{
			path: '/illegal/illegalSearch',
			name: 'illegalSearch',
			description: '选车',
			component: function(reslove) {
				require(['../containers/illegal/IllegalSearch.vue'], reslove)
			}
		}, {
			path: '/illegal/illegalDetail',
			name: 'illegalDetail',
			description: '违章列表',
			component: function(reslove) {
				require(['../containers/illegal/IllegalDetail.vue'], reslove)
			}
		},{
			path: '/illegal/illegalSubmit',
			name: 'illegalDetail',
			description: '提交订单',
			component: function(reslove) {
				require(['../containers/illegal/IllegalSubmit.vue'], reslove)
			}
		},{
			path: '/illegal/illegalPayment',
			name: 'illegalPayment',
			description: '支付',
			component: function(reslove) {
				require(['../containers/illegal/IllegalPayment.vue'], reslove)
			}
		},{
			path: '/illegal/illegalStatus',
			name: 'illegalStatus',
			description: '查询订单列表',
			component: function(reslove) {
				require(['../containers/illegal/IllegalStatus.vue'], reslove)
			}
		}]
	}]
})
export default router
router.beforeEach((to,from,next)=>{
    if(to.meta.title)Colin.setTitle(to.meta.title);
    next()
})

