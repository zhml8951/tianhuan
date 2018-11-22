var promise = new Promise(function ( resolve, reject) {
	if(success)	{
		resolve(value);
	} else{
		reject(value);
	}
});

promise.then(function(value){
	console.log(value);
}, function(value){
	return value;
});


function sendRequest() {
	return new Promise(function(resolve, reject){
		var req = http.request(options, function(res){
			var data = '';
			res.on('data', function(chunk){
				data += chunk;
			});
			res.on('end', function(){
				resolve(data);
			});
		});
		req.on('error', function(err){
			reject(err);
		});
		req.end();
	});
}

sendRequest().then(function(data){
	console.log(data);
}).catch(function(err){
	console.error(err);
});