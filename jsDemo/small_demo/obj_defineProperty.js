var a = {};
Object.defineProperty(a, 'b', {
	set: function(newValue){
		console.log('assert value, value: ', newValue);
	},
	get: function(){
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