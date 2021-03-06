/**
 * 字典是以健值的形式存储元素
 */
function Dictionary() {
	var items = {}

	// 向字典中添加新元素
	this.set = function(key, value) {
		items[key] = value
	}

	// 通过键值删除字典中元素
	this.remove = function(key) {
		if (this.has(key)) {
			delete items[key]
			return true
		}
		return false
	}

	// 如果某个键值存在返回true，否则返回false
	this.has = function(key) {
		return items.hasOwnProperty(key)
	}

	// 通过键值查找元素
	this.get = function(key) {
		return items[key]
	}

	// 清除字典中所有元素
	this.clear = function() {
		items = {}
	}

	// 返回字典中包含元素的数量
	this.size = function() {
		return this.keys().length
	}

	// 将字典中的所有键名以数组的形式返回
	this.keys = function() {
		return Object.keys(items)
	}

	// 将字典中的所有数值以数组的形式返回
	this.values = function() {
		var values = []
		for (var key in items) {
			values.push(items[key])
		}
		return values
	}

	// 返回字典对象
	this.getItems = function() {
		return items
	}
}


var dictionary = new Dictionary()

dictionary.set('name', 'liyahui')
dictionary.set('email', 'liyahui.cn@gmail.com')
console.log(dictionary.keys(), dictionary.values())

console.log(dictionary.getItems())

console.log(dictionary.has('name'))
console.log(dictionary.size())
console.log(dictionary.remove('name'))

console.log(dictionary.getItems())