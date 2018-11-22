var delay_print_first = function() {
	return "first";
}

var delay_print_second = ()=>{
	return Promise.resolve("Second");
}

var delay_print_third = ()=>{
	return Promise.resolve("Third");
}

var async_status = async (ms)=>{
	try {
		var first = delay_print_first();
		var second = await delay_print_second();
		var third = await delay_print_third();
		return first + " " + second + " " + third;
	} catch (e) {
		return Promise.reject("Error.here");
	}
}

async_status().then( (ret) =>{
	console.log(ret);
}).catch((err)=>{
	console.log(err);
});