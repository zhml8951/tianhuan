'use strict';
const assert = require('assert').strict;

function obj_assert() {
	var obj1 = {};
	console.log(Object.prototype);
	console.log(Object.getPrototypeOf(obj1));
	console.log(Object.getPrototypeOf(obj1) === Object.prototype);
	assert.deepStrictEqu
	var obj2 = {
		__proto__: null
	};
	console.assert(Object.getPrototypeOf(obj2) === null );
}

obj_assert();