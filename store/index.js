import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		tabBar: [{

				"pagePath": "base/index/index",
				"text": "首页",
				"iconPath": "/static/images/home.svg",
				"selectedIconPath": "/static/images/ahome.svg",
				"hump": false,
				"num": 0,
				"isDot": false,
				"verify": true
			},
			{

				"pagePath": "service/index/index",
				"text": "业务",
				"iconPath": "/static/images/card.svg",
				"selectedIconPath": "/static/images/acard.svg",
				"hump": false,
				"num": 0,
				"isDot": false,
				"verify": true
			},
			{
				"pagePath": "pages/recharge/recharge",
				"text": "充值",
				"iconPath": "/static/images/recharge.svg",
				"selectedIconPath": "/static/images/arecharge.svg",
				"hump": true,
				"num": 0,
				"isDot": false,
				"verify": true
			},
			{
				"pagePath": "chart/index/index",
				"text": "报表",
				"iconPath": "/static/images/chart-bar.svg",
				"selectedIconPath": "/static/images/achart-bar.svg",
				"hump": false,
				"num": 0,
				"isDot": false,
				"verify": true
			},
			{
				"pagePath": "pages/profile/profile",
				"text": "设置",
				"iconPath": "/static/images/setup.svg",
				"selectedIconPath": "/static/images/asetup.svg",
				"hump": false,
				"num": 0,
				"isDot": false,
				"verify": true
			}
		],
		tabBarIndex: 0
	},
	mutations: {
		changeTabBar(state, payload) {
			if (payload) {
				state.tabBarIndex = payload.index
			}
		}
	},
	actions: {

	}
})

export default store
