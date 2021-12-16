// 说明： 当前文件为localStorage的帮助类，包含localStorage的增删查功能，并提供响应的键值变化检测

/**
 * localStorage的帮助类
 * 提供get、set、removeitem、removeAll、localStorageChange 功能
 */
class LocalStorage {
	/**
	 * 获取指定key的数据
	 * @param {String} key localStorage对象的key
	 * @returns {Object} 返回一个对象，如：{name:'',gae:''}
	 */
	p_get(key) {
		return JSON.parse(localStorage.getItem(key))
	}
	/**
	 * 设置一个新的
	 * @param {String} key  localStorage对象的key
	 * @param {Object} value localStorage对象的值， 例如：{name:'',gae:''}
	 * @returns {}
	 */
	p_set(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	}
	/**
	 * 删除指定key 的数据
	 * @param {String} key  localStorage对象的key
	 * @returns {}
	 */
	p_removeitem(key) {
		localStorage.removeItem(key)
	}
	/**
	 * 删除所有缓存的数据
	 * @returns {}
	 */
	p_removeAll() {
		localStorage.clear()
	}

	/**
	 * 注册监听localStorage 的变化事件
	 * @param {*} fun 注册事件  参数为： key  新值    老值
	 * @returns {}
	 */
	p_localStorageChange(fun) {
		let showStorage = function(e) {
			if (!e) {
				e = window.event
			}
			//  e.storageArea  e.url
			fun(e.key, e.newValue, e.oldValue)
		}
		if (window.addEventListener) {
			window.addEventListener("storage", showStorage)
		} else {
			window.attachEvent("onstorage", showStorage)
		}
	}
}

export default new LocalStorage();
