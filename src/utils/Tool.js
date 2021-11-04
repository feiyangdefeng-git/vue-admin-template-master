class Tool {
	getNowFormatDate() {
		var date = new Date()
		var year = date.getFullYear()
		var month = date.getMonth() + 1
		if (month >= 1 && month <= 9) {
			month = "0" + month
		}
		var currentdate = year + month
		return currentdate
	}
	/**
	 * 获取指定数据的完整的数据类型
	 * @param {*} data 目标数据
	 */
	getDataType(data) {
		return Object.prototype.toString.call(data)
	}
	echartpx2rem(pxV) {
		let HTML_ = document.getElementsByTagName("html")
		const fontSize_ = HTML_[0].style.fontSize.replace("px", "")
		// 设计稿的尺寸
		let sj_fontSize = 75
		let tempValue = (pxV / sj_fontSize) * fontSize_
		// console.log("====>",tempValue,(tempValue).toFixed(0))
		return tempValue.toFixed(0)
	}
	tempConvDataObj = {
		fontSize: true,
		width: true,
		height: true,
		left: true,
		right: true,
		top: true,
		bottom: true,
		barWidth: true,
		nameGap: true,
		padding: true,
		borderWidth: true,
		itemWidth: true,
		itemHeight: true,
		itemGap: true,
		radius: true,
		length: true,
		length2: true
	}

	tempConvDataArray = ["padding"]
	/**
	 * 深度拷贝
	 * @param {*} source 目标源
	 */
	deepClone(source) {
		const targetObj = source.constructor === Array ? [] : {} // 判断复制的目标是数组还是对象

		for (let keys in source) {
			// 遍历目标
			if (source.hasOwnProperty(keys)) {
				if (source[keys] && typeof source[keys] === "object") {
					// 如果值是对象，就递归一下
					targetObj[keys] = source[keys].constructor === Array ? [] : {}
					if (this.getDataType(targetObj[keys]) === "[object Array]") {
						let sourceData = source[keys]
						let newData = []
						if (
							this.tempConvDataObj["padding"] &&
							this.tempConvDataArray.indexOf(keys) !== -1
						) {
							sourceData.forEach(element => {
								newData.push(this.echartpx2rem(element))
							})
							sourceData = newData
						}
						targetObj[keys] = this.deepClone(sourceData)
					} else {
						targetObj[keys] = this.deepClone(source[keys])
					}
				} else {
					// 如果不是，就直接赋值
					let tempValue = source[keys]
					if (
						this.tempConvDataObj[keys] &&
						this.getDataType(tempValue) === "[object Number]"
					) {
						targetObj[keys] = this.echartpx2rem(Number(tempValue))
					} else {
						targetObj[keys] = source[keys]
					}
				}
			}
		}
		return targetObj
	}
}

export default new Tool()
