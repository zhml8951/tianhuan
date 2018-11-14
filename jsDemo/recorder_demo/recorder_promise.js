const when = require('when');
function finder(records) {
	let deferred = when.defer();
	setTimeout(function() {
		records.push(22, 33);
		deferred.resolve(records);
	}, 500);
	return deferred.promise;
}

function processor(records) {
	let deferred = when.defer();
	setTimeout(function() {
		records.push(44,55);
		deferred.resolve(records);
	}, 500);
	return deferred.promise;
}

finder([12,13])
	.then(processor)
	.then(function(records){
	console.log(records);
});

setTimeout( () =>{
	console.log('--26: ', finder([33,22]));
}, 1300);
