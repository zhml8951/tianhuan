var person1 = {name: 'Orange', age: 88, size: '13cm'};
var person2 = {name: 'Apple', age: 66, size: '20cm'};

var sayHello = function(){
	console.log('hello, ' + this.name);
}

var sayGoodbye = function(){
	console.log('bye, ' + this.name);
}

sayHello(person1);
sayGoodbye();
sayHello.call(person1);
sayGoodbye.call(person1);
sayHello.apply(person1);
sayGoodbye.apply(person2);

var say = function(greeting){
	console.log(greeting + ', ' + this.name);
}

say.call(person1, 'Hello');
say.call(person2, 'Goodbye');