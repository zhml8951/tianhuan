const async_hooks = require('async_hooks');
const http = require('http');
var fs = require('fs');
var hooks = {
	init: init
}

var asyncHooks = async_hooks.createHook(hooks);

asyncHooks.enable();

function init(asyncId, type, triggerId) {
	fs.writeSync(1, `${type}          |`);	
	fs.writeSync(1, `${asyncId}       |`);
	fs.writeSync(1, `${triggerId}     |\n`);
}

http.createServer( (req, res) => {
	res.end('hello, qts');
}).listen(8080);
console.log('server is starting....');