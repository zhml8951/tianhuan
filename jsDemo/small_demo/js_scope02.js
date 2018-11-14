const obj01 = require('./js_scope');
// console.log(obj01.person.sayHello06());
console.log(obj01.sayHello06());
console.log(obj01.sayHello05());
console.log(obj01.personB.sayHello06());

var plus = function(x,y){return x + y};
var minus = function(x,y){ return x - y};


var operations = {
	'+': plus,
	'-': minus
};

var calculate = function(x,y, operation) {
	return operations[operation](x,y);
}

console.log(calculate(22, 33, '+'));
console.log(calculate(33, 22, '-'));


var Problem = function(x, y) {
	this.x = x;
	this.y = y;
}

Problem.prototype.operations = {
	'+': function(x, y) {return x + y},
	'-': function(x, y) {return x - y}
};

Problem.prototype.newMessageMaker = function() {
	let self = this;
	var formatter = () =>{
		return 'Values: [ x=' + self.x + ', y=' + self.y + ' ]. ';
	};

	return function(start, end) {
		return '' + start + formatter() + end;
	};
}

Problem.prototype.calculate = function(operation) {
	return this.operations[operation](this.x, this.y);
};

Problem.prototype.test = (x, y) => x * y;

Problem.test =() => 3;

var problem_1 = new Problem(4, 5);
console.log(problem_1.calculate('+'));
console.log(problem_1.calculate('-'));
console.log(Problem.test());
console.log(problem_1.test(10,10));

var messageMaker = problem_1.newMessageMaker();
console.log(messageMaker.toString());

var message = messageMaker('This is the problem: ', 'Thanks for solving it!');

console.log(message);