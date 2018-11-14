var finder = {
	run: function(records) {
		let self = this;
		setTimeout(()=>{
			records.push(3,4);
			self.trigger('done', [records]);
		}, 1000);
	}
};

var processor = {
	run: function(records) {
		let self = this;
		setTimeout(()=>{
			records.push(5,6);
			self.trigger('done', [records]);
		}, 1000);
	}
};


var events = {
	on: function(event, cb){
		$(this).on(event, cb);
	},
	trigger: function(event, args) {
		$(this).trigger(event, args);
	}
}

$.extend(finder, events);
$.extend(processor, events);