function doSomething(){return 'doSomething.';}
var doSomethingElse = function(){ return 'doSomethingElse.';}
console.log(doSomething());
console.log(doSomethingElse());

var a = {foo: "bar", "2": "2", "1": "1"};
for (let i in a) {
	console.log('--8-- ' + i);
	console.log('--9-- ', a[i]);
}

var obj01 = {
	id: "an object01",
	fun01: function(){
		console.log(this);
		return this.fun01;
	}
};

console.log(obj01.id);
console.log(obj01.fun01());

function fun02() {
	console.log(this.toString());
	console.log(this == global);
}
fun02();
console.log(fun02());

function fun03() {
	console.log(this);
}

var obj03 = { id: "foo03"};
fun03.call(obj03);

var obj04 = { id: "Bar04"};
fun03.apply(obj04);

function fun05(a, b) {
	console.log(this, a, b);
}

var obj05 = {id: "Obj05_01"};
fun05.call(obj05, "Obj05_A", "Obj05_B");

var obj06 = {id: "Obj06_01"};
fun05.apply(obj06, ["Obj06_A", "Obj06_b"]);

var obj07 = {
	id: "Obj07_00",
	printid: function(){
		console.log('this id is: ' + this.id + ' ' + this.toString());
	}
};
// setTimeout(obj07.printid, 1000);
// var callback  = obj07.printid;
// callback();
// obj07.printid();
setTimeout(function() {obj07.printid() }, 1000);
var callback  = function(){obj07.printid();};
callback();

var data= [];
data.push('ab');
data.forEach( function(element, index) {
	console.log('index: '+ index, " --element:" + element );
});
