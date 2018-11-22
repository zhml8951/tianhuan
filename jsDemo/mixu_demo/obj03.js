var obj = {
	items: ['a', "b", 'c'],
	proc: function() {
		var self = this;
		this.items.forEach(function(item){
			self.print(item);
		});
	},
	print: function(item){
		console.log('' + item, "");
	}
};


function f() { console.log("I'm in outside.");}

(function(){
	if(true){
		function f() { console.log("I'm in inside.");}
	}
	f();
}());

(function() {
	var tmp = 'tmp in side.';
	console.log('--26- ' + tmp);
} )();

{
	var tmp = 'tmp in side {}';
	console.log('--31-', tmp);
};

var tmp = 'tmp out side function.';

function tmpIn() {
	console.log(tmp);
};