var a = 0;
function bb(x){
	console.log(x);
}

function timer(time){
	setTimeout(function(){
		a = 6;
	}, time);
}

// console.log(a);
// timer(3000);
// bb(a);

var isFunction = function (obj) {
    console.log(obj.nodeType);
    return typeof obj === 'function' && typeof obj.nodeType !== 'number';
};

console.log(isFunction(timer));