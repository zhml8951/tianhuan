var timer = async function(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve('500');
		}, 500);
	});
}

timer().then(result => {
	console.log(result);
}).catch(err => {
	console.log(err.message);
});

var sayHi = async function(){
	let hi = await 'hi, Nodejs';
	return hi;
}
sayHi().then(result => {
	console.log(result);
});


var count = () =>{
	var toRejct = false;
	return new Promise((resolve, reject) =>{
		setTimeout( ()=>{
			if(toRejct){
				reject('error in count.');
			} else {
				resolve('EveryThing ok.');
			}
		});
	});
}

var list = () => {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve([1,2,3]);
		}, 500);
	});
}

var getList = async () =>{
	let c = await count();
	let l = await list();
	return {count: c, list: l};
}

console.time('begin');
getList().then( (result) => {
	console.log(result);
}).catch(err => {
	console.timeEnd('begin');
	console.log(err);
});

