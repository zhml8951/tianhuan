const baseProperty = require('../_baseProperty');
const applyUtil = require('../_apply');
const baseGetTag = require('../_baseGetTag');
const getRawTag = require('../_getRawTag');

const freeGlobal = typeof global === 'object' && global && global.Object === Object && global;
const freeSelf = typeof self == 'object' && self && self.Object === Object && self;
const root = freeGlobal || freeSelf || Function('return this')();
const coreJsDate = root['__core-js_shared__'];

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
    }, objPut, [11,22]);
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
    try{
        console.log(baseGetTag(person01));
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
        return value != null && (type === 'object' || type === 'function');
    }

    if(isObject(str)) {
        var tempStr = typeof str.valueOf === 'function' ? str.valueOf() : value;
        str = isObject(tempStr) ? (tempStr + ''): tempStr;
    }
    if(typeof str !== 'string') {
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

function baseSlice(array, start, end) {
    var index = -1,
        length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if(end < 0)
        end += length;
    length = start > end ? 0 : ((end -start ) >>> 0);
    start >>>= 0;

    var result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}

function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return (!start && end >= length) ? array : baseSlice(array, start, end);
}

function shortOut(func) {
    const HOT_SPAN = 16,
        HOT_COUNT = 800;

    var count = 0,
        lastCalled = 0;
    return function() {
        var stamp = Date.now();
        console.log(stamp + ' --- ' + lastCalled);
        var remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        console.log(lastCalled);
        console.log(remaining);
        if(remaining > 0) {
            if (++count >= HOT_COUNT)
                return arguments[0];
        } else {
            count = 0;
        }
        return func.apply(undefined, arguments);
    };
}
function tsShortOut(){
    function sayHello() {
        console.log('Hello, ' + this + '.. ok...');
    }
    for(let i =0; i < 100; i++) {
        var test01 = shortOut(sayHello);
        console.log(test01());
    }
}

function toSource(func) {
    const funToString = Function.prototype.toString;

    if (func !== null) {
        try {
            return funToString.call(func);
        } catch (e) {
        }
        try {
            return (func + '');
        } catch (e) {
        }
    }
    return '';
}

function isMasked(func) {
    var maskSrcKey = (function () {
        var uid = /[^.]+$/.exec(coreJsDate && coreJsDate.keys && coreJsDate.keys.IE_PROTO || '');
        return uid ? ('Symbol(src)_1.' + uid) : '';
    }());
    return !!maskSrcKey && (maskSrcKey in func);
}

function getValue(object, key) {
    return object === null ? undefined : object[key];
}

function baseIsNative(value) {
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor]$/;
    var funcProto = Function.prototype,
        objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp('^' +
        funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\() | for .+?(?=\\])/g, '$1.*?') + '$'
    );
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}

function isFunction(value) {
    if (!isObject(value))
        return false;
    var tag = baseGetTag(value);

    var asyncTag = '[object AsyncFunction]',
        funcTag = '[object Function]',
        genTag = '[object GeneratorFunction]',
        proxyTag = '[object Proxy]';
    return tag === funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;

}

function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}

var defineProperty = (function () {
    try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch(e){}
}());

function identity(value) {
    return value;
}

function constant(value) {
    return function() {
        return value;
    };
}

function baseSetToString(func, string) {
   return !defineProperty ? identity : defineProperty(func, 'toString', {
       'configurable': true,
       'enumerable': false,
       'value': constant(string),
       'writable': true
   });
}

function baseToString(value) {
    const INFINITY = 1 / 0;
    var symbolProto = Symbol ? Symbol.prototype : undefined;
    var symbolToString = symbolProto ? symbolProto.toString : undefined;
    if (typeof value === 'string') {
        return value;
    }
    if (isArray(value)) {
        return arrayMap(value, baseToString() + '');
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result === '0' && (1 / value) === -INFINITY) ? '-0' : result;
}

function setToString(f, s) {
    shortOut(baseSetToString);
}

function overRest(func, start, transform) {
    const nativeMax = Math.max;
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function () {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            array = Array(length);
        while( ++index < length) {
            array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while ( ++index < start) {
            otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return localApply(func, this, otherArgs);
    }
}

function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
}

function spread(func, start) {
    const FUNC_ERROR_TEXT = 'Expected a function';
    if (typeof func !== 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    start = start === null ? 0 : Math.max(toInteger(start), 0);
    return baseRest(function (args) {
        var array = args[start],
            otherArgs = castSlice(args, 0, start);
        if(array) {
            arrayPush(otherArgs, array);
        }
        return localApply(func, this, otherArgs);
    });
}
