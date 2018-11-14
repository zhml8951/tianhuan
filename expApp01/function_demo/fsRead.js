const fs = require('fs');
console.log("This demo01");
fs.readFile('../routes/index.js', 'utf8', function(err, data){
	console.log(data);
});

console.log('This second demo.');
fs.readFile('../routes/users.js', 'utf8', function(err, data){
	fs.readFile(data, 'utf8', function(err, data){
		console.log(data);
	});
});

