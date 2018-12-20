function fun_demo01() {
	var a = 0;

	function bb(x) {
		console.log(x);
	}

	function timer(time, callback) {
		setTimeout(function() {
			a = 6;
			callback(a);
		}, time);
	}

	console.log(a);
	timer(3000, bb);
	timer(2000, function(x) {
		console.log(x);
	});
}

function scope_demo01() {
	var scope = "global scope";
	function checkScope() {
		var scope = "local scope";
		function f() {
			return scope;
		}
		return f();
	}
	console.log(checkScope());
}

function scope_demo02() {
	var scope = "global scope";
	function checkScope(){
		var scope = "local scope";
		function f() {
			return scope;
		}
		return f;
	}
	console.log(checkScope()());
}
scope_demo02();