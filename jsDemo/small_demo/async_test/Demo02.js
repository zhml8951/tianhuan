const async = require('async');
const t = require('./t');
var log = t.log;

/**
 * apply 可以简化我们代码
 * @return {[type]} [description]
 *
 */
function applyD01() {
	async.parallel([
		async.apply(t.inc, 3),
		async.apply(t.fire, 8000),
		async.apply(t.fireTwo,{argTwo:'paraTwo'}, 1000)
	], function(err, results) {
		log('1.1 err: ', err);
		log('1.1 results: ', results);
	});
	// 等同于下例：
	async.parallel([
		function(cb) {t.inc(3, cb);},
		function(cb) {t.fire(100, cb, 2000);}
	], function(err, results){
		log('1.2 err: ', err);
		log('1.2 results: ', results);
	});
	async.parallel()
}

function applyD02() {
	function inc(a, b, cb, timeout) {
		var timeout = timeout || 200;
		t.wait(200);
		setTimeout(function(){
			cb(null, a + b);
		}, timeout);
	}

	var fn = async.apply(inc, 1, 2);
	fn(function(err, n){
		log('1.3 inc: ' + n);
	});
}

// applyD01();
applyD02();

function applyEach_d1() {
	async.applyEach([
		function(name, cb) {
			setTimeout(function() {
				log('2.1 hander: ' + name + ' A');
				cb(null, name + '_a');
			}, 500);
		},
		function(name, cb) {
			setTimeout(function() {
				log('2.1 hander: ' + name + ' B');
				cb(null, name + '_b');
			}, 200);
		}
	], 'Hello', function(err, results) {
		log('2.1 err: ', err);
		log('2.1 results: ', results);
	});
}
// applyEach_d1();

function applyEach_d2() {
	var fn = async.applyEach([
		function (name, cb) {
			setTimeout(function() {
				log('2.2 handler: ' + name + ' A');
			}, 500);
		},
		function (name, cb) {
			setTimeout(function() {
				log('2.2 handler: ' + name + ' B');
			},250);
		}
	]);

	fn('single: ', function(err, results){
		log('error: ', err);
		log('results: ', results);
	});
}

// applyEach_d2();
function auto_d1() {
	async.auto({
		getData: function(cb) {
			setTimeout(function() {
				log('3.1: get Data.');
				cb(null, 'getData');
			}, 300);
		},
		makeFolder: function(cb) {
			setTimeout(function() {
				console.log('3.2: made folder.');
				cb(null, 'myFolder');
			}, 200);
		},
		writeFile: ['getData', 'makeFolder', function(err, cb) {
			setTimeout(function() {
				log('3.3: wrote Files.');
				cb(null, 'writeFiles');
			}, 300);
		}],
		emailFiles: ['writeFile', function(results, cb) {
			log('3.4: emaild files: ', results.writeFile);
			cb(null, results.writeFile);
		}]
	}, function(err, results) {
		log('3.5__error: ', err);
		log('3.6__result: ', results);
	});
}

auto_d1();