var fs = require('fs');
var data = fs.readFileSync('package.json');
console.log('sync read file');
console.log(data.toString());
console.log('file read finish.')
console.log("\n");

fs.readFile('typings.json','utf-8', function (err, data) {
    if(err) return console.log(err);
    console.log(data.toString());
});
console.log('file async read finished!');

function fileRead(err, data) {
    if(err) return console.log(err);
    console.log(data.toString());
}
