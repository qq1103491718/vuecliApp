import axios from 'axios'
import Vue from 'vue'
// 设置请求默认路径
axios.defaults.baseURL = process.env.VUE_APP_URL
	
// 请求拦截器
axios.interceptors.request.use(
	config => {
		config.data = JSON.stringify(config.data);
		return config;
	},
	error => {
		return Promise.reject(err);
	}
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
	if(response.data.errCode==1){
		console.log(location)
	}
	return response
}, err => {
	console.log(err)
	let str = ''
	if (err && err.response) {
		switch (err.response.status) {
			case 400:
				str = '错误请求'
				break;
			case 401:
				str = '未授权，请重新登录'
				break;
			case 403:
				str = '拒绝访问'
				break;
			case 404:
				str = '请求错误,没有找到该资源'
				break;
			case 405:
				str = '请求方法未允许'
				break;
			case 408:
				str = '请求超时'
				break;
			case 500:
				str = '服务器端出错'
				break;
			case 501:
				str = '网络未实现'
				break;
			case 502:
				str = '网络错误'
				break;
			case 503:
				str = '服务不可用'
				break;
			case 504:
				str = '网络超时'
				break;
			case 505:
				str = '版本不支持该请求'
				break;
			default:
				str = `连接错误${err.response.status}`
				console.log(`连接错误${err.response.status}`)
		} 
	} else {
		str = '连接到服务器失败,请检查网络问题'
	}
	console.log(str)
	alert(str)
	return Promise.resolve(err.response)
})

Vue.prototype.$http = axios;
export default axios