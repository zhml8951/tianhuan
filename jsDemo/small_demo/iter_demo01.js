Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [2, 3, 4, 5, 8];
 iterable.foo = 'bar';

 for (let i  in iterable) {
 	console.log(i);
 }

 for (let i in iterable) {
 	if(iterable.hasOwnProperty(i)) {
 		console.log(i);
 	}
 }

for (let i of iterable) {
	console.log(i);
}