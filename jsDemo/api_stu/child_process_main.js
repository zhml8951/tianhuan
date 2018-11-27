const { fork } = require('child_process');

var cpus = require('os').cpus();
var childs = [];
for(let i = 0; i < cpus.length; i++) {
	childs[i] = fork('./child_process_worker.js');
}

var server = require('net').createServer();
console.log(server);

server.listen(8010, () => {
	for(let i =0; i < cpus.length; i++){
		childs[i].send('server', server);
	}
	server.close();
});