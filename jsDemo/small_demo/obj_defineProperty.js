
function obj_defineProperty_test() {
	var a = {};
	Object.defineProperty(a, 'b', {
		set: function(newValue) {
			console.log('assert value, value: ', newValue);
		},
		get: function() {
			// console.log('get value: success.');
			return 2;
		}
	});

	a.b = 1;
	console.log(a.b);
	console.log((Object.freeze || Object)(Object.prototype));
	console.log(Object.freeze);
	console.log(Object.freeze || Object);
	console.log(Object.prototype);
	console.log(Object && Object);
	console.log(true && false);
}

// obj_defineProperty_test();

function inherit_test() {
	function inherit(p) {
		if (p == null) throw TypeError();
		if (Object.create) return Object.create(p);
		var t = typeof p;
		if (t !== 'object' && t !== "function") throw TypeError();

		function f() {};
		f.prototype = p;
		return new f();
	}

	var obj02 = {uName: "arnni", uNumber: 88};
	var obj02_b = inherit(obj02);
	console.log(obj02.toString());
	console.log(obj02_b.toString());
	console.log(obj02.constructor());
	console.log(obj02_b.constructor());
	console.log(obj02);
	console.log(obj02_b);
}

inherit_test();