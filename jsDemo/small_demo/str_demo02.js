const abab = require('abab');
console.log(abab.atob("123456"));
console.log(abab.btoa("123456"));

var getName = () => "dasu";

console.log(null && getName());

function Counter() {
	this.num = 0;
	this.timer = setInterval( function(){
		var num  = 0;
		num ++;
		console.log(num);
		if (this.num === 3) {
			console.log('----',this.num);
			clearInterval(this.timer);
			return this.timer;
		}
	}, 1000);
}

Counter();

function count() {
	this.num = 0;
	while(this.num < 10) {
		console.log(this.num);
		this.num ++;
	}
	return ;
}

new count();

var str = 'Arnni, about alternative,Out, oUb';
var reg01 = new RegExp('ou', 'gi');
console.log(reg01.test(str));