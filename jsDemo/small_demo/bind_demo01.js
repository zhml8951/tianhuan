var myObj = {
	specialFunction: function() {
		console.log('specialFunction running...');
	},

	anotherSpecialFunction: function() {
		console.log('anotherSpecialFunction running....');
	},

	getAsyncData: function(cb) {
		cb();
		console.log('getAsyncData running....');
	},

	render: function() {
		var that = this;
		that.getAsyncData(function() {
			that.specialFunction();
			console.log('this: ' + this);
			that.anotherSpecialFunction();
		});
	}
};

Function.prototype.bind = function(scope) {
	var fn = this;
	return function() {
		return fn.apply(scope);
	}
}

var foo = {
	x: 3
}

var bar = function() {
	console.log(this.x);
}
bar.bind(foo)();
var boundFunc = bar.bind(foo);

boundFunc();