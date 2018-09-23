const fs = require('fs');

function getFileData(callback) {
    fs.readFile('../demo4-1.js', function(data){
        callback(data);
    });
}

function returnData(callback){
    getFileData(function (data) {
        setTimeout(() => {
            callback(data);
        }, 1000);
        console.log(data);
    });
    console.log("file read...");
    console.log("file read finished.");
}

function returnData2(callback){
    getFileData((data) => {
        setTimeout(() => {
            callback(data);
        }, 1000);
    });
}

returnData(function () {
    console.log('read file ok!');
});

exports.name = "Arnni";
exports.happy = function() {
    console.log('MM');
};
var yourName = "reader";
function love() {
    console.log('mm vs gg');
}
