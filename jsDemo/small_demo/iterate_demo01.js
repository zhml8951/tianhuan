function createIterator (items) {
	var i = 0;
	return {
		next: function(){
			var done = i >= items.length;
			var value = !done ? items[i++]: undefined;

			return {
				done: done,
				value: value
			};
		}
	};
}

var iterator = {};
iterator[Symbol.iterator] = function(){
	return createIterator([1,3]);
}
for (let value of iterator) {
	// console.log(value);
}

function forOf(obj, cb) {
	let iterable, result;
	if(typeof obj[Symbol.iterator] !== "function")
		throw new TypeError(result + " is not iterable");
	if(typeof cb !== "function") throw new TypeError("cb must be callable");

	iterable = obj[Symbol.iterator]();
	result = iterable.next();
	while (!result.done) {
		cb(result.value);
		result = iterable.next();
	}
}

forOf(iterator, (value)=>{
	console.log(value);
});
