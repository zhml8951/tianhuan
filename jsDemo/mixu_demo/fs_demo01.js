const fs = require('fs');
fs.readFile('./dir_files', 'utf8', (err, data) =>{
	console.log(data);
	console.log(data.instance)
	// console.log(data.toString());
});


setTimeout(()=>{
	console.log('Timeout run at ' + new Date().toString());
}, 1000);