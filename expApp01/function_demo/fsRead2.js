const fs = require('fs');

console.log('read file 404.html');
fs.readFile('../public/404.html', 'utf8', function(err, data){
	console.log(data);
});

console.log("Read file about.html");
fs.readFile('../public/about.html', 'utf8', function(err, data){
	console.log(data);
});

console.log('Read file 404.html and about.html');
fs.readFile('../public/404.html', 'utf8', function(err, data){
	console.log(data);
	fs.readFile('../public/about.html', 'utf8', function(err, data){
		console.log(data);
	});
});

function after(time, callback) {
	let arr = [];
	return function(data){
		arr.push(data);
		if(--time ==0){
			callback(arr);
		}
	}
}

console.log('Read file home.html. line22');
var out = after(2, function(res){console.log(res)});
fs.readFile('../public/home.html', 'utf8', function(err, data){
	out(data);
});

console.log('Read file about.html. line28');
fs.readFile('../public/about.html', 'utf8', function(err,data){
	out(data);
});