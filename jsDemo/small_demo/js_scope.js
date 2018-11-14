var name = 'arnni';
var age = 24;

var person = {name: 'arnni2', age: 33};
var personB = person;

var sayHello = () => {
	return 'Hello, I\'m ' + name + " and i'm " + age + '  years old.';
}

var sayHello01 = (name, age) => {
	return 'Hello, I\'m ' + name + " and i'm " + age + '  years old.';
}

var sayHello02 = (person) => {
	return "Hello, I'm " + person.name + " and I'm " + person.age + "  years old.";
}

var sayHello03 = function(person) {
	return "Hello, I'm " + person.name + " and I'm " + person.age + "  years old.";
}

var sayHello04 =() => {
	return "Hello, I'm " + this.name + " and I'm " + this.age + "  years old.";
}

person.sayHello05 = sayHello04;

person.sayHello06 = function(){
	return 'name: ' + this.name + ';  ' + 'age: ' + this.age; 
}

module.exports = person;
module.exports.personB = personB;

var zaphod = {name: 'Zaphod', age: 444};
var marvin = {name: 'Marvin', age: 555};

zaphod.sayHappy = function(){
	return 'Hi,happy. ' + this.name + ', age: ' + this.age;
}

marvin.sayHappy = zaphod.sayHappy;

console.dir(marvin.sayHappy());
console.log(zaphod.sayHappy());
