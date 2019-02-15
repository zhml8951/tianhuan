'use strict';
const http = require('http');
const url = require('url');
const util = require('util');

http.createServer(function(req, res) {
	res.writeHead(200, {
		'Context-Type': 'text/html'
	});
	res.write('url: ' + req.url + '\n\n');
	res.write(util.inspect(url.parse(req.url, true)) + '\n\n');

	const params = url.parse(req.url, true).query;
	res.write('name: ' + params.name + '\n');
	res.write('age: ' + params.age + '\n\n');

	const pathname = url.parse(req.url, true).pathname;
	res.write('pathName: ' + pathname + '\n\n');

	let path = url.parse(req.url, true).path;
	res.write('path: ' + path + '\n\n');
	res.end();
}).listen(1008, 'localhost', () => {
	console.log('http server running At: 127.0.0.1:1008');
});