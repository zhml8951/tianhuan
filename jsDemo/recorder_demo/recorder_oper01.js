function finder(records, callback){
	console.log('before finder: ', records);
	setTimeout(function(){
		records.push(3, 4);
		callback(records);
	}, 1000);
}

function processor(records, callback){
	console.log('before processor: ', records);
	setTimeout(function(){
		records.push(5,6);
		callback(records);
	}, 1000);
}

module.exports = {
	finder,
	processor
};
