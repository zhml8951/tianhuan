const http = require('http');
var str_hello = '';
for ( let i = 0; i < 1024 * 1024 ; i++) {
	 str_hello += 'a';
}

var buff_hello = Buffer.from(str_hello);

console.log(buff_hello[1]);
http.createServer( (req, res) => {
	res.writeHead(200);
	res.end(buff_hello);
}).listen(8090);
console.log('http_server starting ok...');