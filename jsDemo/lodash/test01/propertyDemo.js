const baseProperty = require('../_baseProperty');
const applyUtil = require('../_apply');
const baseGetTag = require('../_baseGetTag');
const getRawTag = require('../_getRawTag');

function testPro() {
    var protoFun = baseProperty('a01');
    var obj01 = {
        'a01': 'First parameter',
        'a02': 'Second parameter'
    };
    console.log(protoFun(obj01));
    console.log(baseProperty('a02')(obj01));
}

function applyDemo() {
    var objPut = {
        name: 'Arnni',
        age: 8888,
        num: 99
    };

    var app_test = applyUtil(function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.num);
    }, objPut, 0);
}

function rawTagGet_demo() {
    var testString = "stringTest01";
    var result = getRawTag(testString);
    console.log(result);

    class Person {
        get [Symbol.toStringTag]() {
            return "Symbol about Person class";
        }
    }

    var person01 = new Person();
    console.log(getRawTag(person01));
    console.log(baseGetTag(person01));
    console.log(baseGetTag());
    try{
        console.log(baseGetTag(person02));
    } catch(e) {
        // throw new ReferenceError("Object not defined.");
        console.log(e.toString());
    }

}

function toNumber(str) {
    var reTrim = /^\s+|\s+$/g;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var freeParseInt = parseInt;
    var NAN = 0 / 0;
    const toFinite = require('../toFinite');
    console.log(toFinite('str'));

    function isObject(value) {
        var type = typeof value;
        return value != null && (type == 'object' || type == 'function');
    }

    if(isObject(str)) {
        var tempStr = typeof str.valueOf === 'function' ? str.valueOf() : value;
        str = isObject(tempStr) ? (tempStr + ''): tempStr;
    }
    if(typeof str != 'string') {
        console.log(str === 0);
        return str === 0 ? str : +str;
    }
    str = str.replace(reTrim,'');
    var isBinary = reIsBinary.test(str);
    return (isBinary || reIsOctal.test(str))
        ? freeParseInt(str.slice(2), isBinary ? 2 :8)
        : (reIsBadHex.test(str) ? NAN: +str);
}

function toInteger(value) {
    var result = toFinite(value),
        remainder = result % 1;
    return result === result ? (remainder ? result - remainder : result) : 0;
}

function toFinite(value) {
    var INFINITY = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e+308;
    if(!value) {
        return value === 0 ? value : 0;
    }

    value = toNumber(value);
    if(value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}

function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;
    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}

function localApply(func, thisArg, args) {
    switch (args.length) {
        case 0: return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[3]);
    }
    return func.apply(thisArg, args);
}

function baseArity(func, n) {
    return n === 2
        ? function (a, b) {
          return func.apply(undefined, arguments);
        }
        : function (a) {
          return func.apply(undefined, arguments);
        };
}

function arrayPushTest(str) {
    var arr = ['888', 999, 'about'];
    arrayPush(arr, ['cost', 'length']);
    var ele;
    for (ele of arr) {
        console.log(ele);
    }
}

function applyTest(){
    function sayHello(first, last) {
        console.log(first + ' ' + this.name + ' ' + last);
    }
}

function testBaseArity(){
    function funTest01(para1, para2){
        this.name = para1;
        this.num = para2;
        console.log('test01, ' + this.name + ', test OK! ---- ' + this.num);
        return this.name + ': ' + this.num;
    }
    var funResult = baseArity(funTest01, 5);
    var result = funResult(33, 88, 22);
    console.log(result);
}

testBaseArity();


