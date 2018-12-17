function obj_test01() {
	var obj = {
		name: "arnni",
		job: "software developer",
		show: function() {
			console.log("Name:" + this.name, "; Job: " + this.job);
			console.log(this);
		}
	}

	var obj_other = new Object();
	obj_other.name = 'About';
	obj_other.job = "goods";
	obj_other.show = function() {
		console.log("Name: " + this.name + "; Job: " + this.job);
		console.log(this);
	}

	obj.show();
	obj_other.show();
}

function obj_test02(){

	function Person(name, sex, age, job) {
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.job = job;

		this.showPerson = function () {
			console.log("Name: " + this.name);
			console.log("Sex: " + this.sex);
			console.log("Age: " + this.age);
			console.log("Job: " + this.job);
			console.log(this);
		};
	};

	Person.showPerson = function () {
		console.log(this.name + ";;;" + this.age + ', ---showPerson_static');
	}

	var person01 = new Person("arnni", "man", 88, "developer");
	person01.showPerson();

	var obj01 = {
		name: "object._01",
		age: 1888,
		sex: "woman",
		job: "worker"
	};

	Person.showPerson.call(obj01);
	person01.showPerson.call(obj01);
}

//
//
function test_seq() {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = seq;
	console.log(exports);

	var _noop = require('lodash/noop');
	console.log(_noop);

	var _noop2 = _interopRequireDefault(_noop);

	console.log(_noop2);

	var _obj_test02 = _interopRequireDefault(obj_test02);
	console.log(_obj_test02);
	// var _slice = require('./internal/slice');

	// var _slice2 = _interopRequireDefault(_slice);

	// var _reduce = require('./reduce');

	// var _reduce2 = _interopRequireDefault(_reduce);

	// var _wrapAsync = require('./internal/wrapAsync');

	// var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

	// var _arrayMap = require('lodash/_arrayMap');

	// var _arrayMap2 = _interopRequireDefault(_arrayMap);

	function _interopRequireDefault(obj) {
		console.log(obj && obj.__esModule);
		return obj && (obj.__esModule ? obj : { default: obj });
	}

	function seq() /*...functions*/ {
		var _functions = (0, _arrayMap2.default)(arguments, _wrapAsync2.default);
		return function() /*...args*/ {
			var args = (0, _slice2.default)(arguments);
			var that = this;

			var cb = args[args.length - 1];
			if (typeof cb == 'function') {
				args.pop();
			} else {
				cb = _noop2.default;
			}

			(0, _reduce2.default)(_functions, args, function(newargs, fn, cb) {
				fn.apply(that, newargs.concat(function(err /*, ...nextargs*/ ) {
					var nextargs = (0, _slice2.default)(arguments, 1);
					cb(err, nextargs);
				}));
			}, function(err, results) {
				cb.apply(that, [err].concat(results));
			});
		};
	}
	module.exports = exports['default'];
}

test_seq();