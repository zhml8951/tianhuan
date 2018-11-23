var count = () =>{
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve(100);
		}, 500);
	});
}

var list = () => {
	return new Promise( (resolve, reject) => {
		setTimeout( ()=>{
			resolve([1,2,3]);
		}, 500);
	});
}

var getList = async () => {
	let result = await Promise.all([count(), list()]);
	return result;
}

console.time('begin');

getList().then(result => {
	console.timeEnd('begin');
	console.log(result);
}).catch(err => {
	console.timeEnd('begin');
	console.log(err);
});


