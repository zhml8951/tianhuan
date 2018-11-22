const reader = require('./recorder_oper01');
reader.finder([12,12], function(records){
	reader.processor(records, function(records){
		console.log(records);
	});
});