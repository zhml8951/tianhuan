var obj = {
	id: 'xyz',
	printId: function(){
		console.log('The id is: ' + this.id + ' ' + this.toString());
	}
};

setTimeout(obj.printId, 1000);
setTimeout(function(){obj.printId()}, 1000);

var cb = function(){obj.printId()};
cb();