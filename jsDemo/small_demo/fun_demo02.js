var a = 0;
function bb(x){
	console.log(x);
}

function timer(time, callback) {
	setTimeout(function(){
		a = 6;
		callback(a);
	}, time);
}

console.log(a);
timer(3000, bb);
timer(2000, function(x){
	console.log(x);
});

