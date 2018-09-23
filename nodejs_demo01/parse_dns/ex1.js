const http          =       require('http');
const dns           =       require('dns');
var fs              =       require('fs'),
    url             =       require('url'),
    querystring     =       require('querystring');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var pathname = url.parse(req.url).pathname;
    router(res,req,pathname);
}).listen(3030,"127.0.0.1");
console.log('Server running.  http://127.0.0.1:3030');

function router(res, req, pathname) {
    switch (pathname) {
        case "/parse":
            parseDns(res,req);
            break;
        default:
            goIndex(res,req);
            break;
    }
}

function goIndex(res, req) {
    let readPath = __dirname + '/' + url.parse('index.html').pathname;
    let indexPage = fs.readFileSync(readPath);
    res.end(indexPage);
}

function parseDns(res, req) {
    let postData = "";
    req.addListener("data",function (postDataChunk) {
        postData += postDataChunk;
    });
    req.addListener("end", function () {
        var retData = getDns(postData, function (domain, addresses) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>\
            <title>dns result</title></head> <body>\
            <div style = 'text-align:center'>Domain: <span style='color:red'>" + domain +
            "</span>IP: <span style='color:green'>" + addresses.join(',') + 
            "</span></div></body> </html>"
            );
        });
    });
}

function getDns(postData, callback) {
    var domain = querystring.parse(postData).search_dns;
    dns.resolve(domain, function (err, addresses) {
        if(!addresses) {
            addresses = ['The domain not exist!'];
        }
        callback(domain, addresses);
    });
    console.log('post dns finished');
}