var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Hello,world</p>');
}).listen(3000);
console.log('Hello, NodeJS!');
console.log("%s: %d", 'Hello',25);
console.log('nodeJS server starting... ');