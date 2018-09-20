var rfs = require('fs');
rfs.readFile('package.json','utf8',function (err,data) {
    if(err){
        console.error(err);
    }else {
        console.log(data);
    }
});
console.log('end.');

var dat = rfs.readFileSync('typings/index.d.ts','utf8');
console.log(dat);
console.log('end.sync');