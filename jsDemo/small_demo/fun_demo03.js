var asyncDemo = function(param, cb) {
	asyncFun1(param, function(er,data){
		if(er) return cb(er);
		asyncFun2(data, function(er, data){
			if(er) return cb(er);
			asyncFun3(data, function(er,data){
				if(er) return cb(er);
				cb(data);
			});
		});
	});
}

const fs = require('fs');
const path = require('path');
module.exports = function(dir, cb){
	fs.readdir(dir, function(err, files){
		if(err) return cb(err);
		var counter = files.length;
		console.log(counter);
		var errored = false;
		var stats = [];
		files.forEach(function(file, index){
			fs.stat(path.join(dir,file), function(err, stat){
				if(errored) return;
				if(err) {
					errored = true;
					return cb(err);
				}
				console.log(index);
				stats[index] = stat;
				console.log(stats[index]);
				if( --counter == 0) {
					var largest = stats.filter(function (stat){return stat.isFile();})
					.reduce(function(prev, next){
						if(prev.size > next.size) return prev;
						return next;
					});
					cb(null, files[stats.indexOf(largest)]);
				}
			});
		});
	});
}