var myMap = new Map();
var keyString = 'first String',
    keyObj = {},
    keyFunc = function(){};

myMap.set(keyString, "value associated with 'a string.'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

for (let [key, value] of myMap) {
	console.log(key +': ' + value);
}

for (let key of myMap.keys()) {
	console.log(key);
}

console.log('--------------');
console.log(myMap.keys());

myMap.forEach((value, key)=>{
	console.log(key + '> ' + value);	
})

