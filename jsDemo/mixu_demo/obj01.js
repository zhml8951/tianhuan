const fs = require('fs');
var obj = {
	id: "First Object",
	fun01: function(){
		console.log(this.fun01.toString());
	}
};

var fun02 = function(){
	console.log(this.toString());
	console.log(this);
	console.log(this == 'object');
	fs.writeSync(1, `abc ${this}, \n`);
}

var obj02 = {id: "foo01"};
fun02.call(obj02);

var obj03 = {id: "Bar01"};
fun02.apply(obj03);

function fun03(a, b) {
	console.log(this, a, b);
}

fun03.call(obj02, 'a', 'b');

fun03.apply(obj03, ['c', 'd']);
