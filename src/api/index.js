import axios from "@/utils/request"
import helper from "@/utils/urlParamHelper"
import LocalStorageHelp from "@/utils/local-storage-help"
import apiConfig from "./apiConfig"


async function apiAxios(method, url, params, ...arg) {
	// console.log('apiAxios=>', method, url, params,  arg)
	let { headers, responseType, timeout } = arg

	let tempheaders = {
		"Content-Type": "application/json;charset=utf-8",
		token: window.sessionStorage.getItem("token")
	}
	if (headers && headers) {
		tempheaders = Object.assign({}, tempheaders, headers)
	}
	let option_ = {
		method: method,
		// 拼接参数
		url:
			method === "GET" || method === "DELETE"
				? helper.queryString(url, params)
				: url,
		data: method === "POST" || method === "PUT" ? params : null,
		// baseURL: '/api',
		timeout: timeout || 40000,
		headers: tempheaders,
		withCredentials: false
	}
	if (responseType && responseType) {
		option_["responseType"] = responseType
	}

	const res = await axios(option_)

	return res
}

const http = {
	get: async function(url, params, ...arg) {
	  return await apiAxios("GET", url, params, ...arg)
	},
	post: async function(url, params, ...arg) {
		return await apiAxios("POST", url, params, ...arg)
	},
	put: async function(url, params, ...arg) {
		return await apiAxios("PUT", url, params, ...arg)
	},
	delete: async function(url, params, ...arg) {
		return await apiAxios("DELETE", url, params, ...arg)
	}
}



const proxyPrefix_ = {
	p2: "/log",
	p1: "/api"
}

const API = {
	async API_getDataForDB(interfaceName, data, ...args) {
		const { url, method, proxyPrefix, ...args_ } = apiConfig[interfaceName]
		const url_ = proxyPrefix_[proxyPrefix || "p1"] + url
		const tempParm = Object.assign({}, { ...args_ }, { ...args })
		return await http[method](url_, data, ...tempParm)
	},
	apiConfig
}

export default API