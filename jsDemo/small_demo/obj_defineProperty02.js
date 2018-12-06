var obj = {};
var descriptor = Object.create(null);
descriptor.value = 'static';
Object.defineProperty(obj, 'key', descriptor);
// Object.defineProperty(obj, "key", {
// 	enumerable: false,
// 	configurable: false,
// 	writable: false,
// 	value: "static"
// });
obj.value = '88';
obj.key = 'K01';
console.log(obj.key);
console.log(obj);
console.log('key' in obj);
console.log(obj.hasOwnProperty('key'));

function withValue(value) {
	if (withValue.d || (withValue.d = {a:1, b:2})) {
		console.log('undefined is true.');
		console.log(withValue.d);
	} else {
		console.log('undefined is false');
	}
	let d = withValue.d || (
		withValue.d = {
			enumerable: false,
			writable: false,
			configurable: false,
			value: null
		}
		);
	d.value = value;
	console.log(d);
	return d;
}
console.log(withValue(33));