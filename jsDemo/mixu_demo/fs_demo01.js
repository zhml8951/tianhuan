const fs = require('fs');
fs.readFile('./dir_files', 'utf8', (err, data) =>{
	console.log(data);
});

setTimeout(()=>{
	console.log('Timeout run at ' + new Date().toString());
}, 1000);

setTimeout(()=>{
	console.log('Timeout run at ' + new Date().toString());
}, 1000);

var start = new Date();
console.log('Enter loop at: ' + start.toTimeString());
var i = 0;
while(new Date().getTime() < start.getTime() + 2000) {
	i++;
}

console.log('Exit  loop at: ' + new Date().toTimeString() + '. Ran ' +i+ ' iterations. ');

