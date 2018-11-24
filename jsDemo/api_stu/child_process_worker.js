const http = require('http');

var listen_port = Math.round( (1 + Math.random()) * 1000) + 1000;
console.log(`listen port: ${listen_port}`);

var serverInChild = http.createServer( (req, res) => {
	res.end('Listen at child.id: ' + process.pid);
});

process.on('message', (m, serverInParent) => {
	if (m === 'server') {
		serverInParent.on('connection', (socket) => {
			serverInChild.emit('connection', socket);
		});
	}
});
