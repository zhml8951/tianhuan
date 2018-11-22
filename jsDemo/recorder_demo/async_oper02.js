const async = require('async');

function finder(records, cb){
	setTimeout(function(){
		records.push(55, 66);
		cb(null, records);
	}, 1000);
}

function processor(records, cb){
	setTimeout(function(){
		records.push(77,88);
		cb(null, records);
	}, 1000);
}

const arr = [33, 44];
async.waterfall([
	function(cb){
		finder(arr, cb);
		console.log('--21: ', arr);
	},
	processor,
	function(records, cb){
		console.log(records);
	}
]);
