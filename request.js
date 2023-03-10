import http from '@/components/common/tui-request'
import {
	transParams
} from "@/utils/index.js";
//初始化请求配置项
http.create({
	host: 'https://clockin.xfab.cn/g',
	header: {
		// 'content-type': 'application/x-www-form-urlencoded'
		'content-type': 'application/json;charset=UTF-8'
	},
	//concise:true 
})
//请求拦截
http.interceptors.request.use(config => {
	let token = uni.getStorageSync('thorui_token');
	if (config.header) {
		config.header['Authorization'] = "Bearer " + token
	} else {
		config.header = {
			'Authorization': "Bearer " + token
		}
	}
	// get请求映射params参数
	if (config.method === 'GET' && config.data) {
		let url = config.url + '?' + transParams(config.data);
		url = url.slice(0, -1); //把最后一个&符截去
		config.data = {};
		config.url = url;
	}
	return config
})
//响应拦截
http.interceptors.response.use(response => {
	if (response.statusCode == 200) {
		if (response.data.code == 200) {
			return response.data;
		}
		if (response.data.code == 500) {
			return response.data;
		} else {
			throw response.data.message;
		}
	} else {
		throw "服务器错误";
	}

	//TODO
	//return response


})
export default http
