'use strict';
/**
 * object getter and setter demo. 
 * @return {[type]} [description]
 */
function demoA() {
	var p = {
		x: 1.0,
		y: 2.0,
		get r() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},
		set r(newValue) {
			var oldValue = Math.sqrt(this.x * this.x + this.y * this.y);
			var ratio = newValue / oldValue;
			this.x *= ratio;
			this.y *= ratio;
		},
		get theta() {
			return Math.atan2(this.y, this.x);
		}
	};
	console.log(p.theta);
	console.log(p);
}

function serialDemo() {
	var serialNum = {
		$n: 999,
		get next() {
			return this.$n++;
		},
		set next(n) {
			if (n >= this.$n) this.$n = n;
			else throw "serial number can only be set to larger value.";
		}
	};
	console.log(Object.getOwnPropertyDescriptor(serialNum, 'next'));
	console.log(Object.getOwnPropertyDescriptor({x:1}, "x"));
	console.log(Object.getOwnPropertyDescriptors(serialNum));
	Object.defineProperty(serialNum, 'sName', {
		set: function(newName) {
			var objName = newName;
			console.log(objName);
		},
		get: function() { return Math.round(Math.random() * 1000); },
		configurable: false
	})
	console.log(Object.getOwnPropertyDescriptors(serialNum));
	serialNum.sName = 'aaaaaa';
}
// serialDemo();

function callOf(o) {
	if (o === null ) return "Null";
	if(o === undefined) return "Undenfined";
	return Object.prototype.toString.call(o).slice(8, -1);
}

console.log(callOf({'x':'aaaa'}));
console.log(callOf(8888));
console.log(callOf([88, 888, 999]));
console.log(callOf(new Set()));
console.log(callOf(true));

