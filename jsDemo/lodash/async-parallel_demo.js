const async = require('async');

function test01() {

	function process1(cb) {
		var tx1 = {
			address: 'adress_tx1'
		};
		var total1 = 1;
		return cb(null, tx1, total1);
	}

	function process2(cb) {
		var tx2 = {
			address: 'adress_tx2'
		};
		var total2 = 2;
		return cb(null, tx2, total2);
	}

	async.parallel([
		function(done) {
			process1(done);
		},
		function(done) {
			process2(done);
		}
	], function(err, tx, total) {
		console.log(tx[0][0]);
		console.log(tx[0][1]);
		console.log(tx[1][0]);
		console.log(tx[1][1]);
		console.log(total);
		console.log(total);
	});
}

function test02() {
	async.auto({
		func1: function(cb) {
			console.log('obj in func1');
			cb(null, 'data', 'converted to array');
		},
		func2: function(cb) {
			console.log('obj in func2');
			cb(null, {
				'puncha': 'cb in func2'
			});
		},
		func3: ['func2', function(results, cb) {
			console.log('obj in func3', JSON.stringify(results));
			cb(null, 'Here in Func3');
		}],
		func4: ['func1', 'func3', function(results, cb) {
			console.log('obj in func4', JSON.stringify(results));
			cb(null, {
				'file': results.func3,
				'email': 'user@th.com'
			});
		}]
	}, function(err, results) {
		console.log('err = ', err);
		console.log('results = ', results);
	});
}

test02();