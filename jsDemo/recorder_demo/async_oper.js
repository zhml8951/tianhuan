const async = require('async');
function finder(records, cb) {
	setTimeout(function(){
		records.push(33, 44);
		cb(records);
	}, 1000);
}

function processor(records, cb) {
	setTimeout(function(){
		records.push(55, 66);
		cb(records);
	}, 1000);
}

var arr = [11, 22];

async.waterfall([
	function(cb){
		finder(arr, function(records){
			cb(null, records)
		});
	},
	function(records, cb){
		processor(records, function(records){
			cb(null, records);
		});
	},
	function(records, cb){
		console.log(records);
	}
]);