
import Tool from './../../../utils/Tool'
import radar from './radar'
import line from './line'

const echartTypes = {
	radar,
	line
}

function setTooltipPosition(option_) {
	if (option_["tooltip"]) {
		option_["tooltip"]["position"] = function(pos, params, el, elRect, size) {
			var obj = { top: 10 }
			obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30
			return obj
		}
	}
}

export default (typeName, key = "", ...arg) => {
	let tempOldOption = echartTypes[typeName]
	let temp = {}
	if (Object.prototype.toString.call(tempOldOption) === "[object Function]") {
		temp = Tool.deepClone(tempOldOption(...arg))
	}
	if (Object.prototype.toString.call(tempOldOption) === "[object Object]") {
		temp = Tool.deepClone(tempOldOption)
	}

	// setTooltipPosition(temp)

	return temp
}
