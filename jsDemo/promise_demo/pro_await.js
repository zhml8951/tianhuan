var Delay_time = function(ms){
	return new Promise(function(resolve){
		console.log('Delay_time here.');
		setTimeout(resolve, 1000);
	});
}

var Delay_print = async function(ms) {
	await Delay_time(ms);
	return new Promise(function(resolve, reject) {
		console.log('Delay_print here...');
		resolve("End");
	});
}

Delay_print(1000).then(function(resolve){
	console.log(resolve);
});