// headers 可选参数,正常的headers值   responseType 可选参数,  timeout  可选参数，设置当前接口的请求的超时时间 默认时间 40000
// url 求情地址  method 请求方式  proxyPrefix  请求代理标记，当有多个时可以设置,默认值 p1：'/api'

let apiConfig = {
	'获取列表': {
		url: "/vue-admin-template/table/list",
		method: "get",
		// proxyPrefix: "p1"
	},
	'获取用户信息': {
		url: "/vue-admin-template/user/info",
		method: "get",
		proxyPrefix: "p2",
		headers: {},
		responseType: "",
		timeout: 10000
	}
}

export default apiConfig
