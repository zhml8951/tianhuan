const fs = require('fs');
const url = require('url');

exports.goIndex = function(req,res) {
    var readPath = __dirname + '/' + url.parse('index.html').pathname;
    var indexPage = fs.readFileSync(readPath);
    res.end(indexPage);
};