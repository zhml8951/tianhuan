'use strict';
const http = require('http');
const connect = require('connect');

const httpTest01 = () => {
	const app = http.createServer(function(request, response) {
		let answer = '';
		answer += 'Request URL: ' + request.url + '\n';
		answer += 'Request type: ' + request.method + '\n';
		answer += 'Request headers: ' + JSON.stringify(request.headers) + '\n';

		response.writeHead(200, {
			"Context-Type": "text/plain",
		});
		response.end(answer);
		console.log('http test.....');
	});
	app.listen(3003, 'localhost');
	console.log('server running 3001 ok...');
};
httpTest01();

const httpTest02 = () => {
	http.createServer(function(req, res) {
		if (req.url === '/') {
			res.writeHead(200, {
				'Context-Type': 'text/html'
			});
			res.end('index. page');
		} else if (req.url === '/about') {
			res.writeHead(200, {
				'Context-Type': 'text/html'
			});
			res.end('AboutPage');
		} else {
			res.writeHead(404, {'Context-Type': 'text/plain'});
			res.end('404 error! ');
		}
	}).listen(1007, 'localhost', ()=>{
		console.log('http running at 1007. ok');
	});
}

httpTest02();

const connTest = () => {
	const app = connect();
	app.use(function(req, res){
		res.writeHead(200, {'Context-Type': 'text/plain'});
		res.end('connect test...');
	});

	http.createServer(app).listen(1337, ()=>{
		console.log('connect server running 1337 ....');
	})
}

connTest();