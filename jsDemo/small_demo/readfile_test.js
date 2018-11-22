const readFile = require('./promise_denodeify.js');
var txt = readFile('./fun_demo01.js').then(function(values){
	console.log(values);
});
console.log(txt);