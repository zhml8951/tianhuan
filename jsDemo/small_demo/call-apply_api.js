

var sayHello = function() {
	console.log('hello, ' + this.name);
}

var sayGoodbye = function() {
	console.log('bye, ' + this.name);
}

var say = function(greeting) {
	console.log(greeting + ', ' + this.name);
}

function sayTo(first, second) {
	console.log(this);
	return first + " " + this.name + " " + second;
}

var palestrina = {
	work: 'Missa Papae Marceli',
	describe: function() {
		console.log(this.work);
	}
};

function fun_test() {
	var person1 = {
		name: 'Orange',
		age: 88,
		size: '13cm'
	};
	var person2 = {
		name: 'Apple',
		age: 66,
		size: '20cm'
	};
	sayHello(person1);
	sayGoodbye();
	sayHello.call(person1);
	sayGoodbye.call(person1);
	sayHello.apply(person1);
	sayGoodbye.apply(person2);

	say.call(person1, 'Hello');
	say.call(person2, 'Goodbye');
	say.call(this, 'person');

	sayTo.call(person2, 'Hi', 'Are you ok.');

	var sayToOwn = sayTo.bind(person1);
	console.log(sayToOwn('Hehe', 'second'));
	palestrina.describe();
	var erasmus = { work: 'Freedom of the will' };
	palestrina.describe.call(erasmus);
}

fun_test();