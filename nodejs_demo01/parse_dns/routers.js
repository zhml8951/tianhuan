const parseDns = require('./parse_dns');
const mainIndex = require('./main_index');

exports.router = function(req, res, pathname){
    switch(pathname) {
        case "/parse":
            parseDns.parseDns(res,req);
            break;
        default:
            mainIndex.goIndex(req,res);
    }
}