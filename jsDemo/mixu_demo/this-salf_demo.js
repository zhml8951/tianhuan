var obj = {
	items: ["a1", "b2", "c3"],
	process: function() {
		let self = this;
		this.items.forEach(function(item) {
			self.print(item);
		});
	},
	print: function(item) {
		console.log('' + item + '');
	}
}
// obj.process();

function loop01() {
	for(var i = 0; i < 5; i++ ){
		console.log(i);
	}
}
// loop01();

function loop02() {
	for(var i = 0; i < 5; i++ ) {
		setTimeout(function() {
			console.log(i);
		}, 100);
	}
}
// loop02();

function loop03 () {
	var data = [];
	for(let i = 0; i < 5; i++) {
		data[i] = function() {
			console.log(i);
		};
	}
	data[0];// data1; data2; data3;data4;
}
loop03();

var types = ['text/html', 'text/css', 'text/javascript'];
var strings = 'text/javascript; encoding=utf-8';

if(types.some(function(value){
	return strings.indexOf(value) > -1;
})) {
	console.log('the string contains one of the content types');
};
types.some(function(value){
	console.log(value);
});