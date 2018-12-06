var myObj = {
	specialFunction: () => {
		console.log('specialFunction running....');
		console.log(this);
	},

	anotherSpecialFunction: () => {
		console.log('anotherSpecialFunction running...');
	},

	getAsyncData: cb => {
		cb();
	},

	render: function() {
		this.getAsyncData( function(){
			this.specialFunction();
			this.anotherSpecialFunction();
			console.log('this: ' + this);
			console.log(this);
		}.bind(this));
	}
}

myObj.render();