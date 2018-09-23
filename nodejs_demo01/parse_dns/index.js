const http = require('http');
const url = require('url');
const routers = require('./routers');

http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    req.setEncoding('utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    routers.router(req,res,pathname);
}).listen(3030, "127.0.0.1");

console.log('Server running.  http://127.0.0.1:3030');
console.log(http.IncomingMessage);