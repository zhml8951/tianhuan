var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello, ' + this.name);
    };
}

Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
console.log('-----');
var objSub = new Sub();
objSub.sayHello();
objSub.showName();
console.log(objSub);

function Person(){
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}

