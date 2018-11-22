const findLargest = require('./fun_demo03');
findLargest('../jsDemo', function(err, filename){
	if(err) return console.error(err);
	console.log('largest file was:  ', filename);
	console.log(filename.toUpperCase());
	console.log(typeof filename);
});