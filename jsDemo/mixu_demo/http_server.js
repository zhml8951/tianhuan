const http = require('http'),
	url = require('url'),
	fs = require('fs');
var message = ['&quot; testing &quot;']
var clients = [];
var contents = '<html><head><meta charset="utf8"><title>first test http server</title></head><body><p>first http server.</p></body></html>'

var server = http.createServer(function(request, response){
	let url_parts = url.parse(request.url);
	console.log(url_parts);
	if(url_parts.pathname == '/') {
		fs.readFile('./public/index.html','utf8', function(err, data){
			response.end(data);
		});
	} else if(url_parts.pathname.substr(0, 6) == '/poll') {

	} else if(url_parts.pathname.substr(0,5) == '/msg/') {
		var msg = unescape(url_parts.pathname.substr(5));
		massages.push(msg);
		while(clients.length > 0) {
			var client = clients.pop();
			client.end(JSON.stringify({
				count: messages.length,
				append: msg
			}));
		}
		response.end();
	}
});

server.listen(8011, 'localhost');
console.log('Server start at http://localhost:8011');

