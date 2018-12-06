function ChainA(num) {
	this.value = num || 0;
}

ChainA.prototype.add = function(num) { this.value += num; return this; }
ChainA.prototype.reduce = function(num) { this.value -= num; return this; }
ChainA.prototype.valueOf = function() { return this.value; } 
ChainA.prototype.toString = function() { return this.value + ' '; }


var numA = new ChainA(2);
console.log(numA.toString());
console.log(numA.add(3).reduce(8).toString());