<<<<<<< HEAD
// 
'use strict'

function obj_define_pro() {
=======

function obj_defineProperty_test() {
>>>>>>> 76797dd1dc6e3d42801e2efb0cd4b8df7ade7004
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

<<<<<<< HEAD
function protoDemo() {
	let F = function() {
		this.a = 1;
		this.b = 2;
	}
	let o = new F();

	F.prototype.b = 3;
	F.prototype.c = 4;

	console.log(o.a);
	console.log(o.b);
	console.log(o.c);
	console.log(o.d);
}

// protoDemo();

function protoDemo02() {
	var o = {
		a: 2,
		m: function() {
			return this.a + 1;
		}
	};

	console.log(o.m());
	var o1 = Object.create(o);
	o1.a = 4;
	console.log(o1.m());
}

// protoDemo02();
/**
 * Object assign demo 
 * @return  {[type]}
 * @Author: Arnni.zheng
 * @Date:   2018-12-08
 */
function objDemom() {
	var obj01 = Object.create({
		foo: 1,
		bar: {
			value: 2,
			enumberable: false
		},
		baz: {
			value: 3,
			enumberable: true
		},
		printBar: function() {
			console.log('bar_value: ' + this.bar.value + ',  enumberable: ' + this.bar.enumberable);
		}

	}, );

	obj01.printBar();
	var obj02 = Object.create(obj01)
	obj02.printBar();
}

// objDemom();

console.log('-----------------------------------');

function objDemo02() {
	const person = {
		isHuman: false,
		printIntroduction: function() {
			console.log(`My name is ${this.name}. I human: ${this.isHuman}. `);
		}
	};

	var me = Object.create(person);
	me.name = 'Zhml';
	me.isHuman = true;
	me.printIntroduction();
	console.log(me);
}

// objDemo02()

function objDemo() {
	function Shape() {
		this.x = 0;
		this.y = 0;
	};

	Shape.prototype.move = function(x, y) {
		this.x += x;
		this.y += y;
		console.log('Shape moved.');
	};

	function Rectangle() {
		Shape.call(this);
		console.log(this.x);
		console.log(this.y);
	}

	Rectangle.prototype = Object.create(Shape.prototype);
	// Shape.prototype.constrator = Shape;
	Rectangle.prototype.constrator = Rectangle;
	console.log(Rectangle.prototype.constrator);
	console.log(Shape.prototype.constrator);

	var rect = new Rectangle();
	console.log('Is rect an instance of Rectangle: ', (rect instanceof Rectangle));
	console.log('Is rect an instance of Shape: ', rect instanceof Shape);
	rect.move(1, 23);
	new Shape().move();
}
// objDemo();

function objDemo03() {
	const obj01 = {};
	Object.defineProperty(obj01, 'property1', {
		value: 43,
		writable: false
	});
	obj01.name = 'Object01';
	console.log(obj01.property1);
	console.log(obj01.name);
	obj01.name = 'Object01.name changed';
	Object.defineProperty(obj01, 'Age', {
		value: 28,
		writable: true
	});
	console.log(obj01.name);
	obj01.Age = 88;
	console.log(obj01.Age);

	/**
	 * [obj02 defineProperty demo]
	 * @type {Object}
	 */
	Object.age = 0;
	var obj02 = {};
	Object.defineProperty(obj02, 'name', {
		enumberable: false,
		configurable: false,
		writable: true,
		value: 'Obj02'
	});
	Object.defineProperty(obj02, 'age', {
		set(newAge) {
			this.age = newAge;
		},
		get() {
			return this.age;
		},
		enumberable: true,
		configurable: true
	});
	obj02.age = 333;
	console.log(obj02.age);
}

// objDemo03();
// 
function objDemo04 () {
	var book = {
		"main title" : "JavaScript with nodeJS",
		"sub-title" : "The Definitive Guide.", 
		"for" : "all audiences",
		author: {
			firstName: "David", 
			surName: "Flanagan"
		}
	};
	console.log(book["main title"]);	

	var book = {
		"main title" : "JS and NodeJS",
		"sub_title" : "Definitive guide",
		"for" : "every one "
	};

	console.log(book['main title']);
	console.log(book.sub_title);
}

objDemo04();
=======
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
>>>>>>> 76797dd1dc6e3d42801e2efb0cd4b8df7ade7004
