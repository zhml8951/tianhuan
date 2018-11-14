var readFile = require('./promise_denodeify');

var promise = Promise.resolve(3);
Promise.all([true, promise]).then(values => {
	console.log(values, 'line7:w');
});

Promise.all = (arr) => {
	var args = Array.prototype.slice.call(arr);
	console.log(args, '--line8');
	return new Promise( (resolve, reject) =>{
		if(args.length === 0) return resolve([]);
		let remaining = args.length;
		function res(i, val) {
			console.log(i , val , 'line--17');
			console.log((typeof val === 'object' || typeof val === 'function'), 'line13');
			if(val && (typeof val === 'object' || typeof val === 'function')){
				let then = val.then;
				console.log(then, ' -line21');
				console.log(val, ' --line22');
				if(typeof then === 'function') {
					let p = new Promise(then.bind(val));
					p.then( (val) => {
						res(i, val);
					}, reject);
					return;
				}
			}
			args[i] = val;
			if(--remaining === 0) {
				resolve(args);
			}
		};

		for(let i = 0; i < args.length; i++){
			res(i, args[i]);
			console.log('for{}' + 'line-', i, args[i] );
		}
	});
}

Promise.all(['abc', true, 1234, "string...."]).then(function(values){
	console.log(values + 'line37');
});
Promise.all('abtr', 'string2', 1111, false).then(values => {
	console.log(values + ' line40');
});

Promise.all([{name:"alot", sex:'man'},{name:'bottom', sex:'woman'}]).then(values => {
	console.log(values + 'line40');
});

var txt = readFile('./fun_demo01.js');
console.log('test-54');
console.log(txt);
