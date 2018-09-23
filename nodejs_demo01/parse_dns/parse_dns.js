const querystring = require('querystring');
const dns = require('dns');

exports.parseDns = function(res, req) {
    var postData = '';
    req.addListener("data", function(postDataChunk){
        postData += postDataChunk;
    });

    req.addListener("end", function () {
        var retData = getDns(postData, function(domain, addresses){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'>\
        <title>dns result</title></head><body><div style='text-align:center'>\
        Domain: <span style='color: red'>" + domain + " </span><br>\
        IP: <span style='color:green'> " + addresses.join(',') +"</span></div></body></html>");
        });

    });
};

function getDns(postData, callback) {
    var domain = querystring.parse(postData).search_dns;
    dns.resolve(domain, function(err, addresses){
        if(!addresses) addresses=['domain is not exist!'];
        callback(domain, addresses);
    });
}