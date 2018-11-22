'use strict';
const fs = require('fs');
var promiseCount = 0;

// function testPromise(){
// 	let thisPromiseCount = ++ promiseCount;
// 	let log document.getElementById('log');
// 	log.insertAdjacetHTML('beforeend', thisPromiseCount + '') 
// }

function readJSONSync(filename) {
	return JSON.parse(fs.readFileSync(filename, 'utf8'));
}

function readJSON(filename, callback){
	fs.readFile(filename, 'utf8', function(err, res){
		if(err) return callback(err);
		callback(null, JSON.parse(res));
	});
}

function readJSON02(filename, callback){
	fs.readFile(filename, 'utf8', function(err, res){
		if (err) return callback(err);
		try {
			res = JSON.parse(res);
		} catch (ex) {
			return callback(es);
		}
		callback(null, res);
	});
}

function readFile(filename, enc) {
	return new Promise(function (fulfill, reject){
		fs.readFile(filename, enc, function(err, res){
			if(err) reject(err);
			else fulfill(res);
		});
	});
}

function readJSON03(filename) {
	return new Promise(function(resolve, reject){
		readFile(filename, 'utf8').done(function(res){
			try {
				resolve(JSON.parse(res));
			} catch(ex) {
				reject(ex);
			}
		}, reject);
	});
}

var jsonReader = readJSON03('./file_read.js');
jsonReader.then( ()=> {
	console.log('ok');
});
console.log(jsonReader);

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(1000);
