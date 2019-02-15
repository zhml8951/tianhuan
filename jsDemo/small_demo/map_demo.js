var myMap = new Map();
var keyString = 'first String',
    keyObj = {},
    keyFunc = function () {
    };

myMap.set(keyString, "value associated with 'a string.'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

for (let [key, value] of myMap) {
    console.log(key + ': ' + value);
}

for (let key of myMap.keys()) {
    console.log(key);
}

console.log('--------------');
console.log(myMap.keys());

myMap.forEach((value, key) => {
    console.log(key + '> ' + value);
});

function baseAry(func, n) {
    console.log(n);
    return n == 2
        ? function (a, b) { return func(a, b); }
        : function (a) { return func(a); };
}

var func01 = baseAry(function (num1, num2) {
    console.log(num1, num2);
    console.log(num1 + num2);
    console.log(num1 - num2);
}, 2);

func01(88, 99);

baseAry((numA, numB, numC) => {
    console.log(numA);
},999)(77);

