import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import store from './store'
Vue.config.productionTip = false

Vue.prototype.$g = {}
import tui from "@/components/common/httpRequest.js"	//工具类
//全局注册，使用方法为this.tui
Vue.prototype.$g.tui = tui
import http from "./request.js" //注入拦截器
Vue.prototype.$g.http = http



App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
