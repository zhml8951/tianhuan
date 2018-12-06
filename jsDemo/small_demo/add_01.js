module.exports = function(app) {
	return function add(x, y) {
		app.log(x +y);
	}
}

var doSlice = function(fn) {
	return function slice(x, y){
		return x - y;
	}
}

var slice_test01 = doSlice(function() {
	console.log('obj');
})

console.log(slice_test01(1,2));