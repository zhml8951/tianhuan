var pattern = {
	get: function () {
		return 'It always return a string, whatever you have assigned..';
	},
	set: function () {
		this.myName = 'This is name string..';
	}
};

function TestDefineSetAndGet () {
	Object.defineProperty(this, 'myProperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myProperty = 'test';

console.log(instance.myProperty);
console.log(instance.myName);